import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import type { Member } from '../data/members';

interface MemberCardProps {
  member: Member;
  index: number;
}

const MemberCard = ({ member, index }: MemberCardProps) => {
  return (
    <motion.div
      className="bg-konoha-light rounded-2xl overflow-hidden border border-konoha-orange/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(255,123,0,0.2)] transition-shadow duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Link href={`/member/${member.id}`} className="block">
        <div className="h-[250px] relative overflow-hidden flex justify-center items-end bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-konoha-orange rounded-full blur-[40px] opacity-20 group-hover:opacity-50 transition-opacity duration-300"></div>
          <img src={member.imageBgRemoved} alt={member.name} className="h-[90%] object-contain relative z-10 group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-6 text-center bg-black/20">
          <h3 className="text-2xl text-white mb-2 font-accent font-bold">{member.name}</h3>
          <p className="text-sm font-semibold uppercase tracking-widest text-gradient">{member.role}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default MemberCard;
