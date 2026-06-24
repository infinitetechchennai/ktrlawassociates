import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Clock, Send, CheckSquare, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteContent } from '../config/siteContent';


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Criminal Matter',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.phone || !formData.message) {
    alert("Please enter Name, Phone Number, and your Message details.");
    return;
  }

  setIsSubmitting(true);

console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

try {
  await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
  name: formData.name,
  email: formData.email || "Not provided",
  phone: formData.phone,
  subject: formData.subject,
  title: formData.subject,
  issue_type: formData.subject,
  message: formData.message,
  reference_no: "CONTACT-" + Math.floor(100000 + Math.random() * 900000),
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
      message: ''
    });
  } catch (error: any) {
  console.error("EmailJS Error:", error);
  alert(`Email sending failed: ${error?.text || error?.message || "Unknown error"}`);
} finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16" id="contact-us-view">
      
      {/* View Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto" id="contact-header">
        <div className="text-xs font-mono uppercase tracking-widest text-gold-600 font-bold">Contact & Consultation</div>
        <h1 className="text-3xl sm:text-4xl font-serif text-navy-900 font-semibold tracking-tight">
          Contact the Advocate — Direct Offices
        </h1>
        <div className="h-0.5 w-24 bg-gold-500 mx-auto"></div>
        <p className="text-xs sm:text-sm text-gray-600 leading-normal">
          For urgent courtroom disputes, police stations bail support, or strategic multi-jurisdictional compliance reviews in Chennai, select your channel directly below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-grid">
        
        {/* Left Col: Contact Info (5 Cols) - Positioned below on mobile (order-2) but first on desktop (lg:order-1) */}
        <div className="lg:col-span-5 space-y-8 order-2 lg:order-1" id="contact-info">
          
          {/* Chamber Particulars Card - Updated to a dark, premium slate background */}
          <div className="bg-slate-900 p-8 rounded border border-gold-600/40 shadow-xl space-y-6" id="office-particulars">
            <h3 className="font-serif text-lg font-bold text-white border-b border-gold-500/30 pb-2">
              Chamber Particulars
            </h3>
            
            <div className="space-y-6 font-sans">
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-slate-800 text-gold-400 rounded border border-gold-600/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Main Office Address:</span>
                  <p className="text-xs sm:text-sm text-gray-100 leading-normal font-medium mt-1">
                    {siteContent.contact.address.line1}<br />
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
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Mobile Connections (Direct):</span>
                  <p className="text-xs sm:text-sm font-mono text-gray-100 leading-normal font-semibold mt-1">
                    {siteContent.contact.phoneNumbers[0]}<br />
                    {siteContent.contact.phoneNumbers[1]}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-slate-800 text-gold-400 rounded border border-gold-600/20">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Email:</span>
                  <a 
                    href={siteContent.contact.emailHref} 
                    className="block text-xs sm:text-sm font-mono text-white hover:text-gold-300 hover:underline font-semibold mt-1"
                  >
                    {siteContent.contact.email}
                  </a>
                </div>
              </div>

              {/* Office hours - Updated with new requested timings */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-slate-800 text-gold-400 rounded border border-gold-600/20">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Office Timings:</span>
                  <p className="text-xs sm:text-sm text-gray-100 leading-normal font-medium mt-1">
                    Weekdays:<br />
                    {siteContent.contact.officeHours.weekdays} <br />
                    <span className="block mt-1">Saturday & Sunday:</span>
                    {siteContent.contact.officeHours.weekend}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Note card */}
          <div className="bg-navy-900 text-white p-6 rounded border border-gold-800/40 space-y-3" id="urgent-emergency-box">
            <h4 className="font-serif text-sm font-bold text-gold-400 uppercase tracking-widest flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Courtroom Bail Emergencies</span>
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              For police arrests, active station-level interrogations, searches, or same-day Magistrate regular bail petitions, please directly connect with {siteContent.contact.emergencyLine}.
            </p>
          </div>

        </div>

        {/* Right Col: Contact Form (7 Cols) - Positioned first on mobile (order-1) but second on desktop (lg:order-2) */}
        <div className="lg:col-span-7 bg-white p-8 rounded border border-gold-200/60 shadow-lg order-1 lg:order-2" id="contact-form-container">
          <h3 className="font-serif text-lg font-bold text-navy-900 border-b border-gold-150 pb-2 mb-6">
            Secure Legal Enquiry Desk
          </h3>

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
                  <span className="font-serif font-bold text-sm tracking-wide">SUBMISSION SUCCESSFUL</span>
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
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 font-bold">Your Noble Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Your Full Name"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 font-sans"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 font-bold">Mobile Connection *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Your Mobile Number"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 font-mono"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 font-bold">Email ID (Optional)</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Your Email Address"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 font-mono"
                    />
                  </div>

                  {/* Subject selector */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 font-bold">Subject of Concern *</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 font-serif text-gray-800"
                    >
                      <option value="Criminal Defence & trial">Criminal Trial Defence</option>
                      <option value="Anticipatory / Regular Bail">Anticipatory or Regular Bail</option>
                      <option value="Property disputes / Partition">Property Dispute or Partition</option>
                      <option value="Contract disputes / Recovery">Contractual Recovery</option>
                      <option value="Alternate Dispute Resolution">Arbitration & ADR</option>
                      <option value="Corporate Retainer / Audit">Corporate Legal advisory</option>
                      <option value="Negotiable Instruments Act">NI Act (Cheque Bounce)</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 font-bold">Brief Description of the Case / Dispute *</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Provide relevant facts, dates, active police station limits or filing status..."
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 font-sans leading-relaxed"
                  />
                </div>

                {/* Disclaimer */}
                <div className="bg-gold-50/20 p-4 rounded border border-gold-100 text-[10px] text-gray-600 leading-normal font-sans">
                  <strong>Notice:</strong> Submitting this secure form does not establish an immediate advocate-client relationship. All case data entered remains strictly confidential within the parameters of Indian legal ethics.
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

    </div>
  );
}