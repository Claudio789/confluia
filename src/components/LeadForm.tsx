import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';

const options = [
  "Quiero delegar mi contabilidad y RRHH por completo.",
  "Necesito analizar un problema financiero o legal específico.",
  "Busco asesoría estratégica para escalar mi empresa."
];

export default function LeadForm() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <footer className="bg-brand-900 text-white py-24 pb-12" id="contacto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Hablemos de tu Futuro</h2>
            <p className="text-xl text-slate-400 mb-12">
              ¿Cómo podemos ayudarte hoy? Selecciona una opción para comenzar tu transformación con CONFLUIA.
            </p>
            
            <div className="space-y-4">
              {options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center justify-between group ${
                    selected === i 
                    ? 'border-accent bg-accent/10' 
                    : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <span className={selected === i ? 'text-white' : 'text-slate-300'}>{opt}</span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selected === i ? 'border-accent bg-accent' : 'border-white/20'
                  }`}>
                    {selected === i && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="glass-morphism border-white/5 bg-white/5 p-8 md:p-12 rounded-[40px] h-fit">
            <h3 className="text-2xl font-bold mb-8">¡Empezar Ahora!</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Email de empresa</label>
                <input 
                  type="email" 
                  placeholder="ejemplo@empresa.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-hidden focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Mensaje adicional (Opcional)</label>
                <textarea 
                  rows={4}
                  placeholder="Cuéntanos un poco más sobre tu necesidad actual..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-hidden focus:border-accent transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-accent text-white py-5 rounded-2xl font-bold text-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-2 group shadow-xl shadow-accent/20">
                ¡Empezar Ahora!
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            <p className="mt-8 text-center text-slate-500 text-sm italic">
              Tu éxito es nuestra métrica de desempeño.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 grayscale brightness-200">
            <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm leading-none">C</span>
            </div>
            <span className="text-lg font-bold tracking-tighter uppercase">Confluia</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 CONFLUIA. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-slate-500 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
