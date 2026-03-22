import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-yellow-500 uppercase">BuildCon</h2>
          <p className="text-gray-400 text-sm leading-6">
            Pichle 15 saalon se hum desh ke infrastructure ko majboot bana rahe hain. High quality material aur behtar design hamari pehchan hai.
          </p>
          <div className="flex space-x-4">
            <Facebook className="cursor-pointer hover:text-yellow-500" size={20} />
            <Twitter className="cursor-pointer hover:text-yellow-500" size={20} />
            <Instagram className="cursor-pointer hover:text-yellow-500" size={20} />
            <Linkedin className="cursor-pointer hover:text-yellow-500" size={20} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-yellow-500 w-fit">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm font-medium">
            <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-500">Our Projects</Link></li>
            <li><Link to="/services" className="hover:text-yellow-500">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500">Careers</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-yellow-500 w-fit">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm font-medium">
            <li className="hover:text-yellow-500 cursor-pointer">Residential Construction</li>
            <li className="hover:text-yellow-500 cursor-pointer">Commercial Building</li>
            <li className="hover:text-yellow-500 cursor-pointer">Interior Design</li>
            <li className="hover:text-yellow-500 cursor-pointer">Road Construction</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold mb-4 border-b-2 border-yellow-500 w-fit">Contact Us</h3>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <MapPin size={18} className="text-yellow-500" />
            <span>123 Civil Lines, New Delhi, India</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <Phone size={18} className="text-yellow-500" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <Mail size={18} className="text-yellow-500" />
            <span>info@buildcon.com</span>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} BuildCon Construction. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;