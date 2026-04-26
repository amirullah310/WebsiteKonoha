import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
      setIsOpen(false);
    } else {
      setIsHidden(false);
    }
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tentang', path: '/#about' },
    { name: 'Nilai Kami', path: '/#values' },
    { name: 'Anggota', path: '/#members' },
    { name: 'Galeri', path: '/#gallery' },
  ];

  return (
    <motion.nav 
      animate={{ y: isHidden ? '-100%' : '0%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full bg-konoha-dark/80 backdrop-blur-md z-50 border-b border-konoha-orange/20"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="font-accent text-2xl font-extrabold flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gradient">Konoha</span>
              <span className="text-konoha-scroll">Group</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.path}
                className={`relative text-base font-medium transition-colors duration-300 hover:text-konoha-orange ${
                  location.pathname === link.path ? 'text-konoha-orange' : 'text-konoha-scroll'
                } group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-konoha-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-konoha-orange cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-konoha-light border-b border-konoha-orange/20 overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.path}
                  className="text-xl font-medium text-konoha-scroll hover:text-konoha-orange"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
