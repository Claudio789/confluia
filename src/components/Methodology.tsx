import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Diagnóstico Inicial",
    desc: "Entendemos dónde estás y hacia dónde vas. Auditamos tu situación actual sin juicios."
  },
  {
    num: "02",
    title: "Implementación",
    desc: "Limpiamos el caos administrativamente y establecemos procesos claros y replicables."
  },
  {
    num: "03",
    title: "Acompañamiento",
    desc: "No somos un proveedor, somos tu socio estratégico que te avisa de riesgos antes de que ocurran."
  }
];

export default function Methodology() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="metodologia">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">El Camino a la Certeza</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-900">De las suposiciones a la <span className="gradient-text">certeza absoluta.</span></h2>
          </div>
          <p className="text-xl text-brand-600 max-w-sm">
            Nuestra metodología no se trata solo de "llenar formularios". Se trata de inteligencia de negocio aplicada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-y border-slate-200">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`py-12 md:px-12 border-slate-200 ${i !== 2 ? 'md:border-r border-b md:border-b-0' : ''} group`}
            >
              <div className="text-6xl font-bold text-slate-200 mb-8 group-hover:text-accent transition-colors duration-500">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-brand-900 mb-4">{step.title}</h3>
              <p className="text-brand-600 leading-relaxed italic">
                "{step.desc}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
