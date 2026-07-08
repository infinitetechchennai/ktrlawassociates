import React, { useEffect, useState } from 'react';
import { ActiveView } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import CivilLaw from './components/CivilLaw';
import CriminalLaw from './components/CriminalLaw';
// Temporarily hidden
// import Prosecutor from './components/Prosecutor';
import CorporateADR from './components/CorporateADR';
import AreasServed from './components/AreasServed';
import AdvocateProfile from './components/AdvocateProfile';
import ContactUs from './components/ContactUs';
import BookConsultationModal from './components/BookConsultationModal';

import { 
  Scale, MapPin, Phone, Mail, ArrowUp, ShieldCheck 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteContent } from './config/siteContent';

const viewPathMap: Record<ActiveView, string> = {
  home: '/',
  about: '/about',
  civil: '/civil-lawyer-chennai',
  criminal: '/criminal-lawyer-chennai',
  prosecutor: '/prosecutor',
  'corporate-adr': '/corporate-lawyer-chennai',
  'areas-served': '/areas-served',
'advocate-profile': '/advocate-k-thangarasu',
contact: '/contact',
};

const pathViewMap: Record<string, ActiveView> = {
  '/': 'home',
  '/about': 'about',
  '/civil-lawyer-chennai': 'civil',
  '/criminal-lawyer-chennai': 'criminal',
  '/prosecutor': 'prosecutor',
  '/corporate-lawyer-chennai': 'corporate-adr',
  '/areas-served': 'areas-served',
'/advocate-k-thangarasu': 'advocate-profile',
'/contact': 'contact',
};

const pageSeoMap: Record<ActiveView, { title: string; description: string; canonical: string }> = {
  home: {
    title: 'KTR Law Associates | Advocate in West Mambalam, Chennai',
    description:
      'KTR Law Associates is an advocate office in West Mambalam, Chennai, serving T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and nearby Chennai areas.',
    canonical: 'https://ktrlawassociates.in/',
  },
  about: {
    title: 'About KTR Law Associates | Advocate in Chennai',
    description:
      'Learn about KTR Law Associates, an advocate office in Chennai with legal practice across criminal, civil, property, corporate, arbitration and appellate matters.',
    canonical: 'https://ktrlawassociates.in/about',
  },
  civil: {
    title: 'Civil Lawyer in Chennai | KTR Law Associates',
    description:
      'Contact KTR Law Associates for civil litigation, property disputes, partition matters, injunctions, recovery matters and civil court representation in Chennai.',
    canonical: 'https://ktrlawassociates.in/civil-lawyer-chennai',
  },
  criminal: {
    title: 'Criminal Advocate in Chennai | KTR Law Associates',
    description:
      'KTR Law Associates handles criminal litigation, bail matters, trial defence, police station related matters and court representation in Chennai.',
    canonical: 'https://ktrlawassociates.in/criminal-lawyer-chennai',
  },
  prosecutor: {
    title: 'Advocate Profile | KTR Law Associates Chennai',
    description:
      'Advocate profile and legal practice information for KTR Law Associates in Chennai.',
    canonical: 'https://ktrlawassociates.in/prosecutor',
  },
  'corporate-adr': {
    title: 'Corporate Lawyer and Arbitration Lawyer in Chennai | KTR Law Associates',
    description:
      'KTR Law Associates provides corporate legal advisory, arbitration, mediation, contract dispute support and ADR-related legal consultation in Chennai.',
    canonical: 'https://ktrlawassociates.in/corporate-lawyer-chennai',
  },
  'areas-served': {
  title: 'Areas Served | Advocate Near Me in West Mambalam, Chennai',
  description:
    'KTR Law Associates serves clients from West Mambalam, T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and nearby Chennai areas for civil, criminal, property, corporate and arbitration matters.',
  canonical: 'https://ktrlawassociates.in/areas-served',
},
'advocate-profile': {
  title: 'Advocate K. Thangarasu | KTR Law Associates Chennai',
  description:
    'Advocate K. Thangarasu is associated with KTR Law Associates in West Mambalam, Chennai, providing legal consultation in civil, criminal, property, corporate, arbitration, cheque bounce and appellate matters.',
  canonical: 'https://ktrlawassociates.in/advocate-k-thangarasu',
},
contact: {
    title: 'Contact KTR Law Associates | Advocate Near Me in Chennai',
    description:
      'Contact KTR Law Associates for legal consultation near West Mambalam, T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and Chennai.',
    canonical: 'https://ktrlawassociates.in/contact',
  },
};

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const matchedView = pathViewMap[currentPath];

    if (matchedView) {
      setActiveView(matchedView);
    }

    const handlePopState = () => {
      const newPath = window.location.pathname;
      setActiveView(pathViewMap[newPath] || 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    const seo = pageSeoMap[activeView];

    if (!seo) return;

    document.title = seo.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seo.canonical);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', seo.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', seo.canonical);
  }, [activeView]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (view: ActiveView) => {
    setActiveView(view);
    window.history.pushState({}, '', viewPathMap[view] || '/');
    handleScrollToTop();
  };

  const handleNavigateToContact = () => {
    navigateTo('contact');
  };

  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <Home setActiveView={navigateTo} onOpenConsultation={() => setIsConsultationOpen(true)} />;
      case 'about':
        return <AboutUs />;
      case 'civil':
        return <CivilLaw />;
      case 'criminal':
        return <CriminalLaw />;
      case 'prosecutor':
        return <Home setActiveView={navigateTo} onOpenConsultation={() => setIsConsultationOpen(true)} />;
      case 'corporate-adr':
        return <CorporateADR />;
      case 'areas-served':
  return <AreasServed />;
case 'advocate-profile':
  return <AdvocateProfile />;
case 'contact':
  return <ContactUs />;
      default:
        return <Home setActiveView={navigateTo} onOpenConsultation={() => setIsConsultationOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-parchment flex flex-col justify-between relative" id="app-body-container">
      
      <Navbar 
        activeView={activeView} 
        setActiveView={navigateTo} 
        onOpenConsultation={() => {
          navigateTo('contact');
        }} 
      />

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

      <footer className="bg-gradient-to-b from-slate-950 to-neutral-950 text-slate-100 border-t border-amber-500/20 font-sans mt-auto" id="app-gorgeous-footer">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            
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
                KTR Law Associates is an advocate office in West Mambalam, Chennai, providing legal consultation for civil, criminal, property, corporate, arbitration and appellate matters. Serving clients from West Mambalam, T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and nearby Chennai areas.
              </p>
              
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded bg-amber-500/5 border border-amber-500/10 text-[11px] text-amber-400 font-medium tracking-wider font-mono uppercase">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400/80" />
                <span>25+ Years of Reputable Advocacy</span>
              </div>
            </div>

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
      onClick={() => navigateTo('home')} 
      className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none"
    >
      Home Overview
    </button>
  </li>

  <li>
    <button 
      onClick={() => navigateTo('about')} 
      className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none"
    >
      About Journey
    </button>
  </li>

  <li>
    <button 
      onClick={() => navigateTo('advocate-profile')} 
      className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none"
    >
      Advocate K. Thangarasu
    </button>
  </li>

  <li>
    <button 
      onClick={() => navigateTo('areas-served')} 
      className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none"
    >
      Areas Served
    </button>
  </li>

  <li>
    <button 
      onClick={() => navigateTo('contact')} 
      className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none"
    >
      Contact Office
    </button>
  </li>
</ul>
            </div>

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
                    onClick={() => navigateTo('civil')} 
                    className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none text-left"
                  >
                    Civil Lawyer in Chennai & Property Disputes
                  </button>
                </li>

                <li>
                  <button 
                    onClick={() => navigateTo('criminal')} 
                    className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none text-left"
                  >
                    Criminal Advocate in Chennai & Bail Matters
                  </button>
                </li>

                <li>
                  <button 
                    onClick={() => navigateTo('corporate-adr')} 
                    className="hover:text-amber-300 transition-colors duration-200 hover:underline decoration-amber-500/40 underline-offset-4 focus:outline-none text-left"
                  >
                    Corporate Lawyer & Arbitration Lawyer in Chennai
                  </button>
                </li>
              </ul>
            </div>
          </div>

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
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-900/50 transition-colors duration-200 sm:col-span-2 lg:col-span-1">
              <Mail className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs space-y-0.5">
                <p className="text-slate-200 font-medium">Email Correspondence</p>
                <a 
                  href={siteContent.contact.emailHref} 
                  className="text-slate-400 hover:text-amber-400 transition-colors duration-200 block font-mono"
                >
                  {siteContent.contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-8"></div>

          <div className="rounded-lg border border-amber-500/10 bg-slate-900/50 p-5 text-center mb-8">
            <p className="text-xs sm:text-sm text-slate-400 leading-7">
              Local legal consultation in West Mambalam, T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and nearby Chennai areas for clients searching for advocate near me, lawyer near me, civil lawyer near me, criminal advocate near me and law offices near me.
            </p>
          </div>

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

      <BookConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </div>
  );
}