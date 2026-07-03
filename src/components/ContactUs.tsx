import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckSquare,
  Loader2,
  HelpCircle,
  ArrowRight,
  Scale,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteContent } from '../config/siteContent';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Criminal Matter',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

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

  const legalSearchTerms = [
    'advocate near me',
    'lawyer near me',
    'law offices near me',
    'legal consultation near me',
    'civil lawyer Chennai',
    'criminal advocate Chennai',
    'property advocate Chennai',
    'family legal consultation Chennai',
  ];

  const contactFaqs = [
    {
      question: 'Can I contact KTR Law Associates if I am searching for an advocate near me?',
      answer:
        'Yes. KTR Law Associates is based in West Mambalam, Chennai, and serves clients from nearby areas including T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and other parts of Chennai.',
    },
    {
      question: 'Where is KTR Law Associates located?',
      answer:
        'KTR Law Associates is located in West Mambalam, Chennai. The office is accessible for clients from nearby Chennai localities including T. Nagar, Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam and Ramapuram.',
    },
    {
      question: 'What legal matters can I enquire about?',
      answer:
        'You can submit enquiries related to criminal matters, bail, civil disputes, property matters, partition issues, contract disputes, arbitration, corporate legal advisory and cheque bounce matters.',
    },
    {
      question: 'How can I schedule a legal consultation?',
      answer:
        'You can call the office directly, send an email, or submit the secure enquiry form on this contact page. The office will review your enquiry and contact you based on the details provided.',
    },
  ];

  const cleanPhoneNumber = (phone: string) => phone.replace(/[^\d+]/g, '');
  const primaryPhone = siteContent.contact.phoneNumbers[0];
  const secondaryPhone = siteContent.contact.phoneNumbers[1];

  const mapQuery = encodeURIComponent(
    `${siteContent.contact.address.line1} ${siteContent.contact.address.line2}`
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please enter Name, Phone Number, and your Message details.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email || 'Not provided',
          phone: formData.phone,
          subject: formData.subject,
          title: formData.subject,
          issue_type: formData.subject,
          message: formData.message,
          reference_no: 'CONTACT-' + Math.floor(100000 + Math.random() * 900000),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmittedMessage(
        `Thank you, ${formData.name}. Your enquiry regarding '${formData.subject}' has been successfully received. Our office will review your submission and contact you within 24 business hours.`
      );

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Criminal Matter',
        message: '',
      });
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      alert(`Email sending failed: ${error?.text || error?.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16" id="contact-us-view">
      {/* SEO Header */}
      <section className="text-center space-y-5 max-w-3xl mx-auto" id="contact-header">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-300 bg-gold-50 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-gold-700 font-bold">
          <MapPin className="h-4 w-4" />
          West Mambalam • Chennai
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-navy-900 font-semibold tracking-tight leading-tight">
          Contact KTR Law Associates — Advocate in West Mambalam, Chennai
        </h1>

        <div className="h-0.5 w-24 bg-gold-500 mx-auto"></div>

        <p className="text-sm sm:text-base text-gray-700 leading-8">
          KTR Law Associates provides legal consultation and representation for clients searching for
          an advocate near me, lawyer near me, law offices near me or legal consultation near me in
          West Mambalam and nearby Chennai areas including T. Nagar, Saidapet, Ashok Nagar,
          Kodambakkam, Nungambakkam and Ramapuram.
        </p>
      </section>

      {/* Local SEO Area Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="local-seo-contact-section">
        <div className="lg:col-span-7 bg-white rounded border border-gold-200/70 shadow-sm p-7 space-y-5">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-gold-600 font-bold">
            <Scale className="h-4 w-4" />
            Local Legal Consultation
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-navy-900 font-semibold">
            Legal Consultation Near West Mambalam and Nearby Chennai Areas
          </h2>

          <p className="text-sm text-gray-700 leading-8">
            Clients can contact KTR Law Associates for criminal litigation, bail matters, civil
            disputes, property issues, family-related legal consultation, corporate advisory,
            arbitration, cheque bounce matters and appellate representation before courts and forums
            in Chennai.
          </p>

          <p className="text-sm text-gray-700 leading-8">
            The office is based in West Mambalam and is accessible for clients from T. Nagar,
            Saidapet, Ashok Nagar, Kodambakkam, Nungambakkam, Ramapuram and surrounding Chennai
            localities.
          </p>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-gold-700 text-white hover:text-navy-950 px-6 py-3 rounded text-xs font-mono uppercase tracking-widest font-bold transition"
          >
            Open Location on Google Maps
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="rounded border border-gold-200 bg-slate-50 p-6">
            <h3 className="font-serif text-xl font-semibold text-navy-900">
              Nearby Areas Served
            </h3>

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

          <div className="rounded border border-gold-700/40 bg-navy-900 p-6">
            <h3 className="font-serif text-xl font-semibold text-white">
              Common Legal Searches Covered
            </h3>

            <p className="mt-3 text-xs text-slate-300 leading-6">
              These terms are included naturally through useful location and legal service content.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {legalSearchTerms.map((term) => (
                <span
                  key={term}
                  className="rounded-full border border-gold-700/40 bg-white/5 px-3 py-2 text-[11px] font-mono text-gold-200"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-grid">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-8 order-2 lg:order-1" id="contact-info">
          <div className="bg-slate-900 p-8 rounded border border-gold-600/40 shadow-xl space-y-6" id="office-particulars">
            <h2 className="font-serif text-2xl font-bold text-white border-b border-gold-500/30 pb-3">
              KTR Law Associates Contact Details
            </h2>

            <div className="space-y-6 font-sans">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-slate-800 text-gold-400 rounded border border-gold-600/20">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">
                    Main Office Address
                  </span>

                  <p className="text-xs sm:text-sm text-gray-100 leading-normal font-medium mt-1">
                    {siteContent.contact.address.line1}
                    <br />
                    {siteContent.contact.address.line2}
                  </p>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-slate-800 text-gold-400 rounded border border-gold-600/20">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">
                    Direct Phone Numbers
                  </span>

                  <p className="text-xs sm:text-sm font-mono text-gray-100 leading-normal font-semibold mt-1">
                    <a href={`tel:${cleanPhoneNumber(primaryPhone)}`} className="hover:text-gold-300 hover:underline">
                      {primaryPhone}
                    </a>
                    <br />
                    <a href={`tel:${cleanPhoneNumber(secondaryPhone)}`} className="hover:text-gold-300 hover:underline">
                      {secondaryPhone}
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-slate-800 text-gold-400 rounded border border-gold-600/20">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">
                    Email
                  </span>

                  <a
                    href={siteContent.contact.emailHref}
                    className="block text-xs sm:text-sm font-mono text-white hover:text-gold-300 hover:underline font-semibold mt-1"
                  >
                    {siteContent.contact.email}
                  </a>
                </div>
              </div>

              {/* Office hours */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-slate-800 text-gold-400 rounded border border-gold-600/20">
                  <Clock className="h-5 w-5" />
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">
                    Office Timings
                  </span>

                  <p className="text-xs sm:text-sm text-gray-100 leading-normal font-medium mt-1">
                    Weekdays:
                    <br />
                    {siteContent.contact.officeHours.weekdays}
                    <br />
                    <span className="block mt-1">Saturday & Sunday:</span>
                    {siteContent.contact.officeHours.weekend}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Box */}
          <div className="bg-navy-900 text-white p-6 rounded border border-gold-800/40 space-y-3" id="urgent-emergency-box">
            <h3 className="font-serif text-sm font-bold text-gold-400 uppercase tracking-widest flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Courtroom and Bail-Related Urgent Matters</span>
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              For arrest-related concerns, police station enquiries, active interrogation, search
              procedures or same-day Magistrate bail-related matters, please contact the office
              directly through {siteContent.contact.emergencyLine}.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded border border-gold-200/60 shadow-lg order-1 lg:order-2" id="contact-form-container">
          <h2 className="font-serif text-2xl font-bold text-navy-900 border-b border-gold-200 pb-3 mb-6">
            Secure Legal Enquiry Form
          </h2>

          <p className="text-sm text-gray-600 leading-7 mb-6">
            Submit your enquiry for criminal, civil, property, family, corporate, arbitration or
            cheque bounce matters. Please include only the basic facts required for the office to
            understand the nature of your legal issue.
          </p>

          <AnimatePresence mode="wait">
            {submittedMessage ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-gold-50 border border-gold-500 text-navy-950 p-6 rounded space-y-4"
                id="success-alert"
              >
                <div className="flex items-center space-x-2 text-gold-800">
                  <CheckSquare className="h-5 w-5 flex-shrink-0" />
                  <span className="font-serif font-bold text-sm tracking-wide">
                    SUBMISSION SUCCESSFUL
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-sans leading-relaxed">
                  {submittedMessage}
                </p>

                <button
                  onClick={() => setSubmittedMessage(null)}
                  className="text-xs font-mono tracking-wider font-extrabold text-gold-700 hover:underline focus:outline-none"
                >
                  SUBMIT ANOTHER ENQUIRY
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="legal-enquiry-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 font-bold">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 font-sans"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 font-bold">
                      Mobile Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your mobile number"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 font-bold">
                      Email Address Optional
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 font-mono"
                    />
                  </div>

                  {/* Subject selector */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 font-bold">
                      Type of Legal Matter *
                    </label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 font-serif text-gray-800"
                    >
                      <option value="Criminal Matter">Criminal Matter / Trial Defence</option>
                      <option value="Anticipatory or Regular Bail">Anticipatory or Regular Bail</option>
                      <option value="Civil Matter">Civil Litigation / Civil Dispute</option>
                      <option value="Property Dispute">Property Dispute / Partition</option>
                      <option value="Family Legal Consultation">Family Legal Consultation</option>
                      <option value="Contract Dispute or Recovery">Contract Dispute / Recovery</option>
                      <option value="Arbitration and Mediation">Arbitration / Mediation / ADR</option>
                      <option value="Corporate Legal Advisory">Corporate Legal Advisory</option>
                      <option value="Negotiable Instruments Act">NI Act / Cheque Bounce Matter</option>
                      <option value="Appellate Matter">Appeal / Revision / Appellate Matter</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 font-bold">
                    Brief Description of the Case / Dispute *
                  </label>

                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Provide relevant facts, dates, police station limits, court status or document details..."
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 font-sans leading-relaxed"
                  />
                </div>

                {/* Disclaimer */}
                <div className="bg-gold-50/20 p-4 rounded border border-gold-100 text-[10px] text-gray-600 leading-normal font-sans">
                  <strong>Notice:</strong> Submitting this enquiry form does not automatically
                  establish an advocate-client relationship. Please avoid sharing highly sensitive
                  information until a formal consultation is confirmed.
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-br from-navy-800 to-navy-950 hover:from-gold-600 hover:to-gold-700 hover:text-navy-950 font-serif font-bold text-xs tracking-widest uppercase p-4 rounded border border-gold-800/10 hover:border-gold-500/40 text-white transition-all flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 cursor-pointer glow-btn-gold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-gold-500" />
                      <span>TRANSMITTING ENQUIRY SECURELY...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>SUBMIT SECURE ENQUIRY</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Contact FAQ */}
      <section className="max-w-5xl mx-auto space-y-8" id="contact-seo-faq">
        <div className="text-center space-y-4">
          <div className="text-[11px] font-mono tracking-widest text-gold-600 uppercase font-semibold flex items-center justify-center gap-1.5">
            <HelpCircle className="h-3.5 w-3.5 text-gold-500" />
            Contact FAQ
          </div>

          <h2 className="text-3xl font-serif text-navy-900 font-semibold tracking-tight">
            Frequently Asked Questions About Legal Consultation
          </h2>

          <div className="h-0.5 w-16 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {contactFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded border border-gold-200/60 shadow-sm p-6"
            >
              <h3 className="font-serif text-base font-semibold text-navy-900">
                {faq.question}
              </h3>

              <p className="mt-3 text-sm text-gray-700 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}