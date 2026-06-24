import React, { useState } from 'react';
import { Scale, ShieldAlert, Heart, Landmark, ChevronDown, ChevronUp, CheckSquare, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function CriminalLaw() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subPractices = [
    {
      title: "Criminal Defence",
      text: "Facing criminal allegations is among the most stressful experiences an individual or business can encounter. Effective criminal defence requires immediate, knowledgeable intervention — assessing the charges, securing the client's rights from the earliest stage of investigation, and building a defence strategy grounded in the specific facts and applicable law. This practice provides defence representation across the full range of criminal allegations, from cheque bounce matters under the Negotiable Instruments Act to serious Sessions Court trials."
    },
    {
      title: "Criminal Prosecution Support",
      text: "In addition to defence work, this practice has experience supporting prosecution matters — understanding the evidentiary and procedural standards that prosecution must satisfy, and the strategic considerations involved in presenting a criminal case before a court. This dual-sided experience provides a uniquely balanced perspective on criminal litigation as a whole."
    },
    {
      title: "Bail Matters",
      text: "Securing bail promptly and effectively is often the single most urgent need in any criminal matter. This practice has extensive experience preparing and arguing bail applications — including anticipatory bail, regular bail, and bail in Special Court matters — understanding the specific factors that courts weigh and presenting the strongest possible case for release pending trial."
    },
    {
      title: "Trial Proceedings",
      text: "Criminal trials require sustained, detailed preparation across multiple hearings — examining prosecution evidence, cross-examining witnesses, presenting defence evidence, and arguing final submissions. Twenty-five years of trial experience in Sessions Courts and Special Courts across Chennai has built deep familiarity with how trials actually proceed, what arguments resonate with the bench, and how to build a coherent, persuasive case across the full arc of a trial."
    },
    {
      title: "Evidence Examination",
      text: "The outcome of most criminal matters turns on the quality of evidence examination — both the careful scrutiny of prosecution evidence for weaknesses and inconsistencies, and the effective presentation of defence evidence. This practice brings rigorous attention to forensic evidence, witness testimony, documentary evidence, and procedural compliance in evidence collection — areas where cases are frequently won or lost."
    },
    {
      title: "Investigation Matters",
      text: "Criminal representation often begins well before formal charges are filed — during the investigation stage, when an individual or business may be questioned, summoned, or subject to search and seizure. Early, informed legal guidance at the investigation stage can materially affect the eventual outcome of a matter. This practice provides counsel from the earliest point of police or regulatory investigation, protecting client rights throughout the process."
    },
    {
      title: "Criminal Appeals",
      text: "Where a trial outcome is contested, appellate remedies before the Sessions Court or the High Court of Madras provide an essential avenue for review. This practice has extensive experience preparing and arguing criminal appeals and revision petitions — identifying genuine grounds for appeal, marshalling the trial record effectively, and presenting persuasive appellate arguments."
    }
  ];

  const summaryData = [
    { service: "Criminal Defence", covers: "Representation for individuals or businesses facing criminal charges", forum: "Magistrate, Sessions, Special Courts" },
    { service: "Bail Applications", covers: "Anticipatory bail, regular bail, bail in Special Court matters", forum: "Sessions Court, High Court" },
    { service: "Trial Representation", covers: "Full trial defence including evidence and cross-examination", forum: "Sessions Courts, Special Courts" },
    { service: "Investigation Stage Counsel", covers: "Guidance during police/regulatory investigation, before charges", forum: "Police Stations, Investigating Agencies" },
    { service: "NI Act Matters", covers: "Cheque bounce prosecution and defence", forum: "Magistrate Courts" },
    { service: "Criminal Appeals & Revisions", covers: "Challenging trial outcomes through appellate remedies", forum: "High Court of Madras, Sessions Court" }
  ];

  const faqs = [
    {
      question: "What should I do immediately if I am arrested or summoned for questioning?",
      answer: "Contact a criminal advocate immediately. You have the right to legal representation from the earliest stage of investigation, and early legal guidance can significantly affect the trajectory of your matter."
    },
    {
      question: "How long does a criminal trial typically take in Chennai courts?",
      answer: "Trial duration varies significantly based on case complexity, number of witnesses, and court schedules — ranging from several months for straightforward matters to multiple years for complex Sessions Court trials."
    },
    {
      question: "What is the difference between anticipatory bail and regular bail?",
      answer: "Anticipatory bail is sought before arrest, when a person apprehends arrest in a non-bailable offence. Regular bail is sought after arrest has already occurred. Both require different procedural approaches and legal arguments."
    },
    {
      question: "Does this practice handle Negotiable Instruments Act (cheque bounce) cases?",
      answer: "Yes, the practice has extensive experience in NI Act matters, including both prosecution and defence of cheque bounce cases before Magistrate Courts."
    },
    {
      question: "Can criminal trial outcomes be appealed?",
      answer: "Yes. Criminal appeals and revision petitions can be filed before the Sessions Court or High Court of Madras depending on the original forum and nature of the conviction or order being challenged."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20" id="criminal-law-view">
      
      {/* View Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto" id="crim-title-header">
        <div className="text-xs font-mono uppercase tracking-widest text-gold-650 font-bold">Uncompromising Defence & Appeal</div>
        <h1 className="text-3xl sm:text-4xl font-serif text-navy-900 font-semibold tracking-tight">
          Criminal Law Services — Defence, Trial & Appellate Advocacy
        </h1>
        <div className="h-0.5 w-24 bg-gold-500 mx-auto"></div>
        <p className="text-xs sm:text-sm text-gray-600 leading-normal">
          Criminal law practice demands more than knowledge of statute — it demands courtroom judgment developed over years of trials, bail hearings, and evidentiary battles. With twenty-five years of continuous criminal litigation in Chennai, this practice offers experienced, rigorous defense at every stage of your trial.
        </p>
      </div>

      {/* Intro section */}
      <section className="bg-white p-8 rounded border border-gold-200/60 shadow-sm leading-relaxed text-sm sm:text-base text-gray-700" id="crim-intro">
        <p>
          With over twenty-five years of continuous litigation before Magistrate Courts, Sessions Courts, Special Courts, and the High Court of Madras, this practice offers clients the assurance of focused, ethical representational systems. Every matter receives the direct attention of Advocate Thangarasu.
        </p>
      </section>

      {/* Details list of criminal services */}
      <section className="space-y-8" id="crim-sub-practices">
        {subPractices.map((sub, idx) => (
          <div key={idx} className="bg-white p-8 rounded border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-6" id={`crim-subPractice-${idx}`}>
            <div className="p-2.5 bg-navy-900 text-gold-400 rounded-full flex-shrink-0 mt-1 hidden sm:block">
              <CheckSquare className="h-4 w-4 text-gold-500" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-navy-900">
                {sub.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">{sub.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Services Summary Table */}
      <section className="space-y-6" id="crim-table-section">
        <div className="text-left border-b border-gold-200 pb-3 flex items-center space-x-2">
          <Landmark className="h-5 w-5 text-gold-600" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900">Criminal Litigation Matrix & Venues</h2>
        </div>

        <div className="overflow-hidden bg-white shadow rounded border border-gold-200/50" id="crim-table-wrapper">
          <table className="min-w-full text-left font-sans text-sm">
            <thead className="bg-navy-900 text-white font-serif">
              <tr>
                <th className="py-4 px-6 text-xs sm:text-sm text-gold-200">Offence/Service Row</th>
                <th className="py-4 px-6 text-xs sm:text-sm text-gold-200">Details & Cover focus</th>
                <th className="py-4 px-6 text-xs sm:text-sm text-gold-200">Typical Chennai Venue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-100">
              {summaryData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gold-50/20 transition-colors">
                  <td className="py-4 px-6 font-serif font-bold text-navy-900">{row.service}</td>
                  <td className="py-4 px-6 text-gray-700 leading-normal">{row.covers}</td>
                  <td className="py-4 px-6 font-mono text-xs text-navy-800 font-semibold">{row.forum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ accordion registry */}
      <section className="max-w-4xl mx-auto space-y-8" id="crim-faqs">
        <div className="text-center space-y-2">
          <HelpCircle className="h-6 w-6 text-gold-600" />
          <h2 className="text-2xl font-serif text-navy-900 font-bold tracking-tight">Criminal Defence FAQ</h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto"></div>
        </div>

        <div className="space-y-4" id="crim-faq-accordion">
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
