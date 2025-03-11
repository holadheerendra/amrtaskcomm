import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-200 to-purple-300 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 " />
        
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <nav className="hidden md:flex gap-6 text-lg">
          <Link to="/" className="hover:text-yellow-300 text-black transition">Home</Link>
          <Link to="/events" className="hover:text-yellow-300 text-black transition">Events</Link>
          <a href="#about" className="hover:text-yellow-300 text-black transition">About</a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 px-4 flex flex-col gap-4 text-lg bg-indigo-800  py-4 rounded-b-xl">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 text-black">Home</Link>
          <Link to="/events" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 text-black">Events</Link>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 text-black">About</a>
        </div>
      )}
    </header>
  );
}