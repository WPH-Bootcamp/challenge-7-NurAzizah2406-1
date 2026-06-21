/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 */

// ==========================================
// UI Component Types
// ==========================================

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// ==========================================
// Section Data Types
// ==========================================

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string; // key string to map our custom SVG icons
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  message: string;
  avatar: string;
  rating: number;
}

// ==========================================
// Navigation & Company Info Types
// ==========================================

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// ==========================================
// Form Types
// ==========================================

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// ==========================================
// Process & Industry Types
// ==========================================

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface IndustryTab {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
}

