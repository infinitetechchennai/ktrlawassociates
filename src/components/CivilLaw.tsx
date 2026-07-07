import React from 'react';
import {
  Scale,
  CheckCircle,
  FileText,
  Landmark,
  ShieldCheck,
  HelpCircle,
  MapPin,
  ArrowRight,
  Phone,
} from 'lucide-react';

export default function CivilLaw() {
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

  const subServices = [
    {
      title: 'Civil Litigation in Chennai',
      text:
        'Civil litigation involves disputes between individuals, families, businesses, property owners, institutions and commercial entities. KTR Law Associates assists clients with civil suits, written statements, interim applications, injunction petitions, evidence strategy, settlement evaluation and representation before civil courts and appellate forums in Chennai.',
      bullets: [
        'Civil suits',
        'Declaration suits',
        'Specific performance',
        'Injunction proceedings',
        'Recovery suits',
        'Commercial disputes',
        'Consumer-related civil claims',
        'Civil appeals',
      ],
    },
    {
      title: 'Property Advocate for Property Disputes',
      text:
        'Property disputes require careful examination of title documents, possession history, inheritance claims, family arrangements, encumbrances, boundaries and prior transactions. The practice provides legal assistance for property disputes, partition matters, title-related claims, possession disputes and injunction proceedings in Chennai.',
      bullets: [
        'Property title disputes',
        'Partition suits',
        'Family property disputes',
        'Possession recovery',
        'Boundary disputes',
        'Encroachment issues',
        'Inheritance claims',
        'Document scrutiny',
      ],
    },
    {
      title: 'Contract and Commercial Disputes',
      text:
        'Contract disputes can arise from unpaid dues, service agreements, vendor arrangements, business obligations, partnership concerns, employment contracts and commercial transactions. Legal strategy may involve notices, negotiation, civil recovery proceedings, arbitration or litigation depending on the facts of the matter.',
      bullets: [
        'Breach of contract',
        'Commercial recovery',
        'Vendor disputes',
        'Service agreement disputes',
        'Business disputes',
        'Partnership issues',
        'Settlement discussions',
        'Arbitration support',
      ],
    },
    {
      title: 'Injunction and Urgent Civil Relief',
      text:
        'In many civil disputes, urgent court protection may be required to prevent illegal occupation, alienation of property, interference with possession, breach of contractual rights or business disruption. Injunction proceedings require quick documentation, precise pleadings and clear presentation of legal grounds.',
      bullets: [
        'Temporary injunction',
        'Permanent injunction',
        'Status quo orders',
        'Stay applications',
        'Property protection',
        'Possession protection',
        'Business protection',
        'Urgent applications',
      ],
    },
    {
      title: 'Recovery Suits and Monetary Claims',
      text:
        'Recovery proceedings involve claims for unpaid amounts, business dues, contractual liabilities, loans, damages, commercial defaults and decree execution. The suitable legal remedy depends on documents, limitation period, transaction history and enforceability of the claim.',
      bullets: [
        'Money recovery suits',
        'Commercial dues',
        'Contractual recovery',
        'Business debt recovery',
        'Damages claims',
        'Execution petitions',
        'Legal notices',
        'Settlement evaluation',
      ],
    },
    {
      title: 'Civil Appeals and Revision Matters',
      text:
        'Where a civil court order, decree or judgment requires challenge, appellate remedies may be available. Civil appellate work involves reviewing pleadings, evidence, trial court findings, procedural issues and legal errors to prepare appeals, revisions, reviews or writ-related remedies.',
      bullets: [
        'Civil appeals',
        'First appeals',
        'Second appeals',
        'Revision petitions',
        'Review applications',
        'Writ proceedings',
        'Interim stay petitions',
        'Appellate drafting',
      ],
    },
  ];

  const summaryData = [
    {
      service: 'Civil Litigation',
      covers: 'Civil suits, injunctions, declarations, recovery and trial court matters',
      forum: 'Civil Courts',
    },
    {
      service: 'Property Disputes',
      covers: 'Title, ownership, possession, partition, inheritance and boundary issues',
      forum: 'District Courts, City Civil Court, High Court',
    },
    {
      service: 'Contract Disputes',
      covers: 'Breach of contract, commercial disagreements and recovery claims',
      forum: 'Civil Courts, Arbitration Forums',
    },
    {
      service: 'Injunction Proceedings',
      covers: 'Urgent protection against interference, alienation or unlawful occupation',
      forum: 'Civil Courts',
    },
    {
      service: 'Recovery Proceedings',
      covers: 'Money recovery, business dues, contractual claims and decree execution',
      forum: 'Civil Courts',
    },
    {
      service: 'Civil Appeals',
      covers: 'Appeals, revisions, reviews and challenges to civil court orders',
      forum: 'Appellate Courts, High Court',
    },
  ];

  const faqs = [
    {
      question: 'Can I contact KTR Law Associates if I am searching for a civil lawyer near me?',
      answer:
        'Yes. KTR Law Associates is based in West Mambalam, Chennai, and assists clients from nearby areas including T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and other parts of Chennai for civil litigation and property-related matters.',
    },
    {
      question: 'What type of civil cases does the office handle?',
      answer:
        'The practice handles civil litigation, property disputes, partition suits, injunction proceedings, recovery suits, contract disputes, commercial disputes, civil appeals, revision matters and related court proceedings.',
    },
    {
      question: 'What should I do if someone illegally occupies my property?',
      answer:
        'It is advisable to obtain legal consultation quickly. Depending on the documents and facts, remedies may include injunction proceedings, possession recovery action, title litigation, police complaint support or civil court proceedings.',
    },
    {
      question: 'Can a civil dispute be settled without going to court?',
      answer:
        'Yes. Some civil disputes can be resolved through negotiation, mediation, settlement discussions or arbitration. The suitable approach depends on the nature of the dispute, documents, urgency and willingness of the parties.',
    },
    {
      question: 'Does the office handle property partition disputes?',
      answer:
        'Yes. KTR Law Associates assists with family property disputes, partition suits, inheritance-related claims, title disputes and related civil litigation in Chennai.',
    },
    {
      question: 'Can I file an injunction case to protect my property?',
      answer:
        'In appropriate cases, an injunction petition may be filed to protect possession, prevent interference, stop alienation or preserve the existing position until the court decides the dispute.',
    },
    {
      question: 'Can businesses contact the office for contract disputes?',
      answer:
        'Yes. Businesses may seek legal consultation for breach of contract, vendor disputes, commercial recovery, service agreement disputes, partnership issues and arbitration-related matters.',
    },
    {
      question: 'Can I appeal a civil court judgment?',
      answer:
        'Depending on the nature of the order or decree, remedies such as appeal, revision, review or writ proceedings may be available. The limitation period and case record must be examined carefully.',
    },
  ];

  const processSteps = [
    {
      title: 'Case Review',
      text: 'Initial review of documents, facts, parties, timelines, limitation and available remedies.',
    },
    {
      title: 'Legal Strategy',
      text: 'Assessment of whether notice, negotiation, injunction, civil suit, arbitration or appeal is suitable.',
    },
    {
      title: 'Drafting and Filing',
      text: 'Preparation of pleadings, petitions, written statements, interim applications and supporting documents.',
    },
    {
      title: 'Court Representation',
      text: 'Representation before appropriate civil courts, forums, tribunals or appellate courts in Chennai.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20" id="civil-law-view">
      {/* SEO Header */}
      <section className="text-center space-y-5 max-w-4xl mx-auto" id="civil-title-header">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-300 bg-gold-50 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-gold-700 font-bold">
          <Scale className="h-4 w-4" />
          Civil Litigation • Property Disputes • Chennai
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-navy-900 font-semibold tracking-tight leading-tight">
          Civil Lawyer in Chennai for Property, Contract and Civil Dispute Matters
        </h1>

        <div className="h-0.5 w-24 bg-gold-500 mx-auto"></div>

        <p className="text-sm sm:text-base text-gray-700 leading-8">
          KTR Law Associates provides civil litigation and property dispute legal consultation in
          Chennai for clients searching for a civil lawyer near me, civil advocate in Chennai,
          property advocate near me, or legal consultation for civil disputes in West Mambalam and
          nearby areas including T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam and
          Ramapuram.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded bg-navy-900 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-white hover:bg-gold-700 hover:text-navy-950 transition"
          >
            Contact for Civil Consultation
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="/criminal-lawyer-chennai"
            className="inline-flex items-center justify-center gap-2 rounded border border-gold-300 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-navy-900 hover:bg-gold-50 transition"
          >
            View Criminal Practice
          </a>
        </div>
      </section>

      {/* Local SEO Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="civil-local-seo-intro">
        <div className="lg:col-span-8 bg-white p-8 rounded border border-gold-200/60 shadow-sm space-y-5">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-gold-600 font-bold">
            <FileText className="h-4 w-4" />
            Civil Legal Consultation
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-navy-900 font-semibold">
            Civil Litigation and Property Dispute Advocate in West Mambalam, Chennai
          </h2>

          <p className="text-sm text-gray-700 leading-8">
            Civil law is focused on protecting legal rights, enforcing obligations, resolving
            disputes and preserving legal certainty. Civil disputes may involve property ownership,
            partition, possession, contracts, money recovery, injunctions, commercial obligations,
            family property issues, or appeals against civil court orders.
          </p>

          <p className="text-sm text-gray-700 leading-8">
            With more than two decades of legal practice in Chennai, KTR Law Associates assists
            individuals, families, businesses and institutions with practical legal guidance,
            document-based case evaluation, court representation and dispute resolution support.
          </p>

          <div className="rounded border border-gold-100 bg-gold-50/30 p-5">
            <h3 className="font-serif text-lg font-semibold text-navy-900">
              Civil matters usually require early legal review when:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                'Property possession is being disturbed',
                'A contract or agreement has been breached',
                'Money is due under a civil or commercial transaction',
                'A partition or inheritance dispute has started',
                'Urgent injunction protection is required',
                'A civil court order needs to be challenged',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-gold-600 mt-0.5 flex-shrink-0" />
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
              Civil and property legal consultation for clients from West Mambalam and nearby
              Chennai localities.
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
              Civil Law Search Focus
            </h2>

            <div className="mt-5 space-y-2 text-xs text-slate-300">
              <p>• civil lawyer near me</p>
              <p>• civil lawyer Chennai</p>
              <p>• property advocate near me</p>
              <p>• property dispute lawyer Chennai</p>
              <p>• injunction lawyer Chennai</p>
              <p>• recovery suit lawyer Chennai</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Grid of Civil Subservices */}
      <section className="space-y-8" id="civil-detailed-services-section">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-serif text-navy-900 font-semibold">
            Civil Law Services Handled by KTR Law Associates
          </h2>
          <p className="text-sm text-gray-600 leading-7">
            The civil practice covers dispute prevention, document review, litigation strategy,
            drafting, court representation, interim protection, settlement discussions and appeal
            preparation depending on the nature of the matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="civil-detailed-services-grid">
          {subServices.map((service, idx) => (
            <article
              key={idx}
              className="bg-white p-8 rounded border border-gold-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              id={`civil-subservice-${idx}`}
            >
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-navy-900 border-b border-gold-100 pb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  {service.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gold-50">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-gold-500 font-semibold mb-3">
                  Scope of Services
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2">
                  {service.bullets.map((bullet) => (
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
      <section className="bg-white rounded border border-gold-200/60 shadow-sm p-8 sm:p-10" id="civil-process-section">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif text-navy-900 font-semibold">
            How Civil Matters Are Usually Approached
          </h2>
          <p className="text-sm text-gray-600 leading-7">
            Every civil dispute is different. The correct legal route depends on documents, parties,
            limitation, urgency, forum jurisdiction and the relief required.
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

      {/* Why Choose This Practice Section */}
      <section className="bg-navy-900 text-white p-8 sm:p-12 rounded border border-gold-800/40" id="civil-why-us">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-serif text-xl sm:text-2xl text-gold-200 font-semibold border-b border-gold-800 pb-4 flex items-center space-x-2">
            <ShieldCheck className="h-6 w-6 text-gold-500" />
            <span>Why Clients Contact KTR Law Associates for Civil Matters</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-wider">
                Courtroom Experience
              </h3>
              <p className="text-xs text-gray-300 mt-1 pl-2 leading-relaxed">
                Representation experience before civil courts, district courts, appellate forums,
                tribunals and the High Court of Madras.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-wider">
                Document-Based Strategy
              </h3>
              <p className="text-xs text-gray-300 mt-1 pl-2 leading-relaxed">
                Civil disputes are evaluated based on pleadings, title records, contracts,
                correspondence, limitation and available evidence.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-wider">
                Clear Legal Guidance
              </h3>
              <p className="text-xs text-gray-300 mt-1 pl-2 leading-relaxed">
                Clients receive practical guidance on possible remedies, risk factors, expected
                process and court-based options.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-wider">
                Civil and Property Focus
              </h3>
              <p className="text-xs text-gray-300 mt-1 pl-2 leading-relaxed">
                The practice covers property disputes, partition, injunctions, recovery matters,
                contractual disputes and civil appellate work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="space-y-6" id="civil-summary-table-section">
        <div className="text-left border-b border-gold-200 pb-3 flex items-center space-x-2">
          <Landmark className="h-5 w-5 text-gold-600" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900">
            Civil Services and Legal Forums
          </h2>
        </div>

        <div className="overflow-x-auto bg-white shadow rounded border border-gold-200/50" id="civil-table-wrapper">
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
      <section className="bg-slate-50 rounded border border-gold-200/60 p-8" id="civil-internal-links">
        <h2 className="text-2xl font-serif text-navy-900 font-semibold">
          Related Legal Services
        </h2>

        <p className="mt-3 text-sm text-gray-600 leading-7">
          Civil disputes may overlap with criminal complaints, corporate agreements, arbitration, or
          property documentation. You can also review related practice areas below.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="/criminal-lawyer-chennai"
            className="rounded bg-white border border-gold-200 p-5 hover:border-gold-500 hover:shadow-sm transition"
          >
            <h3 className="font-serif text-base font-semibold text-navy-900">
              Criminal Advocate in Chennai
            </h3>
            <p className="mt-2 text-xs text-gray-600 leading-6">
              Bail, criminal trial defence and police station-related matters.
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
              Submit a secure civil law enquiry or request legal consultation.
            </p>
          </a>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto space-y-8" id="civil-faqs">
        <div className="text-center space-y-2">
          <HelpCircle className="h-6 w-6 text-gold-600 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-serif text-navy-900 font-bold tracking-tight">
            Civil Lawyer Chennai FAQ
          </h2>
          <p className="text-sm text-gray-600 leading-7">
            Common questions about civil litigation, property disputes, injunctions and recovery
            matters.
          </p>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto"></div>
        </div>

        <div className="space-y-4" id="civil-faq-list">
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
      <section className="text-center bg-gradient-to-br from-navy-900 to-slate-950 text-white rounded border border-gold-700/40 p-8 sm:p-12" id="civil-final-cta">
        <div className="max-w-3xl mx-auto space-y-4">
          <Phone className="h-8 w-8 text-gold-400 mx-auto" />

          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-gold-100">
            Need Civil Legal Consultation in Chennai?
          </h2>

          <p className="text-sm text-gray-300 leading-7">
            Contact KTR Law Associates for civil litigation, property dispute, injunction, recovery,
            contract dispute, partition or civil appeal-related legal consultation in West Mambalam
            and nearby Chennai areas.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded bg-gold-600 px-7 py-3 text-xs font-mono uppercase tracking-widest font-bold text-navy-950 hover:bg-gold-500 transition"
          >
            Submit Civil Enquiry
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}