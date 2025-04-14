
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white animate-glow">
              NEON<span className="text-neon-purple">VOID</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#games" className="text-white/80 hover:text-neon-purple transition-colors">
              Games
            </a>
            <a href="#features" className="text-white/80 hover:text-neon-purple transition-colors">
              Features
            </a>
            <div className="relative group">
              <button className="flex items-center text-white/80 hover:text-neon-purple transition-colors">
                Community <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg hidden group-hover:block">
                <div className="glass-card rounded-md py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-white/80 hover:text-neon-purple">Forums</a>
                  <a href="#" className="block px-4 py-2 text-sm text-white/80 hover:text-neon-purple">Discord</a>
                  <a href="#" className="block px-4 py-2 text-sm text-white/80 hover:text-neon-purple">Tournaments</a>
                </div>
              </div>
            </div>
            <a href="#about" className="text-white/80 hover:text-neon-purple transition-colors">
              About
            </a>
          </div>

          <div className="hidden md:block">
            <Button className="neon-button">PLAY NOW</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-card mt-4 rounded-md p-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <a
                href="#games"
                className="text-white hover:text-neon-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Games
              </a>
              <a
                href="#features"
                className="text-white hover:text-neon-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#community"
                className="text-white hover:text-neon-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <a
                href="#about"
                className="text-white hover:text-neon-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Button className="neon-button w-full">PLAY NOW</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
