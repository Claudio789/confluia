import { motion } from 'motion/react';
import { Calculator, Users, Lightbulb, CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    icon: Calculator,
    title: "Contabilidad",
    desc: "Números claros y actualizados. Olvida el desorden fiscal.",
    features: ["Declaraciones mensuales", "Auditoría preventiva", "Optimización tributaria"]
  },
  {
    icon: Users,
    title: "RRHH",
    desc: "Equipos motivados y cumplimiento legal total sin fricciones.",
    features: ["Gestión de nóminas", "Contratos y finiquitos", "Clima organizacional"]
  },
  {
    icon: Lightbulb,
    title: "Estrategia",
    desc: "Consultoría basada en tus propios datos para escalar.",
    features: ["Planificación financiera", "Análisis de costos", "Expansión de negocio"]
  }
];

export default function Solution() {
  return (
    <section className="py-24" id="servicios">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">Centralizamos el motor de tu empresa.</h2>
          <p className="text-xl text-brand-600">
            Ya no tendrás que hablar con tres consultores diferentes que no se comunican. En CONFLUIA, conectamos los puntos para darte una visión 360°.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(15, 23, 42, 0.12)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: i * 0.1 
              }}
              viewport={{ once: true }}
              className="flex flex-col h-full bg-white p-8 rounded-[32px] border border-slate-100 transition-colors hover:border-accent/20"
            >
              <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-accent/20">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900 mb-4">{item.title}</h3>
              <p className="text-brand-600 mb-8 text-lg leading-relaxed">{item.desc}</p>
              <ul className="space-y-4 mt-auto">
                {item.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-brand-700 font-medium italic">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[40px] bg-slate-100 flex flex-col items-start gap-6 border border-slate-200">
             <div>
                <h4 className="text-2xl font-bold mb-2">Gestión Mensual Integral</h4>
                <p className="text-brand-600">Tu equipo administrativo externo mes a mes.</p>
             </div>
             <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-900 text-white px-6 py-3 rounded-full font-bold hover:bg-black transition-all cursor-pointer"
             >
                Quiero contratar un plan
             </button>
          </div>
          <div className="p-8 rounded-[40px] bg-accent/5 flex flex-col items-start gap-6 border border-accent/20">
             <div>
                <h4 className="text-2xl font-bold mb-2">Consultoría Especializada</h4>
                <p className="text-brand-600">Impulsos estratégicos puntuales paraExpansion.</p>
             </div>
             <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent text-white px-6 py-3 rounded-full font-bold hover:hover:bg-accent-hover transition-all cursor-pointer"
             >
                Necesito una consultoría
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
