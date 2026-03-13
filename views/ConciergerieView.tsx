import React from 'react';
import { Plane, ShieldCheck, MapPin, Smartphone, CreditCard, Heart, Check, ArrowRight, Car, Wifi, Coins, Music, Utensils, Camera, Sparkles, Baby, Languages, PartyPopper, Headset, UserCheck } from 'lucide-react';

const SERVICES = [
  // Préparation du voyage
  {
    icon: Plane,
    title: "Billets d'avion",
    desc: "Recherche et réservation de vols adaptés à vos dates et à votre budget.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
  },
  {
    icon: ShieldCheck,
    title: "Assistance visa",
    desc: "Accompagnement simple et sécurisé pour vos démarches de visa.",
    image: "/images/assistance_visa.jpg"
  },
  {
    icon: MapPin,
    title: "Accueil & transfert",
    desc: "Prise en charge dès votre arrivée et transfert confortable vers votre hébergement.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
  },

  // Logistique & mobilité
  {
    icon: Car,
    title: "Location de véhicule",
    desc: "Véhicules fiables avec ou sans chauffeur, selon vos besoins.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: UserCheck,
    title: "Transport avec chauffeur",
    desc: "Déplacements sécurisés avec chauffeurs professionnels et expérimentés.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Wifi,
    title: "Télécom (SIM & Internet)",
    desc: "Aide à l’activation de cartes SIM et forfaits Internet locaux.",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'finance',
    icon: Coins,
    title: "Services financiers",
    desc: "Assistance pour le change, Mobile Money et retraits sécurisés.",
    image: "https://images.unsplash.com/photo-1556742046-8078024374b4?q=80&w=2070&auto=format&fit=crop"
  },

  // Expériences & loisirs
  {
    icon: MapPin,
    title: "Activités & excursions",
    desc: "Réservation d’expériences culturelles et excursions authentiques.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop"
  },
  {
    icon: Utensils,
    title: "Gastronomie & restaurants",
    desc: "Conseils et réservations dans les meilleures tables locales.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Music,
    title: "Vie nocturne",
    desc: "Orientation vers bars, lounges et lieux nocturnes incontournables.",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Camera,
    title: "Photographe & vidéaste",
    desc: "Capturez vos meilleurs moments avec des professionnels.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
  },
  {
    icon: Sparkles,
    title: "Immersion spirituelle",
    desc: "Expériences culturelles et spirituelles respectueuses des traditions.",
    image: "https://images.unsplash.com/photo-1590845947376-b638fd89969c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    icon: PartyPopper,
    title: "Expériences surprises",
    desc: "Moments personnalisés pour célébrer une occasion spéciale.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop"
  },

  // Confort & accompagnement
  {
    icon: Baby,
    title: "Garderie",
    desc: "Prise en charge sécurisée de vos enfants pendant vos activités.",
    image: "https://images.unsplash.com/photo-1502086223501-636a20045636?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Languages,
    title: "Guides & interprètes",
    desc: "Accompagnement culturel et linguistique sur mesure.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" // Changed image for variety
  },
  {
    icon: PartyPopper,
    title: "Conciergerie événementielle",
    desc: "Organisation d’événements privés ou professionnels.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
  },
  {
    icon: Headset,
    title: "Assistance 24/7",
    desc: "Support disponible à tout moment en cas d’imprévu.",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop"
  }
];

import { ViewType } from '../App';

interface ConciergerieViewProps {
  onNavigate?: (view: ViewType) => void;
}

const ConciergerieView: React.FC<ConciergerieViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-24 dark:bg-stone-950 transition-colors duration-500">
      {/* Sub-hero */}
      <section className="relative bg-stone-900 text-white h-[60vh] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" alt="Conciergerie Luxury" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center px-6">
          <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Service d'élite</span>
          <h1 className="text-6xl md:text-9xl font-montserrat font-bold mb-8 italic tracking-tighter text-white">La Clé de vos besoins</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Parce que votre temps est précieux et votre confort essentiel, notre conciergerie orchestre chaque détail de votre séjour au Bénin avec rigueur et élégance.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div key={i} className="group bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 pb-8">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image.startsWith('http') ? `${service.image}&w=600` : service.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 dark:bg-stone-800/90 backdrop-blur rounded-xl flex items-center justify-center text-accent shadow-lg">
                  <service.icon size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-montserrat font-bold text-brand-dark dark:text-white mb-4">{service.title}</h3>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-8 text-sm">{service.desc}</p>
                <div className="pt-6 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                  <button
                    onClick={() => window.location.href = `https://wa.me/2290169410332?text=Je souhaite commander le service conciergerie : ${service.title}`}
                    className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-brand-dark dark:hover:text-white transition-colors"
                  >
                    Commander <ArrowRight size={16} />
                  </button>
                  {service.id === 'finance' && onNavigate && (
                    <button
                      onClick={() => onNavigate('finance')}
                      className="text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-accent transition-colors"
                    >
                      En savoir plus
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="p-10 bg-accent rounded-[32px] text-white flex flex-col justify-center items-center text-center shadow-xl">
            <h3 className="text-3xl font-montserrat font-bold mb-6">Besoin d'un service sur mesure ?</h3>
            <p className="text-white/90 mb-10 font-light font-sans">Notre équipe est à votre disposition 24/7 pour satisfaire vos demandes les plus exclusives.</p>
            <a
              href="https://wa.me/2290169410332"
              className="bg-brand-dark text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConciergerieView;
