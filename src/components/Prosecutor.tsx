import React, { useState } from 'react';
import { Landmark, Scale, ShieldAlert, Award, FileSpreadsheet, ChevronDown, ChevronUp, CheckSquare, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Prosecutor() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pillars = [
    {
      title: "Judicial Temperament",
      text: "Judicial temperament is the quality that distinguishes an effective prosecutor from a merely aggressive one. It is the capacity to pursue a case vigorously while remaining fair-minded, to recognize when evidence does not support continued prosecution, and to treat every party in the courtroom — the accused, witnesses, victims, and the court itself — with the measured respect that the justice system depends upon. This temperament has been tested and refined over twenty-five years of courtroom practice, including direct experience as an Arbitrator for Qube Cinema Technologies Pvt Ltd. — a role that required precisely the judicial discipline of weighing evidence, applying law impartially, and reaching reasoned, defensible conclusions. Few candidates for prosecutorial appointment bring genuine adjudicative experience of this kind alongside their advocacy background."
    },
    {
      title: "Criminal Law Expertise",
      text: "A quarter-century of criminal law practice in Chennai has produced deep, practical command of the Indian Penal Code, the Code of Criminal Procedure, the Bharatiya Nyaya Sanhita (BNS) and allied legislation, the Indian Evidence Act and Bharatiya Sakshya Adhiniyam, the Negotiable Instruments Act, and the procedural and evidentiary frameworks that govern criminal trials in Tamil Nadu's courts. This expertise has been developed not in the classroom but in the courtroom — through bail applications argued under real time pressure, trials conducted across multiple sessions, evidence examined and cross-examined across hundreds of witnesses, and appeals and revisions argued before the High Court of Madras."
    },
    {
      title: "Prosecution Experience",
      text: "Twenty-five years of criminal litigation experience has provided direct exposure to how prosecution functions in practice — the standards of proof required to sustain a conviction, the procedural safeguards that protect the integrity of a prosecution case, the strategic considerations in presenting evidence and examining witnesses, and the appellate scrutiny that prosecution outcomes must withstand. Having argued matters from multiple vantage points — including extensive criminal defence work — this practice brings a uniquely calibrated understanding of prosecution to the role of City Public Prosecutor. A prosecutor who has spent decades testing the strength of evidence from the defence perspective is better equipped to build prosecution cases that are genuinely sound."
    },
    {
      title: "Public Interest Commitment",
      text: "The Public Prosecutor's duty is not to secure convictions at any cost, but to ensure that the criminal justice system serves the public interest — protecting the community from genuine criminal conduct while safeguarding the rights of the accused and maintaining public confidence in the fairness of the process. This dual responsibility requires a prosecutor who understands that justice and conviction are not always synonymous. This commitment to public interest has been a consistent thread across twenty-five years of independent legal practice — a practice that has never been beholden to any single client or institution, and that has built its reputation purely on the quality and integrity of its legal work."
    },
    {
      title: "Ethical Practice",
      text: "An unblemished record of ethical legal practice across twenty-five years is a foundational qualification for prosecutorial appointment. The Public Prosecutor's office carries authority that, if exercised carelessly or unethically, can cause irreversible harm to individuals and to public confidence in the justice system. This practice's sustained track record — including ongoing trust relationships with corporate clients across more than two decades, and a formal arbitrator appointment requiring demonstrated impartiality — reflects the kind of consistent ethical conduct that the office demands."
    }
  ];

  const courtExperienceRows = [
    { level: "Magistrate Courts", levelExp: "Bail matters, preliminary criminal proceedings, NI Act cases", relevance: "Direct familiarity with first-instance criminal process" },
    { level: "Sessions Courts", levelExp: "Criminal trials, evidence examination, sentencing arguments", relevance: "Core competency for serious criminal prosecution" },
    { level: "District & City Civil Courts", levelExp: "Civil suits, property disputes, recovery matters", relevance: "Broader litigation discipline and procedural command" },
    { level: "Special Courts", levelExp: "Statute-specific criminal matters", relevance: "Familiarity with specialized criminal jurisdiction" },
    { level: "High Court of Madras", levelExp: "Appeals, revisions, original side matters", relevance: "Appellate-level command of criminal and procedural law" },
    { level: "Arbitral Tribunals", levelExp: "Counsel and Arbitrator (Qube Cinema Technologies)", relevance: "Demonstrated judicial/adjudicative temperament" }
  ];

  const faqs = [
    {
      question: "What qualifies this advocate for the role of City Public Prosecutor?",
      answer: "Twenty-five years of continuous criminal law practice across Magistrate Courts, Sessions Courts, Special Courts, and the High Court of Madras, combined with demonstrated judicial temperament through arbitrator service and an unblemished ethical practice record."
    },
    {
      question: "Has the advocate handled criminal prosecution matters specifically?",
      answer: "The practice includes extensive criminal litigation experience across both defence and prosecution-related matters, providing a calibrated, balanced understanding of how criminal prosecution functions in practice."
    },
    {
      question: "What is the significance of the arbitrator appointment to this candidacy?",
      answer: "Serving as Arbitrator for Qube Cinema Technologies Pvt Ltd. required impartial evaluation of evidence and reasoned decision-making — directly relevant to the judicial temperament required of a Public Prosecutor."
    },
    {
      question: "How does twenty-five years of practice compare to the requirements for this role?",
      answer: "The role of City Public Prosecutor typically requires senior-level criminal law experience; twenty-five years of active, continuous practice across the full range of Tamil Nadu criminal courts substantially exceeds typical seniority benchmarks."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20" id="prosecutor-profile-view">
      
      {/* View Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto" id="pros-title-header">
        <div className="text-xs font-mono uppercase tracking-widest text-gold-600 font-bold font-semibold">Public Service & Rule of Law</div>
        <h1 className="text-3xl sm:text-4xl font-serif text-navy-900 font-semibold tracking-tight">
          City Public Prosecutor Profile — Candidacy for Public Service
        </h1>
        <div className="h-0.5 w-24 bg-gold-500 mx-auto"></div>
        <p className="text-xs sm:text-sm text-gray-600 leading-normal">
          A City Public Prosecutor is entrusted with one of the most consequential responsibilities in the criminal justice system: representing the State's interest in ensuring that justice is served — fairly, rigorously, and without fear or favour. This profile sets out why twenty-five years of criminal law practice in Chennai provides the foundation for that responsibility.
        </p>
      </div>

      {/* Narrative block */}
      <section className="bg-navy-900 text-white p-8 sm:p-10 rounded border border-gold-800/40 space-y-6" id="pros-narrative">
        <div className="text-xs uppercase font-mono tracking-widest text-gold-500">The Duty of the prosecutorial leader</div>
        <h3 className="font-serif text-xl text-gold-200">A Calibrated, Fair-Minded Approach</h3>
        <p className="text-sm text-gray-300 leading-relaxed font-sans">
          The public deserves a City Public Prosecutor whose capabilities have been tested in active litigation rather than abstract theory. Advocating firmly in defense and prosecution support over many decades develops an intrinsic respect for evidence and procedural benchmarks. We approach the State representation as a solemn duty to the community.
        </p>
      </section>

      {/* Pillars of Candidacy */}
      <section className="space-y-8" id="pros-pillars">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="bg-white p-8 rounded border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow" id={`pros-pillar-${idx}`}>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-905 border-b border-gold-50 pb-2 flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-gold-600 flex-shrink-0"></span>
              <span className="text-navy-900">{pillar.title}</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans mt-3">{pillar.text}</p>
          </div>
        ))}
      </section>

      {/* Courts Experience Table */}
      <section className="space-y-6" id="pros-table-section">
        <div className="text-left border-b border-gold-200 pb-3 flex items-center space-x-2">
          <FileSpreadsheet className="h-5 w-5 text-gold-600" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900">Experience Across Chennai Courts</h2>
        </div>

        <div className="overflow-hidden bg-white shadow rounded border border-gold-200/50" id="pros-table-wrapper">
          <table className="min-w-full text-left font-sans text-sm">
            <thead className="bg-navy-900 text-white font-serif">
              <tr>
                <th className="py-4 px-6 text-xs sm:text-sm text-gold-200">Court Level</th>
                <th className="py-4 px-6 text-xs sm:text-sm text-gold-200">Nature of Direct Experience</th>
                <th className="py-4 px-6 text-xs sm:text-sm text-gold-200">Relevance to Prosecutorial Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-100">
              {courtExperienceRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-gold-50/20 transition-colors">
                  <td className="py-4 px-6 font-serif font-bold text-navy-900">{row.level}</td>
                  <td className="py-4 px-6 text-gray-700 leading-normal">{row.levelExp}</td>
                  <td className="py-4 px-6 font-mono text-xs text-navy-800 font-semibold">{row.relevance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Leadership in the Legal Profession */}
      <section className="bg-white p-8 sm:p-12 rounded border border-gold-200/60 shadow-lg" id="pros-leadership">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-900 mb-4 border-l-4 border-gold-500 pl-4 py-0.5">
          Leadership in the Legal Profession
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 font-sans leading-relaxed">
          Beyond individual case work, twenty-five years of sustained, independent legal practice represents a form of professional leadership — building and maintaining a practice that has earned the continued trust of individual clients, corporate institutions, and fellow members of the legal fraternity across more than two decades. The mentorship received early in this career, under senior counsel S. Ashok Kumar, advocate A. Sasidharan, and as junior to N.T. Vanamamalai, has informed a practice culture of rigor and integrity that this candidacy now seeks to bring to the institutional leadership of the City Public Prosecutor's office.
        </p>
      </section>

      {/* FAQs on Prosecutor role */}
      <section className="max-w-4xl mx-auto space-y-8" id="pros-faqs">
        <div className="text-center space-y-2">
          <HelpCircle className="h-6 w-6 text-gold-600 mx-auto" />
          <h2 className="text-xl sm:text-2xl font-serif text-navy-900 font-bold tracking-tight">Prosecutorial Candidacy FAQs</h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto"></div>
        </div>

        <div className="space-y-4" id="pros-faq-accordion">
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
