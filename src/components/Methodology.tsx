import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useState } from 'react';

const steps = [
  {
    num: "01",
    title: "Diagnóstico Inicial",
    desc: "Entendemos dónde estás y hacia dónde vas. Auditamos tu situación actual sin juicios.",
    icon: "🔍"
  },
  {
    num: "02",
    title: "Implementación",
    desc: "Limpiamos el caos administrativamente y establecemos procesos claros y replicables.",
    icon: "⚙️"
  },
  {
    num: "03",
    title: "Acompañamiento",
    desc: "No somos un proveedor, somos tu socio estratégico que te avisa de riesgos antes de que ocurran.",
    icon: "🤝"
  }
];

function TiltCard({ step, index }: { step: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative py-16 px-8 md:px-12 border-slate-200 ${index !== 2 ? 'md:border-r border-b md:border-b-0' : ''} group cursor-default`}
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="text-7xl font-bold text-slate-200 mb-8 group-hover:text-accent transition-colors duration-500"
      >
        {step.num}
      </div>
      
      <div style={{ transform: "translateZ(30px)" }}>
        <div className="text-4xl mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110">
          {step.icon}
        </div>
        <h3 className="text-2xl font-bold text-brand-900 mb-4">{step.title}</h3>
        <p className="text-brand-600 leading-relaxed italic text-lg">
          "{step.desc}"
        </p>
      </div>

      {/* Decorative inner element */}
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="absolute bottom-10 right-10 w-20 h-20 border-2 border-accent/5 rounded-full group-hover:border-accent/20 transition-colors" 
      />
    </motion.div>
  );
}

export default function Methodology() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="metodologia" style={{ perspective: "1000px" }}>
      {/* 3D Floating background elements */}
      <motion.div 
        animate={{ 
          rotateY: [0, 360],
          rotateX: [0, 180],
          y: [0, -50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-64 h-64 border border-accent/10 rounded-3xl -z-0 opacity-20"
      />
      <motion.div 
        animate={{ 
          rotateY: [360, 0],
          rotateZ: [0, 360],
          x: [0, 50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full -z-0 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">El Camino a la Certeza</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-900">De las suposiciones a la <span className="gradient-text text-nowrap">certeza absoluta.</span></h2>
          </div>
          <p className="text-xl text-brand-600 max-w-sm">
            Nuestra metodología no se trata solo de "llenar formularios". Se trata de inteligencia de negocio aplicada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-y border-slate-200 bg-white/30 backdrop-blur-sm rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50">
          {steps.map((step, i) => (
            <TiltCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
