
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Download, BookmarkPlus, Filter } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample agenda data
const agendaDay1 = [
  {
    id: 1,
    time: "09:00 AM - 10:00 AM",
    title: "Registration & Welcome Coffee",
    venue: "Main Entrance",
    type: "Registration",
    description: "Pick up your attendee badge and enjoy morning refreshments"
  },
  {
    id: 2,
    time: "10:00 AM - 10:30 AM",
    title: "Opening Ceremony",
    venue: "Main Auditorium",
    type: "Ceremony",
    description: "Official inauguration of BITS Tech Fest 2025 with welcome addresses from BITS officials and sponsors"
  },
  {
    id: 3,
    time: "10:30 AM - 11:30 AM",
    title: "The Future of Generative AI in Space Exploration",
    venue: "Main Auditorium",
    type: "Keynote",
    speaker: "Dr. Sarah Johnson, Google DeepMind",
    description: "An exploration of how generative AI is transforming space exploration and satellite technology"
  },
  {
    id: 4,
    time: "11:45 AM - 01:00 PM",
    title: "AI Hackathon: Kickoff",
    venue: "Lab Complex",
    type: "Hackathon",
    description: "Teams receive problem statements and begin their 6-hour hackathon journey"
  },
  {
    id: 5,
    time: "01:00 PM - 02:00 PM",
    title: "Networking Lunch",
    venue: "Campus Lawn",
    type: "Break",
    description: "Buffet lunch with opportunities to network with speakers, sponsors and fellow attendees"
  },
  {
    id: 6,
    time: "02:00 PM - 03:00 PM",
    title: "Building the Next Generation of Space Technologies",
    venue: "Conference Hall A",
    type: "Speaker Session",
    speaker: "Ahmed Al-Mansoori, UAE Space Agency",
    description: "Insights into the UAE's plans for advancing space technology over the next decade"
  },
  {
    id: 7,
    time: "03:15 PM - 05:30 PM",
    title: "Workshop: Building AI Models for Space Data",
    venue: "Computer Lab 2",
    type: "Workshop",
    description: "Hands-on workshop on processing and analyzing satellite imagery using machine learning"
  },
  {
    id: 8,
    time: "06:00 PM - 07:30 PM",
    title: "AI Hackathon: Presentations & Judging",
    venue: "Lab Complex",
    type: "Competition",
    description: "Teams present their solutions to judges and audiences"
  }
];

const agendaDay2 = [
  {
    id: 9,
    time: "10:00 AM - 10:45 AM",
    title: "Day 2 Welcome & Recap",
    venue: "Main Auditorium",
    type: "Opening",
    description: "Brief recap of Day 1 highlights and overview of Day 2 schedule"
  },
  {
    id: 10,
    time: "11:00 AM - 12:00 PM",
    title: "AI-Powered Startups in the Space Economy",
    venue: "Main Auditorium",
    type: "Keynote",
    speaker: "Maria Rodriguez, SpaceAI Ventures",
    description: "How startups are leveraging AI to create new business models in the space industry"
  },
  {
    id: 11,
    time: "12:15 PM - 01:30 PM",
    title: "Panel Discussion: AI Ethics in Space Exploration",
    venue: "Conference Hall A",
    type: "Panel",
    description: "Industry experts discuss ethical considerations of deploying AI in space missions"
  },
  {
    id: 12,
    time: "01:30 PM - 02:30 PM",
    title: "Lunch Break",
    venue: "Campus Lawn",
    type: "Break",
    description: "Networking lunch with special exhibition from sponsors"
  },
  {
    id: 13,
    time: "02:45 PM - 03:15 PM",
    title: "Robotics Exhibition",
    venue: "Exhibition Hall",
    type: "Exhibition",
    description: "Showcasing cutting-edge robotics projects from students and faculty"
  },
  {
    id: 14,
    time: "03:30 PM - 04:30 PM",
    title: "AI Systems for Deep Space Missions",
    venue: "Conference Hall B",
    type: "Speaker Session",
    speaker: "Dr. Rajiv Patel, NASA JPL",
    description: "Technical insights into autonomous AI systems deployed in deep space missions"
  },
  {
    id: 15,
    time: "05:00 PM - 06:00 PM",
    title: "Award Ceremony & Closing Remarks",
    venue: "Main Auditorium",
    type: "Ceremony",
    description: "Recognition of hackathon winners, outstanding projects, and closing of BITS Tech Fest 2025"
  }
];

// Event types for filtering
const eventTypes = ["All", "Keynote", "Speaker Session", "Panel", "Workshop", "Hackathon", "Competition", "Exhibition", "Break", "Ceremony"];

const Agenda = () => {
  const [selectedDay, setSelectedDay] = useState("day1");
  const [selectedType, setSelectedType] = useState("All");
  const [bookmarkedEvents, setBookmarkedEvents] = useState<number[]>([]);

  // Toggle bookmark status
  const toggleBookmark = (eventId: number) => {
    if (bookmarkedEvents.includes(eventId)) {
      setBookmarkedEvents(bookmarkedEvents.filter(id => id !== eventId));
    } else {
      setBookmarkedEvents([...bookmarkedEvents, eventId]);
    }
  };

  // Filter events based on selected type
  const filterEvents = (events: typeof agendaDay1) => {
    if (selectedType === "All") return events;
    return events.filter(event => event.type === selectedType);
  };

  const filteredDay1 = filterEvents(agendaDay1);
  const filteredDay2 = filterEvents(agendaDay2);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="scanline fixed top-0 left-0 pointer-events-none"></div>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-glow">
          <span className="text-neon-purple">AGENDA</span>
        </h1>
        <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
          Explore the complete schedule for BITS Tech Fest 2025. Plan your visit and don't miss the exciting sessions.
        </p>
        
        {/* Filter and Download Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 glass-card p-4">
          <div className="flex items-center gap-3">
            <Filter size={18} className="text-neon-purple" />
            <select 
              className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {eventTypes.map(type => (
                <option key={type} value={type} className="bg-black text-white">{type}</option>
              ))}
            </select>
          </div>
          
          <Button className="flex items-center gap-2">
            <Download size={16} />
            Download Full Schedule
          </Button>
        </div>
        
        {/* Tabs for Day 1 and Day 2 */}
        <Tabs defaultValue="day1" value={selectedDay} onValueChange={setSelectedDay} className="mb-12">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 bg-black/50 border border-white/10">
            <TabsTrigger 
              value="day1"
              className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple data-[state=active]:shadow-none"
            >
              April 30, 2025
            </TabsTrigger>
            <TabsTrigger 
              value="day2"
              className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple data-[state=active]:shadow-none"
            >
              May 10, 2025
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="day1" className="mt-6">
            <div className="space-y-4">
              {filteredDay1.map(event => (
                <div 
                  key={event.id} 
                  className="glass-card p-4 md:p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                >
                  <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <div className="md:w-1/4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={16} className="text-neon-blue" />
                        <span className="text-white font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-neon-green" />
                        <span className="text-white/70">{event.venue}</span>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                          {event.speaker && (
                            <p className="text-neon-purple mb-2">{event.speaker}</p>
                          )}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className={`ml-2 ${bookmarkedEvents.includes(event.id) ? 'text-neon-orange' : 'text-white/50'}`}
                          onClick={() => toggleBookmark(event.id)}
                        >
                          <BookmarkPlus size={18} />
                        </Button>
                      </div>
                      
                      <p className="text-white/70 mt-2">{event.description}</p>
                      
                      <div className="mt-3">
                        <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredDay1.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-white/60">No events match your filter criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-white/20 hover:bg-white/5"
                    onClick={() => setSelectedType("All")}
                  >
                    Reset Filter
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="day2" className="mt-6">
            <div className="space-y-4">
              {filteredDay2.map(event => (
                <div 
                  key={event.id} 
                  className="glass-card p-4 md:p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                >
                  <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <div className="md:w-1/4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={16} className="text-neon-blue" />
                        <span className="text-white font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-neon-green" />
                        <span className="text-white/70">{event.venue}</span>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                          {event.speaker && (
                            <p className="text-neon-purple mb-2">{event.speaker}</p>
                          )}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className={`ml-2 ${bookmarkedEvents.includes(event.id) ? 'text-neon-orange' : 'text-white/50'}`}
                          onClick={() => toggleBookmark(event.id)}
                        >
                          <BookmarkPlus size={18} />
                        </Button>
                      </div>
                      
                      <p className="text-white/70 mt-2">{event.description}</p>
                      
                      <div className="mt-3">
                        <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredDay2.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-white/60">No events match your filter criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-white/20 hover:bg-white/5"
                    onClick={() => setSelectedType("All")}
                  >
                    Reset Filter
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* My Schedule Section */}
        {bookmarkedEvents.length > 0 && (
          <div className="mt-12 glass-card p-6">
            <h2 className="text-2xl font-bold mb-6">My Schedule</h2>
            
            <div className="space-y-4">
              {[...agendaDay1, ...agendaDay2]
                .filter(event => bookmarkedEvents.includes(event.id))
                .sort((a, b) => {
                  // Sort by day first (day1 events first), then by time
                  const dayA = agendaDay1.some(e => e.id === a.id) ? 1 : 2;
                  const dayB = agendaDay1.some(e => e.id === b.id) ? 1 : 2;
                  
                  if (dayA !== dayB) return dayA - dayB;
                  
                  // Extract start times for comparison (assuming format "HH:MM AM/PM - ...")
                  const timeA = a.time.split(' - ')[0];
                  const timeB = b.time.split(' - ')[0];
                  return timeA.localeCompare(timeB);
                })
                .map(event => (
                  <div key={event.id} className="bg-white/5 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-white/70 mb-1">
                          <Calendar size={14} />
                          <span>{agendaDay1.some(e => e.id === event.id) ? 'April 30, 2025' : 'May 10, 2025'}</span>
                          <Clock size={14} className="ml-2" />
                          <span>{event.time}</span>
                        </div>
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-sm text-white/70">{event.venue}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-neon-orange"
                        onClick={() => toggleBookmark(event.id)}
                      >
                        <BookmarkPlus size={18} />
                      </Button>
                    </div>
                  </div>
                ))
              }
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Export My Schedule
              </Button>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Agenda;
