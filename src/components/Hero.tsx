import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
}

const BitsTechFestLogo: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = 600);
    const height = (canvas.height = 300);
    const particles: Particle[] = [];

    for (let i = 0; i < 700; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        color: '#009dff',
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
      });
    }

    let frame = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Glowing text effect
      ctx.save();
      ctx.font = 'bold 50px Orbitron';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#009dff';
      ctx.shadowColor = '#00baff';
      ctx.shadowBlur = 30;
      ctx.fillText('BITS TECH FEST', width / 2, height / 2 + 10);
      ctx.restore();

      frame++;
      if (frame < 180) {
        requestAnimationFrame(animate);
      } else {
        setLoaded(true);
        setTimeout(onFinish, 800);
      }
    };

    animate();
  }, [onFinish]);

  return (
    <div className="flex justify-center items-center w-full h-full bg-black">
      <canvas ref={canvasRef} className="w-full max-w-[600px] h-auto" />
    </div>
  );
};

const Hero = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-black opacity-90 z-0"
        style={{
          transform: `translateY(${offsetY * 0.1}px)`,
          backgroundImage: `radial-gradient(circle at 30% 40%, rgba(0, 157, 255, 0.2) 0%, transparent 40%),
                            radial-gradient(circle at 80% 60%, rgba(0, 157, 255, 0.1) 0%, transparent 30%)`,
        }}
      />

<<<<<<< Updated upstream
      <div
        className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-20 z-0"
        style={{ backgroundSize: '100px 100px', transform: `translateY(${offsetY * 0.2}px)` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 z-0" />

      {!animationDone ? (
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <BitsTechFestLogo onFinish={() => setAnimationDone(true)} />
        </div>
      ) : (
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-white transition-all duration-1000">
            BITS <span className="text-[#009dff]">TECH</span> FEST
=======
      {/* Content */}
      <div className="relative container h-full mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
        <div className={`transform transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-heading">
            BITS <span className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-heading">TECH FEST</span> 2025
>>>>>>> Stashed changes
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-[#009dff]">
            April 30 & May 10, 2025
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/80">
            Transform Your Business with Cutting-Edge AI, Machine Learning, and Data Analytics
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild className="bg-[#009dff] hover:bg-[#00b0ff] text-white w-full sm:w-auto min-w-[150px]">
              <Link to="/registration">REGISTER NOW</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 bg-transparent hover:bg-white/5 hover:text-[#009dff] w-full sm:w-auto min-w-[150px]">
              <Link to="/events">EXPLORE EVENTS</Link>
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
            <a href="#overview" className="flex flex-col items-center text-white/70 hover:text-[#009dff] transition-colors">
              <span className="text-sm mb-2">Discover More</span>
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;