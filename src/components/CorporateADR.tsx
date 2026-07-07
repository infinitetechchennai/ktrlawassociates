import React from 'react';
import {
  Briefcase,
  Gavel,
  Users,
  BookOpen,
  ShieldCheck,
  MapPin,
  ArrowRight,
  FileText,
  CheckCircle,
  HelpCircle,
  Phone,
} from 'lucide-react';

export default function CorporateADR() {
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

  const advisoryServices = [
    {
      title: 'Corporate Legal Advisory in Chennai',
      text:
        'KTR Law Associates provides legal advisory support for businesses, founders, directors, commercial entities and institutions requiring guidance on contracts, disputes, compliance concerns, legal notices, recovery issues and commercial risk management.',
      bullets: [
        'Corporate legal consultation',
        'Business dispute advice',
        'Commercial legal strategy',
        'Director and management support',
        'Risk review',
        'Legal notices',
        'Compliance-related guidance',
        'Business documentation',
      ],
    },
    {
      title: 'Arbitration Lawyer and ADR Support',
      text:
        'Alternative Dispute Resolution can help parties resolve commercial, contractual and business disputes outside traditional trial proceedings where the contract or facts permit. The practice assists with arbitration-related strategy, pleadings, hearings, settlement evaluation and dispute resolution support.',
      bullets: [
        'Arbitration consultation',
        'ADR strategy',
        'Commercial arbitration',
        'Mediation support',
        'Arbitral pleadings',
        'Statement of claim',
        'Statement of defence',
        'Settlement review',
      ],
    },
    {
      title: 'Contract Drafting and Contract Disputes',
      text:
        'Business contracts require clear obligations, payment terms, risk allocation, dispute resolution clauses and termination mechanisms. KTR Law Associates assists with contract review, contract drafting, breach of contract disputes and commercial recovery strategy.',
      bullets: [
        'Contract drafting',
        'Contract review',
        'Breach of contract',
        'Vendor agreements',
        'Service agreements',
        'Commercial terms review',
        'Termination clauses',
        'Dispute clauses',
      ],
    },
    {
      title: 'Commercial Dispute Lawyer in Chennai',
      text:
        'Commercial disputes may involve unpaid invoices, vendor defaults, supply issues, partnership disagreements, business obligations, contractual violations and recovery claims. The correct remedy may involve negotiation, legal notice, civil suit, arbitration or commercial litigation.',
      bullets: [
        'Commercial disputes',
        'Payment recovery',
        'Business debt claims',
        'Vendor disputes',
        'Partnership disputes',
        'Commercial notices',
        'Civil recovery',
        'Arbitration support',
      ],
    },
    {
      title: 'Legal Audit and Business Risk Review',
      text:
        'A legal audit helps businesses identify possible contract gaps, statutory risks, dispute exposure, documentation weakness and compliance concerns before they become litigation problems. This is useful for companies, proprietors, partnerships and growing businesses.',
      bullets: [
        'Legal documentation audit',
        'Contract risk review',
        'Compliance issue review',
        'Internal document review',
        'Policy support',
        'Liability assessment',
        'Dispute prevention',
        'Management advisory',
      ],
    },
    {
      title: 'Corporate Litigation and Recovery Matters',
      text:
        'Where business disputes cannot be resolved through discussion or negotiation, legal proceedings may become necessary. The practice assists with corporate litigation, recovery suits, injunctions, civil proceedings, arbitration matters and appellate remedies where applicable.',
      bullets: [
        'Corporate litigation',
        'Recovery suits',
        'Commercial injunctions',
        'Civil court support',
        'Arbitration proceedings',
        'Execution matters',
        'Appeal review',
        'Dispute documentation',
      ],
    },
  ];

  const experiencePortfolio = [
    {
      company: 'Qube Cinema Technologies',
      role: 'Arbitration / Alternative Dispute Resolution',
      desc:
        'Experience connected with dispute resolution and arbitration-related legal processes involving commercial considerations.',
    },
    {
      company: 'Amrutanjan Health Care Ltd.',
      role: 'Corporate Legal Consultation',
      desc:
        'Legal support connected with compliance requirements, litigation strategy, property disputes and documentation.',
    },
    {
      company: 'India Agro Exports',
      role: 'Strategic Legal Advisory',
      desc:
        'Legal advisory experience connected with contract drafting, negotiations, compensation concerns and recovery proceedings.',
    },
    {
      company: 'Deco De Treno',
      role: 'Legal Counsel and Audit Support',
      desc:
        'Legal support connected with risk appraisal, statutory compliance review and contract documentation for business operations.',
    },
  ];

  const mentors = [
    {
      role: 'Junior Associate of',
      name: 'Late N.T. Vanamamalai',
      title: 'Senior Advocate',
      desc:
        'Professional exposure to legal accuracy, constitutional practice and ethical courtroom standards at the Chennai Bar.',
    },
    {
      role: 'Co-Associated with',
      name: 'S. Ashok Kumar',
      title: 'Senior Counsel',
      desc:
        'Professional exposure to High Court original and appellate practice, defence strategy and evidence scrutiny.',
    },
    {
      role: 'Associated with',
      name: 'A. Sasidharan',
      title: 'Advocate',
      desc:
        'Professional exposure to civil title matters, statutory compliance and corporate documentation support.',
    },
  ];

  const otherServedEst = [
    'P.S. Exports and Consolidates Pvt Ltd',
    'P.S. Weavers Pvt Ltd',
    'P.S. Apparels',
  ];

  const summaryData = [
    {
      service: 'Corporate Advisory',
      covers: 'Business legal consultation, risk review, notices and documentation',
      forum: 'Advisory / Civil Forums',
    },
    {
      service: 'Arbitration and ADR',
      covers: 'Commercial arbitration, mediation support and dispute resolution',
      forum: 'Arbitral Tribunals / ADR Forums',
    },
    {
      service: 'Contract Disputes',
      covers: 'Breach of contract, vendor issues, service agreements and recovery',
      forum: 'Civil Courts / Arbitration',
    },
    {
      service: 'Commercial Recovery',
      covers: 'Payment recovery, business dues, monetary claims and execution',
      forum: 'Civil Courts',
    },
    {
      service: 'Legal Audit',
      covers: 'Contract review, compliance risks and internal documentation review',
      forum: 'Advisory',
    },
    {
      service: 'Corporate Litigation',
      covers: 'Business disputes, injunctions, recovery suits and appeals',
      forum: 'Civil Courts / High Court',
    },
  ];

  const faqs = [
    {
      question: 'Can I contact KTR Law Associates if I am searching for a corporate lawyer near me?',
      answer:
        'Yes. KTR Law Associates is based in West Mambalam, Chennai, and assists businesses and individuals from nearby areas including T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and other parts of Chennai.',
    },
    {
      question: 'Does the office handle arbitration and ADR matters?',
      answer:
        'Yes. The practice assists with arbitration-related consultation, ADR strategy, pleadings, hearings, settlement discussions and commercial dispute resolution support depending on the facts and contract terms.',
    },
    {
      question: 'Can businesses get contract drafting and review support?',
      answer:
        'Yes. Businesses may seek support for contract drafting, contract review, service agreements, vendor contracts, dispute resolution clauses, payment terms and commercial risk review.',
    },
    {
      question: 'What should a company do before starting legal action for unpaid dues?',
      answer:
        'The company should review invoices, agreements, communications, limitation period, payment records and available proof. Depending on the case, legal notice, negotiation, civil recovery or arbitration may be considered.',
    },
    {
      question: 'Can commercial disputes be resolved without court proceedings?',
      answer:
        'Yes. Some commercial disputes can be resolved through negotiation, mediation, settlement discussions or arbitration depending on the contract terms and willingness of the parties.',
    },
    {
      question: 'Does the office assist with legal audits?',
      answer:
        'Yes. Legal audit support may include review of contracts, compliance exposure, dispute risks, internal documentation and legal process gaps for businesses.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20" id="corporate-adr-view">
      {/* SEO Header */}
      <section className="text-center space-y-5 max-w-4xl mx-auto" id="corp-title-header">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-300 bg-gold-50 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-gold-700 font-bold">
          <Briefcase className="h-4 w-4" />
          Corporate Advisory • Arbitration • ADR
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-navy-900 font-semibold tracking-tight leading-tight">
          Corporate Lawyer and Arbitration Lawyer in Chennai
        </h1>

        <div className="h-0.5 w-24 bg-gold-500 mx-auto"></div>

        <p className="text-sm sm:text-base text-gray-700 leading-8">
          KTR Law Associates provides corporate legal advisory, arbitration support, ADR strategy,
          contract drafting, contract dispute consultation, commercial recovery guidance and legal
          audit support in Chennai. The office is located in West Mambalam and serves nearby areas
          including T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam and Ramapuram.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded bg-navy-900 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-white hover:bg-gold-700 hover:text-navy-950 transition"
          >
            Contact for Corporate Consultation
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
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="corporate-local-seo-intro">
        <div className="lg:col-span-8 bg-white p-8 rounded border border-gold-200/60 shadow-sm space-y-5">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-gold-600 font-bold">
            <FileText className="h-4 w-4" />
            Business Legal Consultation
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-navy-900 font-semibold">
            Corporate Legal Advisory and ADR Support in West Mambalam, Chennai
          </h2>

          <p className="text-sm text-gray-700 leading-8">
            Corporate and commercial legal matters may involve contract drafting, vendor disputes,
            commercial recovery, arbitration clauses, legal notices, compliance review, business
            documentation, employment-related agreements, partnership concerns and litigation risk.
          </p>

          <p className="text-sm text-gray-700 leading-8">
            KTR Law Associates assists businesses with practical legal review, document-based
            strategy, dispute prevention, arbitration-related support and court representation where
            legal proceedings become necessary.
          </p>

          <div className="rounded border border-gold-100 bg-gold-50/30 p-5">
            <h3 className="font-serif text-lg font-semibold text-navy-900">
              Businesses usually require early legal review when:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                'A contract or commercial agreement is being drafted',
                'A vendor or business partner has breached terms',
                'Payment recovery or unpaid dues are pending',
                'An arbitration clause needs to be reviewed',
                'A legal notice has been received or must be sent',
                'A legal audit or compliance review is required',
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
              Corporate legal advisory and arbitration consultation for clients from West Mambalam
              and nearby Chennai localities.
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
              Corporate Law Search Focus
            </h2>

            <div className="mt-5 space-y-2 text-xs text-slate-300">
              <p>• corporate lawyer Chennai</p>
              <p>• arbitration lawyer Chennai</p>
              <p>• ADR lawyer Chennai</p>
              <p>• contract dispute lawyer Chennai</p>
              <p>• commercial dispute lawyer Chennai</p>
              <p>• corporate legal advisory Chennai</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Advisory Services */}
      <section className="space-y-8" id="corporate-services-section">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-serif text-navy-900 font-semibold">
            Corporate, Arbitration and ADR Services
          </h2>

          <p className="text-sm text-gray-600 leading-7">
            The practice covers business legal consultation, contract strategy, arbitration support,
            commercial recovery, legal audit, dispute prevention and corporate litigation support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisoryServices.map((service, idx) => (
            <article
              key={idx}
              className="bg-white p-8 rounded border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow"
              id={`corporate-service-${idx}`}
            >
              <div className="space-y-4">
                <div className="p-2.5 bg-navy-900 text-gold-400 rounded-full w-fit">
                  <Gavel className="h-4 w-4 text-gold-500" />
                </div>

                <h3 className="font-serif text-xl font-bold text-navy-900">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
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

      {/* Experience Portfolio */}
      <section className="space-y-6" id="corp-detailed-clientele">
        <div className="text-left border-b border-gold-200 pb-2">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy-900">
            Corporate Advisory and Arbitration Experience
          </h2>
          <p className="text-sm text-gray-600 leading-7 mt-2">
            Representative experience includes advisory, documentation, dispute resolution and
            corporate legal support connected with the following establishments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiencePortfolio.map((client, idx) => (
            <article
              key={idx}
              className="bg-white p-8 rounded border border-gold-200 shadow-sm hover:shadow-md transition-shadow"
              id={`corp-client-${idx}`}
            >
              <span className="inline-block px-2.5 py-1 bg-navy-50 text-[10px] font-mono uppercase tracking-widest text-navy-800 font-semibold rounded">
                {client.role}
              </span>

              <h3 className="font-serif text-base sm:text-lg font-bold text-navy-900 mt-3">
                {client.company}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed mt-3">
                {client.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Services Summary Table */}
      <section className="space-y-6" id="corporate-table-section">
        <div className="text-left border-b border-gold-200 pb-3 flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-gold-600" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900">
            Corporate Services and Legal Forums
          </h2>
        </div>

        <div className="overflow-x-auto bg-white shadow rounded border border-gold-200/50">
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

      {/* Professional Network */}
      <section className="bg-navy-900 text-white p-8 sm:p-12 rounded border border-gold-800/40 space-y-8" id="corp-network">
        <div className="text-center space-y-2">
          <Users className="h-6 w-6 text-gold-400 mx-auto" />
          <h2 className="font-serif text-xl sm:text-2xl text-gold-200">
            Professional Exposure and Legal Network
          </h2>
          <div className="h-px w-16 bg-gold-500 mx-auto"></div>
          <p className="text-xs text-gray-300 leading-6 max-w-3xl mx-auto">
            Advocate K. Thangarasu’s professional journey includes association and exposure with
            senior members of the legal profession, contributing to practical courtroom and advisory
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, idx) => (
            <article
              key={idx}
              className="bg-navy-950 p-6 rounded border border-gold-800/20 space-y-3"
              id={`mentor-card-${idx}`}
            >
              <span className="block text-[10px] font-mono uppercase tracking-widest text-gold-500 font-semibold">
                {mentor.role}
              </span>

              <h3 className="font-serif text-base font-bold text-gold-100">
                {mentor.name}
              </h3>

              <p className="text-[10px] font-mono tracking-wide text-gray-400 -mt-1">
                {mentor.title}
              </p>

              <p className="text-xs text-gray-300 font-sans leading-relaxed mt-2">
                {mentor.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Other Served Establishments */}
      <section className="bg-white p-8 rounded border border-gold-200/50 shadow-sm" id="corp-other-establishments">
        <div className="text-center mb-6">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-600 font-bold border-b border-gold-200 pb-2">
            Other Served Establishments and Business Operations
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {otherServedEst.map((est, idx) => (
            <div
              key={idx}
              className="px-5 py-3.5 bg-gold-50/30 rounded border border-gold-100 font-serif text-xs sm:text-sm font-semibold text-navy-800"
              id={`other-est-${idx}`}
            >
              {est}
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-slate-50 rounded border border-gold-200/60 p-8" id="corporate-internal-links">
        <h2 className="text-2xl font-serif text-navy-900 font-semibold">
          Related Legal Services
        </h2>

        <p className="mt-3 text-sm text-gray-600 leading-7">
          Corporate disputes may overlap with civil recovery, criminal complaints, cheque bounce
          matters, property disputes or contract enforcement. You can also review related practice
          areas below.
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
            href="/criminal-lawyer-chennai"
            className="rounded bg-white border border-gold-200 p-5 hover:border-gold-500 hover:shadow-sm transition"
          >
            <h3 className="font-serif text-base font-semibold text-navy-900">
              Criminal Advocate in Chennai
            </h3>
            <p className="mt-2 text-xs text-gray-600 leading-6">
              Bail, criminal trial defence, cheque bounce and police enquiry matters.
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
              Submit a corporate, contract or arbitration-related legal enquiry.
            </p>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto space-y-8" id="corporate-faqs">
        <div className="text-center space-y-2">
          <HelpCircle className="h-6 w-6 text-gold-600 mx-auto" />

          <h2 className="text-2xl sm:text-3xl font-serif text-navy-900 font-bold tracking-tight">
            Corporate Lawyer and Arbitration Lawyer Chennai FAQ
          </h2>

          <p className="text-sm text-gray-600 leading-7">
            Common questions about corporate legal advisory, contract disputes, arbitration, ADR,
            legal audits and commercial recovery matters.
          </p>

          <div className="h-0.5 w-16 bg-gold-500 mx-auto"></div>
        </div>

        <div className="space-y-4" id="corporate-faq-list">
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
      <section className="text-center bg-gradient-to-br from-navy-900 to-slate-950 text-white rounded border border-gold-700/40 p-8 sm:p-12" id="corporate-final-cta">
        <div className="max-w-3xl mx-auto space-y-4">
          <Phone className="h-8 w-8 text-gold-400 mx-auto" />

          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-gold-100">
            Need Corporate or Arbitration Legal Consultation in Chennai?
          </h2>

          <p className="text-sm text-gray-300 leading-7">
            Contact KTR Law Associates for corporate legal advisory, arbitration, ADR, contract
            dispute, commercial recovery, legal audit or business litigation-related consultation in
            West Mambalam and nearby Chennai areas.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded bg-gold-600 px-7 py-3 text-xs font-mono uppercase tracking-widest font-bold text-navy-950 hover:bg-gold-500 transition"
          >
            Submit Corporate Enquiry
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}