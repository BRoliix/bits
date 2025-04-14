
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Linkedin, Twitter } from 'lucide-react';

// Sample speakers data
const speakers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    designation: "AI Research Lead, Google DeepMind",
    image: "/placeholder.svg",
    talkTitle: "The Future of Generative AI in Space Exploration",
    bio: "Dr. Johnson leads AI research initiatives at Google DeepMind, focusing on neural networks and their applications in space technology.",
    time: "10:30 AM - 11:30 AM",
    date: "April 30, 2025",
    venue: "Main Auditorium",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  },
  {
    id: 2,
    name: "Ahmed Al-Mansoori",
    designation: "CTO, UAE Space Agency",
    image: "/placeholder.svg",
    talkTitle: "Building the Next Generation of Space Technologies",
    bio: "With over 15 years of experience in aerospace engineering, Ahmed leads technological innovation at the UAE Space Agency.",
    time: "2:00 PM - 3:00 PM",
    date: "April 30, 2025",
    venue: "Conference Hall A",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: null
    }
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    designation: "Founder & CEO, SpaceAI Ventures",
    image: "/placeholder.svg",
    talkTitle: "AI-Powered Startups in the Space Economy",
    bio: "Maria is a serial entrepreneur who has founded three successful tech startups. Her current venture, SpaceAI, is revolutionizing satellite imagery analysis.",
    time: "11:00 AM - 12:00 PM",
    date: "May 10, 2025",
    venue: "Main Auditorium",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  },
  {
    id: 4,
    name: "Dr. Rajiv Patel",
    designation: "Principal Scientist, NASA JPL",
    image: "/placeholder.svg",
    talkTitle: "AI Systems for Deep Space Missions",
    bio: "Dr. Patel has contributed to multiple Mars rover missions and is pioneering the integration of autonomous AI systems in space exploration vehicles.",
    time: "3:30 PM - 4:30 PM",
    date: "May 10, 2025",
    venue: "Conference Hall B",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  }
];

const Speakers = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="scanline fixed top-0 left-0 pointer-events-none"></div>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-glow">
          <span className="text-neon-purple">SPEAKERS</span>
        </h1>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          Meet the visionaries and experts who will share their insights on the intersection of AI and space technology.
        </p>
        
        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {speakers.map(speaker => (
            <Card key={speaker.id} className="glass-card overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <div className="grid grid-cols-1 md:grid-cols-3 p-0">
                <div className="relative h-full min-h-[200px] md:min-h-[unset]">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent md:hidden"></div>
                  <div className="absolute bottom-4 left-4 flex gap-2 md:hidden">
                    {speaker.social.linkedin && (
                      <a 
                        href={speaker.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/10 p-2 rounded-full hover:bg-neon-purple/20 transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {speaker.social.twitter && (
                      <a 
                        href={speaker.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/10 p-2 rounded-full hover:bg-neon-purple/20 transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="md:col-span-2 p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                    <p className="text-neon-purple">{speaker.designation}</p>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">"{speaker.talkTitle}"</h4>
                  
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">{speaker.bio}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Calendar size={14} className="text-neon-blue" />
                      <span>{speaker.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Clock size={14} className="text-neon-green" />
                      <span>{speaker.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <MapPin size={14} className="text-neon-orange" />
                      <span>{speaker.venue}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-2 hidden md:flex">
                    {speaker.social.linkedin && (
                      <a 
                        href={speaker.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/10 p-2 rounded-full hover:bg-neon-purple/20 transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {speaker.social.twitter && (
                      <a 
                        href={speaker.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/10 p-2 rounded-full hover:bg-neon-purple/20 transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center glass-card p-8">
          <h2 className="text-2xl font-bold mb-4">Interested in speaking at BITS Tech Fest 2025?</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            If you're an expert in AI, space technology, or related fields and would like to share your insights, we'd love to hear from you.
          </p>
          <a 
            href="mailto:speakers.btf@dubai.bits-pilani.ac.in" 
            className="neon-button inline-block"
          >
            Submit a Speaker Proposal
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Speakers;
