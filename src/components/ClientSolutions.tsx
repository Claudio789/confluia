import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Rocket, Factory, Building2, CheckCircle2 } from 'lucide-react';

const clientTypes = [
  {
    id: 'startup',
    icon: Rocket,
    label: 'Startups',
    title: 'Escalabilidad sin Caos',
    desc: 'Para empresas tecnológicas en etapa de crecimiento que necesitan rigor financiero para levantar capital o controlar su burn rate.',
    features: [
        'Análisis de Burn Rate y Runway',
        'Reporting para Inversionistas (VC Ready)',
        'Estructura de RRHH para escalar rápido',
        'Gestión de Stock Options y contratos tech'
    ],
    color: 'bg-indigo-600'
  },
  {
    id: 'pyme',
    icon: Factory,
    label: 'PYMES',
    title: 'Profesionalización Total',
    desc: 'Para negocios establecidos que buscan dejar de ser "todólogos" y profesionalizar su motor administrativo para crecer con orden.',
    features: [
        'Limpieza contable y fiscal profunda',
        'Optimización de costos operativos',
        'Cumplimiento laboral 100% libre de multas',
        'Control de flujo de caja en tiempo real'
    ],
    color: 'bg-accent'
  },
  {
    id: 'corp',
    icon: Building2,
    label: 'Corporativos',
    title: 'Eficiencia Estratégica',
    desc: 'Para grandes estructuras que requieren outsourcing especializado o auditorías independientes para optimizar unidades de negocio.',
    features: [
        'Outsourcing de departamentos contables',
        'Auditorías preventivas de alto nivel',
        'Reestructuración de equipos de RRHH',
        'Consultoría estratégica basada en BI'
    ],
    color: 'bg-slate-900'
  }
];

export default function ClientSolutions() {
  const [activeTab, setActiveTab] = useState(clientTypes[1].id);

  return (
    <section className="py-24 bg-white" id="clientes">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Soluciones a Medida</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6 font-display">Diseñado para cada etapa de tu éxito.</h2>
          <p className="text-xl text-brand-600 max-w-2xl mx-auto">
            No creemos en soluciones de "talla única". Adaptamos nuestro motor de gestión al tamaño y visión de tu empresa.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {clientTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all cursor-pointer ${
                activeTab === type.id 
                ? `${type.color} text-white shadow-xl scale-105` 
                : 'bg-slate-100 text-brand-600 hover:bg-slate-200'
              }`}
            >
              <type.icon className="w-6 h-6" />
              {type.label}
            </button>
          ))}
        </div>

        <div className="bg-slate-50 p-8 md:p-16 rounded-[48px] border border-slate-200">
          <AnimatePresence mode="wait">
            {clientTypes.map((type) => activeTab === type.id && (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">{type.title}</h3>
                  <p className="text-xl text-brand-600 mb-10 leading-relaxed">
                    {type.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {type.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-brand-900 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className={`absolute inset-0 ${type.color} opacity-10 blur-[80px] rounded-full`} />
                  <div className="relative bg-white p-8 rounded-[32px] shadow-2xl border border-slate-100">
                    {/* Abstract illustration for the client type */}
                    <div className="flex flex-col gap-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-4 bg-slate-100 rounded-full w-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                      <div className={`h-24 w-24 rounded-3xl ${type.color} flex items-center justify-center text-white self-center my-4 shadow-lg`}>
                        <type.icon className="w-12 h-12" />
                      </div>
                      <div className="h-4 bg-slate-100 rounded-full w-3/4 self-center animate-pulse" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
