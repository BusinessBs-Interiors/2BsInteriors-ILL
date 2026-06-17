import React from 'react';
import { motion } from 'motion/react';
import { Hammer, Layers, Brush, Grid3X3, Ruler, Sparkles } from 'lucide-react';
import { SERVICES } from '../data';

// Map specific custom trade icons
const ServiceIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  framing: Hammer,
  drywall: Layers,
  taping: Ruler,
  painting: Brush,
  act: Grid3X3,
};

export default function Services() {
  // Stagger configurations for grid layout animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] 
      }
    },
  };

  return (
    <section id="what-we-do" className="py-24 bg-brand-white relative scroll-mt-20 border-t border-brand-light-gray">
      
      {/* Visual decorative technical line dividing sections */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-blue opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with animation elements */}
        <motion.div 
          className="max-w-3xl text-left space-y-4 mb-20"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-brand-blue"></span>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-blue font-black">
              CORE CAPABILITIES & SOLUTIONS
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-black font-heading tracking-tight" id="services-title">
            What We Do
          </h2>
          
          <p className="text-base sm:text-lg text-brand-slate leading-relaxed font-semibold max-w-2xl" id="services-description">
            We deliver top-quality drywall framing, finishing, painting, and acoustical systems across Chicago, with trade experts working under rigorous union guidelines.
          </p>
        </motion.div>

        {/* Clean, bold industrial card grid with stagger trigger */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="capabilities-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES.map((service, index) => {
            const Icon = ServiceIcons[service.id] || Layers;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  x: -2,
                  boxShadow: "8px 8px 0px 0px var(--color-brand-black)",
                  borderColor: "var(--color-brand-blue)"
                }}
                className="bg-brand-white p-8 rounded-xl border-2 border-brand-black heavy-shadow-hover transition-all duration-300 flex flex-col justify-between text-left space-y-8 relative group overflow-hidden"
                id={`service-card-${service.id}`}
              >
                {/* Yellow Safety Accent tape ribbon inside card */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-light-gray group-hover:bg-brand-yellow transition-colors duration-300"></div>

                {/* Grid backdrop indicating drafting scale */}
                <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-[0.02] bg-radial-gradient from-brand-blue to-transparent pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                  <svg className="w-full h-full stroke-brand-blue stroke-[1.5]" viewBox="0 0 100 100">
                    <line x1="0" y1="50" x2="100" y2="50" />
                    <line x1="50" y1="0" x2="50" y2="100" />
                  </svg>
                </div>

                <div className="space-y-5 relative z-10">
                  {/* Trade Icon styled creatively */}
                  <div className="p-3.5 bg-brand-light-gray rounded border-2 border-brand-black w-fit group-hover:bg-brand-blue group-hover:text-brand-white transition-all duration-300">
                    <Icon className="w-6 h-6 text-brand-blue group-hover:text-brand-white stroke-[2.5] duration-300" />
                  </div>

                  <h3 className="font-heading font-black text-xl text-brand-black tracking-tight leading-tight group-hover:text-brand-blue transition-colors duration-250">
                    {service.title}
                  </h3>

                  <p className="text-brand-slate text-sm sm:text-base leading-relaxed font-semibold font-sans">
                    {service.desc}
                  </p>
                </div>

                {/* Sub-card brand numbering style */}
                <div className="pt-5 border-t border-brand-light-gray flex justify-between items-center text-[10px] font-mono font-black text-brand-blue relative z-10">
                  <span className="tracking-widest">CAPABILITY CODE: 0{index + 1}</span>
                  <span className="text-brand-black flex items-center gap-1 bg-brand-light-gray px-2 py-1 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse"></span>
                    UNION CORE
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Industrial Brand Footer Note inside capability panel */}
        <motion.div 
          className="mt-16 p-6 border-2 border-dashed border-brand-slate/20 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 bg-brand-light-gray/40 text-left relative overflow-hidden"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="space-y-1 relative z-10">
            <h4 className="font-heading font-black text-sm text-brand-black uppercase tracking-wider">
              ESTIMATING DEPT BIDS ACTIVE
            </h4>
            <p className="text-xs text-brand-slate font-medium">
              We compile zero-defect estimates for GCs, Construction Managers, & Developers. Over 100% of our staff are Union tradesmen.
            </p>
          </div>
          <a 
            href="#contact" 
            className="bg-brand-black hover:bg-brand-blue text-brand-white font-mono text-xs font-black tracking-widest uppercase px-5 py-3 rounded transition-colors shrink-0 z-10"
          >
            Send RFP Directly
          </a>
        </motion.div>

      </div>
    </section>
  );
}
