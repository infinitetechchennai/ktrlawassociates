import React from 'react';
import {
  Scale,
  Gavel,
  Building2,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Landmark,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { siteContent } from '../config/siteContent';

export default function AdvocateProfile() {
  const practiceAreas = [
    'Civil litigation and property disputes',
    'Criminal defence and bail matters',
    'Cheque bounce and NI Act matters',
    'Corporate legal advisory',
    'Arbitration and ADR support',
    'Contract and commercial disputes',
    'Appeals and appellate matters',
    'Legal notice and documentation support',
  ];

  const courtsAndForums = [
    'Civil Courts',
    'Criminal Courts',
    'Magistrate Courts',
    'Sessions Courts',
    'Appellate Forums',
    'Arbitration and ADR Forums',
  ];

  const areasServed = [
    'West Mambalam',
    'T. Nagar',
    'Saidapet',
    'Ashok Nagar',
    'Kodambakkam',
    'Nungambakkam',
    'Ramapuram',
    'Chennai',
  ];

  const faqs = [
    {
      question: 'Who is Advocate K. Thangarasu?',
      answer:
        'Advocate K. Thangarasu is associated with KTR Law Associates, a legal practice based in West Mambalam, Chennai, providing consultation and representation in civil, criminal, property, corporate, arbitration, cheque bounce and appellate matters.',
    },
    {
      question: 'Where is KTR Law Associates located?',
      answer:
        'KTR Law Associates is located at 37/5, Arya Gowder Road, Gokulam Colony, Ramakrishnapuram, West Mambalam, Chennai, Tamil Nadu 600033.',
    },
    {
      question: 'What legal services does KTR Law Associates provide?',
      answer:
        'KTR Law Associates provides legal consultation and representation in civil litigation, criminal matters, property disputes, corporate legal advisory, arbitration, cheque bounce matters, legal notices and appellate matters.',
    },
    {
      question: 'Which areas does KTR Law Associates serve?',
      answer:
        'The office serves clients from West Mambalam, T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and nearby Chennai areas.',
    },
    {
      question: 'Can I contact KTR Law Associates for legal consultation near West Mambalam?',
      answer:
        'Yes. Clients searching for legal consultation near West Mambalam and nearby Chennai localities may contact KTR Law Associates through the official phone number or contact form on the website.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20" id="advocate-k-thangarasu-profile">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-amber-700 font-bold">
            <Scale className="h-4 w-4" />
            Advocate Profile • KTR Law Associates
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-slate-900 font-semibold tracking-tight leading-tight">
            Advocate K. Thangarasu — KTR Law Associates, West Mambalam, Chennai
          </h1>

          <div className="h-0.5 w-24 bg-amber-500"></div>

          <p className="text-sm sm:text-base text-slate-700 leading-8">
            Advocate K. Thangarasu is associated with KTR Law Associates, a legal practice based in
            West Mambalam, Chennai. The office provides legal consultation and representation in
            civil, criminal, property, corporate, arbitration, cheque bounce and appellate matters.
          </p>

          <p className="text-sm sm:text-base text-slate-700 leading-8">
            KTR Law Associates serves clients from West Mambalam, T. Nagar, Saidapet, Ashok Nagar,
            Kodambakkam, Nungambakkam, Ramapuram and nearby Chennai areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded bg-slate-950 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-white hover:bg-amber-600 hover:text-slate-950 transition"
            >
              Contact Advocate Office
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/areas-served"
              className="inline-flex items-center justify-center gap-2 rounded border border-amber-300 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-slate-900 hover:bg-amber-50 transition"
            >
              View Areas Served
            </a>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-8 text-white">
              <div className="h-20 w-20 rounded-full bg-amber-500/15 border border-amber-400/30 flex items-center justify-center">
                <Scale className="h-10 w-10 text-amber-300" />
              </div>

              <h2 className="font-serif text-2xl font-semibold text-amber-100 mt-6">
                Advocate K. Thangarasu
              </h2>

              <p className="text-sm text-slate-300 mt-2 leading-7">
                KTR Law Associates • West Mambalam, Chennai
              </p>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <MapPin className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>{siteContent.contact.address.full}</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-700">
                <Phone className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  {siteContent.contact.phoneNumbers.map((phone, index) => (
                    <a
                      key={phone}
                      href={siteContent.contact.phoneLinks[index]}
                      className="block hover:text-amber-700 transition"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-700">
                <Mail className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <a href={siteContent.contact.emailHref} className="hover:text-amber-700 transition break-all">
                  {siteContent.contact.email}
                </a>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">
            <Landmark className="h-4 w-4" />
            Professional Legal Practice
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-semibold">
            Legal Consultation and Representation in Chennai
          </h2>

          <p className="text-sm text-slate-700 leading-8">
            KTR Law Associates provides professional legal consultation based on the facts,
            documents and applicable legal process involved in each matter. The office assists
            clients in understanding available remedies, court procedure and practical next steps.
          </p>

          <p className="text-sm text-slate-700 leading-8">
            The practice covers civil litigation, criminal law, property disputes, cheque bounce
            matters, corporate advisory, arbitration, commercial disputes and appellate work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
            {practiceAreas.map((item) => (
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
              <Gavel className="h-5 w-5 text-amber-600" />
              Courts and Forums
            </h2>

            <div className="mt-5 space-y-3">
              {courtsAndForums.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <ShieldCheck className="h-4 w-4 text-amber-600" />
                  <span>{item}</span>
                </div>
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
              Contact Details
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </section>

      <section className="bg-slate-50 rounded-xl border border-slate-200 p-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">
          <Building2 className="h-4 w-4" />
          Local Areas Served
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-semibold mt-4">
          Advocate Office Serving West Mambalam and Nearby Chennai Areas
        </h2>

        <p className="mt-3 text-sm text-slate-600 leading-7">
          KTR Law Associates serves clients from the following Chennai localities for civil,
          criminal, property, corporate, arbitration, cheque bounce and appellate matters.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {areasServed.map((area) => (
            <span
              key={area}
              className="rounded-full border border-amber-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-8" id="advocate-profile-faq">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">
            <FileText className="h-4 w-4" />
            Helpful Answers
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold tracking-tight">
            Advocate K. Thangarasu and KTR Law Associates FAQ
          </h2>

          <p className="text-sm text-slate-600 leading-7">
            Clear answers to help clients and search engines understand KTR Law Associates.
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

      <section className="text-center bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-xl border border-amber-700/40 p-8 sm:p-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <Scale className="h-8 w-8 text-amber-400 mx-auto" />

          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-amber-100">
            Contact KTR Law Associates in West Mambalam, Chennai
          </h2>

          <p className="text-sm text-slate-300 leading-7">
            For legal consultation related to civil, criminal, property, corporate, arbitration,
            cheque bounce and appellate matters, contact the advocate office through the official
            phone number or contact page.
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