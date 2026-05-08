import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiSearch, HiLightBulb, HiCode, HiCheck } from 'react-icons/hi';
import './Process.css';

const steps = [
  {
    icon: <HiSearch size={24} />,
    title: 'Análise',
    desc: 'Entendemos seu negócio e identificamos oportunidades de otimização',
    items: ['Mapeamento de processos', 'Identificação de gargalos'],

  },
  {
    icon: <HiLightBulb size={24} />,
    title: 'Estratégia',
    desc: 'Criamos uma estratégia personalizada para suas necessidades',
    items: ['Planejamento detalhado', 'Cronograma de implementação', 'Definição de KPIs'],
  },
  {
    icon: <HiCode size={24} />,
    title: 'Desenvolvimento',
    desc: 'Desenvolvemos e configuramos as soluções com precisão',
    items: ['Desenvolvimento customizado', 'Testes rigorosos', 'Integração de sistemas'],
  },
  {
    icon: <HiCheck size={24} />,
    title: 'Entrega & Suporte',
    desc: 'Monitoramos e otimizamos continuamente para máxima eficiência',
    items: ['Monitoramento 24/7', 'Ajustes constantes', 'Suporte contínuo'],
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="process section" id="processo" ref={ref}>
      <div className="container">
        <motion.div
          className="process__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Metodologia</span>
          <h2 className="section-title">
            Nosso <span className="accent">Processo</span>
          </h2>
          <p className="section-subtitle">
            Do entendimento à entrega, cada etapa é pensada para garantir o melhor resultado.
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
                  {step.items.map((item, j) => (
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
            Iniciar meu projeto
          </a>
        </motion.div>
      </div>


    </section>
  );
}
