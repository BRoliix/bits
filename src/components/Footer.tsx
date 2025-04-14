
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Twitch } from 'lucide-react';

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
              NEON<span className="text-neon-purple">VOID</span>
            </h3>
            <p className="text-white/70 mb-4">
              Redefining the future of gaming with cutting-edge technology and immersive experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-neon-purple transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-neon-purple transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-neon-purple transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-neon-purple transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-neon-purple transition-colors">
                <Twitch size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Games</a></li>
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Tournaments</a></li>
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">System Requirements</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-neon-purple transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} NeonVoid Gaming. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-white/50 text-sm hover:text-neon-purple transition-colors">
              Created with passion for gamers worldwide
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
