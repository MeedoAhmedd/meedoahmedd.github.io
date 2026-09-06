import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { site, link } from '../data/site';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const cv = link(site.cv);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Work', to: '/work' },
    { name: 'About', to: '/#about' },
    { name: 'Experience', to: '/#experience' },
    { name: 'Contact', to: '/#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-950/80 backdrop-blur-md py-4 border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-xl font-bold tracking-tighter mix-blend-difference z-50 font-mono">
            M.AHMED
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={item.to}
                className="text-sm uppercase tracking-widest hover:text-white/70 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          {cv ? (
            <motion.a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs font-mono uppercase tracking-widest px-4 py-2 border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all"
            >
              View CV
            </motion.a>
          ) : null}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center gap-12 md:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-4xl font-medium tracking-tight hover:text-neutral-500 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              {cv ? (
                <a
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono uppercase tracking-widest px-6 py-3 border border-white/20 hover:border-white/60 transition-all"
                >
                  View CV
                </a>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
