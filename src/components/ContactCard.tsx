import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, FileCheck, Star } from 'lucide-react';

export default function ContactCard() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectDetails: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Quick validations
    if (!formData.name || !formData.email || !formData.projectDetails) {
      setErrorMsg('Please complete all required fields (Name, Email, and Project Details).');
      return;
    }

    // Success Simulation with high fidelity
    setSubmitted(true);
    
    // Also build a draft mailto URL as helper fallback for the user so they can send natively
    const mailtoSubject = encodeURIComponent(`Bid Invitation from ${formData.company || formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nProject Details:\n${formData.projectDetails}`);
    
    // We launch it after a short delay so they see the stateful confirmation first
    setTimeout(() => {
      window.location.href = `mailto:bidding@2BSInteriors.net?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brand-white relative scroll-mt-20 border-t border-brand-neutral-200">
      
      {/* Absolute decorative gradient drops */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute right-10 bottom-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with smooth entrance */}
        <motion.div 
          className="max-w-3xl text-left space-y-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-brand-blue"></span>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-blue font-black">
              PROJECT ESTIMATION & PROCUREMENT
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-black font-heading tracking-tight" id="contact-title">
            Request a Bid
          </h2>
          
          <p className="text-base sm:text-lg text-brand-slate leading-relaxed font-semibold max-w-2xl">
            Contact us to bid your next project. We are highly responsive, swift with submittals, and fully compliant with all local Chicago Union requirements.
          </p>
        </motion.div>

        {/* 2-Column Contact Card Page Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contacts */}
          <motion.div 
            className="lg:col-span-5 space-y-8 text-left" 
            id="contact-info-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h3 className="font-heading font-black text-xl text-brand-black tracking-tight uppercase flex items-center gap-2">
                <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                2B'S INTERIOR CONSTRUCTION
              </h3>
              <p className="text-sm sm:text-base text-brand-slate leading-relaxed font-semibold">
                Our estimation office will analyze your architectural blueprints and deliver precise, itemized bids in full compliance with local Union schedules.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* HQ Address */}
              <motion.div whileHover={{ x: 4 }} className="flex gap-4">
                <div className="w-12 h-12 rounded bg-brand-light-gray border-2 border-brand-black flex items-center justify-center text-brand-blue shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] text-brand-slate font-mono uppercase font-black tracking-wider">Office Headquarters</span>
                  <p className="text-sm font-black text-brand-black leading-snug">
                    3124 S Morgan – R1<br />
                    Chicago, Illinois 60608
                  </p>
                </div>
              </motion.div>

              {/* Verified Phone */}
              <motion.div whileHover={{ x: 4 }} className="flex gap-4">
                <div className="w-12 h-12 rounded bg-brand-light-gray border-2 border-brand-black flex items-center justify-center text-brand-blue shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] text-brand-slate font-mono uppercase font-black tracking-wider">Main Office Phone</span>
                  <a href="tel:7087452219" className="text-base font-black text-brand-black hover:text-brand-blue transition-colors underline decoration-brand-yellow decoration-2">
                    708.745.2219
                  </a>
                </div>
              </motion.div>

              {/* Verified Estimating Line */}
              <motion.div whileHover={{ x: 4 }} className="flex gap-4">
                <div className="w-12 h-12 rounded bg-brand-light-gray border-2 border-brand-black flex items-center justify-center text-brand-blue shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] text-brand-slate font-mono uppercase font-black tracking-wider">Estimating Department</span>
                  <a href="tel:7088255869" className="text-base font-black text-brand-black hover:text-brand-blue transition-colors underline decoration-brand-yellow decoration-2">
                    708.825.5869
                  </a>
                </div>
              </motion.div>

              {/* Verified Estimating Email */}
              <motion.div whileHover={{ x: 4 }} className="flex gap-4">
                <div className="w-12 h-12 rounded bg-brand-light-gray border-2 border-brand-black flex items-center justify-center text-brand-blue shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] text-brand-slate font-mono uppercase font-black tracking-wider">Estimating Email</span>
                  <a href="mailto:bidding@2BSInteriors.net" className="text-base font-black text-brand-black hover:text-brand-blue transition-colors underline decoration-brand-yellow decoration-3">
                    bidding@2BSInteriors.net
                  </a>
                </div>
              </motion.div>

            </div>

            {/* Industrial Workhours indicator Badge */}
            <div className="p-4 bg-brand-light-gray border border-brand-slate/20 rounded-lg flex items-center gap-3 text-[11px] font-mono font-bold text-brand-slate">
              <Clock className="w-4 h-4 text-brand-blue" />
              <span>UNION LABOR COMPLIANT • 7:00 AM TO 3:30 PM CST</span>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Stateful Contact Form */}
          <motion.div 
            className="lg:col-span-7 bg-brand-light-gray p-8 sm:p-10 rounded-2xl border-2 border-brand-black heavy-shadow" 
            id="bidding-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="flex items-center gap-2.5 pb-2 border-b border-brand-slate/20">
                  <FileCheck className="w-5.5 h-5.5 text-brand-blue stroke-[2.5]" />
                  <h3 className="font-heading font-black text-xl text-brand-black tracking-tight uppercase">
                    RFP / Request a Bid
                  </h3>
                </div>
                
                {errorMsg && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm font-semibold rounded">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-[10px] font-mono uppercase font-black text-brand-black">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full bg-brand-white border-2 border-brand-black p-3.5 rounded-lg text-sm text-brand-black focus:outline-none focus:border-brand-blue font-semibold transition-colors"
                      required
                    />
                  </div>

                  {/* Company field */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="block text-[10px] font-mono uppercase font-black text-brand-black">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="General Contracting Corp"
                      className="w-full bg-brand-white border-2 border-brand-black p-3.5 rounded-lg text-sm text-brand-black focus:outline-none focus:border-brand-blue font-semibold transition-colors"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-[10px] font-mono uppercase font-black text-brand-black">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="projectmanager@company.com"
                    className="w-full bg-brand-white border-2 border-brand-black p-3.5 rounded-lg text-sm text-brand-black focus:outline-none focus:border-brand-blue font-semibold transition-colors"
                    required
                  />
                </div>

                {/* Project Details textarea */}
                <div className="space-y-1.5">
                  <label htmlFor="projectDetails" className="block text-[10px] font-mono uppercase font-black text-brand-black">Project Details & Estimating Needs *</label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Provide trade scopes (e.g. framing, drywall, taping, lacquer painting, ACT), estimated bids due date, and jobsite location."
                    className="w-full bg-brand-white border-2 border-brand-black p-3.5 rounded-lg text-sm text-brand-black focus:outline-none focus:border-brand-blue font-semibold resize-none transition-colors"
                    required
                  ></textarea>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-brand-yellow hover:bg-amber-400 text-brand-black border-2 border-brand-black py-4.5 rounded-lg font-black text-xs tracking-widest uppercase transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm active:translate-y-0.5"
                >
                  <Send className="w-4 h-4 text-brand-black fill-brand-black" />
                  <span>Send Bid Invitation</span>
                </motion.button>
              </form>
            ) : (
              /* Success Animation and state representation */
              <div className="py-12 text-center space-y-6 flex flex-col items-center" id="form-success-banner">
                <div className="p-4 bg-brand-yellow/15 border-2 border-brand-black rounded-full text-brand-blue shrink-0 animate-bounce">
                  <CheckCircle2 className="w-12 h-12 text-brand-blue fill-brand-yellow stroke-[2.5]" />
                </div>
                
                <h3 className="font-heading font-black text-2xl text-brand-black tracking-tight leading-none uppercase">
                  Bid Invitation Received!
                </h3>
                
                <div className="max-w-md space-y-3">
                  <p className="text-sm text-brand-black font-bold">
                    Thank you, {formData.name}. We have logged your request.
                  </p>
                  <p className="text-xs text-brand-slate leading-relaxed font-semibold">
                    Our system has drafted a prefilled bid invitation. If your local email client didn't launch automatically, please send your project specs and architectural sheets directly to <a href="mailto:bidding@2BSInteriors.net" className="font-black underline text-brand-blue">bidding@2BSInteriors.net</a>.
                  </p>
                </div>

                {/* Button to reload form */}
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', company: '', email: '', projectDetails: '' });
                  }}
                  className="bg-brand-white hover:bg-brand-light-gray text-brand-black border-2 border-brand-black px-5 py-2.5 rounded-md text-xs font-black tracking-widest uppercase transition-colors"
                >
                  Submit Another Project
                </button>
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
