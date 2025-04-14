
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black relative border-t border-white/10">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-60 h-60 bg-neon-blue/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 animate-glow">
              BITS<span className="text-neon-purple">TECH</span>FEST
            </h3>
            <p className="text-white/70 mb-4">
              Cosmic Intelligence: Where Algorithms Meet the Stars
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bitstechfest" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-purple transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/bits-tech-fest" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-purple transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:contact.btf@dubai.bits-pilani.ac.in" className="text-white/70 hover:text-neon-purple transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-neon-purple transition-colors">Home</Link></li>
              <li><Link to="/events" className="text-white/70 hover:text-neon-purple transition-colors">Events</Link></li>
              <li><Link to="/speakers" className="text-white/70 hover:text-neon-purple transition-colors">Speakers</Link></li>
              <li><Link to="/agenda" className="text-white/70 hover:text-neon-purple transition-colors">Agenda</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-neon-purple" />
                <a href="mailto:contact.btf@dubai.bits-pilani.ac.in" className="text-white/70 hover:text-neon-purple transition-colors">
                  contact.btf@dubai.bits-pilani.ac.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-neon-purple" />
                <a href="tel:+971586290281" className="text-white/70 hover:text-neon-purple transition-colors">
                  +971 586290281
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-neon-purple" />
                <a href="mailto:btf.sponsorship@dubai.bits-pilani.ac.in" className="text-white/70 hover:text-neon-purple transition-colors">
                  btf.sponsorship@dubai.bits-pilani.ac.in
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Cookie Policy</a></li>
              <li><Link to="/contact" className="text-white/70 hover:text-neon-purple transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; BITS Pilani Dubai {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-white/50 text-sm hover:text-neon-purple transition-colors">
              Made with 💜 by BITS Tech Fest Team
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
