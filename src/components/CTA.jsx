import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import ChatForm from './ChatForm';
import './CTA.css';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();

  return (
    <section className="cta section" id="contato" ref={ref}>
      <div className="container">
        <div className="cta__wrapper">
          <motion.div
            className="cta__content"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">{t('cta.tag')}</span>
            <h2 className="cta__title">
              {t('cta.title1')} <span className="accent">{t('cta.titleAccent')}</span>
            </h2>
            <p className="cta__description">
              {t('cta.description')}
            </p>

            <div className="cta__contacts">
              <a
                href="https://wa.me/5517992204822"
                target="_blank"
                rel="noopener noreferrer"
                className="cta__contact-link"
              >
                <div className="cta__contact-icon">
                  <FaWhatsapp />
                </div>
                <div>
                  <label>{t('cta.contacts.whatsappLabel')}</label>
                  <span>(17) 99220-4822</span>
                </div>
              </a>

              <a href="mailto:contato@techthinksolutions.com.br" className="cta__contact-link">
                <div className="cta__contact-icon">
                  <HiMail />
                </div>
                <div>
                  <label>{t('cta.contacts.emailLabel')}</label>
                  <span>contato@techthinksolutions.com.br</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="cta__form-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <ChatForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
