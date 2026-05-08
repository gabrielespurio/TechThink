import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiStar, HiArrowUp, HiArrowDown, HiClock } from 'react-icons/hi';
import './Results.css';

const cases = [
  {
    company: 'Rede de Varejo',
    tag: 'Comércio',
    desc: 'Sistema ERP personalizado que integrou estoque, vendas e financeiro em uma única plataforma.',
    metrics: [
      { icon: <HiArrowUp />, value: '+85%', label: 'Produtividade' },
      { icon: <HiArrowDown />, value: '-40%', label: 'Custos' },
      { icon: <HiClock />, value: '3 meses', label: 'Implementação' },
    ],
  },
  {
    company: 'Clínica Médica',
    tag: 'Saúde',
    desc: 'App mobile de agendamento com agente IA para triagem automática de pacientes.',
    metrics: [
      { icon: <HiArrowUp />, value: '+120%', label: 'Atendimentos' },
      { icon: <HiArrowDown />, value: '-55%', label: 'No-shows' },
      { icon: <HiClock />, value: '2 meses', label: 'Implementação' },
    ],
  },
  {
    company: 'Indústria Tech',
    tag: 'Tecnologia',
    desc: 'Automação completa de processos internos com bots inteligentes e integrações via API.',
    metrics: [
      { icon: <HiArrowUp />, value: '+200%', label: 'Eficiência' },
      { icon: <HiArrowDown />, value: '-70%', label: 'Erros manuais' },
      { icon: <HiClock />, value: '4 meses', label: 'Implementação' },
    ],
  },
];

const testimonials = [
  {
    text: 'A Tech Think Solutions transformou completamente nossa operação. O sistema superou todas as expectativas.',
    author: 'Carlos M.',
    role: 'CEO, Rede de Varejo',
  },
  {
    text: 'A implementação do agente IA reduziu drasticamente o tempo de atendimento e melhorou a experiência dos pacientes.',
    author: 'Dra. Ana L.',
    role: 'Diretora, Clínica Médica',
  },
  {
    text: 'Profissionais excepcionais. Entenderam nosso negócio e entregaram uma solução que realmente funciona.',
    author: 'Roberto S.',
    role: 'CTO, Indústria Tech',
  },
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="results section" id="resultados" ref={ref}>
      <div className="container">
        <motion.div
          className="results__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Resultados</span>
          <h2 className="section-title">
            Resultados <span className="accent">Reais</span>
          </h2>
          <p className="section-subtitle">
            Conheça alguns dos resultados que nossos clientes alcançaram.
          </p>
        </motion.div>

        <div className="results__cases">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              className="results__case card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <div className="results__case-top">
                <h3>{c.company}</h3>
                <span className="results__case-tag">{c.tag}</span>
              </div>
              <p className="results__case-desc">{c.desc}</p>
              <div className="results__case-metrics">
                {c.metrics.map((m, j) => (
                  <div key={j} className="results__metric">
                    <span className="results__metric-icon">{m.icon}</span>
                    <span className="results__metric-val">{m.value}</span>
                    <span className="results__metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="results__testimonials">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="results__testimonial card"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
            >
              <div className="results__stars">
                {[...Array(5)].map((_, s) => (
                  <HiStar key={s} />
                ))}
              </div>
              <p className="results__quote">"{t.text}"</p>
              <div className="results__author">
                <div className="results__avatar">{t.author[0]}</div>
                <div>
                  <span className="results__name">{t.author}</span>
                  <span className="results__role">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
