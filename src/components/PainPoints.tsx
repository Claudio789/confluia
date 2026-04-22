import { motion } from 'motion/react';
import { EyeOff, ShieldAlert, Workflow } from 'lucide-react';

const problems = [
  {
    icon: EyeOff,
    title: "¿Ceguera Financiera?",
    desc: "No saber cuánto dinero realmente te queda a fin de mes después de impuestos. Decisiones basadas en el 'creo' en lugar del 'sé'.",
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    icon: ShieldAlert,
    title: "¿Miedo a lo Legal?",
    desc: "El estrés constante de recibir una multa por un error en la nómina o una declaración mal presentada por falta de rigor.",
    color: "bg-red-500/10 text-red-600"
  },
  {
    icon: Workflow,
    title: "¿Carga Administrativa?",
    desc: "Sentir que eres un 'todólogo' atrapado en facturas y contratos en lugar de ser el CEO enfocado en tu visión estratégica.",
    color: "bg-blue-500/10 text-blue-600"
  }
];

export default function PainPoints() {
  return (
    <section className="py-24 bg-brand-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Sabemos que emprender no es fácil.</h2>
          <p className="text-xl text-slate-400">
            El caos administrativo drena tu energía y la falta de información te quita el sueño. ¿Te suena familiar alguno de estos escenarios?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <problem.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
