import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-accent/5 to-transparent -z-10" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/10 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Control Total. Crecimiento Imparable.
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] text-brand-900 mb-8">
            Toma decisiones con <span className="gradient-text">datos reales</span>, no con suposiciones.
          </h1>
          
          <p className="text-xl text-brand-600 mb-10 leading-relaxed max-w-lg">
            Deja de adivinar el futuro de tu empresa. Integramos Contabilidad, RRHH y Consultoría Estratégica en un solo motor de crecimiento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-2 shadow-xl shadow-accent/20 group cursor-pointer"
            >
              Solicitar Presupuesto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-brand-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-accent hover:text-accent transition-all cursor-pointer"
            >
              Ver Planes de Gestión
            </button>
          </div>
          
          <blockquote className="mt-12 border-l-4 border-accent pl-6 py-2 italic text-brand-700 text-lg">
            "La claridad financiera es la diferencia entre un negocio que sobrevive y uno que domina el mercado."
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Confluia Consulting" 
            className="rounded-[40px] shadow-2xl relative z-10 w-full object-cover aspect-[4/5] border-8 border-white"
            referrerPolicy="no-referrer"
          />
          {/* Abstract floating card 1 */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
            <div className="text-accent font-bold text-2xl mb-1">+40%</div>
            <div className="text-xs font-medium text-brand-600 uppercase tracking-tighter">Eficiencia Operativa</div>
          </div>
          {/* Abstract floating card 2 */}
          <div className="absolute top-1/4 -right-8 bg-brand-900 text-white p-6 rounded-2xl shadow-xl z-20">
            <div className="flex gap-2 mb-2">
              {[1, 2, 3].map(i => <div key={i} className="w-8 h-1 bg-accent/40 rounded-full" />)}
            </div>
            <div className="text-xs opacity-70">Reporte de Rentabilidad</div>
            <div className="text-sm font-bold">Estado Real: Óptimo</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown />
      </div>
    </section>
  );
}
