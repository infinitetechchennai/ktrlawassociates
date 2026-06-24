import React, { useState } from 'react';
import { ActiveView } from '../types';
import { Scale, Phone, Menu, X, ChevronDown, ChevronUp, Calendar, ShieldCheck, Gavel, Briefcase, Handshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteContent } from '../config/siteContent';

interface NavbarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  onOpenConsultation: () => void;
}

export default function Navbar({ activeView, setActiveView, onOpenConsultation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const handleNavClick = (view: ActiveView) => {
    setActiveView(view);
    setIsOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceItems = [
    { 
      label: 'Civil Law', 
      view: 'civil' as ActiveView, 
      colorClass: 'hover:text-amber-400 hover:bg-amber-950/40 hover:border-l-4 hover:border-amber-500', 
      activeClass: 'text-amber-400 border-l-4 border-amber-500 bg-amber-950/20',
      icon: Scale,
      desc: 'Property, Disputes & Appellate'
    },
    { 
      label: 'Criminal Law', 
      view: 'criminal' as ActiveView, 
      colorClass: 'hover:text-rose-400 hover:bg-rose-950/40 hover:border-l-4 hover:border-rose-500', 
      activeClass: 'text-rose-400 border-l-4 border-rose-500 bg-rose-950/20',
      icon: Gavel,
      desc: 'Criminal Trial & Defense Advocacy'
    },
    { 
      label: 'Corporate & ADR', 
      view: 'corporate-adr' as ActiveView, 
      colorClass: 'hover:text-emerald-400 hover:bg-emerald-950/40 hover:border-l-4 hover:border-emerald-500', 
      activeClass: 'text-emerald-400 border-l-4 border-emerald-500 bg-emerald-950/20',
      icon: Handshake,
      desc: 'Corporate, Commercial & Mediation'
    },
  ];


  return (
    <nav className="sticky top-0 z-50 bg-navy-900 text-white border-b border-gold-800/40 shadow-xl" id="main-has-id-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand left side */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
            id="nav-logo-container"
          >
            <div className="p-2 bg-gradient-to-br from-gold-600 to-gold-800 rounded border border-gold-500/50 shadow-md">
              <Scale className="h-6 w-6 text-navy-900" />
            </div>
            <div>
              <span className="block font-serif text-lg tracking-wider text-gold-200 group-hover:text-gold-100 transition-colors">
                {siteContent.brand.shortName}
              </span>
              <span className="block font-mono text-[10px] tracking-widest text-gold-500/90 -mt-1 uppercase">
                {siteContent.brand.title}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6" id="desktop-menu-links">
            <button 
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${activeView === 'home' ? 'text-gold-500' : 'text-gray-200 hover:text-gold-200'}`}
            >
              Home
            </button>
            
            <button 
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${activeView === 'about' ? 'text-gold-500' : 'text-gray-200 hover:text-gold-200'}`}
            >
              About Us
            </button>

            {/* Custom Law Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button 
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  ['civil', 'criminal', 'corporate-adr'].includes(activeView) 
                    ? 'text-gold-500' 
                    : 'text-gray-200 hover:text-gold-200'
                }`}
              >
                <span>Law Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-72 bg-navy-950 border border-gold-800/60 rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2 z-50 overflow-hidden"
                  >
                    {serviceItems.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = activeView === item.view;
                      return (
                        <button
                          key={item.view}
                          onClick={() => handleNavClick(item.view)}
                          className={`w-full text-left px-4 py-3 flex items-start space-x-3 transition-all duration-300 border-l-4 border-transparent ${
                            isActive ? item.activeClass : `text-gray-200 hover:text-white ${item.colorClass}`
                          }`}
                        >
                          <div className={`p-1.5 rounded bg-navy-900 border border-slate-800/50 flex-shrink-0 transition-colors`}>
                            <IconComponent className={`h-4.5 w-4.5 ${isActive ? 'scale-110' : ''}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-xs font-bold tracking-wider uppercase font-sans">
                              {item.label}
                            </span>
                            <span className="block text-[10px] text-slate-400 font-mono tracking-wide mt-0.5 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                              {item.desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${activeView === 'contact' ? 'text-gold-500' : 'text-gray-200 hover:text-gold-200'}`}
            >
              Contact Us
            </button>
          </div>

          {/* Right Side: Bold Call to Action & Number */}
          <div className="hidden lg:flex items-center space-x-6" id="nav-right-cta">
            {/* Phone Number - Bold */}
            <a 
              href={siteContent.contact.phoneLinks[0]}
              className="flex items-center space-x-2 text-gold-200 hover:text-gold-100 transition-colors group"
            >
              <div className="p-1.5 bg-navy-800 rounded-full group-hover:bg-gold-800/20 transition-colors">
                <Phone className="h-4 w-4 text-gold-500" />
              </div>
              <div className="text-right">
                <span className="block text-[10px] uppercase font-mono tracking-widest text-gold-500/80">Direct Line (Urgent)</span>
                <span className="block text-sm font-bold font-mono text-gold-200 tracking-wider">
                  {siteContent.contact.phoneNumbers[0]}
                </span>
              </div>
            </a>

            {/* Book Consultation Button */}
            <button 
              onClick={onOpenConsultation}
              className="flex items-center space-x-2 bg-gradient-to-br from-gold-600 to-gold-700 hover:from-gold-500 hover:to-gold-600 active:scale-95 text-navy-950 font-serif font-extrabold text-xs tracking-widest uppercase px-5 py-3 rounded border border-gold-500/30 transition-all cursor-pointer glow-btn-gold"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button - Elegant minimalistic lines */}
          <div className="flex lg:hidden items-center space-x-3">
            <a 
              href={siteContent.contact.phoneLinks[0]} 
              className="p-2.5 bg-navy-800 text-gold-200 hover:text-gold-100 rounded border border-gold-800/40"
              title="Call Advocate"
            >
              <Phone className="h-4.5 w-4.5" />
            </a>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2.5 rounded text-gray-200 hover:text-white hover:bg-navy-800 transition-colors border border-navy-800/60"
              aria-label="Open Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Modern Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0F172A] text-white z-[100] flex flex-col justify-between overflow-y-auto lg:hidden"
            id="mobile-nav-fullscreen"
          >
            {/* Drawer Top Header Strip */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-[#0B1221]">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-gold-600 to-gold-700 rounded border border-gold-500/40">
                  <Scale className="h-5 w-5 text-[#0F172A]" />
                </div>
                <div>
                  <span className="block font-serif text-base tracking-wide text-gold-200">
                    {siteContent.brand.mobileTitle}
                  </span>
                  <span className="block font-mono text-[9px] tracking-widest text-[#B45309] -mt-1 uppercase">
                    Senior Advocate
                  </span>
                </div>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded bg-slate-800 text-gold-200 border border-slate-700 hover:bg-slate-700 transition-all"
                aria-label="Close Menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Menu List Body */}
            <div className="flex-1 px-6 py-8 space-y-6">
              
              {/* Home */}
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left font-serif text-2xl tracking-wide pb-3 border-b border-slate-800 flex justify-between items-center transition-colors ${
                  activeView === 'home' ? 'text-gold-500 font-semibold' : 'text-slate-200'
                }`}
              >
                <span>Home</span>
                <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase">01</span>
              </button>

              {/* About */}
              <button
                onClick={() => handleNavClick('about')}
                className={`w-full text-left font-serif text-2xl tracking-wide pb-3 border-b border-slate-800 flex justify-between items-center transition-colors ${
                  activeView === 'about' ? 'text-gold-500 font-semibold' : 'text-slate-200'
                }`}
              >
                <span>About Us</span>
                <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase">02</span>
              </button>

              {/* Accordion List for Law Services */}
              <div className="border-b border-slate-800 pb-3">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-left font-serif text-2xl tracking-wide flex justify-between items-center text-slate-200 transition-colors"
                >
                  <span className={['civil', 'criminal', 'corporate-adr'].includes(activeView) ? 'text-gold-500 font-semibold' : ''}>
                    Practice Areas
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase">03</span>
                    {isMobileServicesOpen ? (
                      <ChevronUp className="h-5 w-5 text-gold-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Sub Menu Links */}
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-3 pl-4 space-y-3 overflow-hidden border-l border-gold-800/40"
                    >
                      {serviceItems.map((item) => {
                        const IconComponent = item.icon;
                        const isActive = activeView === item.view;
                        return (
                          <button
                            key={item.view}
                            onClick={() => handleNavClick(item.view)}
                            className={`w-full text-left py-2 px-3 rounded text-sm font-sans tracking-wide transition-all duration-200 flex items-center space-x-3 ${
                              isActive 
                                ? 'text-white bg-slate-800/80 font-medium' 
                                : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                            }`}
                          >
                            <IconComponent className={`h-4 w-4 ${isActive ? 'text-gold-500' : 'text-slate-500'}`} />
                            <span>{item.label}</span>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Office */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full text-left font-serif text-2xl tracking-wide pb-3 border-b border-slate-800 flex justify-between items-center transition-colors ${
                  activeView === 'contact' ? 'text-gold-500 font-semibold' : 'text-slate-200'
                }`}
              >
                <span>Contact Officer</span>
                <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase">04</span>
              </button>

            </div>

            {/* Quick Connect & Action Footer inside Mobile Menu */}
            <div className="p-6 bg-[#0B1221] border-t border-slate-800 space-y-5">
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={siteContent.contact.phoneLinks[0]}
                  className="bg-slate-800/80 border border-slate-700/60 p-3 rounded text-center block"
                >
                  <span className="block text-[9px] uppercase font-mono tracking-widest text-gold-500">Legal Cell</span>
                  <span className="block text-xs font-bold font-mono tracking-tight text-white mt-0.5">
                    {siteContent.contact.phoneNumbers[0]}
                  </span>
                </a>

                <a 
                  href={siteContent.contact.phoneLinks[1]}
                  className="bg-slate-800/80 border border-slate-700/60 p-3 rounded text-center block"
                >
                  <span className="block text-[9px] uppercase font-mono tracking-widest text-gold-500">Chambers</span>
                  <span className="block text-xs font-bold font-mono tracking-tight text-white mt-0.5">
                    {siteContent.contact.phoneNumbers[1]}
                  </span>
                </a>
              </div>

              <div className="text-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                  Chennai • Mylapore Chambers
                </span>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-white font-sans font-medium text-sm tracking-wide py-4 shadow-xl border border-amber-600"
              >
                <Calendar className="h-4.5 w-4.5 text-gold-200" />
                <span>Schedule a Consultation</span>
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}