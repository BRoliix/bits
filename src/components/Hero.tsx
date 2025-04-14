import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import '../styles/gradients.css';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-black opacity-90 z-0"
        style={{
          transform: `translateY(${offsetY * 0.1}px)`,
          backgroundImage: `radial-gradient(circle at 30% 40%, rgba(0, 157, 255, 0.2) 0%, transparent 40%),
                            radial-gradient(circle at 80% 60%, rgba(0, 157, 255, 0.1) 0%, transparent 30%)`,
        }}
      />

      <div
        className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-20 z-0"
        style={{ backgroundSize: '100px 100px', transform: `translateY(${offsetY * 0.2}px)` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 z-0" />

      {/* Hero content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-20">
        <div className="leading-none">
          <h1 className="text-5xl md:text-5xl lg:text-[10rem] font-bold gradient-heading mb-0">
            BITS TECH FEST
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-[#009dff]">
          April 30 & May 10, 2025
        </p>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 font-medium mt-1">
            Birla Institute of Technology And Science, Dubai, United Arab Emirates
          </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/80">
        Where the pioneers in technology unite to shape the future.

        </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild className="bg-[#009dff] hover:bg-[#00b0ff] text-white w-full sm:w-auto min-w-[150px]">
            <Link to="/registration">REGISTER NOW</Link>
          </Button>
          <Button asChild variant="outline" className="border-white/20 bg-transparent hover:bg-white/5 hover:text-[#009dff] w-full sm:w-auto min-w-[150px]">
            <Link to="/events">EXPLORE EVENTS</Link>
          </Button>

        </div>


        <div className="absolute text-center bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <a href="#overview" className="flex flex-col items-center text-center text-white/70 hover:text-[#009dff] transition-colors">
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;