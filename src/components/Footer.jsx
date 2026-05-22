import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const socials = [
  { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/5517992204822', label: 'WhatsApp' },
  { icon: <FaInstagram size={18} />, href: '#', label: 'Instagram' },
  { icon: <FaLinkedinIn size={18} />, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t('nav.links.home'), href: '#hero' },
    { label: t('nav.links.about'), href: '#sobre' },
    { label: t('nav.links.services'), href: '#servicos' },
    { label: t('nav.links.process'), href: '#processo' },
    { label: t('nav.contact'), href: '#contato' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <img src="/logo.svg" alt="Tech Think Solutions" className="footer__logo-img" />
            </a>
            <p className="footer__desc">
              {t('footer.desc')}
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
            <h4>{t('footer.navTitle')}</h4>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="footer__link">{l.label}</a>
            ))}
          </div>

          <div className="footer__contact">
            <h4>{t('footer.contactTitle')}</h4>
            <a href="https://wa.me/5517992204822" className="footer__link">📞 (17) 99220-4822</a>
            <span className="footer__link">📍 São José do Rio Preto - SP</span>
            <a href="mailto:contato@techthinksolutions.com.br" className="footer__link">✉️ contato@techthinksolutions.com.br</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Tech Think Solutions. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
