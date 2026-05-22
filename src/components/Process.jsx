import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiSearch, HiLightBulb, HiCode, HiCheck } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import './Process.css';

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();

  const steps = t('process.items').map((item, i) => ({
    icon: [
      <HiSearch size={24} />,
      <HiLightBulb size={24} />,
      <HiCode size={24} />,
      <HiCheck size={24} />
    ][i],
    ...item
  }));

  return (
    <section className="process section" id="processo" ref={ref}>
      <div className="container">
        <motion.div
          className="process__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{t('process.tag')}</span>
          <h2 className="section-title">
            {t('process.title1')} <span className="accent">{t('process.titleAccent')}</span>
          </h2>
          <p className="section-subtitle">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="process__compact-grid">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="process__step"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="process__node">
                <div className="process__icon-box">
                  {step.icon}
                </div>
                {i !== steps.length - 1 && <div className="process__connector" />}
              </div>
              
              <div className="process__info">
                <span className="process__num">0{i + 1}</span>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.desc}</p>
                <div className="process__mini-tasks">
                  {step.subItems.map((item, j) => (
                    <span key={j} className="process__mini-task">{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="process__compact-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://wa.me/5517992204822"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            {t('process.button')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
