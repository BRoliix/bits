
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Calendar, Users, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Sample event data
const events = [
  {
    id: 1,
    title: "AI Hackathon",
    club: "Coding Club",
    date: "April 30, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Main Auditorium",
    description: "Build AI solutions that address real-world problems in this 8-hour hackathon.",
    type: "Hackathon",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Blockchain Workshop",
    club: "Blockchain Society",
    date: "April 30, 2025",
    time: "2:00 PM - 5:00 PM",
    venue: "Lab 101",
    description: "Learn the fundamentals of blockchain technology and build your first smart contract.",
    type: "Workshop",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Robotics Exhibition",
    club: "Robotics Club",
    date: "May 10, 2025",
    time: "11:00 AM - 4:00 PM",
    venue: "Exhibition Hall",
    description: "Explore innovative robotics projects from students and industry partners.",
    type: "Exhibition",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Future of Space Tech",
    club: "Astronomy Club",
    date: "May 10, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Conference Room A",
    description: "Panel discussion on the intersection of space technology and artificial intelligence.",
    type: "Speaker Session",
    image: "/placeholder.svg"
  }
];

// Event types for filtering
const eventTypes = ["All", "Hackathon", "Workshop", "Competition", "Exhibition", "Speaker Session"];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedDate, setSelectedDate] = useState("All");

  // Filter events based on search term and filters
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        event.club.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === "All" || event.type === selectedType;
    
    const matchesDate = selectedDate === "All" || 
                      (selectedDate === "April 30" && event.date.includes("April 30")) || 
                      (selectedDate === "May 10" && event.date.includes("May 10"));
    
    return matchesSearch && matchesType && matchesDate;
  });

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="scanline fixed top-0 left-0 pointer-events-none"></div>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-glow">
          <span className="text-neon-purple">EVENTS</span>
        </h1>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          Discover the exciting lineup of workshops, hackathons, competitions and speaker sessions at BITS Tech Fest 2025.
        </p>
        
        {/* Search and Filter Section */}
        <div className="mb-12 glass-card">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
              <Input
                placeholder="Search events, clubs or keywords..."
                className="pl-10 bg-white/5 border-white/10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <select 
                className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {eventTypes.map(type => (
                  <option key={type} value={type} className="bg-black text-white">{type}</option>
                ))}
              </select>
              
              <select 
                className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                <option value="All" className="bg-black text-white">All Dates</option>
                <option value="April 30" className="bg-black text-white">April 30, 2025</option>
                <option value="May 10" className="bg-black text-white">May 10, 2025</option>
              </select>
              
              <Button className="flex items-center gap-2">
                <Filter size={16} />
                Filter
              </Button>
            </div>
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <Card key={event.id} className="glass-card transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] overflow-hidden group">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute top-2 right-2 bg-neon-purple/80 text-white px-3 py-1 rounded-full text-xs">
                    {event.type}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{event.title}</CardTitle>
                  <CardDescription className="text-white/70">{event.club}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-white/70">
                    <Calendar size={16} className="text-neon-blue" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin size={16} className="text-neon-green" />
                    <span>{event.venue}</span>
                  </div>
                  
                  <p className="text-white/80 line-clamp-2">{event.description}</p>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full neon-button">Register Now</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-white/70">No events match your search criteria</p>
              <Button 
                variant="outline" 
                className="mt-4 border-white/20 hover:bg-white/5"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("All");
                  setSelectedDate("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
