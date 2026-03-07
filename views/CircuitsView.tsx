import React from 'react';
import { Clock, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const CIRCUITS_DATA = [
  {
    title: "WeLovEya - Bénin Vibrant",
    tagline: "Immersion authentique et festive au cœur du Bénin",
    duration: "6 jours / 5 nuits",
    shortDuration: "3 jours / 2 nuits",
    price: "490€",
    shortPrice: "190€",
    description: "Un voyage sensoriel pour découvrir l'énergie de Cotonou, la quiétude de Ouidah et l'authenticité des villages lacustres.",
    image: "/images/weloveeya.png",
    details: ["Forêt sacrée de Kpassè", "Route des Esclaves", "Gastronomie locale", "Rencontres communautaires"]
  },
  {
    title: "Vodoun Days - Weekend Mystique",
    tagline: "Immersion dans le Bénin mystique et fêtes du Vodoun",
    duration: "6 jours / 5 nuits",
    shortDuration: "3 jours / 2 nuits",
    price: "490€",
    shortPrice: "190€",
    description: "Explorez les racines de la spiritualité Vodoun, les rituels ancestraux et la force tranquille d'une culture millénaire.",
    image: "/images/vodun-days.png",
    details: ["Cérémonies traditionnelles", "Rencontre avec des dignitaires", "Ouidah la mystique", "Héritages royaux"]
  }
];

const CircuitsView: React.FC = () => {
  return (
    <div className="pt-24 pb-24 dark:bg-stone-950 transition-colors duration-500">
      {/* Header */}
      <section className="bg-stone-50 dark:bg-stone-900 py-20 px-6 mb-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Découverte</span>
          <h1 className="text-5xl md:text-8xl font-montserrat font-bold text-brand-dark dark:text-white mb-8 max-w-4xl tracking-tight">Nos Circuits <span className="italic font-medium text-accent">Signature</span></h1>
          <p className="text-stone-600 dark:text-stone-300 text-xl max-w-2xl leading-relaxed font-light italic font-sans">
            "Béninéo, là où commence le monde, là où se crée votre histoire." <br /> Chaque itinéraire est un poème écrit sur la terre-mère.
          </p>
        </div>
      </section>

      {/* Circuits List */}
      <section className="px-6 space-y-32">
        {CIRCUITS_DATA.map((circuit, index) => (
          <div key={index} className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`relative overflow-hidden rounded-[40px] shadow-2xl ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent z-10"></div>
              <img src={circuit.image} alt={circuit.title} className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000" />
              {circuit.title.includes("Vodoun") && (
                <div className="absolute top-10 left-10 z-20 bg-red-600 text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  9-10 Janvier
                </div>
              )}
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-brand-dark dark:text-white leading-tight">{circuit.title}</h2>
                <p className="text-accent italic font-medium tracking-wide">{circuit.tagline}</p>
              </div>

              <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-lg italic border-l-4 border-accent/20 pl-8 py-2 font-sans">
                "{circuit.description}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-white dark:bg-stone-900 rounded-3xl border border-brand-neutral dark:border-stone-800 shadow-sm transition-colors duration-500">
                  <div className="flex items-center gap-3 text-accent mb-4">
                    <Clock size={20} />
                    <span className="font-bold uppercase tracking-widest text-[10px]">Circuit Classique</span>
                  </div>
                  <p className="text-brand-dark dark:text-white font-montserrat font-bold text-2xl mb-1">{circuit.duration}</p>
                  <p className="text-accent font-bold text-lg">Dès {circuit.price}</p>
                </div>
                <div className="p-8 bg-white dark:bg-stone-900 rounded-3xl border border-brand-neutral dark:border-stone-800 shadow-sm transition-colors duration-500">
                  <div className="flex items-center gap-3 text-accent mb-4">
                    <Users size={20} />
                    <span className="font-bold uppercase tracking-widest text-[10px]">Formule Court</span>
                  </div>
                  <p className="text-brand-dark dark:text-white font-montserrat font-bold text-2xl mb-1">{circuit.shortDuration}</p>
                  <p className="text-accent font-bold text-lg">Dès {circuit.shortPrice}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Inclusions Immersion :</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {circuit.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 dark:text-stone-300 text-sm">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span className="font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={`https://wa.me/2290169410332?text=Bonjour, je souhaite réserver le circuit : ${circuit.title}`}
                  className="bg-brand-dark dark:bg-stone-100 text-white dark:text-brand-dark px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all inline-flex items-center gap-6 shadow-xl"
                >
                  DÉMARRER MON HISTOIRE <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CircuitsView;
