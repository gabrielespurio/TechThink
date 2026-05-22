import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiDeviceMobile, HiCog, HiSparkles, HiArrowRight, HiGlobe } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import './Services.css';

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();

  const services = t('services.items').map((item, i) => ({
    icon: [
      <HiCode size={24} />,
      <HiDeviceMobile size={24} />,
      <HiCog size={24} />,
      <HiSparkles size={24} />,
      <HiGlobe size={24} />
    ][i],
    ...item
  }));

  return (
    <section className="services section" id="servicos" ref={ref}>
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{t('services.tag')}</span>
          <h2 className="section-title">
            {t('services.title1')} <span className="accent">{t('services.titleAccent')}</span>
          </h2>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="services__card card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <div className="icon-box">{s.icon}</div>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-desc">{s.desc}</p>
              <ul className="bullet-list">
                {s.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <a href="#contato" className="services__card-link">
                {t('services.learnMore')} <HiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
