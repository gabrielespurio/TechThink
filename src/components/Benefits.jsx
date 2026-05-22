import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiTrendingUp, HiCurrencyDollar, HiGlobe, HiViewGrid, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import './Benefits.css';

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();

  const benefits = t('benefits.items').map((item, i) => ({
    icon: [
      <HiLightningBolt size={28} />,
      <HiSparkles size={28} />,
      <HiTrendingUp size={28} />,
      <HiViewGrid size={28} />,
      <HiGlobe size={28} />
    ][i],
    stat: ['🚀', '🤖', '⚡', '🎯', '🧩'][i],
    ...item
  }));

  const targetGroups = t('benefits.targetGroups');

  return (
    <section className="benefits section" id="beneficios" ref={ref}>
      <div className="container">
        <motion.div
          className="benefits__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{t('benefits.tag')}</span>
          <h2 className="section-title">
            {t('benefits.title1')} <span className="accent">{t('benefits.titleAccent')}</span>
          </h2>
          <p className="section-subtitle">
            {t('benefits.subtitle')}
          </p>
        </motion.div>

        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="benefits__card card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            >
              <div className="benefits__card-top">
                <div className="benefits__card-stat">
                  <span className="benefits__card-stat-val" style={{ fontSize: '1.5rem' }}>{b.stat}</span>
                  <span className="benefits__card-stat-label">{b.statLabel}</span>
                </div>
              </div>
              <h3 className="benefits__card-title">{b.title}</h3>
              <p className="benefits__card-desc">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Para Quem é Section */}
        <motion.div
          className="benefits__target"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{ marginTop: '100px', textAlign: 'center' }}
        >
          <h2 className="section-title">{t('benefits.targetTitle1')} <span className="accent">{t('benefits.targetTitleAccent')}</span></h2>
          <div className="benefits__target-grid">
            {targetGroups.map((group, i) => (
              <div key={i} className="benefits__target-card card">
                <p>{group}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
