import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiLightningBolt, HiChip } from 'react-icons/hi';
import './About.css';

const pillars = [
  {
    icon: <HiLightningBolt size={24} />,
    title: 'Nossa Missão',
    desc: 'Levar tecnologia e inteligência artificial de forma acessível, prática e eficiente para todos os tipos de negócios.',
  },
  {
    icon: <HiChip size={24} />,
    title: 'Nossa Visão',
    desc: 'Ser referência em desenvolvimento de soluções inteligentes, tornando a inovação essencial para o crescimento de empresas em todo o mundo.',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

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
            Sobre <span className="accent">Nós</span>
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Somos uma empresa de tecnologia focada em desenvolver soluções sob medida que unem software e inteligência artificial para impulsionar resultados reais.
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
              Acreditamos que a tecnologia não deve ser complexa ou inacessível — ela deve ser uma ferramenta estratégica para qualquer negócio crescer, otimizar processos e tomar decisões mais inteligentes.
            </p>
            <p className="about__story-text">
              Nosso objetivo é democratizar o acesso à inovação, levando recursos avançados para empresas de pequeno, médio e grande porte. Queremos simplificar o uso da tecnologia, ajudando empresas a evoluírem com soluções automatizadas e orientadas por dados.
            </p>

            <div className="about__stats">
              {[
                { val: 'IA', label: 'Integrada' },
                { val: '100%', label: 'Foco em Resultado' },
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
