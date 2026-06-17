import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Award, Users, HardHat, Compass } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  // Stagger animation container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="relative min-h-screen bg-brand-white flex flex-col justify-center overflow-hidden pt-28 pb-20 md:pt-32" id="hero-section">
      
      {/* 1. ARCHITECTURAL BLUEPRINT GRID & DIAGRAMS */}
      <div className="absolute inset-0 z-0">
        {/* Fine Technical Grid */}
        <div 
          className="absolute inset-0 opacity-12" 
          style={{
            backgroundImage: `
              radial-gradient(#0449ED 1.5px, transparent 1.5px), 
              linear-gradient(to right, rgba(4, 73, 237, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(4, 73, 237, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 40px 40px',
            backgroundPosition: 'center center'
          }}
        ></div>

        {/* Blueprint construction vectors / draft lines for high creative art flavor */}
        <svg className="absolute top-1/4 right-1/3 w-[600px] h-[600px] text-brand-blue/5 pointer-events-none stroke-[0.5]" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" />
          <path d="M15,15 L85,85 M15,85 L85,15" stroke="currentColor" strokeDasharray="1 3" />
        </svg>
      </div>

      {/* 2. ARTISTIC CHICAGO SKYLINE BACKDROP (Recreated beautifully with SVG vectors) */}
      <div className="absolute bottom-0 left-0 right-0 h-72 md:h-96 z-0 pointer-events-none select-none">
        <svg 
          className="w-full h-full text-brand-black/5" 
          viewBox="0 0 1600 400" 
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Layer 3: Minimal Background Blueprint Skyline Contour (Lightest Blue) */}
          <path 
            className="text-brand-blue/[0.02]"
            d="M 0,380 L 120,380 L 120,290 L 150,290 L 150,220 L 180,220 L 180,180 L 210,180 Z"
          />
          
          {/* Layer 2: Middle Skyline (The Chicago Classics, Silhouette with drafting lines) */}
          <g className="text-brand-blue/[0.04] stroke-brand-blue/10 stroke-[0.5]">
            {/* Leftmost block */}
            <rect x="50" y="220" width="40" height="180" />
            <rect x="110" y="160" width="45" height="240" />
            
            {/* John Hancock style tapered tower */}
            <path d="M 190,400 L 215,120 L 255,120 L 280,400 Z" />
            <line x1="235" y1="120" x2="235" y2="30" className="stroke-brand-blue/20 stroke-[1]" />
            <line x1="215" y1="120" x2="280" y2="400" className="stroke-brand-blue/15 stroke-[0.5] stroke-dasharray-[2_2]" />
            <line x1="255" y1="120" x2="190" y2="400" className="stroke-brand-blue/15 stroke-[0.5] stroke-dasharray-[2_2]" />

            {/* Standard high rises */}
            <rect x="310" y="260" width="35" height="140" />
            <rect x="360" y="200" width="50" height="200" />
            
            {/* Willis/Sears Tower style stepped tower */}
            <path d="M 440,400 L 440,240 L 452,240 L 452,190 L 466,190 L 466,60 L 494,60 L 494,190 L 508,190 L 508,240 L 520,240 L 520,400 Z" />
            <line x1="474" y1="60" x2="474" y2="10" className="stroke-brand-black/30 stroke-[1]" />
            <line x1="486" y1="60" x2="486" y2="10" className="stroke-brand-black/30 stroke-[1]" />

            <rect x="550" y="250" width="30" height="150" />
            <rect x="595" y="180" width="55" height="220" />
            <rect x="670" y="270" width="30" height="130" />
            
            {/* High density center clusters */}
            <rect x="720" y="150" width="60" height="250" />
            <rect x="740" y="90" width="20" height="60" />
            <line x1="750" y1="90" x2="750" y2="40" className="stroke-brand-blue/20" />

            <path d="M 800,400 L 830,130 L 860,130 L 890,400 Z" />
            
            {/* Standard Midrise block */}
            <rect x="915" y="240" width="45" height="160" />
            <rect x="980" y="190" width="50" height="210" />
            <rect x="1050" y="230" width="35" height="170" />
            
            {/* Navy Pier area elements right end */}
            <rect x="1110" y="280" width="40" height="120" />
            <circle cx="1190" cy="280" r="40" fill="none" className="stroke-brand-blue/10 stroke-[1]" />
            <rect x="1250" y="260" width="50" height="140" />
            <rect x="1320" y="180" width="40" height="220" />
            <rect x="1380" y="230" width="35" height="170" />
            <rect x="1430" y="250" width="40" height="150" />
            <rect x="1490" y="220" width="50" height="180" />
          </g>

          {/* Layer 1: Dark Ground Silhouette (Clean & Bold Frontmost layer anchoring the content) */}
          <path 
            className="text-brand-black/[0.02]"
            d="M 0,390 L 1600,390 L 1600,400 L 0,400 Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Left Column: Bold Industrial Copy Block */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Aesthetic Construction Indicator Ribbons */}
            <motion.div className="flex items-center gap-2 text-brand-blue" variants={itemVariants}>
              <Compass className="w-5 h-5 animate-spin-slow text-brand-blue" />
              <span className="font-mono text-xs tracking-[0.2em] font-black uppercase">CHICAGO UNION GC VENDOR</span>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-blue to-transparent"></div>
            </motion.div>

            {/* Credential Badges Row (Optimized for modern, strong aesthetic) */}
            <motion.div className="flex flex-wrap gap-2.5" id="hero-badges-row" variants={itemVariants}>
              <motion.span 
                variants={badgeVariants}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-black text-brand-white text-[11px] font-mono tracking-widest uppercase font-extrabold border-l-4 border-brand-yellow hover:bg-brand-blue transition-colors duration-200 cursor-default"
              >
                <Award className="w-3.5 h-3.5 text-brand-yellow" />
                Woman-Owned
              </motion.span>
              <motion.span 
                variants={badgeVariants}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-black text-brand-white text-[11px] font-mono tracking-widest uppercase font-extrabold border-l-4 border-brand-yellow hover:bg-brand-blue transition-colors duration-200 cursor-default"
              >
                <Shield className="w-3.5 h-3.5 text-brand-yellow" />
                MBE-Certified
              </motion.span>
              <motion.span 
                variants={badgeVariants}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-black text-brand-white text-[11px] font-mono tracking-widest uppercase font-extrabold border-l-4 border-brand-yellow hover:bg-brand-blue transition-colors duration-200 cursor-default"
              >
                <Users className="w-3.5 h-3.5 text-brand-yellow" />
                Union Contractor
              </motion.span>
            </motion.div>

            {/* Headlines Section */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-black leading-[1.05] tracking-tight font-heading"
                id="hero-title"
                variants={itemVariants}
              >
                Interior finishes <br />
                for Chicago's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blue to-blue-600 underline decoration-brand-yellow decoration-4">commercial spaces.</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-brand-slate font-medium leading-relaxed max-w-xl"
                id="hero-tagline"
                variants={itemVariants}
              >
                Your trusted source for framing, drywall, taping, painting, and acoustical ceilings.
              </motion.p>
            </div>

            {/* Call to Actions (Safety Yellow and Construction Outlines) */}
            <motion.div className="flex flex-wrap gap-4" id="hero-cta-group" variants={itemVariants}>
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(4, 73, 237, 0.15)" }}
                whileTap={{ y: 0 }}
                className="bg-brand-yellow text-brand-black font-extrabold text-xs tracking-[0.2em] uppercase px-8 py-4.5 rounded border-2 border-brand-black transition-all flex items-center gap-3 shadow-md focus:outline-none"
                id="hero-btn-request-bid"
              >
                <span>Request a Bid</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </motion.a>
              
              <motion.a
                href="#what-we-do"
                whileHover={{ bg: "#F4F5F7" }}
                className="bg-brand-white text-brand-black font-extrabold text-xs tracking-[0.2em] uppercase px-8 py-4.5 rounded border-2 border-brand-black transition-colors focus:outline-none shadow-sm"
                id="hero-btn-what-we-do"
              >
                What We Do
              </motion.a>
            </motion.div>

          </div>

          {/* Right Column: LARGE CELEBRATED HERO LOGO (With Modern Parallax Construction Border & clear space) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div 
              className="relative w-full max-w-[480px] p-6"
              initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Graphic Wireframe Backing indicating technical drafting */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
              
              {/* Sleek bold outline construction frame surrounding the logo showcase */}
              <div className="absolute -inset-2 border border-brand-blue/20 stroke-dasharray-[5_5] rounded-3xl pointer-events-none"></div>
              <div className="absolute -inset-4 border border-brand-yellow/35 stroke-dasharray-[2_4] rounded-3xl pointer-events-none"></div>

              {/* Magnificent Large Interactive Brand Block with real Logo Image */}
              <motion.div 
                className="bg-brand-white p-8 sm:p-12 rounded-3xl border-3 border-brand-black heavy-shadow relative group overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[400px]"
                id="hero-logo-container"
                whileHover={{ 
                  y: -6, 
                  boxShadow: "10px 10px 0px 0px var(--color-brand-black)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Real-time high-fidelity brand ribbon marker */}
                <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-brand-yellow via-brand-blue to-brand-yellow"></div>
                
                <div className="relative z-10 flex items-center justify-center w-full">
                  <Logo className="w-[280px] sm:w-[360px] h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105" id="hero-logo-image" />
                </div>

                {/* Subtle drafting blueprints line in background of card */}
                <div className="absolute bottom-2 right-2 text-[9px] font-mono opacity-25 text-brand-slate pointer-events-none font-bold">
                  SHEET REF: EL-001/A
                </div>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
