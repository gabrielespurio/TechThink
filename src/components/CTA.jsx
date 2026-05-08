import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import './CTA.css';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

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
            <span className="section-tag">Contato</span>
            <h2 className="cta__title">
              Sua empresa está pronta para operar com <span className="accent">tecnologia de verdade?</span>
            </h2>
            <p className="cta__description">
              Transformamos processos manuais em sistemas inteligentes, automações e soluções com IA que reduzem custos e aceleram resultados.
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
                  <label>WhatsApp Direto</label>
                  <span>(17) 99220-4822</span>
                </div>
              </a>

              <a href="mailto:contato@techthinksolutions.com.br" className="cta__contact-link">
                <div className="cta__contact-icon">
                  <HiMail />
                </div>
                <div>
                  <label>E-mail Corporativo</label>
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
            <div className="cta__card">
              <div className="cta__card-glow" />
              <h3>Solicitar Diagnóstico</h3>
              <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
                <div className="cta__input-group">
                  <input type="text" placeholder="Seu nome completo" required />
                </div>
                <div className="cta__input-group">
                  <input type="email" placeholder="E-mail profissional" required />
                </div>
                <div className="cta__input-group">
                  <input type="tel" placeholder="Telefone / WhatsApp" required />
                </div>
                <div className="cta__input-group">
                  <textarea placeholder="Fale brevemente sobre o seu projeto" rows={3} required />
                </div>
                <button type="submit" className="btn btn-primary cta__submit">
                  <span>Enviar Mensagem</span>
                  <FaWhatsapp />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
