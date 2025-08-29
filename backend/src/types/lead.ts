export interface Lead {
  fullName: string;
  email: string;
  phone: string;
  instagram: string;
  sector: string;
  revenue: string;
}

export interface EmailData {
  to: string;
  from: string;
  subject: string;
  html: string;
  text: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  redirectUrl?: string;
  error?: string;
}

