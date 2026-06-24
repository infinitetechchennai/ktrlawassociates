import React from 'react';
import { Briefcase, Gavel, Award, Users, BookOpen, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function CorporateADR() {
  const eliteClients = [
    {
      company: "Qube Cinema Technologies",
      role: "Arbitrator (Alternative Dispute Resolution)",
      desc: "Successfully resolved complex disputes as an arbitrator with a fair, balanced, and commercially aware statutory approach."
    },
    {
      company: "Amrutanjan Health Care Ltd.",
      role: "Corporate Legal Consultant",
      desc: "Supported compliance requirements, litigation strategies, property disputes, and drafting structural agreements."
    },
    {
      company: "India Agro Exports",
      role: "Strategic Legal Advisor",
      desc: "Conducted international contract drafting, and structured negotiations on workmen's compensation and recovery proceedings."
    },
    {
      company: "Deco De Treno",
      role: "Legal Counsel & Auditor",
      desc: "Provided comprehensive risk appraisal, statutory compliance auditing, and contract drafting for design ventures."
    }
  ];

  const mentors = [
    {
      role: "Junior Associate of",
      name: "Late N.T. Vanamamalai",
      title: "Senior Advocate",
      desc: "Legacy of legal accuracy, constitutional mastery, and uncompromised ethics at Chennai bar."
    },
    {
      role: "Co-Associated with",
      name: "S. Ashok Kumar",
      title: "Senior Counsel",
      desc: "High Court original & appellate defense tactics and strategic evidence scrutiny."
    },
    {
      role: "Associated with",
      name: "A. Sasidharan",
      title: "Advocate",
      desc: "Complex civil title structures and statutory corporate compliance management."
    }
  ];

  const otherServedEst = [
    "P.S. Exports and Consolidates Pvt Ltd",
    "P.S. Weavers Pvt Ltd",
    "P.S. Apparels"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20" id="corporate-adr-view">
      
      {/* View Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto" id="corp-title-header">
        <div className="text-xs font-mono uppercase tracking-widest text-gold-600 font-bold font-semibold">Corporate & ADR Retainers</div>
        <h1 className="text-3xl sm:text-4xl font-serif text-navy-900 font-semibold tracking-tight">
          Alternate Dispute Resolution (ADR) & Corporate Counsel
        </h1>
        <div className="h-0.5 w-24 bg-gold-500 mx-auto"></div>
        <p className="text-xs sm:text-sm text-gray-600 leading-normal">
          Structuring secure corporate strategies, mediating highly technical disputes, and providing premium boardroom counsel to multi-national concerns.
        </p>
      </div>

      {/* Narrative Section */}
      <section className="bg-white p-8 sm:p-10 rounded border border-gold-200/50 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center" id="corp-executive-track">
        <div className="md:col-span-8 space-y-4">
          <h2 className="font-serif text-lg sm:text-xl font-bold text-navy-950 flex items-center space-x-2">
            <ShieldCheck className="h-5 w-5 text-gold-600" />
            <span>Trusted Counsel with Executive Track Record</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
            With a robust background as a former Arbitrator and senior litigator, Advocate Thangarasu is uniquely positioned to handle high-value corporate disputes, statutory negotiations, and deep contractual audits. By integrating litigation credentials with commercial strategy, his office protects organizations from liability before escalation.
          </p>
        </div>
        
        <div className="md:col-span-4 bg-gold-100/40 p-5 rounded border border-gold-250 flex items-center justify-center">
          <div className="text-center font-serif text-sm font-semibold text-gold-800">
            BOARDROOM COMPLIANCE • WRITTEN BRIEFS • ARBITRAL HEARINGS
          </div>
        </div>
      </section>

      {/* Grid of clients */}
      <section className="space-y-6" id="corp-detailed-clientele">
        <div className="text-left border-b border-gold-200 pb-2">
          <h3 className="font-serif text-base sm:text-lg font-bold text-navy-900 uppercase">Core Advisory Key Portfolio</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eliteClients.map((client, idx) => (
            <div key={idx} className="bg-white p-8 rounded border border-gold-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between" id={`corp-client-${idx}`}>
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 bg-navy-50 text-[10px] font-mono uppercase tracking-widest text-navy-800 font-semibold rounded">
                  {client.role}
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-navy-900 mt-2">{client.company}</h4>
                <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">{client.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Elite Mentors & Network */}
      <section className="bg-navy-900 text-white p-8 sm:p-12 rounded border border-gold-800/40 space-y-8" id="corp-network">
        <div className="text-center space-y-2">
          <Users className="h-6 w-6 text-gold-400 mx-auto" />
          <h3 className="font-serif text-xl sm:text-2xl text-gold-200">Elite Professional Networks</h3>
          <div className="h-px w-16 bg-gold-500 mx-auto"></div>
          <p className="text-xs text-gray-300">Advocate K. Thangarasu prides himself in building highly trusted relationships with some of the nation's most senior counsels and institutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, idx) => (
            <div key={idx} className="bg-navy-950 p-6 rounded border border-gold-800/20 space-y-3 flex flex-col justify-between" id={`mentor-card-${idx}`}>
              <div className="space-y-2">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-gold-500 font-semibold">{mentor.role}</span>
                <h4 className="font-serif text-base font-bold text-gold-100">{mentor.name}</h4>
                <p className="text-[10px] font-mono tracking-wide text-gray-400 -mt-1">{mentor.title}</p>
                <p className="text-xs text-gray-300 font-sans leading-relaxed mt-2">{mentor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Served Establishments */}
      <section className="bg-white p-8 rounded border border-gold-200/50 shadow-sm" id="corp-other-establishments">
        <div className="text-center mb-6">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-600 font-bold border-b border-gold-200 pb-2">
            Other Served Establishments & Sister Operations
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {otherServedEst.map((est, idx) => (
            <div key={idx} className="px-5 py-3.5 bg-gold-50/30 rounded border border-gold-100 font-serif text-xs sm:text-sm font-semibold text-navy-800" id={`other-est-${idx}`}>
              {est}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
