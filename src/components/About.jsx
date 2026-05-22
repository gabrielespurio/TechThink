import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiLightningBolt, HiChip } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <HiLightningBolt size={24} />,
      title: t('about.missionTitle'),
      desc: t('about.missionDesc'),
    },
    {
      icon: <HiChip size={24} />,
      title: t('about.visionTitle'),
      desc: t('about.visionDesc'),
    },
  ];

  return (
    <section className="about section" id="sobre" ref={ref}>
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t('about.title1')} <span className="accent">{t('about.titleAccent')}</span>
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__story"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="about__story-text">
              {t('about.story1')}
            </p>
            <p className="about__story-text">
              {t('about.story2')}
            </p>

            <div className="about__stats">
              {[
                { val: t('about.stats.stat1Val'), label: t('about.stats.stat1Label') },
                { val: t('about.stats.stat2Val'), label: t('about.stats.stat2Label') },
              ].map((s, i) => (
                <div key={i} className="about__stat">
                  <span className="about__stat-val">{s.val}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about__pillars"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {pillars.map((p, i) => (
              <div key={i} className="about__pillar card">
                <div className="icon-box">{p.icon}</div>
                <div>
                  <h4 className="about__pillar-title">{p.title}</h4>
                  <p className="about__pillar-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
