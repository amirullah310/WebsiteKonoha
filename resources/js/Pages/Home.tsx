import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Zap, Target, Flame, ChevronDown } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import MemberCard from '../components/MemberCard';
import { members } from '../data/members';

import heroBg from '../assets/images/background hero.jpg';
import aboutBg from '../assets/images/kotaKonoha.jpg';
import sejarahBg from '../assets/images/batukonoha.jpg';
import hokage7 from '../assets/images/7Hokage.jpg';
import topiHokage from '../assets/images/topiHokage.png';
import ukiran from '../assets/images/ukiran7hokage.jpg';
import hokageManusia from '../assets/images/7hokageversimanusia.png';

// Dummy list of technologies for infinite marquee
const technologies = [
  "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Node.js", "Express", "PostgreSQL", "MongoDB", "Figma", "Git", "GitHub", "Next.js"
];

const Particle = ({ delay, duration, x, size }: { delay: number, duration: number, x: number, size: number }) => (
  <motion.div
    className="absolute bottom-0 rounded-full bg-konoha-orange"
    style={{ width: size, height: size, left: `${x}%`, opacity: 0.6 }}
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: -window.innerHeight, opacity: [0, 0.8, 0], x: `${x + (Math.random() * 10 - 5)}%` }}
    transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
  />
);

import MainLayout from '../Layouts/MainLayout';

interface Service {
  id: number;
  title: string;
  description: string;
  image_path: string;
  price_range: string;
}

interface Props {
  services: Service[];
}

const Home = ({ services }: Props) => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // For Milestones
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const timelineHeight = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);

  // Floating particles gen
  const [particles, setParticles] = useState<Array<{id: number, delay: number, duration: number, x: number, size: number}>>([]);
  
  useEffect(() => {
    // Generate particles only on client to avoid hydration mismatch if doing SSR, though we use vite.
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
      x: Math.random() * 100,
      size: 2 + Math.random() * 4
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="w-full">
      {/* 1. Advanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroBg}')` }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-konoha-dark/60 via-konoha-dark/80 to-konoha-dark"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden mix-blend-screen">
          {particles.map(p => (
            <Particle key={p.id} delay={p.delay} duration={p.duration} x={p.x} size={p.size} />
          ))}
        </div>

        <motion.div 
          className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl"
          style={{ y: heroY, opacity }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Kelompok <span className="text-gradient">Konoha</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl text-konoha-scroll max-w-2xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Mewarisi Semangat Api. Mengukir Sejarah dengan Kode. Kami adalah shinobi modern di dunia digital.
          </motion.p>
        </motion.div>

        <motion.a 
          href="#about" 
          className="absolute bottom-12 z-20 group flex items-center justify-center w-14 h-14 rounded-full border-2 border-konoha-orange/50 hover:border-konoha-orange hover:bg-konoha-orange/20 transition-all duration-300 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
        >
          <ChevronDown className="text-konoha-orange group-hover:text-white" size={32} />
        </motion.a>
      </section>

      {/* 2. About & Visi Misi */}
      <section id="about" className="py-24 relative bg-konoha-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-konoha-orange/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-konoha-dark/40 to-konoha-dark/80 z-10 mix-blend-multiply"></div>
              <img src={aboutBg} alt="Desa Konoha" className="w-full h-auto relative z-0" />
            </motion.div>
            
            <div className="flex flex-col gap-6">
              <motion.div 
                className="flex items-center gap-3 mb-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Flame className="text-konoha-orange" size={32} />
                <h4 className="text-konoha-orange font-bold uppercase tracking-widest text-sm">Will of Fire</h4>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
              >
                Tentang <span className="text-gradient">Kami</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-konoha-muted leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
              >
                Kami adalah Kelompok Konoha, sekumpulan pengembang berdedikasi yang memiliki semangat juang pantang menyerah layaknya ninja sejati. Setiap baris kode yang kami tulis adalah wujud dari "Tekad Api" kami untuk menciptakan solusi digital terbaik.
              </motion.p>
              
              <motion.div 
                className="bg-konoha-light/80 backdrop-blur-sm p-6 rounded-xl border-l-4 border-konoha-orange mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl text-white mb-2">Visi & Misi</h3>
                <p className="text-konoha-scroll text-sm">Menjadi pelopor teknologi terdepan dengan mengedepankan kolaborasi tim yang solid, inovasi tanpa henti, dan dedikasi penuh terhadap kualitas perangkat lunak.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values (Bento Grid) */}
      <section id="values" className="py-24 bg-konoha-light border-y border-konoha-orange/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-konoha-orange rounded-full blur-[150px] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">Nilai <span className="text-gradient">Utama</span></h2>
            <p className="text-konoha-muted text-lg max-w-2xl mx-auto">Prinsip dasar yang menjadi pedoman kami dalam menyelesaikan setiap misi dan tantangan pengembangan sistem.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="md:col-span-2 bg-gradient-to-br from-konoha-dark/90 to-[#222]/90 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-konoha-orange/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Shield className="text-konoha-orange mb-6" size={48} />
              <h3 className="text-3xl text-white mb-4">Kerja Sama Tim (Teamwork)</h3>
              <p className="text-konoha-muted text-lg">"Mereka yang melanggar aturan adalah sampah, tapi mereka yang meninggalkan temannya lebih buruk dari sampah." Kami percaya kekuatan sesungguhnya terletak pada kolaborasi yang solid.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-konoha-dark/90 to-[#222]/90 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-konoha-orange/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Zap className="text-konoha-orange mb-6" size={48} />
              <h3 className="text-2xl text-white mb-4">Kecepatan Kilat</h3>
              <p className="text-konoha-muted text-base">Ekskusi yang cepat dan tangkas dalam metodologi Agile.</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-konoha-dark/90 to-[#222]/90 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-konoha-orange/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Target className="text-konoha-orange mb-6" size={48} />
              <h3 className="text-2xl text-white mb-4">Ketepatan Strategi</h3>
              <p className="text-konoha-muted text-base">Fokus pada solusi yang presisi dan arsitektur yang tangguh.</p>
            </motion.div>

            <motion.div 
              className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/5 group bg-konoha-dark"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-konoha-dark via-konoha-dark/50 to-transparent z-10 pointer-events-none"></div>
              <img src={topiHokage} alt="Hokage Hat" className="w-full h-full object-cover relative z-0 group-hover:scale-110 transition-transform duration-700 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal" />
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <h3 className="text-3xl text-white mb-2">Dedikasi Penuh (Will of Fire)</h3>
                <p className="text-konoha-scroll text-lg drop-shadow-md">Melindungi *codebase* dan memberikan yang terbaik untuk *user*.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3.5 Infinite Marquee (Tech Stack) */}
      {/* <section className="py-12 bg-konoha-orange overflow-hidden border-y border-konoha-red relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply"></div>
        <div className="flex w-[200%] md:w-[150%]">
          <motion.div 
            className="flex whitespace-nowrap gap-12 px-6 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            Double the array for seamless looping
            {[...technologies, ...technologies].map((tech, idx) => (
              <span key={idx} className="text-konoha-dark font-black text-2xl uppercase tracking-widest opacity-80">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* 4. Milestones / Sejarah */}
      <section className="py-32 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('${sejarahBg}')` }}>
        <div className="absolute inset-0 bg-konoha-dark/95 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl text-white mb-4">Sejarah <span className="text-gradient">Kelompok</span></h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative pl-8 ml-4 md:ml-auto" ref={timelineRef}>
            {/* Background Line */}
            <div className="absolute left-[3px] top-4 bottom-4 w-1 bg-white/10 rounded-full"></div>
            {/* Animated Progress Line */}
            <motion.div 
              className="absolute left-[3px] top-4 w-1 bg-konoha-orange rounded-full shadow-[0_0_15px_#ff7b00]"
              style={{ height: timelineHeight, transformOrigin: 'top' }}
            ></motion.div>

            <div className="space-y-16">
              {[
                { year: 'Misi Pertama', title: 'Pembentukan Tim', desc: 'Disatukan oleh visi yang sama untuk membangun aplikasi web yang revolusioner. Pertemuan pertama di akademi digital.' },
                { year: 'Misi Rank-B', title: 'Ekspansi Teknologi', desc: 'Mengadopsi React dan TypeScript sebagai senjata utama (Kunai) dalam pengembangan, mengeliminasi ratusan bug.' },
                { year: 'Misi Rank-S', title: 'Penguasaan Framework', desc: 'Menaklukan proyek skala besar dengan arsitektur modern layaknya jurus rahasia desa. Tim kami telah diakui kehebatannya.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="relative group"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <div className="absolute -left-[42px] top-1 w-6 h-6 bg-konoha-dark border-4 border-white/20 group-hover:border-konoha-orange rounded-full transition-colors duration-300 z-10"></div>
                  <span className="text-konoha-orange font-bold tracking-widest text-sm mb-2 block uppercase">{item.year}</span>
                  <h3 className="text-3xl text-white mb-3 font-accent">{item.title}</h3>
                  <p className="text-konoha-muted text-lg leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. Layanan Kami */}
      <section id="services" className="py-24 bg-konoha-light border-y border-konoha-orange/10 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">Layanan <span className="text-gradient">Kami</span></h2>
            <p className="text-konoha-muted text-lg max-w-2xl mx-auto">Kami menerima berbagai misi pembuatan website untuk membantu bisnis Anda berkembang di era digital.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services && services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-konoha-dark border border-white/10 rounded-2xl overflow-hidden hover:border-konoha-orange/50 transition-all duration-300 group"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-konoha-orange/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img src={`/${service.image_path}`} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-white mb-2">{service.title}</h3>
                  <p className="text-konoha-muted mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                    <span className="text-konoha-orange font-bold text-sm">{service.price_range}</span>
                    <button className="text-white text-sm bg-konoha-orange/20 hover:bg-konoha-orange px-4 py-2 rounded-full transition-colors">
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            {(!services || services.length === 0) && (
              <div className="col-span-full text-center text-konoha-muted">Belum ada layanan yang tersedia saat ini.</div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Team Roster Section */}
      <section id="members" className="py-24 bg-konoha-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">Para <span className="text-gradient">Shinobi</span> Kode</h2>
            <p className="text-konoha-muted text-lg max-w-2xl mx-auto">Kenali lebih dekat ketujuh anggota legendaris dari Kelompok Konoha, masing-masing dengan spesialisasi jutsu (skill) uniknya.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Galeri Konoha */}
      <section id="gallery" className="py-24 bg-konoha-light border-t border-konoha-orange/10 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-4">Galeri <span className="text-gradient">Desa</span></h2>
            <p className="text-konoha-muted">Rekam jejak dan pemandangan dari perjuangan kami.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[hokage7, ukiran, aboutBg, sejarahBg, heroBg, hokageManusia].map((imgSrc, idx) => (
              <motion.div 
                key={idx} 
                className="rounded-2xl overflow-hidden shadow-lg border border-white/5 aspect-video relative group cursor-none" 
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-konoha-orange/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                <img src={imgSrc} alt={`Gallery Image ${idx + 1}`} className="w-full h-full object-cover relative z-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call To Action */}
      {/* <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-konoha-orange to-konoha-red z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay z-10"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-20">
          <motion.h2 
            className="text-4xl md:text-6xl text-white font-black mb-8 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Siap Menjalankan Misi Bersama Kami?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-10 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Percayakan proyek IT Anda kepada shinobi-shinobi handal dari Kelompok Konoha. Kami siap merancang solusi revolusioner untuk masa depan Anda.
          </motion.p>
          <motion.button 
            className="bg-konoha-dark text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-2 hover:bg-white hover:text-konoha-red"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Hubungi Tim Kami
          </motion.button>
        </div>
      </section> */}
    </div>
  );
};

Home.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default Home;
