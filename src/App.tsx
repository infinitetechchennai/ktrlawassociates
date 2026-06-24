import React, { useState } from 'react';
import { ActiveView } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import CivilLaw from './components/CivilLaw';
import CriminalLaw from './components/CriminalLaw';
// Temporarily hidden
// import Prosecutor from './components/Prosecutor';
import CorporateADR from './components/CorporateADR';
import ContactUs from './components/ContactUs';
import BookConsultationModal from './components/BookConsultationModal';

import { 
  Scale, MapPin, Phone, Mail, ArrowUp, ShieldCheck 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteContent } from './config/siteContent';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToContact = () => {
    setActiveView('contact');
    handleScrollToTop();
  };

  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <Home setActiveView={setActiveView} onOpenConsultation={() => setIsConsultationOpen(true)} />;
      case 'about':
        return <AboutUs />;
      case 'civil':
        return <CivilLaw />;
      case 'criminal':
        return <CriminalLaw />;
      // Temporarily falling back to Home until profile updates are finalized
      case 'prosecutor':
        return <Home setActiveView={setActiveView} onOpenConsultation={() => setIsConsultationOpen(true)} />;
      case 'corporate-adr':
        return <CorporateADR />;
      case 'contact':
        return <ContactUs />;
      default:
        return <Home setActiveView={setActiveView} onOpenConsultation={() => setIsConsultationOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-parchment flex flex-col justify-between relative" id="app-body-container">
      
      {/* 1. Navbar */}
      {/* Note: If the Prosecutor link is also hardcoded inside your <Navbar /> component, you will want to comment it out there too! */}
      <Navbar 
  activeView={activeView} 
  setActiveView={setActiveView} 
  onOpenConsultation={() => {
    setActiveView('contact');
    handleScrollToTop();
  }} 
/>

      {/* 2. Main content view rendering */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Premium Architectural Footer */}
      <footer className="bg-gradient-to-b from-slate-950 to-neutral-950 text-slate-100 border-t border-amber-500/20 font-sans mt-auto" id="app-gorgeous-footer">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Column 1: Brand Profile */}
            <div className="md:col-span-5 space-y-5">
              <div className="flex items-center space-x-3.5">
                <div className="p-2 bg-gradient-to-br from-amber-500/10 to-amber-600/20 rounded-md border border-amber-500/30 shadow-inner">
                  <Scale className="h-5 w-5 text-amber-400" />
                </div>
                <span className="font-serif text-lg font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 uppercase">
                  {siteContent.brand.fullName}
                </span>
              </div>
              
              <p className="text-xs text-slate-400 leading-relaxed font-normal tracking-wide max-w-sm">
                Senior independent advocate practicing since 2001 before the Madras High Court, City Civil Courts, and Sessions forums. Distinguished for meticulous preparations, robust cross-examinations, and ethical trial defense.
              </p>
              
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded bg-amber-500/5 border border-amber-500/10 text-[11px] text-amber-400 font-medium tracking-wider font-mono uppercase">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400/80" />
                <span>25+ Years of Reputable Advocacy</span>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-3.5 bg-amber-500/70 rounded-full"></div>
                <h4 className="font-serif text-xs font-semibold uppercase tracking-widest text-amber-400">
                  Quick Navigation
                </h4>
              </div>
              <ul className="space-y-3 text-xs text-slate-400 font-medium">
                <li>
                  <button 
                    onClick={() => { setActiveView('home'); handleScrollToTop(); }} 
                    className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none"
                  >
                    Home Overview
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveView('about'); handleScrollToTop(); }} 
                    className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none"
                  >
                    About Journey
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveView('contact'); handleScrollToTop(); }} 
                    className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none"
                  >
                    Contact Office
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Services Links */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-3.5 bg-amber-500/70 rounded-full"></div>
                <h4 className="font-serif text-xs font-semibold uppercase tracking-widest text-amber-400">
                  Law Services Portfolio
                </h4>
              </div>
              <ul className="space-y-3 text-xs text-slate-400 font-medium">
                <li>
                  <button 
                    onClick={() => { setActiveView('civil'); handleScrollToTop(); }} 
                    className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none text-left"
                  >
                    Civil Litigation & Property Disputes
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveView('criminal'); handleScrollToTop(); }} 
                    className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none text-left"
                  >
                    Criminal Trial Representation & Bail
                  </button>
                </li>
                
                {/* TEMPORARILY REMOVED PUBLIC PROSECUTOR LINK */}
                {/* <li>
                  <button 
                    onClick={() => { setActiveView('prosecutor'); handleScrollToTop(); }} 
                    className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none text-left"
                  >
                    City Public Prosecutor Profile
                  </button>
                </li> */}

                <li>
                  <button 
                    onClick={() => { setActiveView('corporate-adr'); handleScrollToTop(); }} 
                    className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none text-left"
                  >
                    Corporate Advisory & Arbitration
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Contact Bar Strip */}
          <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-900/50 transition-colors duration-200">
              <MapPin className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs space-y-0.5">
                <p className="text-slate-200 font-medium">Chambers Address</p>
                <p className="text-slate-400 leading-relaxed">{siteContent.contact.address.full}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-900/50 transition-colors duration-200">
              <Phone className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs space-y-1">
  <p className="text-slate-200 font-medium">Direct Contact</p>

  <div className="flex flex-wrap items-center gap-5 text-base font-medium text-slate-400 tracking-wide">
    {siteContent.contact.phoneNumbers.map((phone) => (
      <span key={phone}>{phone}</span>
    ))}
  </div>
</div>
            </div>

            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-900/50 transition-colors duration-200 sm:col-span-2 lg:col-span-1">
              <Mail className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs space-y-0.5">
                <p className="text-slate-200 font-medium">Email Correspondence</p>
                <a href={siteContent.contact.emailHref} className="text-slate-400 hover:text-amber-400 transition-colors duration-200 block font-mono">
                  {siteContent.contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-8"></div>

          {/* Subfooter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 tracking-wide">
            <p className="text-center sm:text-left leading-relaxed">
              © 2026 {siteContent.brand.fullName}. All Rights Reserved. <br className="sm:hidden" />
              <span className="hidden sm:inline">|</span> {siteContent.brand.footerNote}
            </p>
            <button
              onClick={handleScrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 rounded-md bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 hover:bg-amber-500/5 text-slate-400 hover:text-amber-400 transition-all duration-200 focus:outline-none shadow-sm"
            >
              <span className="font-medium">Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 transform group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>

        </div>
      </footer>

      {/* 4. Floating Action Counsel Widget (Matching image_7ff981.png) */}
      <div 
        className="fixed bottom-6 right-6 z-50 flex items-center group cursor-pointer" 
        onClick={handleNavigateToContact}
      >
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#041122] text-white font-serif text-xs sm:text-sm px-6 py-3.5 rounded-l-xl border-t border-b border-l border-slate-800/80 shadow-2xl tracking-wide flex items-center pr-10 -mr-6 border-amber-500/10 group-hover:border-amber-500/30 transition-all duration-300"
        >
          <span>Need Legal Counsel? Book Now</span>
          <span className="ml-3 font-sans text-xs text-slate-400 group-hover:text-amber-400 font-light transition-colors">
            ↑
          </span>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 p-3.5 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-center border border-white/10 z-10 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300"
        >
          <Phone className="h-5 w-5 stroke-[2.5]" />
        </motion.div>
      </div>

      {/* 5. Consultation Scheduler Modal Overlay */}
      <BookConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />

    </div>
  );
}