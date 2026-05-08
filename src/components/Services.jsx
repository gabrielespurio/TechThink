import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiDeviceMobile, HiCog, HiSparkles, HiArrowRight, HiGlobe } from 'react-icons/hi';
import './Services.css';

const services = [
  {
    icon: <HiCode size={24} />,
    title: 'Desenvolvimento de Sistemas',
    description: 'Criamos sistemas web personalizados, pensados para resolver problemas reais do seu negócio, com alta performance e escalabilidade.',
    features: ['Sistemas web personalizados', 'ERPs sob medida', 'Alta performance'],
  },
  {
    icon: <HiDeviceMobile size={24} />,
    title: 'Aplicativos Mobile',
    description: 'Desenvolvemos aplicativos modernos e intuitivos para Android e iOS, conectando sua empresa ao seu cliente na palma da mão.',
    features: ['Android e iOS', 'UX/UI intuitivo', 'Apps nativos e híbridos'],
  },
  {
    icon: <HiCog size={24} />,
    title: 'Automação de Processos',
    description: 'Elimine tarefas manuais e aumente a produtividade com automações inteligentes que trabalham por você.',
    features: ['Redução de erros', 'Aumento de produtividade', 'Fluxos inteligentes'],
  },
  {
    icon: <HiSparkles size={24} />,
    title: 'Inteligência Artificial',
    description: 'Implementamos soluções com IA para análise de dados, atendimento automatizado, previsões e muito mais.',
    features: ['Análise de dados', 'Chatbots inteligentes', 'Modelos preditivos'],
  },
  {
    icon: <HiGlobe size={24} />,
    title: 'Landing Pages e Websites',
    description: 'Criamos páginas modernas, rápidas e otimizadas para conversão e presença digital.',
    features: ['Otimização para conversão', 'Design responsivo', 'SEO avançado'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="services section" id="servicos" ref={ref}>
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Serviços</span>
          <h2 className="section-title">
            Nossas <span className="accent">Soluções</span>
          </h2>
          <p className="section-subtitle">
            Oferecemos um ecossistema completo de tecnologia para impulsionar seu negócio ao próximo nível.
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
              <p className="services__card-desc">{s.desc || s.description}</p>
              <ul className="bullet-list">
                {s.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <a href="#contato" className="services__card-link">
                Saiba mais <HiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
