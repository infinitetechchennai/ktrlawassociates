import React from 'react';
import {
  Scale,
  ShieldAlert,
  CheckSquare,
  HelpCircle,
  Landmark,
  MapPin,
  ArrowRight,
  Phone,
  FileText,
} from 'lucide-react';

export default function CriminalLaw() {
  const serviceAreas = [
    'West Mambalam',
    'T. Nagar',
    'Saidapet',
    'Ashok Nagar',
    'Kodambakkam',
    'Nungambakkam',
    'Ramapuram',
    'Chennai',
  ];

  const subPractices = [
    {
      title: 'Criminal Advocate in Chennai',
      text:
        'Criminal proceedings require immediate and careful legal attention. KTR Law Associates provides criminal law consultation and court representation for matters involving investigation, summons, bail, trial proceedings, evidence review, cross-examination, final arguments, appeals and revisions before appropriate courts in Chennai.',
      bullets: [
        'Criminal defence',
        'Magistrate Court matters',
        'Sessions Court matters',
        'Special Court matters',
        'Trial representation',
        'Criminal appeals',
        'Revision petitions',
        'Case strategy review',
      ],
    },
    {
      title: 'Anticipatory Bail and Regular Bail Matters',
      text:
        'Bail matters are often urgent and require proper preparation of facts, documents, case background, offence details and legal grounds. The practice assists with anticipatory bail, regular bail, bail before Sessions Courts and bail-related proceedings before the High Court of Madras depending on the nature of the case.',
      bullets: [
        'Anticipatory bail',
        'Regular bail',
        'Sessions Court bail',
        'High Court bail',
        'Bail conditions',
        'Surrender strategy',
        'Remand-related guidance',
        'Urgent case review',
      ],
    },
    {
      title: 'Police Station and Investigation Stage Legal Support',
      text:
        'Criminal matters often begin before a charge sheet is filed. A person may receive a police call, notice, summons, complaint copy, enquiry request or investigation-related communication. Early legal guidance helps clients understand rights, responsibilities, possible risks and the correct legal response.',
      bullets: [
        'Police enquiry guidance',
        'Summons or notice review',
        'Complaint-related consultation',
        'Investigation stage advice',
        'Document preparation',
        'Statement-related guidance',
        'Search-related concerns',
        'Legal response planning',
      ],
    },
    {
      title: 'Criminal Trial Representation',
      text:
        'Criminal trial work requires sustained preparation across several stages including charge framing, prosecution evidence, cross-examination, defence evidence, questioning, final arguments and judgment. Each stage requires careful review of the record, witness testimony, documents and procedural compliance.',
      bullets: [
        'Trial preparation',
        'Charge framing stage',
        'Witness cross-examination',
        'Evidence review',
        'Defence evidence',
        'Final arguments',
        'Procedural objections',
        'Court representation',
      ],
    },
    {
      title: 'Cheque Bounce and NI Act Criminal Matters',
      text:
        'Negotiable Instruments Act matters, commonly known as cheque bounce cases, may involve statutory notices, limitation periods, complaint filing, defence strategy, evidence, cross-examination and settlement discussions. KTR Law Associates assists with both complainant-side and defence-side NI Act matters.',
      bullets: [
        'Cheque bounce complaints',
        'NI Act defence',
        'Statutory notice review',
        'Limitation review',
        'Evidence preparation',
        'Cross-examination',
        'Settlement discussions',
        'Magistrate Court representation',
      ],
    },
    {
      title: 'Criminal Appeals and Revision Petitions',
      text:
        'If a criminal court order, conviction, sentence, dismissal or procedural decision requires challenge, appellate or revision remedies may be available. Appellate work involves reviewing the trial record, identifying legal errors, examining evidence and preparing grounds for appeal or revision.',
      bullets: [
        'Criminal appeals',
        'Revision petitions',
        'Conviction challenge',
        'Sentence-related matters',
        'Order challenge',
        'Trial record review',
        'High Court matters',
        'Appellate drafting',
      ],
    },
  ];

  const summaryData = [
    {
      service: 'Criminal Defence',
      covers: 'Representation for individuals or businesses facing criminal allegations',
      forum: 'Magistrate Courts, Sessions Courts, Special Courts',
    },
    {
      service: 'Bail Applications',
      covers: 'Anticipatory bail, regular bail, surrender strategy and bail conditions',
      forum: 'Sessions Court, High Court of Madras',
    },
    {
      service: 'Police Station Support',
      covers: 'Guidance during enquiry, summons, notices, complaints and investigation stage',
      forum: 'Police Stations, Investigating Agencies',
    },
    {
      service: 'Trial Representation',
      covers: 'Evidence review, witness cross-examination, defence evidence and arguments',
      forum: 'Magistrate Courts, Sessions Courts, Special Courts',
    },
    {
      service: 'NI Act Matters',
      covers: 'Cheque bounce complaint, defence, notices, evidence and settlement review',
      forum: 'Magistrate Courts',
    },
    {
      service: 'Criminal Appeals',
      covers: 'Appeals, revisions and challenges to criminal court orders or judgments',
      forum: 'Sessions Court, High Court of Madras',
    },
  ];

  const faqs = [
    {
      question: 'Can I contact KTR Law Associates if I am searching for a criminal lawyer near me?',
      answer:
        'Yes. KTR Law Associates is based in West Mambalam, Chennai, and assists clients from nearby areas including T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and other parts of Chennai for criminal law consultation, bail matters and court representation.',
    },
    {
      question: 'What should I do if I receive a police summons or enquiry call?',
      answer:
        'It is advisable to obtain legal consultation before responding. The correct approach depends on the nature of the complaint, notice, police station, allegations and documents involved.',
    },
    {
      question: 'What is the difference between anticipatory bail and regular bail?',
      answer:
        'Anticipatory bail is usually sought before arrest when a person apprehends arrest in a non-bailable offence. Regular bail is usually sought after arrest or remand. The legal grounds and procedure differ depending on the case facts.',
    },
    {
      question: 'Does the office handle bail matters in Chennai?',
      answer:
        'Yes. KTR Law Associates assists with anticipatory bail, regular bail, Sessions Court bail, High Court bail and bail-related legal consultation depending on the nature and stage of the criminal case.',
    },
    {
      question: 'Does KTR Law Associates handle criminal trial cases?',
      answer:
        'Yes. The practice assists with criminal trial representation including case preparation, charge stage, evidence review, cross-examination, defence evidence, final arguments and related court proceedings.',
    },
    {
      question: 'Does the office handle cheque bounce criminal cases?',
      answer:
        'Yes. The practice handles Negotiable Instruments Act and cheque bounce matters including notice review, complaint filing, defence strategy, evidence preparation, cross-examination and settlement-related discussions.',
    },
    {
      question: 'Can a criminal court judgment be appealed?',
      answer:
        'Depending on the nature of the order or judgment, remedies such as criminal appeal, revision or other proceedings may be available. The case record and limitation period must be reviewed carefully.',
    },
    {
      question: 'Which Chennai areas does the office serve for criminal matters?',
      answer:
        'The office is located in West Mambalam and serves clients from T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and other nearby Chennai localities.',
    },
  ];

  const processSteps = [
    {
      title: 'Initial Case Review',
      text: 'Review of complaint, FIR, summons, notice, remand details, documents and case background.',
    },
    {
      title: 'Urgency Assessment',
      text: 'Evaluation of whether bail, anticipatory bail, notice response, police station support or court action is required.',
    },
    {
      title: 'Drafting and Filing',
      text: 'Preparation of bail petitions, counter strategy, criminal petitions, trial applications or appeal papers.',
    },
    {
      title: 'Court Representation',
      text: 'Representation before Magistrate Courts, Sessions Courts, Special Courts or the High Court of Madras.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20" id="criminal-law-view">
      {/* SEO Header */}
      <section className="text-center space-y-5 max-w-4xl mx-auto" id="crim-title-header">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-300 bg-gold-50 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-gold-700 font-bold">
          <ShieldAlert className="h-4 w-4" />
          Criminal Defence • Bail Matters • Chennai
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-navy-900 font-semibold tracking-tight leading-tight">
          Criminal Advocate in Chennai for Bail, Defence and Trial Representation
        </h1>

        <div className="h-0.5 w-24 bg-gold-500 mx-auto"></div>

        <p className="text-sm sm:text-base text-gray-700 leading-8">
          KTR Law Associates provides criminal law consultation and court representation in Chennai
          for clients searching for a criminal lawyer near me, criminal advocate in Chennai, bail
          advocate Chennai, anticipatory bail lawyer Chennai or criminal defence lawyer Chennai.
          The office is located in West Mambalam and serves nearby areas including T. Nagar,
          Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam and Ramapuram.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded bg-navy-900 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-white hover:bg-gold-700 hover:text-navy-950 transition"
          >
            Contact for Criminal Consultation
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="/civil-lawyer-chennai"
            className="inline-flex items-center justify-center gap-2 rounded border border-gold-300 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-navy-900 hover:bg-gold-50 transition"
          >
            View Civil Practice
          </a>
        </div>
      </section>

      {/* Local SEO Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="criminal-local-seo-intro">
        <div className="lg:col-span-8 bg-white p-8 rounded border border-gold-200/60 shadow-sm space-y-5">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-gold-600 font-bold">
            <FileText className="h-4 w-4" />
            Criminal Legal Consultation
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-navy-900 font-semibold">
            Criminal Defence and Bail Advocate in West Mambalam, Chennai
          </h2>

          <p className="text-sm text-gray-700 leading-8">
            Criminal law matters may involve police complaints, FIRs, summons, arrest concerns,
            anticipatory bail, regular bail, trial proceedings, cheque bounce cases, evidence
            disputes, appeals and revisions. Early legal review helps clients understand the correct
            next step and prepare a suitable legal response.
          </p>

          <p className="text-sm text-gray-700 leading-8">
            KTR Law Associates assists individuals, families, business owners and institutions with
            criminal law consultation, bail-related guidance, investigation-stage support, trial
            preparation and appellate remedies before appropriate courts and forums in Chennai.
          </p>

          <div className="rounded border border-gold-100 bg-gold-50/30 p-5">
            <h3 className="font-serif text-lg font-semibold text-navy-900">
              Criminal matters usually require early legal review when:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                'A police complaint or FIR has been registered',
                'You receive a summons, notice or enquiry call',
                'There is fear of arrest in a criminal case',
                'Bail or anticipatory bail may be required',
                'A cheque bounce complaint has been received',
                'A criminal court order needs to be challenged',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckSquare className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded border border-gold-200 bg-slate-50 p-6">
            <div className="flex items-center gap-2 text-gold-700">
              <MapPin className="h-5 w-5" />
              <h2 className="font-serif text-xl font-semibold text-navy-900">
                Areas Served
              </h2>
            </div>

            <p className="mt-3 text-sm text-gray-600 leading-7">
              Criminal law and bail consultation for clients from West Mambalam and nearby Chennai
              localities.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-gold-200 bg-white px-3 py-2 text-xs font-medium text-slate-700"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded border border-gold-700/40 bg-navy-900 p-6 text-white">
            <h2 className="font-serif text-xl font-semibold text-gold-200">
              Criminal Law Search Focus
            </h2>

            <div className="mt-5 space-y-2 text-xs text-slate-300">
              <p>• criminal lawyer near me</p>
              <p>• criminal advocate Chennai</p>
              <p>• bail advocate Chennai</p>
              <p>• anticipatory bail lawyer Chennai</p>
              <p>• regular bail lawyer Chennai</p>
              <p>• criminal defence lawyer Chennai</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Criminal Services */}
      <section className="space-y-8" id="crim-sub-practices">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-serif text-navy-900 font-semibold">
            Criminal Law Services Handled by KTR Law Associates
          </h2>

          <p className="text-sm text-gray-600 leading-7">
            The criminal law practice covers early case review, bail strategy, investigation-stage
            guidance, trial preparation, evidence review, cheque bounce matters, appeals and
            revisions depending on the facts and stage of the case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subPractices.map((sub, idx) => (
            <article
              key={idx}
              className="bg-white p-8 rounded border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow"
              id={`crim-subPractice-${idx}`}
            >
              <div className="space-y-4">
                <div className="p-2.5 bg-navy-900 text-gold-400 rounded-full w-fit">
                  <CheckSquare className="h-4 w-4 text-gold-500" />
                </div>

                <h3 className="font-serif text-xl font-bold text-navy-900">
                  {sub.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                  {sub.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gold-50">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-gold-500 font-semibold mb-3">
                  Scope of Services
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2">
                  {sub.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="text-xs text-navy-950 flex items-center space-x-1.5 font-sans"
                    >
                      <span className="h-1.5 w-1.5 bg-gold-600 rounded-full flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white rounded border border-gold-200/60 shadow-sm p-8 sm:p-10" id="criminal-process-section">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif text-navy-900 font-semibold">
            How Criminal Matters Are Usually Approached
          </h2>

          <p className="text-sm text-gray-600 leading-7">
            Every criminal matter is different. The correct response depends on the complaint,
            offence alleged, available documents, stage of investigation, court forum and urgency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
          {processSteps.map((step, idx) => (
            <div key={step.title} className="rounded border border-gold-100 bg-gold-50/20 p-5">
              <div className="h-9 w-9 rounded-full bg-navy-900 text-gold-300 flex items-center justify-center font-mono text-xs font-bold">
                {idx + 1}
              </div>

              <h3 className="mt-4 font-serif text-base font-semibold text-navy-900">
                {step.title}
              </h3>

              <p className="mt-2 text-xs text-gray-600 leading-6">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-navy-900 text-white p-8 sm:p-12 rounded border border-gold-800/40" id="criminal-why-us">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-serif text-xl sm:text-2xl text-gold-200 font-semibold border-b border-gold-800 pb-4 flex items-center space-x-2">
            <Scale className="h-6 w-6 text-gold-500" />
            <span>Why Clients Contact KTR Law Associates for Criminal Matters</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-wider">
                Criminal Court Experience
              </h3>
              <p className="text-xs text-gray-300 mt-1 pl-2 leading-relaxed">
                Representation experience before Magistrate Courts, Sessions Courts, Special Courts
                and the High Court of Madras.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-wider">
                Bail-Focused Preparation
              </h3>
              <p className="text-xs text-gray-300 mt-1 pl-2 leading-relaxed">
                Bail matters are reviewed based on allegations, documents, case background, risk
                factors, criminal history if any and applicable legal grounds.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-wider">
                Evidence-Based Defence
              </h3>
              <p className="text-xs text-gray-300 mt-1 pl-2 leading-relaxed">
                Trial strategy is prepared by reviewing witness statements, documents, procedural
                compliance, contradictions and available defence material.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-wider">
                Clear Legal Guidance
              </h3>
              <p className="text-xs text-gray-300 mt-1 pl-2 leading-relaxed">
                Clients receive practical guidance on the legal process, possible remedies, court
                stages and immediate next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary Table */}
      <section className="space-y-6" id="crim-table-section">
        <div className="text-left border-b border-gold-200 pb-3 flex items-center space-x-2">
          <Landmark className="h-5 w-5 text-gold-600" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900">
            Criminal Services and Legal Forums
          </h2>
        </div>

        <div className="overflow-x-auto bg-white shadow rounded border border-gold-200/50" id="crim-table-wrapper">
          <table className="min-w-full text-left font-sans text-sm">
            <thead className="bg-navy-900 text-white font-serif">
              <tr>
                <th className="py-4 px-6 text-xs sm:text-sm text-gold-200">Service Category</th>
                <th className="py-4 px-6 text-xs sm:text-sm text-gold-200">What It Covers</th>
                <th className="py-4 px-6 text-xs sm:text-sm text-gold-200">Typical Forum</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gold-100">
              {summaryData.map((row) => (
                <tr key={row.service} className="hover:bg-gold-50/20 transition-colors">
                  <td className="py-4 px-6 font-serif font-bold text-navy-900 text-left">
                    {row.service}
                  </td>

                  <td className="py-4 px-6 text-gray-700 leading-relaxed">
                    {row.covers}
                  </td>

                  <td className="py-4 px-6 font-mono text-xs text-navy-800 font-semibold">
                    {row.forum}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-slate-50 rounded border border-gold-200/60 p-8" id="criminal-internal-links">
        <h2 className="text-2xl font-serif text-navy-900 font-semibold">
          Related Legal Services
        </h2>

        <p className="mt-3 text-sm text-gray-600 leading-7">
          Criminal cases may overlap with civil disputes, property issues, corporate disputes,
          cheque bounce proceedings, recovery matters or appellate remedies. You can also review
          related practice areas below.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="/civil-lawyer-chennai"
            className="rounded bg-white border border-gold-200 p-5 hover:border-gold-500 hover:shadow-sm transition"
          >
            <h3 className="font-serif text-base font-semibold text-navy-900">
              Civil Lawyer in Chennai
            </h3>
            <p className="mt-2 text-xs text-gray-600 leading-6">
              Civil litigation, property disputes, injunctions and recovery matters.
            </p>
          </a>

          <a
            href="/corporate-lawyer-chennai"
            className="rounded bg-white border border-gold-200 p-5 hover:border-gold-500 hover:shadow-sm transition"
          >
            <h3 className="font-serif text-base font-semibold text-navy-900">
              Corporate and Arbitration
            </h3>
            <p className="mt-2 text-xs text-gray-600 leading-6">
              Contract disputes, arbitration, commercial advisory and business legal support.
            </p>
          </a>

          <a
            href="/contact"
            className="rounded bg-navy-900 border border-gold-700/40 p-5 hover:bg-gold-700 hover:text-navy-950 transition text-white"
          >
            <h3 className="font-serif text-base font-semibold">
              Contact KTR Law Associates
            </h3>
            <p className="mt-2 text-xs leading-6">
              Submit a secure criminal law enquiry or request legal consultation.
            </p>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto space-y-8" id="crim-faqs">
        <div className="text-center space-y-2">
          <HelpCircle className="h-6 w-6 text-gold-600 mx-auto" />

          <h2 className="text-2xl sm:text-3xl font-serif text-navy-900 font-bold tracking-tight">
            Criminal Advocate Chennai FAQ
          </h2>

          <p className="text-sm text-gray-600 leading-7">
            Common questions about criminal consultation, bail, police enquiry, cheque bounce cases,
            trials, appeals and revisions.
          </p>

          <div className="h-0.5 w-16 bg-gold-500 mx-auto"></div>
        </div>

        <div className="space-y-4" id="crim-faq-list">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white border rounded border-gold-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between font-serif text-sm sm:text-base font-semibold text-navy-900 hover:text-gold-700 transition-colors">
                <span className="pr-4">{faq.question}</span>
                <span className="text-gold-600 text-lg group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>

              <div className="px-6 pb-5 pt-1 border-t border-gold-50 bg-gold-50/10">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center bg-gradient-to-br from-navy-900 to-slate-950 text-white rounded border border-gold-700/40 p-8 sm:p-12" id="criminal-final-cta">
        <div className="max-w-3xl mx-auto space-y-4">
          <Phone className="h-8 w-8 text-gold-400 mx-auto" />

          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-gold-100">
            Need Criminal Legal Consultation in Chennai?
          </h2>

          <p className="text-sm text-gray-300 leading-7">
            Contact KTR Law Associates for criminal defence, bail, anticipatory bail, police
            enquiry, cheque bounce, trial, appeal or revision-related legal consultation in West
            Mambalam and nearby Chennai areas.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded bg-gold-600 px-7 py-3 text-xs font-mono uppercase tracking-widest font-bold text-navy-950 hover:bg-gold-500 transition"
          >
            Submit Criminal Enquiry
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}