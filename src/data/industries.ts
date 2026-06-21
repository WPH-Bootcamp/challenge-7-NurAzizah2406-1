import type { IndustryTab } from '../types';
import industryImg from '../assets/images/IndustryImageContainer2.png';
import jabatTangan from '../assets/images/JabatTangan.png';
import obatObatan from '../assets/images/Obat-obatan.png';

export const industryTabs: IndustryTab[] = [
  {
    id: 'fintech',
    label: 'Fintech',
    title: 'Fintech Solutions',
    description: 'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    image: industryImg,
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    title: 'E-Commerce',
    description: 'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    image: jabatTangan,
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    title: 'Healthcare',
    description: 'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    image: obatObatan,
  },
];
