import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, HardHat } from 'lucide-react';
import Logo from '../assets/logo.webp'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
           <img src={Logo} alt="" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase transition-colors ${
                    isActive ? 'text-yellow-500' : 'text-gray-700 hover:text-yellow-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gray-900 text-white px-5 py-2 rounded-md font-bold flex items-center gap-2 hover:bg-yellow-500 hover:text-black transition-all">
              <Phone size={18} /> Call Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 shadow-lg absolute w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 font-bold hover:text-yellow-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-yellow-500 text-black py-3 rounded-md font-bold">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;