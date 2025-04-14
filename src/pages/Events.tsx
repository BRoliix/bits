
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Calendar, Users, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import '../styles/gradients.css';
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
    image: "https://framerusercontent.com/assets/8zE1cw2uW0PtSANxYynp9aKnnP8.png"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkqJbrtkExMI9eQvQ6Qg6SqNCQitQATCqAQ&s"
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
    image: "data:image/jpeg;base64,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"
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
    image: "data:image/jpeg;base64,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"
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
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-heading">
          <span className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-heading">EVENTS</span>
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
