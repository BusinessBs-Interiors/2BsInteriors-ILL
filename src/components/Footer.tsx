import React from 'react';
import { ArrowUp, Award, Shield, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black text-brand-white border-t-4 border-brand-blue py-16" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 mb-10 border-b border-brand-slate/20 text-left">
          
          {/* Column 1: Logo & Mission summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-3 rounded-lg inline-block shadow-sm" id="footer-logo-container">
              <Logo className="w-[150px] sm:w-[185px] h-auto" />
            </div>
            <p className="text-brand-light-gray text-xs sm:text-sm font-medium leading-relaxed max-w-sm pt-2">
              2B'S Interior Construction is a certified woman-owned, MBE-certified, and union-staffed interior finishing contractor providing precise metal framing, seamless drywall, painting, and drop ceiling assemblies.
            </p>
            <p className="text-brand-yellow font-extrabold text-sm tracking-wide">
              Contact us to bid your next project.
            </p>
          </div>

          {/* Column 2: Verbatim Contact Details */}
          <div className="lg:col-span-4 space-y-4 text-xs font-mono">
            <h4 className="font-heading font-extrabold text-brand-yellow uppercase tracking-wider text-sm">
              Construction Office
            </h4>
            
            <div className="space-y-3.5 text-brand-light-gray">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                <span>3124 S Morgan – R1, Chicago, Illinois 60608</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Office: <a href="tel:7087452219" className="hover:text-brand-yellow font-bold">708.745.2219</a></span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Estimating: <a href="tel:7088255869" className="hover:text-brand-yellow font-bold">708.825.5869</a></span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Email: <a href="mailto:bidding@2BSInteriors.net" className="hover:text-brand-yellow font-bold">bidding@2BSInteriors.net</a></span>
              </p>
            </div>
          </div>

          {/* Column 3: Bidding CTA */}
          <div className="lg:col-span-3 space-y-6 flex flex-col items-start justify-between">
            <div className="space-y-2 w-full">
              <h4 className="font-heading font-extrabold text-brand-white uppercase tracking-wider text-sm">
                Need a Submittal?
              </h4>
              <p className="text-[11px] text-brand-slate font-sans leading-relaxed font-semibold">
                Submit architectural blueprint packages immediately. Our Union estimators respond with precision.
              </p>
            </div>

            <a
              href="#contact"
              className="bg-brand-yellow text-brand-black hover:bg-amber-400 font-extrabold text-xs tracking-widest uppercase px-6 py-3.5 rounded-md border-2 border-brand-black shadow-md block w-full text-center"
              id="footer-bid-cta"
            >
              Request a Bid
            </a>
          </div>

        </div>

        {/* Corporate bottom credits bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] font-mono text-brand-slate">
          <div>
            <p>&copy; {new Date().getFullYear()} 2B'S Interior Construction. All Rights Reserved.</p>
          </div>

          {/* Certification badges */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
            <span className="flex items-center gap-1.5 font-bold">
              <Award className="w-4 h-4 text-brand-blue" />
              <span>UNION AFFILIATED</span>
            </span>
            <span className="flex items-center gap-1.5 font-bold">
              <Shield className="w-4 h-4 text-brand-yellow" />
              <span>MBE & WBE CERTIFIED</span>
            </span>
            
            <button
              onClick={handleScrollTop}
              className="p-2 bg-brand-blue text-brand-white border border-brand-blue hover:bg-brand-yellow hover:text-brand-black transition-colors rounded cursor-pointer ml-2"
              aria-label="Scroll to Top"
              id="scroll-to-top"
            >
              <ArrowUp className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
