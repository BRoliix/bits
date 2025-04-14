
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Mail, User, Users, Briefcase, GraduationCap } from 'lucide-react';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    isStudent: false,
    institution: '',
    interestedEvents: [] as string[],
    agreeTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleEventToggle = (event: string) => {
    const currentEvents = [...formData.interestedEvents];
    
    if (currentEvents.includes(event)) {
      setFormData(prev => ({
        ...prev,
        interestedEvents: prev.interestedEvents.filter(e => e !== event)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        interestedEvents: [...prev.interestedEvents, event]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setStep(3); // Go to thank you page
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="scanline fixed top-0 left-0 pointer-events-none"></div>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-heading">
          REGISTRATION
        </h1>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          Register for BITS Tech Fest 2025 and be part of the cosmic intelligence revolution.
        </p>
        
        {/* Registration steps progress bar */}
        {step < 3 && (
          <div className="max-w-3xl mx-auto mb-10">
            <div className="flex justify-between mb-2">
              <span className={step >= 1 ? "text-neon-purple" : "text-white/50"}>Personal Details</span>
              <span className={step >= 2 ? "text-neon-purple" : "text-white/50"}>Preferences</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-neon-purple h-full transition-all duration-500"
                style={{ width: `${(step / 2) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
        
        <div className="max-w-3xl mx-auto">
          {step === 1 && (
            <div className="glass-card animation-fade-in">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <Label htmlFor="firstName" className="text-white mb-2 block">First Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={16} />
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        className="pl-10 bg-white/5 border-white/10"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-white mb-2 block">Last Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={16} />
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        className="pl-10 bg-white/5 border-white/10"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={16} />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="pl-10 bg-white/5 border-white/10"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+971 50 123 4567"
                      className="bg-white/5 border-white/10"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="organization" className="text-white mb-2 block">Organization / Company</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={16} />
                      <Input
                        id="organization"
                        name="organization"
                        placeholder="Company name"
                        className="pl-10 bg-white/5 border-white/10"
                        value={formData.organization}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="role" className="text-white mb-2 block">Job Title / Role</Label>
                    <Input
                      id="role"
                      name="role"
                      placeholder="Software Engineer"
                      className="bg-white/5 border-white/10"
                      value={formData.role}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="isStudent" 
                      checked={formData.isStudent}
                      onCheckedChange={(checked) => handleCheckboxChange('isStudent', checked as boolean)}
                    />
                    <Label htmlFor="isStudent" className="text-white">I am a student</Label>
                  </div>
                </div>
                
                {formData.isStudent && (
                  <div className="mb-6">
                    <Label htmlFor="institution" className="text-white mb-2 block">Educational Institution</Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={16} />
                      <Input
                        id="institution"
                        name="institution"
                        placeholder="University or School name"
                        className="pl-10 bg-white/5 border-white/10"
                        value={formData.institution}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end">
                  <Button 
                    type="button" 
                    className="neon-button"
                    onClick={nextStep}
                  >
                    Next Step
                  </Button>
                </div>
              </form>
            </div>
          )}
          
          {step === 2 && (
            <div className="glass-card animation-fade-in">
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Which events are you interested in?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['AI Hackathon', 'Blockchain Workshop', 'Robotics Exhibition', 'Speaker Sessions', 
                      'Panel Discussions', 'Networking Events', 'Career Fair', 'Technical Workshops'].map(event => (
                      <div key={event} className="flex items-center space-x-2">
                        <Checkbox 
                          id={event.replace(/\s+/g, '')} 
                          checked={formData.interestedEvents.includes(event)}
                          onCheckedChange={() => handleEventToggle(event)}
                        />
                        <Label htmlFor={event.replace(/\s+/g, '')} className="text-white">{event}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="agreeTerms" 
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleCheckboxChange('agreeTerms', checked as boolean)}
                      required
                    />
                    <Label htmlFor="agreeTerms" className="text-white text-sm">
                      I agree to the BITS Tech Fest <a href="#" className="text-neon-purple hover:underline">Terms & Conditions</a> and 
                      <a href="#" className="text-neon-purple hover:underline"> Privacy Policy</a>. I consent to receiving 
                      communications about this event.
                    </Label>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="border-white/20 hover:bg-white/5"
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                  
                  <Button 
                    type="submit" 
                    className="neon-button"
                    disabled={!formData.agreeTerms}
                  >
                    Complete Registration
                  </Button>
                </div>
              </form>
            </div>
          )}
          
          {step === 3 && (
            <div className="glass-card animation-fade-in text-center p-8">
              <div className="mb-6 text-neon-purple">
                <Calendar size={64} className="mx-auto" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Registration Complete!</h2>
              
              <p className="text-white/80 mb-6">
                Thank you for registering for BITS Tech Fest 2025! We've sent a confirmation email to <span className="text-neon-purple">{formData.email}</span> with your ticket details and QR code.
              </p>
              
              <div className="mb-8 p-6 bg-white/5 rounded-lg inline-block">
                <p className="text-lg font-semibold mb-2">April 30 & May 10, 2025</p>
                <p className="text-white/70">BITS Pilani Dubai Campus</p>
                <p className="text-white/70 mb-4">Dubai, UAE</p>
                <p className="text-sm">Your registration ID: <span className="text-neon-green">BTF25-{Math.floor(100000 + Math.random() * 900000)}</span></p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="neon-button">
                  Add to Calendar
                </Button>
                <Button asChild variant="outline" className="border-white/20 hover:bg-white/5">
                  <a href="/">Return to Homepage</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Registration;
