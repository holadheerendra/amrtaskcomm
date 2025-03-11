import { useState } from 'react';
import EventCard from '../components/EventCard';

const initialEvents = [
  { id: 1, title: 'Faith Gathering', date: '2025-03-20', location: 'Community Hall', category: 'Religious', description: 'Join us for a spiritual gathering and discussion.' },
  { id: 2, title: 'Food Drive', date: '2025-03-22', location: 'Downtown Center', category: 'Charity', description: 'Help us feed the needy and bring hope.' },
  { id: 3, title: 'Cultural Night', date: '2025-03-25', location: 'City Park', category: 'Social', description: 'A night to enjoy and celebrate diverse cultures.' }
];

export default function Events() {
  const [events, setEvents] = useState(initialEvents);
  const [filter, setFilter] = useState('All');
  const [newEvent, setNewEvent] = useState({ title: '', date: '', location: '', category: '', description: '' });

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEntry = { ...newEvent, id: events.length + 1 };
    setEvents([...events, newEntry]);
    setNewEvent({ title: '', date: '', location: '', category: '', description: '' });
  };

  const filteredEvents = filter === 'All' ? events : events.filter(e => e.category === filter);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Upcoming Events</h2>

      <div className="mb-4 flex flex-wrap gap-2 justify-center">
        {['All', 'Religious', 'Social', 'Charity'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border ${filter === cat ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {filteredEvents.map(event => <EventCard key={event.id} event={event} />)}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Event</h3>
        <form onSubmit={handleAddEvent} className="grid gap-4">
          <input type="text" placeholder="Title" value={newEvent.title} onChange={e => setNewEvent({ ...newEvent, title: e.target.value })} className="border p-2 rounded" required />
          <input type="date" value={newEvent.date} onChange={e => setNewEvent({ ...newEvent, date: e.target.value })} className="border p-2 rounded" required />
          <input type="text" placeholder="Location" value={newEvent.location} onChange={e => setNewEvent({ ...newEvent, location: e.target.value })} className="border p-2 rounded" required />
          <select value={newEvent.category} onChange={e => setNewEvent({ ...newEvent, category: e.target.value })} className="border p-2 rounded" required>
            <option value="">Select Category</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
          <textarea placeholder="Description" value={newEvent.description} onChange={e => setNewEvent({ ...newEvent, description: e.target.value })} className="border p-2 rounded" required />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Add Event</button>
        </form>
      </div>
    </div>
  );
}
