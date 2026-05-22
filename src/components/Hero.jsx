import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';

function Counter({ value, duration = 2 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const num = parseFloat(latest).toFixed(latest > 10 ? 0 : 1);
    const match = value.match(/[0-9.]+/);
    const suffix = match ? value.split(match[0])[1] : '';
    return num + suffix;
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const controls = animate(count, parseFloat(value), { duration });
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, duration]);

  return <span>{displayValue}</span>;
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="hero__content container">
        <div className="hero__grid-main">
          <motion.div
            className="hero__left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              <span>{t('hero.badge')}</span>
            </div>

            <h1 className="hero__title">
              {t('hero.title1')} <br />
              <span className="accent">{t('hero.titleAccent')}</span> <br />
              {t('hero.title2')}
            </h1>

            <div className="hero__description">
              <p className="hero__subtitle">
                {t('hero.subtitle1')}
              </p>
              <p className="hero__subtitle">
                {t('hero.subtitle2')}
              </p>
            </div>

            <motion.div
              className="hero__metrics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="hero__metrics-inner">
                {[
                  { value: '30+', label: t('hero.metrics.projects') },
                  { value: '98%', label: t('hero.metrics.satisfaction') },
                  { value: '24/7', label: t('hero.metrics.support') },
                ].map((m, i) => (
                  <div key={i} className="hero__metric">
                    <span className="hero__metric-val">
                      <Counter value={m.value} />
                    </span>
                    <span className="hero__metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="hero__buttons">
              <motion.a
                href="https://wa.me/5517992204822"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hero__btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.buttons.primary')}
                <HiArrowRight />
              </motion.a>
              <motion.a
                href="#servicos"
                className="btn btn-outline hero__btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.buttons.secondary')}
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="hero__right"
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="ui-illustration">
              {/* SISTEMAS WEB */}
              <div className="ui-window ui-window--web">
                <div className="ui-window__header">
                  <div className="ui-dots"><span /><span /><span /></div>
                  <div className="ui-tag">{t('hero.ui.webSystems')}</div>
                </div>
                <div className="ui-window__body">
                  <div className="ui-web-layout">
                    <div className="ui-web-sidebar">
                      <div className="ui-skeleton ui-skeleton--xs" />
                      <div className="ui-skeleton ui-skeleton--xs" />
                      <div className="ui-skeleton ui-skeleton--xs" />
                    </div>
                    <div className="ui-web-content">
                      <div className="ui-skeleton ui-skeleton--title" />
                      <div className="ui-system-grid">
                        <div className="ui-skeleton ui-skeleton--block" />
                        <div className="ui-skeleton ui-skeleton--block" />
                      </div>
                      <div className="ui-chart">
                        <div className="ui-chart-bar" style={{ height: '40%' }} />
                        <div className="ui-chart-bar" style={{ height: '80%' }} />
                        <div className="ui-chart-bar" style={{ height: '60%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOLUÇÕES COM IA */}
              <div className="ui-window ui-window--ia">
                <div className="ui-window__header">
                  <div className="ui-tag">{t('hero.ui.aiSolutions')}</div>
                  <div className="ui-dots"><span /><span /></div>
                </div>
                <div className="ui-window__body">
                  <div className="ui-ia-item">
                    <div className="ui-ia-icon ui-ia-icon--1" />
                    <div>
                      <strong>{t('hero.ui.aiItem1')}</strong>
                      <div className="ui-skeleton ui-skeleton--xs" />
                    </div>
                  </div>
                  <div className="ui-ia-connector" />
                  <div className="ui-ia-item">
                    <div className="ui-ia-icon ui-ia-icon--2" />
                    <div>
                      <strong>{t('hero.ui.aiItem2')}</strong>
                      <div className="ui-skeleton ui-skeleton--xs" />
                    </div>
                  </div>
                  <div className="ui-ia-connector" />
                  <div className="ui-ia-item">
                    <div className="ui-ia-icon ui-ia-icon--3" />
                    <div>
                      <strong>{t('hero.ui.aiItem3')}</strong>
                      <div className="ui-skeleton ui-skeleton--xs" />
                    </div>
                  </div>
                </div>
              </div>

              {/* APLICATIVOS MOBILE */}
              <div className="ui-window ui-window--mobile">
                <div className="ui-mobile-notch" />
                <div className="ui-window__header">
                  <div className="ui-tag">{t('hero.ui.mobileApp')}</div>
                </div>
                <div className="ui-window__body">
                  <div className="ui-mobile-app">
                    <div className="ui-mobile-hero" />
                    <div className="ui-mobile-list">
                      <div className="ui-mobile-item">
                        <div className="ui-skeleton ui-skeleton--circle" />
                        <div className="ui-skeleton ui-skeleton--text" />
                      </div>
                      <div className="ui-mobile-item">
                        <div className="ui-skeleton ui-skeleton--circle" />
                        <div className="ui-skeleton ui-skeleton--text" />
                      </div>
                      <div className="ui-mobile-item">
                        <div className="ui-skeleton ui-skeleton--circle" />
                        <div className="ui-skeleton ui-skeleton--text" />
                      </div>
                    </div>
                    <div className="ui-mobile-nav">
                      <span /><span /><span /><span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hero__fade" />
    </section>
  );
}



