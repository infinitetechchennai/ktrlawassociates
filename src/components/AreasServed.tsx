import React from 'react';
import {
  MapPin,
  Scale,
  Gavel,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Phone,
  Landmark,
} from 'lucide-react';

export default function AreasServed() {
  const areas = [
    {
      name: 'West Mambalam',
      title: 'Advocate in West Mambalam, Chennai',
      text:
        'KTR Law Associates is based in West Mambalam, Chennai, and provides legal consultation for civil, criminal, property, corporate, arbitration, cheque bounce and appellate matters.',
    },
    {
      name: 'T. Nagar',
      title: 'Lawyer near T. Nagar',
      text:
        'Clients from T. Nagar can contact KTR Law Associates for legal consultation related to civil disputes, criminal matters, bail, property disputes, contract issues and corporate advisory.',
    },
    {
      name: 'Saidapet',
      title: 'Advocate near Saidapet',
      text:
        'KTR Law Associates assists clients from Saidapet and nearby areas with civil litigation, criminal defence, property disputes, cheque bounce matters and court representation.',
    },
    {
      name: 'Ashok Nagar',
      title: 'Lawyer near Ashok Nagar',
      text:
        'Clients from Ashok Nagar may contact the office for legal guidance on civil suits, bail matters, criminal defence, property disputes, recovery matters and legal notices.',
    },
    {
      name: 'Kodambakkam',
      title: 'Advocate near Kodambakkam',
      text:
        'KTR Law Associates provides legal consultation for clients from Kodambakkam in matters involving civil litigation, criminal cases, property disputes and corporate legal support.',
    },
    {
      name: 'Nungambakkam',
      title: 'Lawyer near Nungambakkam',
      text:
        'Clients from Nungambakkam can seek consultation for civil, criminal, corporate, arbitration, contract dispute, recovery and appellate legal matters.',
    },
    {
      name: 'Ramapuram',
      title: 'Advocate near Ramapuram',
      text:
        'KTR Law Associates serves clients from Ramapuram and nearby Chennai localities for legal consultation in civil, criminal, property, bail and corporate matters.',
    },
    {
      name: 'Chennai',
      title: 'Advocate in Chennai',
      text:
        'The practice serves clients across Chennai with professional legal consultation and court representation depending on the nature of the dispute and appropriate forum.',
    },
  ];

  const practiceAreas = [
    {
      title: 'Civil Lawyer in Chennai',
      icon: Scale,
      text: 'Civil litigation, property disputes, partition, injunctions, recovery suits and civil appeals.',
      link: '/civil-lawyer-chennai',
    },
    {
      title: 'Criminal Advocate in Chennai',
      icon: Gavel,
      text: 'Criminal defence, bail, anticipatory bail, police enquiry, cheque bounce matters and trials.',
      link: '/criminal-lawyer-chennai',
    },
    {
      title: 'Corporate Lawyer in Chennai',
      icon: Briefcase,
      text: 'Corporate advisory, contract disputes, commercial recovery, arbitration and ADR support.',
      link: '/corporate-lawyer-chennai',
    },
  ];

  const keywords = [
    'advocate near me',
    'lawyer near me',
    'advocate in West Mambalam',
    'lawyer near T. Nagar',
    'advocate near Saidapet',
    'lawyer near Ashok Nagar',
    'advocate near Kodambakkam',
    'lawyer near Nungambakkam',
    'advocate near Ramapuram',
    'legal consultation Chennai',
  ];

  const faqs = [
    {
      question: 'Which areas does KTR Law Associates serve in Chennai?',
      answer:
        'KTR Law Associates is based in West Mambalam, Chennai, and serves clients from T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and other Chennai localities.',
    },
    {
      question: 'Can I contact the office if I am searching for an advocate near me?',
      answer:
        'Yes. Clients searching for an advocate near me or lawyer near me in West Mambalam and nearby Chennai areas may contact KTR Law Associates for legal consultation depending on the matter.',
    },
    {
      question: 'Does the office handle both civil and criminal cases?',
      answer:
        'Yes. The office handles civil litigation, property disputes, criminal defence, bail matters, cheque bounce cases, corporate advisory, arbitration and appellate matters.',
    },
    {
      question: 'Is KTR Law Associates located near T. Nagar?',
      answer:
        'Yes. The office is based in West Mambalam, which is close to T. Nagar, Saidapet, Ashok Nagar, Kodambakkam and other central Chennai localities.',
    },
    {
      question: 'Can businesses contact KTR Law Associates?',
      answer:
        'Yes. Businesses may contact the office for corporate legal advisory, contract disputes, commercial recovery, arbitration support and legal documentation review.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20" id="areas-served-view">
      {/* Header */}
      <section className="text-center space-y-5 max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-amber-700 font-bold">
          <MapPin className="h-4 w-4" />
          Areas Served • Chennai Legal Consultation
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-slate-900 font-semibold tracking-tight leading-tight">
          Advocate Near Me in West Mambalam and Nearby Chennai Areas
        </h1>

        <div className="h-0.5 w-24 bg-amber-500 mx-auto"></div>

        <p className="text-sm sm:text-base text-slate-700 leading-8">
          KTR Law Associates is located in West Mambalam, Chennai, and serves clients searching for
          an advocate near me, lawyer near me, civil lawyer near me, criminal advocate near me,
          property advocate near me and corporate lawyer in Chennai.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded bg-slate-950 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-white hover:bg-amber-600 hover:text-slate-950 transition"
          >
            Contact Advocate Office
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="/civil-lawyer-chennai"
            className="inline-flex items-center justify-center gap-2 rounded border border-amber-300 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-slate-900 hover:bg-amber-50 transition"
          >
            View Legal Services
          </a>
        </div>
      </section>

      {/* Local Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">
            <Landmark className="h-4 w-4" />
            Local Chennai Legal Practice
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-semibold">
            Legal Consultation in West Mambalam, T. Nagar, Saidapet, Ashok Nagar and Nearby Areas
          </h2>

          <p className="text-sm text-slate-700 leading-8">
            Many clients search online for an advocate near me or lawyer near me when they need
            immediate legal guidance. KTR Law Associates helps clients understand the legal process,
            required documents, available remedies and appropriate court or forum depending on the
            case.
          </p>

          <p className="text-sm text-slate-700 leading-8">
            The office handles legal consultation for civil litigation, property disputes, criminal
            defence, bail matters, cheque bounce cases, corporate legal advisory, arbitration,
            recovery claims, contract disputes and appellate proceedings.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
            {[
              'Civil litigation and property disputes',
              'Criminal defence and bail matters',
              'Cheque bounce and NI Act cases',
              'Corporate legal advisory',
              'Contract and commercial disputes',
              'Arbitration and ADR support',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-6">
            <h2 className="font-serif text-xl font-semibold text-slate-900 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-amber-600" />
              Search Keywords
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-amber-200 bg-white px-3 py-2 text-xs font-medium text-slate-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-white">
            <h2 className="font-serif text-xl font-semibold text-amber-200">
              Main Office Location
            </h2>

            <p className="mt-3 text-sm text-slate-300 leading-7">
              West Mambalam, Chennai
            </p>

            <a
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-amber-300 hover:text-amber-200"
            >
              View Contact Details
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </section>

      {/* Areas Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-serif text-slate-900 font-semibold">
            Chennai Areas Served by KTR Law Associates
          </h2>

          <p className="text-sm text-slate-600 leading-7">
            The office serves clients from West Mambalam and nearby Chennai localities for civil,
            criminal, property, corporate, arbitration and appellate legal matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area) => (
            <article
              key={area.name}
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition"
            >
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-slate-950 rounded-full text-amber-400 flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-7">
                    {area.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-slate-50 rounded-xl border border-slate-200 p-8" id="areas-practice-links">
        <h2 className="text-2xl font-serif text-slate-900 font-semibold">
          Legal Services Available for These Areas
        </h2>

        <p className="mt-3 text-sm text-slate-600 leading-7">
          Clients from nearby Chennai areas can contact KTR Law Associates for the following
          practice areas.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {practiceAreas.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.link}
                className="rounded bg-white border border-slate-200 p-6 hover:border-amber-500 hover:shadow-sm transition"
              >
                <Icon className="h-6 w-6 text-amber-600" />

                <h3 className="font-serif text-lg font-semibold text-slate-900 mt-4">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-6">
                  {item.text}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto space-y-8" id="areas-served-faqs">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold tracking-tight">
            Areas Served FAQ
          </h2>

          <p className="text-sm text-slate-600 leading-7">
            Common questions about legal consultation in West Mambalam and nearby Chennai areas.
          </p>

          <div className="h-0.5 w-16 bg-amber-500 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white border rounded border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between font-serif text-sm sm:text-base font-semibold text-slate-900 hover:text-amber-700 transition-colors">
                <span className="pr-4">{faq.question}</span>
                <span className="text-amber-600 text-lg group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>

              <div className="px-6 pb-5 pt-1 border-t border-slate-100 bg-amber-50/10">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-xl border border-amber-700/40 p-8 sm:p-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <Phone className="h-8 w-8 text-amber-400 mx-auto" />

          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-amber-100">
            Searching for an Advocate Near You in Chennai?
          </h2>

          <p className="text-sm text-slate-300 leading-7">
            Contact KTR Law Associates for legal consultation in West Mambalam, T. Nagar, Saidapet,
            Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and nearby Chennai areas.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded bg-amber-500 px-7 py-3 text-xs font-mono uppercase tracking-widest font-bold text-slate-950 hover:bg-amber-400 transition"
          >
            Contact Advocate Office
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}