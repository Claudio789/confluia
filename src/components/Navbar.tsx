import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism m-4 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center text-sm font-medium">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none">C</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-brand-900 uppercase">Confluia</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('servicios')} className="text-brand-700 hover:text-accent transition-colors cursor-pointer">Servicios</button>
            <button onClick={() => scrollToSection('metodologia')} className="text-brand-700 hover:text-accent transition-colors cursor-pointer">Metodología</button>
            <button onClick={() => scrollToSection('contacto')} className="text-brand-700 hover:text-accent transition-colors cursor-pointer">Contacto</button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-accent text-white px-5 py-2.5 rounded-full hover:bg-accent-hover transition-all flex items-center gap-2 shadow-lg shadow-accent/20 cursor-pointer"
            >
              Agendar Asesoría Gratuita
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass-morphism mt-2 p-6 rounded-2xl flex flex-col gap-4 text-center ring-1 ring-black/5 shadow-2xl"
        >
          <button className="py-2" onClick={() => scrollToSection('servicios')}>Servicios</button>
          <button className="py-2" onClick={() => scrollToSection('metodologia')}>Metodología</button>
          <button className="py-2" onClick={() => scrollToSection('contacto')}>Contacto</button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="bg-accent text-white px-5 py-3 rounded-xl"
          >
            Agendar Asesoría Gratuita
          </button>
        </motion.div>
      )}
    </nav>
  );
}
