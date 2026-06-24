import React from 'react';
import { Award, BookOpen, Scale, CheckSquare, HeartHandshake, Shield, Building, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

// Correct path based on your folder tree
import advocatePortrait from '../assets/images/WhatsApp Image 2026-06-22 at 5.11.45 PM.jpeg'; 

export default function AboutUs() {
  const philosophies = [
    {
      title: "Preparation over performance",
      text: "Every matter, however routine it may appear, receives the same standard of thorough factual and legal preparation. Success is built on solid research and structural brief assembly."
    },
    {
      title: "Honest counsel",
      text: "Clients receive realistic assessments of their position, not false reassurance designed to retain their business. Integrity is prioritised over client retention."
    },
    {
      title: "Respect for the system",
      text: "The adversarial process exists to produce just outcomes, and that process deserves to be engaged with absolute integrity, even when representing a client's zealous interests."
    }
  ];

  const forums = [
    {
      court: "The High Court of Madras",
      details: "Appearing regularly in both original and appellate jurisdiction, handling civil and criminal writ petitions, revisions, and complex appeals.",
      relevance: "Master-level procedural appellate command."
    },
    {
      court: "Sessions & District Courts",
      details: "Defending and conducting complex criminal trials of significant gravity requiring exhaustive cross-examination of evidence and strategic case management.",
      relevance: "Calibrated trial court expertise."
    },
    {
      court: "District & City Civil Courts",
      details: "Representing clients in complex property disputes, partition suits, recovery proceedings, and specialized civil execution cases.",
      relevance: "Versatile civil litigation mastery."
    },
    {
      court: "Special Courts & Magistrate Forums",
      details: "Handling statutory criminal matters, investigation procedures, bail applications, and Negotiable Instruments Act (Cheque Bounce) proceedings.",
      relevance: "Fast-paced statutory trials."
    },
    {
      court: "Arbitral Tribunals",
      details: "Serving both as representing counsel for entities and as an appointed sole Arbitrator for Qube Cinema Technologies Pvt Ltd.",
      relevance: "Proven adjudicative neutrality."
    }
  ];

  const corporateClients = [
    "Amrutanjan Health Care Ltd.",
    "India Agro Exports",
    "Deco De Treno",
    "P.S. Exports and Consolidates Pvt Ltd.",
    "P.S. Weavers Pvt Ltd.",
    "P.S. Apparels"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24" id="about-us-view">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto" id="page-header">
        <div className="text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">The Journey in Advocacy</div>
        <h1 className="text-3xl sm:text-5xl font-serif text-slate-900 font-medium tracking-tight">
          About the Advocate — A Professional Profile
        </h1>
        <div className="h-0.5 w-24 bg-amber-500 mx-auto mt-4"></div>
        <p className="text-base text-slate-600 mt-2">
          An impressive track record of over 25 years in active legal practice, combining robust trial advocacy with trusted corporate advisory services in Chennai.
        </p>
      </div>

      {/* 1. Executive Bio & Portrait Block */}
      <section className="bg-white border border-slate-200/80 shadow-xl rounded-xl overflow-hidden" id="journey-section">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Block: Image Profile */}
          <div className="lg:col-span-5 bg-slate-950 relative min-h-[450px] lg:min-h-full flex flex-col justify-between p-8 sm:p-10">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Image Frame Container */}
            <div className="relative z-10 w-full flex justify-center items-center flex-grow mb-6">
              <div className="relative p-1 bg-gradient-to-b from-amber-400 to-amber-600 rounded-lg shadow-2xl max-w-xs w-full overflow-hidden aspect-[4/5]">
                <img 
                  src={advocatePortrait} 
                  alt="Advocate K. Thangarasu" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>

            {/* Quick Context Profile Data */}
            <div className="relative z-10 bg-slate-900/90 border border-amber-500/20 rounded-lg p-5 space-y-3 font-sans">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                {/* Made the name under the image significantly bigger here */}
                <h3 className="font-serif text-2xl sm:text-3xl text-amber-200 font-bold tracking-wide">
                  K. Thangarasu
                </h3>
                <span className="self-start sm:self-auto text-[10px] font-mono bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">
                  Advocate
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">Enrolled: 14th February 2001</p>
              <div className="h-px bg-slate-800 my-2"></div>
              <div className="space-y-1.5 text-xs text-slate-300">
                <p className="text-amber-400/90 font-medium">Formative Associations:</p>
                <p className="pl-2 border-l border-amber-500/30">• Late N.T. Vanamamalai, Senior Counsel (Junior to)</p>
                <p className="pl-2 border-l border-amber-500/30">• S. Ashok Kumar, Senior Counsel</p>
                <p className="pl-2 border-l border-amber-500/30">• A. Sasidharan, Advocate</p>
              </div>
            </div>
          </div>

          {/* Right Block: Narrative Bio */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase text-amber-600 font-bold tracking-wider">
              <Shield className="h-4 w-4" />
              <span>Professional Legal Experience</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              A Quarter-Century of Legal Rigor & Judicial Temperament
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
              Enrolled before the Bar in <strong>2001</strong>, Advocate K. Thangarasu has built a distinguished reputation in Chennai over more than twenty-five years of continuous practice[cite: 6, 26]. His foundational years were shaped under legendary legal heavyweights, absorbing an uncompromised standard of meticulous case preparation, procedural mastery, and ethical trial discipline[cite: 6, 18]. Since <strong>January 2005</strong>, he has led an established independent legal practice specializing comprehensively across civil and criminal jurisdictions[cite: 10, 11, 14].
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
              His extensive courtroom background encompasses handling high-profile, sensitive litigation requiring detailed case management, strategic cross-examinations, and a robust command of appellate advocacy[cite: 15, 18]. Far from limited to single frameworks, his versatile practice smoothly navigates complex property execution cases, statutory trial prosecutions, and sophisticated corporate dynamics[cite: 14, 16, 17, 31].
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <Scale className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-slate-900">Dual Domain Mastery</p>
                  <p className="text-slate-500">Expertise in Civil & Criminal law matrix[cite: 14].</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <Briefcase className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-slate-900">Appellate Advocacy</p>
                  <p className="text-slate-500">Regular appearances before the High Court[cite: 14, 15].</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Corporate Law & Compliance Panel */}
      <section className="bg-slate-950 text-white p-8 sm:p-12 rounded-xl border border-slate-800 shadow-xl relative overflow-hidden" id="corporate-advisory-section">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-amber-500/5 z-0"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase text-amber-400 font-bold tracking-wider">
              <Building className="h-4 w-4" />
              <span>Corporate Legal Experience [cite: 31]</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-amber-100 tracking-tight">
              Corporate Advisory & Statutory Compliance
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Beyond individual litigation, the chambers provide ongoing transactional support, strategic negotiation, documentation vetting, and legal scrutinizing for multi-sector enterprises[cite: 31, 41]. The scope covers managing workmen's compensation systems, statutory labor compliance, risk mitigations, employee recovery proceedings, and high-stake commercial property settlement drafts[cite: 40, 41].
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-850 p-6 rounded-lg">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold mb-3">Trusted Corporate Counsel To:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-300 font-sans">
              {corporateClients.map((client, idx) => (
                <div key={idx} className="flex items-center space-x-2 py-1 border-b border-slate-800/60">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Philosophy Panels */}
      <section className="space-y-10" id="philosophy-section">
        <div className="text-center space-y-2">
          <BookOpen className="h-6 w-6 text-amber-600 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-semibold tracking-tight">Our Core Legal Philosophy</h2>
          <div className="h-0.5 w-20 bg-amber-500 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((philosophy, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300" id={`philosophy-card-${idx}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-amber-500/10 text-amber-700 font-serif font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900">
                  {philosophy.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {philosophy.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Court Experience Timeline */}
      <section className="bg-white p-8 sm:p-12 border border-slate-200/80 shadow-xl rounded-xl space-y-8" id="experience-section">
        <div className="text-left space-y-2 border-b border-slate-100 pb-4">
          <Scale className="h-6 w-6 text-amber-600" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">Sustained Multi-Forum Representational Architecture</h2>
          <p className="text-xs text-slate-500 font-sans">A timeline profile of regular pleadings and trial arguments across South India's premier judicial channels[cite: 14].</p>
        </div>

        <div className="space-y-4">
          {forums.map((forum, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 rounded-lg hover:bg-slate-50/80 transition-all duration-200 border border-slate-100 pl-6 relative overflow-hidden" id={`forum-item-${idx}`}>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
              <div className="md:col-span-4 flex items-center">
                <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900">{forum.court}</h4>
              </div>
              <div className="md:col-span-5 flex items-center">
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">{forum.details}</p>
              </div>
              <div className="md:col-span-3 bg-slate-50 border border-slate-200 p-3 rounded-md flex items-center justify-center text-center">
                <p className="text-[10px] sm:text-xs font-mono text-slate-700 font-medium tracking-wide">
                  {forum.relevance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Public Service & Prosecutor Vision */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10" id="public-service-section">
        
        <div className="bg-slate-950 text-white p-8 sm:p-10 rounded-xl border border-slate-800 space-y-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-amber-500/5 z-0"></div>
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold">
              <HeartHandshake className="h-4 w-4" />
              <span>Public Trust Orientation</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-amber-100 tracking-tight">Public Service Commitment</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              More than two decades in intense courtroom legal practice establishes an understanding that the law functions essentially as a public trust[cite: 6, 43]. Beyond private corporate or personal client preservation, this chambers approaches litigation with an active responsibility to reinforce systematic justice[cite: 8]. 
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              This balance drives the candidacy for the post of **City Public Prosecutor**—converting decades of analytical litigation strategy, trial management, and calibrated judicial temperament directly toward serving the community interest with transparency[cite: 5, 6, 7].
            </p>
          </div>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200/80 shadow-sm space-y-5">
          <div className="inline-flex items-center space-x-2 text-amber-700 font-mono text-xs uppercase tracking-widest font-semibold">
            <CheckSquare className="h-4 w-4" />
            <span>Core Profile Objective</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Vision for Prosecutorial Justice</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            The core vision animating this practice is straightforward: criminal justice must remain unyielding in pursuing legitimate state interests while staying scrupulously fair to the procedural rights of individuals[cite: 8, 15]. The prosecutorial function must never become purely mechanical or indifferent to factual context[cite: 18].
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            A seasoned advocate possessing decades of experience across both defense and prosecution operations brings an invaluable, structural equilibrium—ensuring public trust is continually upheld through robust integrity and meticulous legal execution[cite: 6, 7, 18].
          </p>
        </div>

      </section>

    </div>
  );
}