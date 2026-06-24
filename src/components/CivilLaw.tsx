import React, { useState } from 'react';
import { Scale, CheckCircle, ChevronDown, ChevronUp, FileText, Landmark, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function CivilLaw() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subServices = [
    {
      title: "Civil Litigation",
      text: "Civil disputes often involve significant personal, commercial, or financial consequences. Successful civil litigation requires a clear understanding of the facts, applicable legal principles, documentary evidence, and procedural strategy. This practice handles a broad range of civil matters before District Courts, Subordinate Courts, Special Tribunals, and the High Court of Madras, ensuring that clients receive effective legal representation from the initiation of proceedings through final adjudication.",
      bullets: ["Property disputes", "Recovery suits", "Injunction proceedings", "Contract disputes", "Commercial disputes", "Declaration suits", "Specific performance matters", "Partition suits", "Family property disputes", "Consumer-related civil claims"]
    },
    {
      title: "Property Law & Real Estate Disputes",
      text: "Property disputes represent some of the most complex and emotionally significant civil matters. Whether involving ownership rights, title disputes, partition claims, encroachments, possession issues, or inheritance claims, timely legal intervention is essential. This practice provides legal assistance in title verification, partition, and land ownership disputes.",
      bullets: ["Property title verification", "Partition and family settlement disputes", "Recovery of possession", "Injunction against illegal occupation", "Boundary disputes", "Land ownership conflicts", "Real estate litigation", "Property transaction legal scrutiny"]
    },
    {
      title: "Contract & Commercial Disputes",
      text: "Business relationships depend upon enforceable contractual obligations. When contractual commitments are breached, prompt legal action is often necessary to protect commercial interests. The objective is always to secure viable commercial outcomes.",
      bullets: ["Contract enforcement", "Breach of contract claims", "Recovery proceedings", "Business partnership disputes", "Commercial agreements", "Vendor disputes", "Service agreement disputes", "Employment contract matters", "Settlement negotiations"]
    },
    {
      title: "Injunction Proceedings",
      text: "Many civil disputes require urgent judicial intervention to prevent irreparable harm. Injunctions are often critical in protecting property, business interests, contractual rights, and personal rights pending final resolution of a dispute. Effective injunction advocacy requires immediate action and careful presentation of legal and factual grounds before the court.",
      bullets: ["Temporary Injunctions", "Permanent Injunctions", "Status Quo Orders", "Stay Applications", "Property Protection Orders", "Business Protection Orders"]
    },
    {
      title: "Recovery Proceedings",
      text: "Financial recovery matters often involve unpaid debts, contractual defaults, commercial liabilities, and monetary claims. This practice represents individuals and businesses seeking recovery through lawful legal mechanisms.",
      bullets: ["Money recovery suits", "Commercial recovery proceedings", "Contractual recovery claims", "Employee recovery proceedings", "Business debt recovery", "Execution of decrees"]
    },
    {
      title: "Civil Appeals & Appellate Advocacy",
      text: "Not all disputes conclude at the trial stage. Where a judgment, decree, or order is legally unsustainable or requires reconsideration, appellate remedies provide an important avenue for judicial review. Appellate advocacy demands careful examination of the trial record, identification of legal errors, and persuasive presentation before higher judicial forums.",
      bullets: ["Civil Appeals", "First Appeals", "Second Appeals", "Revision Petitions", "Writ Proceedings", "Review Applications"]
    }
  ];

  const summaryData = [
    { service: "Civil Litigation", covers: "Property, contractual and commercial disputes", forum: "Civil Courts" },
    { service: "Property Disputes", covers: "Ownership, title, possession and partition matters", forum: "District Courts, High Court" },
    { service: "Contract Disputes", covers: "Breach of contract and commercial disagreements", forum: "Civil Courts, Arbitration" },
    { service: "Injunction Proceedings", covers: "Urgent protection of rights and property", forum: "Civil Courts" },
    { service: "Recovery Proceedings", covers: "Debt recovery and monetary claims", forum: "Civil Courts" },
    { service: "Civil Appeals", covers: "Challenging judgments and decrees", forum: "High Court, Appellate Courts" },
    { service: "Arbitration", covers: "Alternative dispute resolution", forum: "Arbitration Tribunals" },
    { service: "Corporate Advisory", covers: "Legal support for businesses", forum: "Advisory & Litigation Forums" }
  ];

  const faqs = [
    {
      question: "What should I do if someone illegally occupies my property?",
      answer: "Immediate legal advice is recommended. Depending on the circumstances, injunction proceedings, possession recovery actions, or title litigation may be necessary to protect your rights."
    },
    {
      question: "Can a civil dispute be settled without going to court?",
      answer: "Yes. Many disputes can be resolved through negotiation, mediation, or arbitration, depending on the nature of the dispute and the willingness of parties to engage in settlement discussions."
    },
    {
      question: "How long does a civil case take?",
      answer: "The timeline depends on the complexity of the matter, court schedules, evidence, and procedural requirements. Some matters may conclude within months, while others require longer litigation."
    },
    {
      question: "What is an injunction?",
      answer: "An injunction is a court order preventing a party from performing a specific act or directing them to maintain a particular status until the dispute is resolved."
    },
    {
      question: "Can I appeal a civil court judgment?",
      answer: "Yes. Depending on the nature of the judgment and applicable law, appeals, revisions, or writ remedies may be available before higher judicial forums."
    },
    {
      question: "Does this practice handle property partition disputes?",
      answer: "Yes. The practice has extensive experience in family property disputes, partition suits, inheritance claims, and title-related litigation."
    },
    {
      question: "Can businesses seek legal assistance for contract disputes?",
      answer: "Absolutely. Commercial agreements, vendor disputes, partnership conflicts, and contractual enforcement matters are regularly handled as part of corporate legal advisory and litigation services."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20" id="civil-law-view">
      
      {/* View Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto" id="civil-title-header">
        <div className="text-xs font-mono uppercase tracking-widest text-gold-600 font-bold">Comprehensive Civil Counsel</div>
        <h1 className="text-3xl sm:text-4xl font-serif text-navy-900 font-semibold tracking-tight">
          Civil Law Services — Litigation, Property Rights & Dispute Resolution
        </h1>
        <div className="h-0.5 w-24 bg-gold-500 mx-auto"></div>
        <p className="text-xs sm:text-sm text-gray-600 leading-normal">
          Civil law is fundamentally about protecting rights, enforcing obligations, resolving disputes, and preserving legal certainty. Whether the issue concerns property ownership, contractual obligations, inheritance, injunctions, or commercial disputes, effective civil representation requires deep procedural mastery.
        </p>
      </div>

      {/* Intro Background */}
      <section className="bg-white p-8 rounded border border-gold-200/60 shadow-sm leading-relaxed text-sm sm:text-base text-gray-700" id="civil-intro">
        <p>
          With over twenty-five years of continuous legal practice in Chennai, representing individuals, families, businesses, institutions, and corporate entities before various courts and tribunals, this practice provides comprehensive civil law representation focused on protecting client interests and securing practical legal outcomes.
        </p>
      </section>

      {/* Grid of Civil Subservices */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8" id="civil-detailed-services-grid">
        {subServices.map((service, idx) => (
          <div key={idx} className="bg-white p-8 rounded border border-gold-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between" id={`civil-subservice-${idx}`}>
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-navy-900 border-b border-gold-100 pb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">{service.text}</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gold-50">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-gold-500 font-semibold mb-2">Scope of Services:</span>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                {service.bullets.map((bullet, bulletIdx) => (
                  <span key={bulletIdx} className="text-xs text-navy-950 flex items-center space-x-1.5 font-sans">
                    <span className="h-1 w-1 bg-gold-600 rounded-full flex-shrink-0"></span>
                    <span className="truncate">{bullet}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose This Practice Section */}
      <section className="bg-navy-900 text-white p-8 sm:p-12 rounded border border-gold-800/40" id="civil-why-us">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="font-serif text-xl sm:text-2xl text-gold-200 font-semibold border-b border-gold-800 pb-4 flex items-center space-x-2">
            <ShieldCheck className="h-6 w-6 text-gold-500" />
            <span>Why Clients Choose This Practice for Civil Matters</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-wider">25+ Years of Courtroom Experience</h4>
              <p className="text-xs text-gray-300 mt-1 pl-2 leading-relaxed">
                Extensive representational experience before the High Court of Madras, civil district courts, subordinate sessions tribunals, city civil courts, and mediation panels.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-wider">Strategic Legal Solutions</h4>
              <p className="text-xs text-gray-300 mt-1 pl-2 leading-relaxed">
                Every dispute is evaluated meticulously based on concrete facts, applicable statutory revisions, risk profiles, and business or reputation implications.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-wider">Client-Centered Practice</h4>
              <p className="text-xs text-gray-300 mt-1 pl-2 leading-relaxed">
                Receive plain-English guidance and transparent strategies without technical jargon. We prioritize your ultimate long-term legal certainty.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-wider">Diverse Civil Track-Record</h4>
              <p className="text-xs text-gray-300 mt-1 pl-2 leading-relaxed">
                Demonstrated success in property partition, contractual violations, specialized recovery actions, commercial injunction motions, and corporate audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="space-y-6" id="civil-summary-table-section">
        <div className="text-left border-b border-gold-200 pb-3 flex items-center space-x-2">
          <Landmark className="h-5 w-5 text-gold-600" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900">Civil Services & Forums Matrix</h2>
        </div>

        <div className="overflow-hidden bg-white shadow rounded border border-gold-200/50" id="civil-table-wrapper">
          <table className="min-w-full text-left font-sans text-sm">
            <thead className="bg-navy-900 text-white font-serif">
              <tr>
                <th className="py-4 px-6 text-xs sm:text-sm text-gold-200">Service Category</th>
                <th className="py-4 px-6 text-xs sm:text-sm text-gold-200">What It Covers</th>
                <th className="py-4 px-6 text-xs sm:text-sm text-gold-200">Typical Chennai Forum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-100">
              {summaryData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gold-50/20 transition-colors">
                  <td className="py-4 px-6 font-serif font-bold text-navy-900 text-center md:text-left">{row.service}</td>
                  <td className="py-4 px-6 text-gray-700 leading-relaxed">{row.covers}</td>
                  <td className="py-4 px-6 font-mono text-xs text-navy-800 font-semibold">{row.forum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto space-y-8" id="civil-faqs">
        <div className="text-center space-y-2">
          <HelpCircle className="h-6 w-6 text-gold-600 mx-auto" />
          <h2 className="text-2xl font-serif text-navy-900 font-bold tracking-tight">Civil Services FAQ Registry</h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto"></div>
        </div>

        <div className="space-y-4" id="civil-faq-accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-white border rounded border-gold-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-serif text-sm sm:text-base font-semibold text-navy-900 hover:text-gold-700 transition-colors focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-gold-600 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-gold-400 flex-shrink-0" />}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-gold-50 bg-gold-50/10">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">{faq.answer}</p>
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
