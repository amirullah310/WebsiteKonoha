import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, User, Star } from 'lucide-react';
import { members } from '../data/members';
import MainLayout from '../Layouts/MainLayout';

const Portfolio = ({ memberId }: { memberId: string }) => {
  const member = members.find(m => m.id === memberId);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-8">
        <h2 className="text-4xl text-white">Ninja Tidak Ditemukan</h2>
        <Link href="/" className="inline-block bg-gradient-to-r from-konoha-orange to-konoha-red text-white py-3 px-8 rounded-full font-bold shadow-[0_4px_15px_rgba(196,30,58,0.4)] hover:scale-105 transition-transform">
          Kembali ke Desa
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-[100px] pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 text-konoha-muted hover:text-konoha-orange transition-colors mb-12">
          <ArrowLeft size={20} /> Kembali ke Beranda
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
          {/* Profile Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-konoha-orange/20 max-w-[500px] mx-auto lg:mx-0">
              <img src={member.image} alt={member.name} className="w-full h-auto block" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-konoha-dark to-transparent"></div>
            </div>
          </motion.div>
          
          {/* Info Section */}
          <motion.div 
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border-b border-white/10 pb-6">
              <h1 className="text-5xl md:text-6xl text-white mb-2 font-accent">{member.name}</h1>
              <div className="flex items-center gap-2 text-xl font-semibold uppercase tracking-widest">
                <Star size={24} className="text-konoha-orange" />
                <span className="text-gradient">{member.role}</span>
              </div>
            </div>
            
            <div>
              <h3 className="flex items-center gap-2 text-2xl text-white mb-4">
                <User size={24} className="text-konoha-orange" /> Tentang Saya
              </h3>
              <p className="text-lg leading-relaxed text-konoha-muted">{member.description}</p>
            </div>
            
            <div>
              <h3 className="flex items-center gap-2 text-2xl text-white mb-4">
                <Code size={24} className="text-konoha-orange" /> Keahlian (Jutsu)
              </h3>
              <div className="flex flex-wrap gap-4">
                {member.skills.map((skill, index) => (
                  <motion.span 
                    key={index} 
                    className="bg-konoha-light border border-konoha-orange/20 py-2 px-6 rounded-full font-semibold text-konoha-orange"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    whileHover={{ scale: 1.1, backgroundColor: '#ff7b00', color: '#fff' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl text-white mb-4">Riwayat Misi (Portofolio)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2, 3].map((project) => (
                  <motion.div 
                    key={project} 
                    className="bg-konoha-light p-6 rounded-xl border border-white/5"
                    whileHover={{ y: -5, borderColor: '#ff7b00' }}
                  >
                    <h4 className="text-konoha-orange text-xl mb-2">Misi Peringkat {['S', 'A', 'B'][project-1]}</h4>
                    <p className="text-sm text-konoha-muted">Penyelesaian sistem aplikasi kompleks untuk klien rahasia dengan tingkat keberhasilan 100%.</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

Portfolio.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default Portfolio;
