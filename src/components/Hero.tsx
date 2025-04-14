
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    setLoaded(true);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Scanline effect */}
      <div className="scanline"></div>
      
      {/* Parallax background layers */}
      <div 
        className="parallax-layer bg-black opacity-90"
        style={{ 
          transform: `translateY(${offsetY * 0.1}px)`,
          backgroundImage: `radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 40%),
                           radial-gradient(circle at 80% 60%, rgba(0, 242, 96, 0.1) 0%, transparent 30%)`
        }}
      />
      
      <div 
        className="parallax-layer"
        style={{ 
          backgroundImage: `url('/grid-pattern.png')`,
          backgroundSize: '100px 100px',
          opacity: 0.3,
          transform: `translateY(${offsetY * 0.2}px)`
        }}
      />
      
      <div 
        className="parallax-layer" 
        style={{ 
          background: 'radial-gradient(circle at center, transparent 40%, #000 100%)',
          opacity: 0.8
        }}
      />

      {/* Content */}
      <div className="relative container h-full mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
        <div className={`transform transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 animate-glow">
            BITS <span className="text-neon-purple">TECH FEST</span> 2025
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-neon-blue animate-glow">
            April 30 & May 10, 2025
          </p>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/80 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Cosmic Intelligence: Where Algorithms Meet the Stars
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild className="neon-button w-full sm:w-auto min-w-[150px]">
              <Link to="/registration">REGISTER NOW</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 bg-transparent hover:bg-white/5 hover:text-neon-blue w-full sm:w-auto min-w-[150px]">
              <Link to="/events">EXPLORE EVENTS</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 bg-transparent hover:bg-white/5 hover:text-neon-green w-full sm:w-auto min-w-[150px]">
              <a href="#" download>DOWNLOAD BROCHURE</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float cursor-pointer">
          <a href="#highlights" className="flex flex-col items-center text-white/70 hover:text-neon-purple transition-colors">
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
