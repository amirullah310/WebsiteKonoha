import amirImg from '../assets/images/amir.jpeg';
import amirBgRemoved from '../assets/images/amir-removebg-preview.png';

import faizImg from '../assets/images/faiz.jpeg';
import faizBgRemoved from '../assets/images/faiz-removebg-preview.png';

import imamImg from '../assets/images/imam.jpeg';
import imamBgRemoved from '../assets/images/imam-removebg-preview.png';

import izzaImg from '../assets/images/izza.jpeg';
import izzaBgRemoved from '../assets/images/izza-removebg-preview.png';

import khairatilImg from '../assets/images/khairatil.jpeg';
import khairatilBgRemoved from '../assets/images/khairatil-removebg-preview.png';

import lizzaImg from '../assets/images/lizza.jpeg';
import lizzaBgRemoved from '../assets/images/lizza-removebg-preview.png';

import mizanImg from '../assets/images/mizan.jpeg';
import mizanBgRemoved from '../assets/images/mizan-removebg-preview.png';

export interface Member {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  imageBgRemoved: string;
  skills: string[];
}

export const members: Member[] = [
  {
    id: 'amir',
    name: 'Amir',
    role: 'Hokage Ke-1',
    description: 'Anggota tangguh dengan tekad api yang membara. Selalu siap menghadapi tantangan coding di depan mata.',
    image: amirImg,
    imageBgRemoved: amirBgRemoved,
    skills: ['React', 'TypeScript', 'Tailwind', 'Chakra UI'],
  },
  {
    id: 'faiz',
    name: 'Faiz',
    role: 'Hokage Ke-2',
    description: 'Ahli strategi yang selalu mencari efisiensi dalam setiap baris kode yang ditulisnya.',
    image: faizImg,
    imageBgRemoved: faizBgRemoved,
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 'imam',
    name: 'Imam',
    role: 'Hokage Ke-3',
    description: 'Sang profesor algoritma. Menguasai berbagai bahasa pemrograman dari C++ hingga Python.',
    image: imamImg,
    imageBgRemoved: imamBgRemoved,
    skills: ['Python', 'Django', 'C++', 'Java'],
  },
  {
    id: 'izza',
    name: 'Izza',
    role: 'Hokage Ke-4',
    description: 'Bekerja dengan kecepatan kilat kuning. Menyelesaikan task frontend dalam sekejap mata.',
    image: izzaImg,
    imageBgRemoved: izzaBgRemoved,
    skills: ['Vue.js', 'Nuxt', 'Figma', 'CSS Animations'],
  },
  {
    id: 'khairatil',
    name: 'Khairatil',
    role: 'Hokage Ke-5',
    description: 'Fokus pada penyembuhan bugs dan merawat codebase agar selalu sehat dan clean.',
    image: khairatilImg,
    imageBgRemoved: khairatilBgRemoved,
    skills: ['Testing', 'Jest', 'Cypress', 'Git'],
  },
  {
    id: 'lizza',
    name: 'Lizza',
    role: 'Hokage Ke-6',
    description: 'Pengamat detail dan UI/UX yang tajam. Tidak ada pixel yang luput dari pandangannya.',
    image: lizzaImg,
    imageBgRemoved: lizzaBgRemoved,
    skills: ['UI/UX Design', 'Framer Motion', 'SASS', 'HTML5'],
  },
  {
    id: 'mizan',
    name: 'Mizan',
    role: 'Hokage Ke-7',
    description: 'Pemimpin yang menyatukan semua teknologi menjadi satu produk yang luar biasa.',
    image: mizanImg,
    imageBgRemoved: mizanBgRemoved,
    skills: ['Fullstack', 'Next.js', 'Prisma', 'Docker'],
  }
];
