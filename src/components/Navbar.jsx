import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#processo' },

];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner container">
        <a href="#" className="nav__logo">
          <img src="/logo.svg" alt="Tech Think Solutions" className="nav__logo-img" />


        </a>








        <div className="nav__links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
          ))}
        </div>

        <a
          href="https://wa.me/5517992204822"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav__cta"
        >
          Contato
        </a>

        <button
          className="nav__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5517992204822"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', marginTop: 8 }}
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
