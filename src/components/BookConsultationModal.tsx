import React, { useState } from 'react';
import { X, Calendar, Clock, Scale, BookOpen, CheckCircle, ShieldAlert, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteContent } from '../config/siteContent';

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookConsultationModal({ isOpen, onClose }: BookConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '11:00 AM',
    matterType: 'Criminal Litigation',
    brief: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<any | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please provide absolute Name, Phone No., and Appointment Date.");
      return;
    }

    setIsSubmitting(true);

    // Simulate high-security server logging
    setTimeout(() => {
      setIsSubmitting(false);
      const bookingRef = `KT-AC-${Math.floor(1000 + Math.random() * 9000)}`;
      setSuccessData({
        ref: bookingRef,
        name: formData.name,
        phone: formData.phone,
        date: formData.date,
        time: formData.timeSlot,
        matter: formData.matterType
      });
    }, 1000);
  };

  const resetAndClose = () => {
    setSuccessData(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      timeSlot: '11:00 AM',
      matterType: 'Criminal Litigation',
      brief: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" id="booking-modal-portal">
          
          {/* Backdrop blur effect */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <div className="flex min-h-screen items-center justify-center p-4 relative z-50">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-gold-50 border border-gold-400 rounded-lg shadow-2xl overflow-hidden p-6 sm:p-10 text-navy-900"
              id="booking-card"
            >
              {/* Top Close Column */}
              <button 
                onClick={resetAndClose}
                className="absolute top-4 right-4 p-2 text-navy-800 hover:text-gold-700 hover:bg-gold-200/50 rounded-full transition-colors"
                id="close-modal-button"
              >
                <X className="h-5 w-5" />
              </button>

              <AnimatePresence mode="wait">
                {successData ? (
                  /* Success Pass Block */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 text-center py-6"
                    id="booking-success-view"
                  >
                    <div className="inline-flex items-center justify-center p-3 bg-gold-600 rounded-full border border-gold-400 text-navy-950 shadow-md">
                      <Scale className="h-8 w-8" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wide text-gold-800">
                        Appointment Scheduled
                      </h3>
                      <p className="text-xs font-mono tracking-widest text-gray-500">Chamber Reference ID: {successData.ref}</p>
                    </div>

                    {/* Classic Legal Ticket Card */}
                    <div className="bg-white p-6 rounded border border-gold-350 shadow-inner max-w-md mx-auto text-left space-y-4 font-mono text-xs sm:text-sm">
                      <div className="border-b border-gold-100 pb-2 text-center">
                        <span className="font-serif font-extrabold text-xs text-navy-900 tracking-wider">CHAMBERS OF K. THANGARASU</span>
                        <p className="text-[10px] text-gray-400 -mt-0.5 uppercase">Advocate, Madras High Court</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-500">CLIENT NAME:</span>
                          <span className="font-bold font-sans text-navy-950 uppercase">{successData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">MOBILE LINE:</span>
                          <span className="font-bold text-navy-950">{successData.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">MATTER TOPIC:</span>
                          <span className="font-bold font-sans text-navy-950">{successData.matter}</span>
                        </div>
                        <div className="flex justify-between border-t border-gold-50 pt-2">
                          <span className="text-gray-500">CHOSEN DATE:</span>
                          <span className="font-bold text-gold-800">{successData.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">TIME SLOT:</span>
                          <span className="font-bold text-gold-800">{successData.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">CHamber floor:</span>
                          <span className="font-bold text-navy-900">2nd Floor, West Mambalam</span>
                        </div>
                      </div>

                      <div className="border-t border-gold-150 pt-3 text-[10px] text-gray-500 leading-normal font-sans italic text-center">
                        * Please report 10 minutes prior at West Mambalam chambers. Carry all relevant police summons or title actions paperwork.
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 font-sans max-w-md mx-auto">
                      A calendar slot confirmation has been registered for {successData.date}. If urgent changes are required, please telephone our direct line at <strong>{siteContent.contact.emergencyLine}</strong>.
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={resetAndClose}
                        className="bg-navy-900 hover:bg-gold-600 hover:text-navy-950 text-white font-serif font-extrabold text-xs tracking-widest uppercase px-6 py-3.5 rounded border border-gold-800/10 cursor-pointer"
                      >
                        CLOSE SECURE PASS
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Booking Intake Form */
                  <div className="space-y-6" id="booking-intake-view">
                    
                    {/* Header */}
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-navy-900">
                        Chamber Consultation Booking
                      </h3>
                      <p className="text-xs text-gray-600 font-sans">
                        Schedule a formal, confidential legal evaluation with Senior Advocate K. Thangarasu.
                      </p>
                    </div>

                    <form onSubmit={handleBookingSubmit} className="space-y-5" id="booking-form">
                      
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-650 font-bold">Your Name *</label>
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="e.g. Ramesh Kumar"
                            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 bg-white font-sans"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-650 font-bold">Direct Mobile *</label>
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. +91 94440 22284"
                            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 bg-white font-mono"
                          />
                        </div>
                      </div>

                      {/* Date & Time Slot */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-650 font-bold">Appointment Date *</label>
                          <input 
                            type="date" 
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 bg-white font-mono"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-650 font-bold">Preferred Timings *</label>
                          <select 
                            name="timeSlot"
                            value={formData.timeSlot}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 text-gray-800 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 bg-white font-serif"
                          >
                            <option value="10:00 AM">10:00 AM – morning session</option>
                            <option value="11:30 AM">11:30 AM – morning session</option>
                            <option value="12:30 PM">12:30 PM – noon session</option>
                            <option value="05:00 PM">05:00 PM – evening session</option>
                            <option value="06:30 PM">06:30 PM – evening session</option>
                            <option value="08:00 PM">08:00 PM – night session</option>
                          </select>
                        </div>
                      </div>

                      {/* Matter Type & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-650 font-bold">Subject Theme *</label>
                          <select 
                            name="matterType"
                            value={formData.matterType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 text-gray-800 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 bg-white font-serif"
                          >
                            <option value="Criminal trial defense">Criminal litigation & Bail</option>
                            <option value="Civil suits & properties">Civil litigation & property</option>
                            <option value="Appellate review petition">Madras High Court Appeal</option>
                            <option value="Arbitration proceedings">ADR & Arbitrations</option>
                            <option value="Corporate audits & compliance">Corporate legal consulting</option>
                            <option value="NI Act Cheque Bounce text">Cheque Bounce Matters</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-650 font-bold">Email (Optional)</label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. contact@domain.in"
                            className="w-full px-4 py-2.5 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 bg-white font-mono"
                          />
                        </div>
                      </div>

                      {/* Brief details */}
                      <div className="space-y-1">
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-650 font-bold">Matter Description brief *</label>
                        <textarea 
                          name="brief"
                          value={formData.brief}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="Please briefly explain courtroom or incident details for structured files preparation..."
                          className="w-full px-4 py-2.5 text-xs sm:text-sm rounded border border-gold-200 focus:outline-none focus:border-gold-500 bg-white font-sans"
                        />
                      </div>

                      {/* Notice */}
                      <div className="p-3 bg-navy-50 border border-navy-150 rounded flex items-start space-x-2.5 text-[10px] leading-normal text-navy-800 font-sans">
                        <ShieldAlert className="h-4 w-4 text-gold-600 flex-shrink-0 mt-0.5" />
                        <p>
                          <strong>Note:</strong> All chamber visits are handled strictly under confidentiality privilege. Please carry physical copies of FIRs, court orders, or deed copies for evaluations.
                        </p>
                      </div>

                      {/* Submit */}
                      <div className="pt-2 flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={resetAndClose}
                          className="px-5 py-3 border border-gray-300 rounded text-xs tracking-widest uppercase font-serif text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer animate-none"
                        >
                          CANCEL
                        </button>
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 bg-gradient-to-br from-gold-600 to-gold-700 hover:from-gold-500 hover:to-gold-600 active:scale-95 text-navy-950 font-serif font-extrabold text-xs tracking-widest uppercase rounded border border-gold-500/20 transition-all flex items-center space-x-2 disabled:opacity-50 cursor-pointer glow-btn-gold"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <span>SUBMITTING REGISTRY...</span>
                            </>
                          ) : (
                            <span>SCHEDULE CONSULTATION</span>
                          )}
                        </button>
                      </div>

                    </form>
                  </div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}
