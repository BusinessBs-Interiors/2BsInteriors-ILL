import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HardHat, CheckSquare, HeartHandshake, Star } from 'lucide-react';

export default function AboutUs() {
  const valuesList = [
    {
      icon: HeartHandshake,
      title: 'Service',
      desc: 'Responsive, proactive management and active collaboration with general contractors from bid to closeout.'
    },
    {
      icon: ShieldCheck,
      title: 'Quality',
      desc: 'Expertly constructed partition assemblies, plumb metal studs, and flawless finished surfaces.'
    },
    {
      icon: HardHat,
      title: 'Safety',
      desc: 'Fully trained union crews practicing rigorous zero-incident OSHA field safety protocols.'
    }
  ];

  return (
    <section id="who-we-are" className="py-24 bg-brand-light-gray relative scroll-mt-20 border-t border-brand-neutral-200 overflow-hidden">
      
      {/* Decorative technical line */}
      <div className="absolute top-0 right-10 w-40 h-40 bg-brand-blue/[0.02] border border-dashed border-brand-blue/10 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Description with Stagger Entry */}
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-brand-blue"></span>
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-brand-blue font-black">
                WHO WE ARE & WHAT WE STAND FOR
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-black font-heading tracking-tight">
              A Trusted Partner in Commercial Finishes
            </h2>
            
            {/* Verbatim brief textual core statement */}
            <p className="text-brand-black text-lg sm:text-xl font-bold leading-relaxed border-l-4 border-brand-yellow pl-4 py-1">
              2B'S Interior Construction is a Chicago woman-owned, MBE-certified union interior finish contractor.
            </p>
            
            <p className="text-brand-slate text-sm sm:text-base leading-relaxed font-semibold">
              We deliver the finish trades that turn raw shells and gut-rehab spaces into finished, working commercial interiors — with an emphasis on service, quality, and safety, completed on time and under budget.
            </p>

            {/* Credential Status Box */}
            <div className="p-6 bg-brand-white border-2 border-brand-black rounded-xl heavy-shadow space-y-4">
              <div className="flex items-center gap-2">
                <Star className="w-4.5 h-4.5 text-brand-yellow fill-brand-yellow" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-blue font-black block">
                  CHICAGO GENERAL CONTRACTING ADVANTAGES
                </span>
              </div>
              <p className="text-xs sm:text-sm text-brand-slate font-semibold leading-relaxed">
                As a fully certified Minority Business Enterprise (MBE) and woman-owned construction entity, we help project developers meet strict diversity participation criteria at union sites with confidence.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Values presentation (Service, Quality, Safety) */}
          <motion.div 
            className="lg:col-span-6 space-y-6 lg:pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-mono tracking-widest uppercase text-brand-black font-extrabold flex items-center gap-2.5">
              <CheckSquare className="w-5 h-5 text-brand-blue stroke-[2.5]" />
              Our Core Values
            </h3>

            <div className="space-y-4" id="values-wrapper">
              {valuesList.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    whileHover={{ scale: 1.02, x: 4, transition: { duration: 0.2 } }}
                    className="p-6 bg-brand-white rounded-xl border-2 border-brand-black flex items-start gap-5 hover:shadow-lg transition-all shadow-sm"
                    id={`value-card-${value.title.toLowerCase()}`}
                  >
                    <div className="p-3 bg-brand-light-gray rounded border-2 border-brand-black text-brand-blue shrink-0 group-hover:bg-brand-blue transition-colors">
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-heading font-black text-lg text-brand-black leading-none">
                        {value.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-slate font-semibold leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
