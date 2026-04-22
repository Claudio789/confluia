import { motion } from 'motion/react';
import { Calendar, Check, ArrowDown } from 'lucide-react';

const timelineSteps = [
  {
    phase: "Mes 1",
    title: "Auditoría & Limpieza Total",
    desc: "Ordenamos el pasado para asegurar el futuro. Conciliaciones bancarias, estados fiscales y contratos laborales se ponen al día.",
    icon: "🧹",
    status: "completed"
  },
  {
    phase: "Mes 2",
    title: "Digitalización & Procesos",
    desc: "Implementamos las herramientas y flujos de trabajo que te darán visibilidad total. Setup de reportes personalizados.",
    icon: "⚡",
    status: "current"
  },
  {
    phase: "Mes 3+",
    title: "Gestión & Crecimiento",
    desc: "Control mensual riguroso con reuniones de asesoría estratégica. Tú escalas, nosotros cuidamos el motor.",
    icon: "📈",
    status: "future"
  },
  {
    phase: "Trimestral",
    title: "Check Estratégico",
    desc: "Análisis profundo de rentabilidad y pivoteo de estrategia financiera para el siguiente nivel.",
    icon: "🎯",
    status: "future"
  }
];

export default function WorkTimeline() {
  return (
    <section className="py-24 bg-brand-900 text-white overflow-hidden relative" id="proceso">
      {/* Decorative background lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-accent/0 via-accent/30 to-accent/0 -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-20">
        <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">El Viaje Confluia</h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display italic">¿Cómo trabajamos contigo?</h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Un proceso estructurado diseñado para llevarte del caos administrativo a la libertad estratégica en menos de 90 días.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="flex flex-col gap-12">
          {timelineSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse text-right' : 'text-left'}`}
            >
              <div className="flex-1">
                <div className={`group glass-morphism p-8 rounded-[32px] border-white/5 bg-white/5 hover:bg-white/[0.08] transition-all duration-500 relative overflow-hidden ${i % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>
                  {/* Phase badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
                    step.status === 'completed' ? 'bg-green-500/20 text-green-400' : 
                    step.status === 'current' ? 'bg-accent/20 text-accent' : 'bg-white/10 text-slate-400'
                  }`}>
                    {step.phase}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg italic">
                    "{step.desc}"
                  </p>
                  
                  {/* Background icon decoration */}
                  <div className="absolute -bottom-4 -right-4 opacity-5 text-8xl grayscale select-none pointer-events-none">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Central node */}
              <div className="relative flex flex-col items-center justify-center">
                 <div className={`w-16 h-16 rounded-full flex items-center justify-center z-10 shadow-2xl transition-all duration-500 border-4 border-brand-900 ${
                   step.status === 'completed' ? 'bg-green-500' :
                   step.status === 'current' ? 'bg-accent animate-pulse scale-110 shadow-accent/50' :
                   'bg-slate-800'
                 }`}>
                   {step.status === 'completed' ? <Check className="w-8 h-8 text-white" /> : <span className="text-2xl">{step.icon}</span>}
                 </div>
                 {i < timelineSteps.length - 1 && (
                   <div className="hidden md:block absolute top-16 w-1 h-20 bg-linear-to-b from-accent/50 to-accent/0" />
                 )}
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl shadow-accent/30 hover:bg-accent-hover transition-all cursor-pointer inline-flex items-center gap-3"
          >
            Comenzar mi transformación hoy
            <Calendar className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
