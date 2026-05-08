import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import './Footer.css';

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#processo' },

  { label: 'Contato', href: '#contato' },
];

const socials = [
  { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/5517992204822', label: 'WhatsApp' },
  { icon: <FaInstagram size={18} />, href: '#', label: 'Instagram' },
  { icon: <FaLinkedinIn size={18} />, href: '#', label: 'LinkedIn' },

];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <img src="/logo.svg" alt="Tech Think Solutions" className="footer__logo-img" />
            </a>






            <p className="footer__desc">
              Transformando negócios através de soluções digitais inovadoras, software sob medida e inteligência artificial.
            </p>
            <div className="footer__socials">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__nav">
            <h4>Navegação</h4>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="footer__link">{l.label}</a>
            ))}
          </div>

          <div className="footer__contact">
            <h4>Contato</h4>
            <a href="https://wa.me/5517992204822" className="footer__link">📞 (17) 99220-4822</a>
            <span className="footer__link">📍 São José do Rio Preto - SP</span>
            <a href="mailto:contato@techthinksolutions.com.br" className="footer__link">✉️ contato@techthinksolutions.com.br</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Tech Think Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
