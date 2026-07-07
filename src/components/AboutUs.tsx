import React from 'react';
import {
  Award,
  BookOpen,
  Scale,
  CheckSquare,
  HeartHandshake,
  Shield,
  Building,
  Briefcase,
  MapPin,
  ArrowRight,
  Phone,
  Users,
  Landmark,
  FileText,
  HelpCircle,
} from 'lucide-react';

import advocatePortrait from '../assets/images/WhatsApp Image 2026-06-22 at 5.11.45 PM.jpeg';

export default function AboutUs() {
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

  const profileHighlights = [
    {
      title: '25+ Years of Legal Practice',
      text: 'Continuous legal practice in Chennai across civil, criminal, appellate, property, corporate and arbitration-related matters.',
      icon: Award,
    },
    {
      title: 'Civil and Criminal Court Practice',
      text: 'Representation experience before civil courts, criminal courts, trial forums, appellate courts and the High Court of Madras.',
      icon: Scale,
    },
    {
      title: 'Corporate and ADR Support',
      text: 'Legal advisory experience connected with contracts, commercial disputes, arbitration, compliance review and business documentation.',
      icon: Briefcase,
    },
    {
      title: 'West Mambalam, Chennai Office',
      text: 'Serving clients from West Mambalam, T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and nearby areas.',
      icon: MapPin,
    },
  ];

  const philosophies = [
    {
      title: 'Preparation before representation',
      text:
        'Every matter requires careful review of facts, documents, legal issues, procedural requirements and available remedies before legal action is taken.',
    },
    {
      title: 'Clear and realistic legal guidance',
      text:
        'Clients are given practical legal guidance based on the available documents, case facts, court procedure, risk factors and possible legal remedies.',
    },
    {
      title: 'Ethical and professional practice',
      text:
        'Legal representation is handled with professional responsibility, respect for court procedure and attention to the rights and obligations of all parties.',
    },
  ];

  const forums = [
    {
      court: 'High Court of Madras',
      details:
        'Civil and criminal appellate matters, writ-related work, revisions, petitions and proceedings requiring higher court review.',
      relevance: 'Appellate and High Court practice',
    },
    {
      court: 'Sessions and District Courts',
      details:
        'Criminal trial matters, bail proceedings, sessions cases, evidence review and trial-stage representation.',
      relevance: 'Trial court representation',
    },
    {
      court: 'District and City Civil Courts',
      details:
        'Civil litigation, property disputes, partition suits, injunctions, recovery proceedings and contract-related disputes.',
      relevance: 'Civil court practice',
    },
    {
      court: 'Magistrate Courts and Special Courts',
      details:
        'Criminal complaints, cheque bounce matters, statutory offences, bail-related applications and trial proceedings.',
      relevance: 'Criminal and statutory matters',
    },
    {
      court: 'Arbitration and ADR Forums',
      details:
        'Commercial dispute resolution, arbitration-related support, settlement evaluation and alternative dispute resolution strategy.',
      relevance: 'Corporate and ADR support',
    },
  ];

  const legalFocus = [
    'Civil litigation',
    'Property disputes',
    'Criminal defence',
    'Bail matters',
    'Cheque bounce matters',
    'Corporate legal advisory',
    'Arbitration and ADR',
    'Contract disputes',
    'Recovery proceedings',
    'Civil and criminal appeals',
  ];

  const corporateClients = [
    'Amrutanjan Health Care Ltd.',
    'India Agro Exports',
    'Deco De Treno',
    'P.S. Exports and Consolidates Pvt Ltd.',
    'P.S. Weavers Pvt Ltd.',
    'P.S. Apparels',
  ];

  const professionalAssociations = [
    {
      role: 'Junior Associate of',
      name: 'Late N.T. Vanamamalai',
      title: 'Senior Advocate',
      desc:
        'Professional exposure to disciplined case preparation, legal accuracy and ethical courtroom standards.',
    },
    {
      role: 'Co-Associated with',
      name: 'S. Ashok Kumar',
      title: 'Senior Counsel',
      desc:
        'Professional exposure to High Court practice, appellate strategy, criminal defence work and evidence review.',
    },
    {
      role: 'Associated with',
      name: 'A. Sasidharan',
      title: 'Advocate',
      desc:
        'Professional exposure to civil litigation, property-related matters and corporate documentation support.',
    },
  ];

  const faqs = [
    {
      question: 'Who is Advocate K. Thangarasu?',
      answer:
        'Advocate K. Thangarasu is a Chennai-based advocate associated with KTR Law Associates, with more than 25 years of legal practice across civil, criminal, property, corporate, arbitration and appellate matters.',
    },
    {
      question: 'Where is KTR Law Associates located?',
      answer:
        'KTR Law Associates is located in West Mambalam, Chennai, and serves clients from nearby areas including T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and other Chennai localities.',
    },
    {
      question: 'What legal services does KTR Law Associates handle?',
      answer:
        'The office handles civil litigation, property disputes, criminal defence, bail matters, cheque bounce cases, contract disputes, corporate advisory, arbitration, recovery proceedings and appeal-related matters.',
    },
    {
      question: 'Can I contact the office if I am searching for an advocate near me?',
      answer:
        'Yes. Clients searching for an advocate near me or lawyer near me in West Mambalam and nearby Chennai areas may contact KTR Law Associates for legal consultation depending on the nature of the matter.',
    },
    {
      question: 'Does the office handle both civil and criminal cases?',
      answer:
        'Yes. KTR Law Associates handles both civil and criminal matters, including property disputes, injunctions, recovery suits, bail matters, criminal trials, cheque bounce matters and appeals.',
    },
    {
      question: 'Does the office provide corporate legal advisory?',
      answer:
        'Yes. The office assists with corporate legal advisory, contract review, commercial disputes, arbitration-related support, recovery matters and legal documentation review.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24" id="about-us-view">
      {/* SEO Header */}
      <section className="text-center space-y-5 max-w-4xl mx-auto" id="about-page-header">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-amber-700 font-bold">
          <Scale className="h-4 w-4" />
          Advocate Profile • KTR Law Associates • Chennai
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-slate-900 font-semibold tracking-tight leading-tight">
          About Advocate K. Thangarasu and KTR Law Associates in Chennai
        </h1>

        <div className="h-0.5 w-24 bg-amber-500 mx-auto"></div>

        <p className="text-sm sm:text-base text-slate-700 leading-8">
          KTR Law Associates is an advocate office in West Mambalam, Chennai, led by Advocate
          K. Thangarasu. The practice assists clients with civil litigation, criminal defence,
          property disputes, bail matters, cheque bounce cases, corporate legal advisory,
          arbitration, contract disputes and appellate proceedings.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded bg-slate-950 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-white hover:bg-amber-600 hover:text-slate-950 transition"
          >
            Contact KTR Law Associates
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

      {/* Advocate Profile Section */}
      <section className="bg-white border border-slate-200/80 shadow-xl rounded-xl overflow-hidden" id="advocate-profile-section">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-slate-950 relative min-h-[450px] lg:min-h-full flex flex-col justify-between p-8 sm:p-10">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="relative z-10 w-full flex justify-center items-center flex-grow mb-6">
              <div className="relative p-1 bg-gradient-to-b from-amber-400 to-amber-600 rounded-lg shadow-2xl max-w-xs w-full overflow-hidden aspect-[4/5]">
                <img
                  src={advocatePortrait}
                  alt="Advocate K. Thangarasu, KTR Law Associates, West Mambalam Chennai"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>

            <div className="relative z-10 bg-slate-900/90 border border-amber-500/20 rounded-lg p-5 space-y-3 font-sans">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                <h2 className="font-serif text-2xl sm:text-3xl text-amber-200 font-bold tracking-wide">
                  K. Thangarasu
                </h2>

                <span className="self-start sm:self-auto text-[10px] font-mono bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">
                  Advocate
                </span>
              </div>

              <p className="text-xs text-slate-400 font-mono">
                Enrolled: 14th February 2001
              </p>

              <div className="h-px bg-slate-800 my-2"></div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <p className="text-amber-400/90 font-medium">Professional Associations:</p>
                <p className="pl-2 border-l border-amber-500/30">
                  • Late N.T. Vanamamalai, Senior Advocate
                </p>
                <p className="pl-2 border-l border-amber-500/30">
                  • S. Ashok Kumar, Senior Counsel
                </p>
                <p className="pl-2 border-l border-amber-500/30">
                  • A. Sasidharan, Advocate
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase text-amber-600 font-bold tracking-wider">
              <Shield className="h-4 w-4" />
              <span>Professional Legal Experience</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              25+ Years of Advocacy Across Civil, Criminal and Corporate Legal Matters
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-8 font-sans">
              Advocate K. Thangarasu has been in legal practice since 2001 and has handled a wide
              range of legal matters in Chennai. His practice includes civil litigation, property
              disputes, criminal defence, bail proceedings, cheque bounce matters, corporate legal
              advisory, arbitration-related work and appellate proceedings.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-8 font-sans">
              KTR Law Associates focuses on document-based legal review, clear client guidance,
              professional case preparation and representation before appropriate courts and forums
              depending on the nature of the dispute.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {profileHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start space-x-3 p-4 bg-slate-50 border border-slate-200 rounded-lg"
                  >
                    <Icon className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />

                    <div className="text-xs">
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-500 leading-6 mt-1">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Area Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="about-local-seo-section">
        <div className="lg:col-span-8 bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">
            <MapPin className="h-4 w-4" />
            Local Legal Practice
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-semibold">
            Advocate in West Mambalam, Chennai for Civil, Criminal and Corporate Matters
          </h2>

          <p className="text-sm text-slate-700 leading-8">
            Clients searching for an advocate near me, lawyer near me, civil lawyer near me,
            criminal advocate near me, property advocate near me or corporate lawyer in Chennai can
            contact KTR Law Associates for legal consultation based on the nature of their matter.
          </p>

          <p className="text-sm text-slate-700 leading-8">
            The office is based in West Mambalam and serves clients from nearby localities including
            T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and other parts of
            Chennai.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
            {legalFocus.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckSquare className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-6">
            <h2 className="font-serif text-xl font-semibold text-slate-900 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-amber-600" />
              Areas Served
            </h2>

            <p className="mt-3 text-sm text-slate-600 leading-7">
              Legal consultation for clients from West Mambalam and nearby Chennai areas.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-amber-200 bg-white px-3 py-2 text-xs font-medium text-slate-700"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-white">
            <h2 className="font-serif text-xl font-semibold text-amber-200">
              About Page Search Focus
            </h2>

            <div className="mt-5 space-y-2 text-xs text-slate-300">
              <p>• advocate in West Mambalam</p>
              <p>• advocate in Chennai</p>
              <p>• lawyer near me Chennai</p>
              <p>• KTR Law Associates</p>
              <p>• Advocate K. Thangarasu</p>
              <p>• legal consultation Chennai</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Core Philosophy */}
      <section className="space-y-10" id="philosophy-section">
        <div className="text-center space-y-2">
          <BookOpen className="h-6 w-6 text-amber-600 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-semibold tracking-tight">
            Core Legal Philosophy
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl mx-auto leading-7">
            Legal representation requires preparation, clarity, professional judgment and respect
            for procedure.
          </p>
          <div className="h-0.5 w-20 bg-amber-500 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((philosophy, idx) => (
            <article
              key={philosophy.title}
              className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-500/30 transition-all duration-300"
              id={`philosophy-card-${idx}`}
            >
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-amber-500/10 text-amber-700 font-serif font-bold text-sm">
                0{idx + 1}
              </div>

              <h3 className="font-serif text-base font-bold text-slate-900 mt-4">
                {philosophy.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mt-3">
                {philosophy.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Court Experience */}
      <section className="bg-white p-8 sm:p-12 border border-slate-200/80 shadow-xl rounded-xl space-y-8" id="experience-section">
        <div className="text-left space-y-2 border-b border-slate-100 pb-4">
          <Landmark className="h-6 w-6 text-amber-600" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Court and Forum Experience
          </h2>
          <p className="text-sm text-slate-500 font-sans leading-7">
            KTR Law Associates handles legal matters before appropriate courts, tribunals and
            forums depending on the case type, jurisdiction and available remedy.
          </p>
        </div>

        <div className="space-y-4">
          {forums.map((forum, idx) => (
            <article
              key={forum.court}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 rounded-lg hover:bg-slate-50/80 transition-all duration-200 border border-slate-100 pl-6 relative overflow-hidden"
              id={`forum-item-${idx}`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>

              <div className="md:col-span-4 flex items-center">
                <h3 className="font-serif text-sm sm:text-base font-bold text-slate-900">
                  {forum.court}
                </h3>
              </div>

              <div className="md:col-span-5 flex items-center">
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {forum.details}
                </p>
              </div>

              <div className="md:col-span-3 bg-slate-50 border border-slate-200 p-3 rounded-md flex items-center justify-center text-center">
                <p className="text-[10px] sm:text-xs font-mono text-slate-700 font-medium tracking-wide">
                  {forum.relevance}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Corporate Legal Experience */}
      <section className="bg-slate-950 text-white p-8 sm:p-12 rounded-xl border border-slate-800 shadow-xl relative overflow-hidden" id="corporate-advisory-section">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-amber-500/5 z-0"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase text-amber-400 font-bold tracking-wider">
              <Building className="h-4 w-4" />
              <span>Corporate Legal Experience</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-amber-100 tracking-tight">
              Corporate Advisory, Contract Review and Arbitration-Related Support
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-7 max-w-2xl">
              In addition to individual litigation, the practice also assists businesses with
              corporate legal advisory, contract review, commercial dispute strategy, legal notices,
              recovery concerns, compliance-related review and arbitration-related support.
            </p>

            <a
              href="/corporate-lawyer-chennai"
              className="inline-flex items-center gap-2 rounded bg-amber-500 px-5 py-3 text-xs font-mono uppercase tracking-widest font-bold text-slate-950 hover:bg-amber-400 transition"
            >
              View Corporate Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 p-6 rounded-lg">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold mb-3">
              Corporate Advisory Experience Connected With:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-300 font-sans">
              {corporateClients.map((client) => (
                <div key={client} className="flex items-center space-x-2 py-1 border-b border-slate-800/60">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Associations */}
      <section className="bg-slate-950 text-white p-8 sm:p-12 rounded-xl border border-slate-800 space-y-8" id="professional-associations-section">
        <div className="text-center space-y-2">
          <Users className="h-6 w-6 text-amber-400 mx-auto" />
          <h2 className="font-serif text-xl sm:text-2xl text-amber-200">
            Professional Associations and Formative Legal Exposure
          </h2>
          <div className="h-px w-16 bg-amber-500 mx-auto"></div>
          <p className="text-xs text-slate-300 leading-6 max-w-3xl mx-auto">
            Advocate K. Thangarasu’s professional journey includes association and exposure with
            senior members of the legal profession in Chennai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professionalAssociations.map((mentor, idx) => (
            <article
              key={mentor.name}
              className="bg-slate-900 p-6 rounded border border-amber-800/20 space-y-3"
              id={`professional-association-${idx}`}
            >
              <span className="block text-[10px] font-mono uppercase tracking-widest text-amber-500 font-semibold">
                {mentor.role}
              </span>

              <h3 className="font-serif text-base font-bold text-amber-100">
                {mentor.name}
              </h3>

              <p className="text-[10px] font-mono tracking-wide text-slate-400 -mt-1">
                {mentor.title}
              </p>

              <p className="text-xs text-slate-300 font-sans leading-relaxed mt-2">
                {mentor.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Public Service Orientation */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10" id="public-service-section">
        <article className="bg-slate-950 text-white p-8 sm:p-10 rounded-xl border border-slate-800 space-y-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-amber-500/5 z-0"></div>

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold">
              <HeartHandshake className="h-4 w-4" />
              <span>Public Trust Orientation</span>
            </div>

            <h2 className="font-serif text-xl sm:text-2xl font-medium text-amber-100 tracking-tight">
              Responsible Legal Practice
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-7 font-sans">
              Legal practice requires responsibility to clients, courts and the justice system.
              KTR Law Associates approaches litigation with professional preparation, clear
              communication and respect for legal process.
            </p>
          </div>
        </article>

        <article className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200/80 shadow-sm space-y-5">
          <div className="inline-flex items-center space-x-2 text-amber-700 font-mono text-xs uppercase tracking-widest font-semibold">
            <FileText className="h-4 w-4" />
            <span>Case Preparation Approach</span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Document-Based Review and Practical Legal Strategy
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-7 font-sans">
            Civil, criminal and corporate matters are reviewed based on facts, documents, court
            procedure, limitation, available remedies and the client’s practical objective. This
            helps identify the correct legal route before initiating proceedings.
          </p>
        </article>
      </section>

      {/* Internal Links */}
      <section className="bg-slate-50 rounded-xl border border-slate-200 p-8" id="about-internal-links">
        <h2 className="text-2xl font-serif text-slate-900 font-semibold">
          Explore Practice Areas
        </h2>

        <p className="mt-3 text-sm text-slate-600 leading-7">
          Learn more about the legal services handled by KTR Law Associates in Chennai.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="/civil-lawyer-chennai"
            className="rounded bg-white border border-slate-200 p-5 hover:border-amber-500 hover:shadow-sm transition"
          >
            <h3 className="font-serif text-base font-semibold text-slate-900">
              Civil Lawyer in Chennai
            </h3>

            <p className="mt-2 text-xs text-slate-600 leading-6">
              Civil litigation, property disputes, injunctions and recovery matters.
            </p>
          </a>

          <a
            href="/criminal-lawyer-chennai"
            className="rounded bg-white border border-slate-200 p-5 hover:border-amber-500 hover:shadow-sm transition"
          >
            <h3 className="font-serif text-base font-semibold text-slate-900">
              Criminal Advocate in Chennai
            </h3>

            <p className="mt-2 text-xs text-slate-600 leading-6">
              Bail, criminal defence, cheque bounce and trial representation.
            </p>
          </a>

          <a
            href="/corporate-lawyer-chennai"
            className="rounded bg-white border border-slate-200 p-5 hover:border-amber-500 hover:shadow-sm transition"
          >
            <h3 className="font-serif text-base font-semibold text-slate-900">
              Corporate and Arbitration
            </h3>

            <p className="mt-2 text-xs text-slate-600 leading-6">
              Corporate advisory, contract disputes, arbitration and ADR support.
            </p>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto space-y-8" id="about-faqs">
        <div className="text-center space-y-2">
          <HelpCircle className="h-6 w-6 text-amber-600 mx-auto" />

          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold tracking-tight">
            About KTR Law Associates FAQ
          </h2>

          <p className="text-sm text-slate-600 leading-7">
            Common questions about Advocate K. Thangarasu, KTR Law Associates and legal consultation
            in Chennai.
          </p>

          <div className="h-0.5 w-16 bg-amber-500 mx-auto"></div>
        </div>

        <div className="space-y-4" id="about-faq-list">
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
      <section className="text-center bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-xl border border-amber-700/40 p-8 sm:p-12" id="about-final-cta">
        <div className="max-w-3xl mx-auto space-y-4">
          <Phone className="h-8 w-8 text-amber-400 mx-auto" />

          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-amber-100">
            Need Legal Consultation in Chennai?
          </h2>

          <p className="text-sm text-slate-300 leading-7">
            Contact KTR Law Associates for civil, criminal, property, corporate, arbitration,
            cheque bounce, bail or appellate legal consultation in West Mambalam and nearby Chennai
            areas.
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