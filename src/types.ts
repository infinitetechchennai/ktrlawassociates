export type ActiveView = 
  | 'home' 
  | 'about' 
  | 'civil' 
  | 'criminal' 
  | 'prosecutor' 
  | 'corporate-adr' 
  | 'contact';

export interface TrustIndicator {
  value: string;
  label: string;
}

export interface PracticeArea {
  area: string;
  focus: string;
  courts: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ConsultationBooking {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  serviceType: string;
  message?: string;
}
