import React, { useState, useRef, useEffect } from 'react';
import { ActiveView } from '../types';
import { 
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Calendar, Phone, Briefcase, HelpCircle, Play
} from 'lucide-react';

// Correct local bundle imports matching your VS Code explorer structure
// @ts-ignore
import heroLaw from '../assets/images/hero-law.jpg';
// @ts-ignore
import advocatePortrait from '../assets/images/WhatsApp Image 2026-06-22 at 5.11.45 PM.jpeg';
// @ts-ignore
import advocateMedia from '../assets/WhatsApp Video 2026-06-23 at 3.20.49 PM.mp4';

interface HomeProps {
  setActiveView: (view: ActiveView) => void;
  onOpenConsultation: () => void;
}

export default function Home({ setActiveView, onOpenConsultation }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoSectionRef = useRef<HTMLDivElement | null>(null);

  const trustIndicators = [
    { value: "25+", label: "Years of Active Practice" },
    { value: "4", label: "Courts of Regular Practice" },
    { value: "6+", label: "Corporate Clients Served" },
    { value: "Trusted", label: "Client Engagements" }
  ];

  const practiceAreas = [
    {
      area: "Criminal Litigation",
      focus: "Defence and prosecution support, bail matters, trial proceedings, evidence examination, investigation matters",
      courts: "Sessions Court, Special Courts, High Court",
      view: 'criminal' as ActiveView
    },
    {
      area: "Civil Litigation",
      focus: "Property disputes, civil suits, injunctions, execution proceedings, recovery matters, contract disputes",
      courts: "District Court, City Civil Court, High Court",
      view: 'civil' as ActiveView
    },
    {
      area: "Appellate Practice",
      focus: "High Court appeals, Sessions Court appeals, civil appeals, criminal appeals, revision petitions",
      courts: "High Court of Madras",
      view: 'about' as ActiveView
    },
    {
      area: "Arbitration & Mediation",
      focus: "Commercial arbitration, contractual dispute resolution, settlement strategy, mediation",
      courts: "Arbitral Tribunals, Commercial Courts",
      view: 'corporate-adr' as ActiveView
    },
    {
      area: "Corporate Legal Advisory",
      focus: "Corporate compliance, employment law, contract drafting, legal audits, dispute resolution",
      courts: "Corporate Boardrooms, Tribunals",
      view: 'corporate-adr' as ActiveView
    },
    {
      area: "Negotiable Instruments Act",
      focus: "Cheque bounce matters, NI Act prosecutions and defence, recovery proceedings",
      courts: "Magistrate Courts, Sessions Court",
      view: 'criminal' as ActiveView
    }
  ];

  const clientCompanies = [
    { name: "Amrutanjan Health Care Ltd.", category: "Health & Wellness" },
    { name: "India Agro Exports", category: "International Exports" },
    { name: "P.S. Exports & Consolidates Pvt Ltd.", category: "Apparel Exports" },
    { name: "P.S. Weavers Pvt Ltd.", category: "Manufacturing & Textile" },
    { name: "P.S. Apparels", category: "Garment Retail" },
    { name: "Deco De Treno", category: "Design Ventures" }
  ];

  const faqs = [
    {
      question: "What areas of law does this practice cover?",
      answer: "The practice covers criminal litigation (both defence and prosecution-side matters), civil litigation, appellate practice, commercial arbitration and mediation, corporate legal advisory, and matters under the Negotiable Instruments Act, including cheque bounce cases."
    },
    {
      question: "Which courts does the advocate practice in?",
      answer: "The practice extends across Magistrate Courts, Sessions Courts, District Courts, Special Courts, and the High Court of Madras, covering both trial and appellate work."
    },
    {
      question: "How can I schedule a consultation?",
      answer: "Consultations can be scheduled by contacting the office directly through the Contact page, by phone, or by submitting an enquiry through the website consultation form."
    },
    {
      question: "Does the practice handle corporate clients?",
      answer: "Yes. The practice maintains ongoing advisory relationships with several corporate clients across manufacturing, export, and apparel sectors, providing compliance guidance, contract review, and dispute resolution support."
    },
    {
      question: "What is the advocate's experience with arbitration?",
      answer: "The advocate has served as Arbitrator for Qube Cinema Technologies Pvt Ltd. and regularly represents parties in commercial arbitration proceedings, bringing both advocate and arbitrator perspective to dispute resolution."
    }
  ];

  // Scroll Detection Logic: Intersection Observer for Video Auto Play/Pause
  useEffect(() => {
    const observerOptions = {
      root: null, // browser viewport
      threshold: 0.4, // Triggers when 40% of the video section is visible
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            // Plays cleanly right from where it was paused
            videoRef.current.play().catch((error) => {
              console.log("Autoplay blocked or interrupted:", error);
            });
          } else {
            // Pauses perfectly when scrolled away to Practice Areas or upward
            videoRef.current.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
    };
  }, []);

  const handlePracticeAreaClick = (view: ActiveView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-20 overflow-hidden" id="homepage-root">
      
      {/* 1. Hero Section With Full Background Image */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroLaw})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/75"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">

            <h1 className="text-5xl md:text-7xl font-serif italic text-[#0F172A] leading-tight">
              Defending Rights.
              <br />
              Delivering Justice.
            </h1>

            <h2 className="mt-8 text-2xl md:text-3xl font-serif text-[#0F172A]">
              25+ Years of Excellence in Criminal,
              <br />
              Civil & Appellate Advocacy
            </h2>

            <p className="mt-8 text-lg text-slate-700 leading-relaxed">
              Providing steadfast legal representation across all major courts in Chennai.
              With a legacy of integrity and rigorous intellectual pursuit, we ensure
              your voice is heard in the halls of justice.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
  onClick={() => setActiveView('contact')}
                className="bg-[#0B1221] hover:bg-slate-900 text-white px-8 py-4 rounded-md transition duration-200"
              >
                Schedule a Consultation
              </button>

              
            </div>

          </div>
        </div>
      </section>

      {/* 2. Premium Legal Credentials Strip */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20" id="trust-indicators">
  <div className="relative overflow-hidden rounded-xl bg-[#07101f] border border-gold-600/30 shadow-2xl">
    
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gold-900/30">
      {trustIndicators.map((stat, idx) => (
        <div
          key={idx}
          className="group relative px-8 py-7 text-center hover:bg-white/[0.03] transition-all duration-300"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-gold-500/80 mb-3">
            0{idx + 1}
          </div>

          <div className="font-serif text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-none">
            {stat.value}
          </div>

          <div className="mt-3 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-300 leading-relaxed">
            {stat.label}
          </div>

          <div className="mx-auto mt-4 h-px w-10 bg-gold-500/40 group-hover:w-16 transition-all duration-300"></div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 3. Interactive Cards: Call to Action list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="quick-actions">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Action 1 */}
          <div 
            onClick={onOpenConsultation}
            className="group bg-white p-8 rounded border border-gold-200 hover:border-gold-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            id="action-card-1"
          >
            <div>
              <div className="h-10 w-10 bg-gold-100 rounded-full flex items-center justify-center text-gold-700 group-hover:bg-gold-600 group-hover:text-white transition-colors">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy-900 mt-6 group-hover:text-gold-700 transition-colors">Schedule a Consultation</h3>
              <p className="text-sm text-gray-600 mt-2">Book a confidential, structured appointment with Advocate K. Thangarasu to analyze your active legal risks.</p>
            </div>
            <div className="flex items-center text-xs font-bold text-navy-800 mt-6 group-hover:text-gold-600 transition-colors">
              <span>BOOK APPOINTMENT</span>
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Action 2 */}
          <div 
            onClick={() => {
              setActiveView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group bg-white p-8 rounded border border-gold-200 hover:border-gold-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            id="action-card-2"
          >
            <div>
              <div className="h-10 w-10 bg-gold-100 rounded-full flex items-center justify-center text-gold-700 group-hover:bg-gold-600 group-hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy-900 mt-6 group-hover:text-gold-700 transition-colors">Contact the Advocate</h3>
              <p className="text-sm text-gray-600 mt-2">Secure a direct telephone line or urgent query channel for immediate case evaluations and courtroom emergencies.</p>
            </div>
            <div className="flex items-center text-xs font-bold text-navy-800 mt-6 group-hover:text-gold-600 transition-colors">
              <span>GET DIRECT LINE</span>
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Action 3 */}
          <div 
            onClick={() => {
              setActiveView('civil');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group bg-white p-8 rounded border border-gold-200 hover:border-gold-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            id="action-card-3"
          >
            <div>
              <div className="h-10 w-10 bg-gold-100 rounded-full flex items-center justify-center text-gold-700 group-hover:bg-gold-600 group-hover:text-white transition-colors">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy-900 mt-6 group-hover:text-gold-700 transition-colors">Learn More About Practice</h3>
              <p className="text-sm text-gray-600 mt-2">Explore strategic legal specializations including criminal trial defence, complex arbitration, and appellate practice.</p>
            </div>
            <div className="flex items-center text-xs font-bold text-navy-800 mt-6 group-hover:text-gold-600 transition-colors">
              <span>EXPLORE SERVICES</span>
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. A Career Built on Integrity Section (Mentorship & Background) */}
      <section className="bg-white py-20 border-y border-gold-200" id="integrity-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Text details */}
            <div className="lg:col-span-7 space-y-6" id="integrity-text">
              <h2 className="text-3xl font-serif text-navy-900 font-semibold tracking-tight">
                A Career Built on Integrity in the Courtroom
              </h2>
              
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                Since enrolling as an advocate in 2001, this practice has been built one case at a time — on the foundation that the law, properly understood and rigorously applied, serves justice rather than merely procedure. Over twenty-five years, that foundation has supported a wide-ranging practice across criminal defence, criminal prosecution support, civil litigation, appellate advocacy, commercial arbitration, and corporate legal advisory.
              </p>
              
              <div className="border-l-4 border-gold-500 pl-4 py-1.5 my-6 bg-gold-500/5">
                <p className="italic text-navy-800 font-sans text-sm sm:text-base">
                  "The practice has developed under the guidance and association of distinguished legal minds, including senior counsel S. Ashok Kumar, advocate A. Sasidharan, and as a junior of the late N.T. Vanamamalai — relationships that shaped a rigorous, ethics-first approach to advocacy that continues to define every matter undertaken today."
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                What distinguishes a career spanning a quarter-century is not simply longevity, but range: equal comfort in a Sessions Court criminal trial, a High Court civil appeal, a complex arbitration proceeding, or a boardroom conversation about corporate compliance. That range is precisely what the office of City Public Prosecutor demands — judicial temperament joined with deep, practical command of criminal law as it is actually practiced in Chennai's courts.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveView('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 text-xs font-bold font-mono tracking-widest text-gold-700 hover:text-gold-800 transition-colors mt-2"
              >
                <span>READ DETAILED CAREER JOURNEY</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Right Col: Advocate Professional Portrait */}
            <div className="lg:col-span-5 relative flex flex-col items-center" id="integrity-visual">
  <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold-500 hidden sm:block"></div>
  <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold-500 hidden sm:block"></div>

  <img
    src={advocatePortrait}
    alt="Advocate K. Thangarasu Portrait"
    className="w-full max-w-md h-auto rounded shadow-lg border border-gold-200 object-cover"
    referrerPolicy="no-referrer"
  />

  {/* Name Below Image */}
  <div className="mt-5 text-center">
    <h3 className="text-2xl font-serif font-semibold text-navy-900">
      K. Thangarasu
    </h3>

    <p className="mt-1 text-sm uppercase tracking-[0.25em] text-gold-700">
      Senior Advocate • Chennai
    </p>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* NEW SECTION: High-Profile Media Commentary & Legal Briefings */}
      <section 
        ref={videoSectionRef}
        className="bg-slate-50 py-16 border-b border-gold-200/60" 
        id="media-briefing-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[11px] font-mono tracking-widest text-gold-600 uppercase font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                Media Commentary & Case Insights
              </div>
              <h2 className="text-3xl font-serif text-navy-900 font-semibold tracking-tight">
                Navigating High-Stakes Public Litigations
              </h2>
              <div className="h-0.5 w-16 bg-gold-500"></div>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                When complex statutory procedures intersect with state enforcement, transparent communication and strict evidentiary verification are paramount. 
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                Watch the press briefing where our office addresses the press on high-profile regulatory investigations, asserting precise documentary accountability and regulatory compliance under intense public scrutiny.
              </p>
              <div className="pt-2">
                <div className="bg-white p-4 rounded border border-gold-100 shadow-sm inline-flex items-start gap-3 max-w-sm">
                  <Play className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-slate-700 italic">
                    "Asserting regulatory compliance through verified documentation during asset verifications and complex state investigations."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Video Player Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="relative w-full max-w-2xl mx-auto bg-navy-950 rounded-lg overflow-hidden shadow-2xl border border-gold-600/30 group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 z-10"></div>
                
                <video
                  ref={videoRef}
                  src={advocateMedia}
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                  className="w-full aspect-video object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <span className="block text-center text-[11px] font-mono uppercase tracking-wider text-gray-500 mt-3">
                Broadcast Source: Thanthi TV News / Case Commentary Briefing
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Practice Areas (Interactive Grid & Beautiful Classic Table) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="practice-areas-section">
        <div className="text-center space-y-4 max-w-xl mx-auto mb-12">
          <div className="text-[11px] font-mono tracking-widest text-gold-600 uppercase font-semibold">Specialized Legal Spectrum</div>
          <h2 className="text-3xl font-serif text-navy-900 font-semibold tracking-tight">Practice Areas & Custom Expertise</h2>
          <div className="h-0.5 w-20 bg-gold-500 mx-auto"></div>
          <p className="text-xs sm:text-sm text-gray-600">Explore the strategic spectrum of representational law and defense services offered by Advocate Thangarasu before major Chennai tribunals.</p>
        </div>

        {/* Desktop View: Full Classic Table of Practice Areas */}
        <div className="hidden md:block overflow-hidden bg-white shadow-md rounded border border-gold-200/60 mb-10" id="practice-table-wrapper">
          <table className="min-w-full text-left font-sans text-sm">
            <thead className="bg-navy-900 text-white font-serif text-sm">
              <tr>
                <th className="py-5 px-6 tracking-wide text-gold-200">Practice Area</th>
                <th className="py-5 px-6 tracking-wide text-gold-200">Core Focus</th>
                <th className="py-5 px-6 tracking-wide text-gold-200">Courts of Appearance</th>
                <th className="py-5 px-6 text-right">Route</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-100">
              {practiceAreas.map((area, idx) => (
                <tr 
                  key={idx} 
                  className="hover:bg-gold-50/40 transition-colors group cursor-pointer"
                  onClick={() => handlePracticeAreaClick(area.view)}
                >
                  <td className="py-4.5 px-6 font-serif font-semibold text-navy-900 group-hover:text-gold-700 transition-colors">
                    {area.area}
                  </td>
                  <td className="py-4.5 px-6 text-gray-700 leading-normal max-w-md">
                    {area.focus}
                  </td>
                  <td className="py-4.5 px-6 font-mono text-xs text-navy-800 font-medium">
                    {area.courts}
                  </td>
                  <td className="py-4.5 px-6 text-right">
                    <span className="inline-flex items-center text-xs font-mono tracking-widest text-gold-700 font-bold group-hover:text-gold-800">
                      VIEW <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Cards */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {practiceAreas.map((area, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded border border-gold-200 shadow-sm"
              onClick={() => handlePracticeAreaClick(area.view)}
            >
              <h3 className="font-serif text-base font-bold text-navy-900">{area.area}</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">{area.focus}</p>
              <div className="mt-4 pt-3 border-t border-gold-100">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-gold-600">Active Forums:</span>
                <span className="block text-xs font-mono text-navy-800 mt-0.5">{area.courts}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      {/* 7. Corporate Legal Services & Clients */}
<section
  className="relative py-20 bg-gradient-to-b from-[#0d1525] via-[#111c31] to-[#17243b] px-4 sm:px-6 lg:px-8"
  id="corporate-services"
>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[10px] uppercase font-mono tracking-widest text-gold-600 font-bold">Trusted Corporate Advisor</div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-semibold tracking-tight">Corporate Legal Advisory</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Beyond individual litigation, the practice has built sustained relationships with corporate clients across manufacturing, exports, apparel, and technology sectors — providing ongoing legal advisory, contract review, compliance guidance, and dispute resolution.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              This corporate dimension of the practice brings a commercial fluency to criminal and civil matters alike — an understanding of how legal disputes intersect with business operations, regulatory exposure, and reputational considerations that purely litigation-focused practices often lack.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveView('corporate-adr');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 text-xs font-bold font-mono tracking-widest text-gold-700 hover:text-gold-800 transition-all mt-1"
            >
              <span>EXPLORE CORPORATE RETAINERS</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Grayscale Client Grid */}
          <div className="lg:col-span-7 bg-white p-8 rounded border border-gold-200/60 shadow-md">
            <div className="text-center border-b border-gold-100 pb-4 mb-6">
              <span className="text-xs uppercase font-mono tracking-widest text-gold-500 font-semibold">
                Served Establishments & Corporate Relationships
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {clientCompanies.map((client, idx) => (
                <div 
                  key={idx} 
                  className="bg-gold-50/20 p-4 rounded border border-gold-100 hover:border-gold-300 transition-colors flex flex-col justify-center text-center group"
                >
                  <span className="block font-serif text-sm font-semibold text-navy-800 group-hover:text-gold-700 transition-colors">
                    {client.name}
                  </span>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mt-1">
                    {client.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Unique Arbitrator Callout */}
            <div className="mt-6 p-4 bg-navy-50 border border-navy-200 rounded flex items-start space-x-3">
              <div className="p-2 bg-navy-800 text-gold-400 rounded mt-0.5">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-serif text-xs font-bold text-navy-900 uppercase tracking-wide">Alternative Dispute Resolution</h4>
                <p className="text-xs text-navy-700 mt-1 leading-relaxed">
                  Serve as officially appointed Arbitrator for <strong>Qube Cinema Technologies Pvt Ltd.</strong>, managing complex commercial, licensing, and statutory conflict resolutions.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. Why Choose This Practice (Brass Checked List) */}
      <section className="bg-gradient-to-r from-[#17243b] to-[#0b1220] text-white py-16 -mt-1" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-10">
            
            <div className="text-center space-y-3">
              <div className="text-[10px] uppercase font-mono tracking-widest text-gold-400 font-semibold">Integrity • Diligence • Command</div>
              <h2 className="text-3xl font-serif text-gold-200 tracking-tight font-semibold">Why Choose This Practice</h2>
              <div className="h-0.5 w-16 bg-gold-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                "Twenty-five years of consistent, ethical legal practice across criminal, civil, appellate, and arbitration matters.",
                "Direct experience across every level of the Tamil Nadu judicial hierarchy — from Magistrate courts to Madras High Court.",
                "A demonstrated record of corporate trust, including ongoing advisory relationships with top established businesses.",
                "Arbitrator-level experience, bringing judicial perspective & structured neutrality to advocacy.",
                "A practice built under the mentorship of senior legal figures, instilling highly-rigorous courtroom discipline.",
                "A public service orientation that aligns directly with the responsibilities of Madras public prosecutor standards."
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 bg-navy-900/60 rounded border border-gold-800/10 hover:border-gold-800/40 transition-colors">
                  <div className="p-1 bg-gold-950/80 rounded border border-gold-700 text-gold-400 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-normal">{bullet}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 9. A Client-Centric Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="client-centric">
        <div className="bg-white p-8 sm:p-12 rounded border border-gold-200/60 shadow-lg relative">
          <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr opacity-20">
            <div className="bg-gold-500 h-2 w-32 rotate-45 translate-x-8 translate-y-2"></div>
          </div>
          
          <div className="max-w-3xl space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-navy-900">
              A Client-Centric Approach to Every Matter
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
              We believe that exceptional legal representation requires not just profound tactical courtroom prowess, but a clear, accessible interface with the client. Every active case receives clear timeline estimates, transparent structural updates, and regular alignment briefings. Whether protecting individual civil liberties or sheltering complex commercial assets, our strategy is unyielding defense unified with total operational transparency.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions (FAQ Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="faq-section">
        <div className="text-center space-y-4 mb-12">
          <div className="text-[11px] font-mono tracking-widest text-gold-600 uppercase font-semibold flex items-center justify-center gap-1.5">
            <HelpCircle className="h-3.5 w-3.5 text-gold-500" />
            Information Desk
          </div>
          <h2 className="text-3xl font-serif text-navy-900 font-semibold tracking-tight">Frequently Asked Questions</h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded border border-gold-200/60 shadow-sm transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif font-semibold text-navy-900 hover:bg-gold-50/30 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-gold-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="border-t border-gold-100 p-5 text-xs sm:text-sm text-gray-700 leading-relaxed bg-slate-50/50 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}