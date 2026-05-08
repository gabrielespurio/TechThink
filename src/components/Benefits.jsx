import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiTrendingUp, HiCurrencyDollar, HiGlobe, HiViewGrid, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import './Benefits.css';

const benefits = [
  {
    icon: <HiLightningBolt size={28} />,
    title: 'Soluções sob medida',
    desc: 'Projetos desenvolvidos exclusivamente para as necessidades específicas do seu negócio.',
    stat: '🚀',
    statLabel: 'Exclusivo',
  },
  {
    icon: <HiSparkles size={28} />,
    title: 'Integração com IA',
    desc: 'Otimizamos seus processos com o que há de mais moderno em inteligência artificial.',
    stat: '🤖',
    statLabel: 'Smart',
  },
  {
    icon: <HiTrendingUp size={28} />,
    title: 'Performance e Escalabilidade',
    desc: 'Sistemas rápidos e preparados para crescer junto com sua empresa.',
    stat: '⚡',
    statLabel: 'Turbo',
  },
  {
    icon: <HiViewGrid size={28} />,
    title: 'Resultados Reais',
    desc: 'Foco total em ROI e eficiência operacional para o seu dia a dia.',
    stat: '🎯',
    statLabel: 'Impacto',
  },
  {
    icon: <HiGlobe size={28} />,
    title: 'Flexibilidade Total',
    desc: 'Soluções que se adaptam a qualquer setor ou porte de empresa.',
    stat: '🧩',
    statLabel: 'Versátil',
  },
];

const targetGroups = [
  'Pequenas empresas que querem crescer com tecnologia',
  'Startups que precisam validar e escalar rapidamente',
  'Empresas consolidadas que buscam inovação',
  'Negócios que querem automatizar processos e reduzir custos',
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="benefits section" id="beneficios" ref={ref}>
      <div className="container">
        <motion.div
          className="benefits__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Diferenciais</span>
          <h2 className="section-title">
            Por que escolher a <span className="accent">Tech Think</span>?
          </h2>
          <p className="section-subtitle">
            Soluções inovadoras, flexíveis e orientadas a resultados para transformar seu negócio.
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
          <h2 className="section-title">Para <span className="accent">Quem é</span></h2>
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
