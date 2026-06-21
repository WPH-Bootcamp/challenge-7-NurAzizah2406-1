import type { ProjectItem } from '../types';
import willyImg from '../assets/images/imagewillynielsen.png';
import buildingImg from '../assets/images/imagebuildingfast.png';
import delonImg from '../assets/images/imagedelonlorenzo.png';

export const portfolioItems: ProjectItem[] = [
  {
    id: 1,
    title: 'Portofolio 1',
    category: 'Landing Page',
    image: willyImg,
    description: 'A personal landing page designed for Willy Nielsen, showcasing expertise and projects with interactive sections.',
    link: '#',
  },
  {
    id: 2,
    title: 'Portofolio 2',
    category: 'Landing Page',
    image: buildingImg,
    description: 'Building fast & interactive web experiences with custom charts, stats tracking, and beautiful dark layouts.',
    link: '#',
  },
  {
    id: 3,
    title: 'Portofolio 3',
    category: 'Landing Page',
    image: delonImg,
    description: 'A dark-themed personal showcase designed for Delon Lorenzo, featuring custom cards, tags, and contact flows.',
    link: '#',
  },
];
