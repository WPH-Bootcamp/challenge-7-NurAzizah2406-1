import type { TeamMember } from '../types';
import woman1 from '../assets/images/Woman-1.png';
import buildingFast from '../assets/images/imagebuildingfast.png';
import delonLorenzo from '../assets/images/imagedelonlorenzo.png';
import willyNielsen from '../assets/images/imagewillynielsen.png';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    position: 'Chief Executive Officer',
    image: woman1,
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
  },
  {
    id: 2,
    name: 'Delon Lorenzo',
    position: 'Chief Technology Officer',
    image: delonLorenzo,
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
  },
  {
    id: 3,
    name: 'Jessica Taylor',
    position: 'Head of UI/UX Design',
    image: buildingFast,
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 4,
    name: 'Willy Nielsen',
    position: 'Lead Software Architect',
    image: willyNielsen,
    socialLinks: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
];
