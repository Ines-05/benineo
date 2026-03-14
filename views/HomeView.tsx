import React, { useState, useEffect } from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewType } from '../App';
import { CIRCUITS, CONCIERGERIE_SERVICES } from '../constants';

const HERO_IMAGES = [
  "/images/hero_ouidah.jpg",
  "/images/hero_stade.jpg",
  "/images/hero_amazone_fix.jpg", // Amazon Statue Fixed
  "https://images.unsplash.com/photo-1502602898657-3e91724ca65a?q=80&w=2560&auto=format&fit=crop"  // Palm Beach Nature HD
];

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero Slideshow Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000); // 7 seconds for cinematic feel

    return () => clearInterval(timer);
  }, []);

  const BUTTON_LABELS = [
    { 
      text: "Découvrir nos services", 
      view: 'home',
      subtext: "Le monde commence au Bénin.\nUne expérience unique & authentique."
    },
    { 
      text: "Nos coffrets cadeaux", 
      view: 'ebunbox',
      subtext: "Offrez le meilleur du Bénin\navec nos Ebunbox exclusifs."
    },
    { 
      text: "Notre conciergerie", 
      view: 'conciergerie',
      subtext: "L'excellence & le confort\npour un séjour inoubliable."
    },
    { 
      text: "Goodies & Souvenirs", 
      view: 'boutique',
      subtext: "Gardez des souvenirs mémorables\nde votre voyage."
    },
    { 
      text: "L'aventure Béninéo", 
      view: 'circuits',
      subtext: "Explorez des circuits uniques\nau cœur de l'âme béninoise."
    }
  ];

  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);

  // Button Labels Cycle Effect
  useEffect(() => {
    const labelTimer = setInterval(() => {
      setCurrentLabelIndex((prev) => (prev + 1) % BUTTON_LABELS.length);
    }, 3000);

    return () => clearInterval(labelTimer);
  }, []);

  // Split services for dual marquee
  const halfIndex = Math.ceil(CONCIERGERIE_SERVICES.length / 2);
  const row1 = CONCIERGERIE_SERVICES.slice(0, halfIndex);
  const row2 = CONCIERGERIE_SERVICES.slice(halfIndex);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 2, ease: "easeInOut" },
                scale: { duration: 9, ease: "linear" } 
              }}
              className={`absolute inset-0 w-full h-full object-cover bg-stone-900 ${currentImageIndex === 2 ? 'object-top' : 'object-center'}`}
              alt="Paysage Bénin"
              decoding="async"
              fetchPriority={currentImageIndex === 0 ? "high" : "low"}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6"
          >
            {/* Logo or specialized icon can go here */}
          </motion.div>
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ delay: 1, duration: 1 }}
            className="text-accent font-bold uppercase text-[10px] md:text-xs mb-8 block drop-shadow-md tracking-[0.5em]"
          >
            L'âme de l'Afrique
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
            className="text-[clamp(3.5rem,15vw,10rem)] font-montserrat font-bold text-white mb-6 md:mb-10 leading-[0.85] tracking-tighter"
          >
            Béninéo
          </motion.h1>
          <div className="h-28 md:h-32 flex items-center justify-center mb-8 md:mb-16">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentLabelIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="text-base md:text-[clamp(1.1rem,2.5vw,1.5rem)] text-white/90 max-w-2xl mx-auto font-light leading-relaxed font-sans whitespace-pre-line"
              >
                {BUTTON_LABELS[currentLabelIndex].subtext}
              </motion.p>
            </AnimatePresence>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button
              onClick={() => onNavigate(BUTTON_LABELS[currentLabelIndex].view as ViewType)}
              className="group relative px-12 py-5 bg-accent text-white rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(242,145,0,0.3)] min-w-[320px]"
            >
               <AnimatePresence mode="wait">
                <motion.span
                  key={currentLabelIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 block"
                >
                  {BUTTON_LABELS[currentLabelIndex].text}
                </motion.span>
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Conciergerie Services Showcase - Dual Marquee */}
      <section className="py-24 bg-stone-50 dark:bg-stone-950 overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Excellence & Confort</span>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-brand-dark dark:text-white leading-tight">Services <span className="italic font-medium">Exclusifs</span></h2>
          </motion.div>

          <div className="flex gap-4">
            <button
              onClick={() => onNavigate('conciergerie')}
              className="hidden md:flex items-center gap-2 text-stone-900 dark:text-stone-100 font-bold uppercase tracking-widest text-xs border border-stone-900 dark:border-stone-100 px-6 py-3 rounded-full hover:bg-stone-900 dark:hover:bg-stone-100 hover:text-white dark:hover:text-stone-900 transition-all"
            >
              Tout les services
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {/* Row 1: Left to Right */}
          <div className="flex overflow-hidden relative w-full">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              {[...row1, ...row1, ...row1].map((service, index) => ( // Tripled for smoothness on wide screens
                <div
                  key={`r1-${service.id}-${index}`}
                  className="min-w-[300px] md:min-w-[380px] h-[450px] group cursor-pointer relative rounded-[2rem] overflow-hidden transform hover:scale-[0.98] transition-all duration-500"
                  onClick={() => service.id === 'finance' ? onNavigate('finance') : onNavigate('conciergerie')}
                >
                  <img
                    src={service.image.startsWith('http') ? `${service.image}&w=600` : service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
                    <p className="text-stone-300 text-sm font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.description}
                    </p>
                    <div className="mt-4 w-12 h-[1px] bg-amber-500 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex overflow-hidden relative w-full">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              {[...row2, ...row2, ...row2].map((service, index) => (
                <div
                  key={`r2-${service.id}-${index}`}
                  className="min-w-[300px] md:min-w-[380px] h-[450px] group cursor-pointer relative rounded-[2rem] overflow-hidden transform hover:scale-[0.98] transition-all duration-500"
                  onClick={() => service.id === 'finance' ? onNavigate('finance') : onNavigate('conciergerie')}
                >
                  <img
                    src={service.image.startsWith('http') ? `${service.image}&w=600` : service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
                    <p className="text-stone-300 text-sm font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.description}
                    </p>
                    <div className="mt-4 w-12 h-[1px] bg-amber-500 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Horizontal Scroll - Circuits */}
      <section className="py-32 bg-white dark:bg-stone-900 overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-stone-100 mb-4">Circuits <span className="italic text-amber-600">Signature</span></h2>
            <p className="text-stone-500 dark:text-stone-400">Une sélection d'itinéraires exclusifs.</p>
          </div>
          <button
            onClick={() => onNavigate('circuits')}
            className="hidden md:flex items-center gap-2 text-stone-900 dark:text-stone-100 font-bold uppercase tracking-widest text-xs border-b border-stone-900 dark:border-stone-100 pb-1 hover:text-amber-600 hover:border-amber-600 transition-colors"
          >
            Tout voir <ArrowRight size={16} />
          </button>
        </div>

        <div className="flex overflow-x-auto gap-8 px-6 pb-12 hide-scrollbar snap-x">
          {CIRCUITS.map((circuit, index) => (
            <motion.div
              key={circuit.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="min-w-[350px] md:min-w-[450px] snap-center group cursor-pointer"
              onClick={() => onNavigate('circuits')}
            >
              <div className="bg-stone-100 dark:bg-stone-800 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative h-[500px] overflow-hidden">
                  <img
                    src={circuit.image.startsWith('http') ? `${circuit.image}?auto=format&fit=crop&w=800&q=80` : circuit.image}
                    alt={circuit.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-amber-400 text-xs font-bold mb-3 uppercase tracking-widest">{circuit.duration}</p>
                    <h3 className="text-3xl font-serif text-white mb-2 leading-tight">{circuit.title}</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                      <span className="text-white font-bold text-lg block mt-4 border-t border-white/20 pt-4">{circuit.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial & Footer CTA */}
      <section className="py-32 bg-stone-900 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-900/10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Quote className="mx-auto text-amber-500 mb-12 opacity-50" size={48} />
          <p className="text-3xl md:text-5xl font-serif text-white leading-tight italic mb-16">
            "Le Bénin comme vous ne l'avez jamais vu. Une parenthèse enchantée au cœur de l'histoire."
          </p>
          <div className="flex flex-col items-center gap-8">
            <div className="w-16 h-1 w-16 bg-amber-600 rounded-full"></div>
            <button onClick={() => onNavigate('contact' as any)} className="bg-white text-stone-900 px-12 py-5 rounded-full text-sm font-bold hover:bg-amber-400 transition-all uppercase tracking-[0.2em]">
              Commencer l'aventure
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeView;
