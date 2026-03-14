import React from 'react';
import { Plane, ShieldCheck, MapPin, Smartphone, CreditCard, Heart, Check, ArrowRight, Car, Wifi, Coins, Music, Utensils, Camera, Sparkles, Baby, Languages, PartyPopper, Headset, UserCheck, Truck, Hotel, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewType } from '../App';

const SERVICES = [
  // Préparation du voyage
  {
    id: 'billets',
    icon: Plane,
    title: "Billets d'avion",
    desc: "Recherche et réservation de vols adaptés à vos dates et à votre budget.",
    longDesc: "Nous gérons vos vols avec soin, pour un départ serein et des connexions optimales vers le Bénin, en toute simplicité et sans stress. Cela inclut la réservation de billets d'avion adaptée à ton itinéraire et à tes contraintes.",
    image: "/images/reservation de billet d'avion.jpg"
  },
  {
    id: 'visa',
    icon: ShieldCheck,
    title: "Assistance visa",
    desc: "Accompagnement simple et sécurisé pour vos démarches de visa.",
    longDesc: "Simplifiez vos formalités administratives grâce à notre accompagnement dédié. Nous t’aidons à constituer une demande de visa rapide et conforme, pour un voyage sans encombre.",
    image: "/images/assistance visa.png"
  },
  {
    id: 'transfert',
    icon: MapPin,
    title: "Accueil & transfert",
    desc: "Prise en charge dès votre arrivée et transfert confortable vers votre hébergement.",
    longDesc: "À votre arrivée, profitez d’un accueil chaleureux et d’un transfert confortable vers votre hébergement pour bien démarrer votre séjour. Ce service inclut la navette aéroport avec un transport adapté à tes besoins.",
    image: "/images/navette aeroport.jpg"
  },
  {
    id: 'hebergement',
    icon: Hotel,
    title: "Hébergement",
    desc: "Sélection d'hébergements authentiques adaptés à votre budget.",
    longDesc: "Nous sélectionnons pour vous des hébergements confortables et authentiques, adaptés à toutes vos attentes, pour un séjour mémorable au Bénin. L’offre couvre différents niveaux de confort et de styles, selon ton profil et ton budget.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
  },

  // Logistique & mobilité
  {
    id: 'vehicule',
    icon: Car,
    title: "Location de véhicule",
    desc: "Véhicules fiables avec ou sans chauffeur, selon vos besoins.",
    longDesc: "Liberté de déplacement garantie avec notre service de location de voiture. Tu peux choisir une location avec ou sans chauffeur selon tes envies et ton niveau de confort à conduire localement.",
    image: "/images/location_vehicule_luxe.png"
  },
  {
    id: 'chauffeur',
    icon: UserCheck,
    title: "Transport avec chauffeur",
    desc: "Déplacements sécurisés avec chauffeurs professionnels.",
    longDesc: "Nous organisons tous vos déplacements avec des véhicules confortables et chauffeurs professionnels pour un voyage fluide et sécurisé. Ce service couvre les trajets urbains comme les déplacements plus longs à l’intérieur du pays.",
    image: "/images/location_vehicule_luxe.png"
  },
  {
    id: 'telecom',
    icon: Wifi,
    title: "Télécom (SIM & Internet)",
    desc: "Aide à l’activation de cartes SIM et forfaits Internet locaux.",
    longDesc: "Restez connecté partout grâce à nos conseils personnalisés pour choisir la meilleure carte SIM et le forfait internet local adaptés à vos besoins. Nous t’orientons sur les solutions télécom les plus pratiques dès ton arrivée.",
    image: "/images/conseil telecom.jpg"
  },
  {
    id: 'finance',
    icon: Coins,
    title: "Services financiers",
    desc: "Assistance pour le change, Mobile Money et retraits sécurisés.",
    longDesc: "Accédez à vos fonds facilement avec nos services sécurisés de mobile money, change de devises et retraits, partout au Bénin. La priorité est la sécurité et la simplicité de tes opérations financières sur place.",
    image: "/images/service financier.jpg"
  },

  // Expériences & loisirs
  {
    id: 'activites',
    icon: MapPin,
    title: "Activités & excursions",
    desc: "Réservation d’expériences culturelles et excursions authentiques.",
    longDesc: "Découvrez les trésors du Bénin grâce à notre large choix d’excursions, visites guidées et expériences culturelles à réserver en toute simplicité. Nous proposons également la réservation d’activités festives et d’événements locaux.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: 'gastro',
    icon: Utensils,
    title: "Gastronomie & restaurants",
    desc: "Conseils et réservations dans les meilleures tables locales.",
    longDesc: "Savourez le meilleur de la gastronomie béninoise (restaurant, bar, street food) avec notre guide exclusif. Nous te recommandons des adresses authentiques pour découvrir la cuisine locale dans différentes gammes.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'nightlife',
    icon: Music,
    title: "Vie nocturne",
    desc: "Orientation vers bars, lounges et lieux nocturnes incontournables.",
    longDesc: "Savourez la vie nocturne (bar, restaurant, clubs, casinos) avec notre guide exclusif des meilleurs lieux, réservation garantie. Nous t’aidons à identifier les endroits les plus adaptés à ton style de sortie.",
    image: "/images/conseil vie nocturne.jpg"
  },
  {
    id: 'soins',
    icon: Heart,
    title: "Soins et bien-être",
    desc: "Massage, soins et rituels traditionnels de relaxation.",
    longDesc: "Offrez-vous un moment de relaxation avec notre sélection exclusive de soins, massages et rituels traditionnels pour un bien-être total. Ces prestations sont pensées pour t’apporter détente et découverte du savoir-faire local en matière de bien-être.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'photo',
    icon: Camera,
    title: "Photographe & vidéaste",
    desc: "Capturez vos meilleurs moments avec des professionnels.",
    longDesc: "Immortalisez vos instants précieux avec des professionnels de l’image. Ils racontent votre voyage à travers des clichés et vidéos d’exception pour garder des souvenirs de qualité.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 'spirituel',
    icon: Sparkles,
    title: "Immersion spirituelle",
    desc: "Expériences culturelles et spirituelles traditionnelles.",
    longDesc: "Explorez les richesses spirituelles du Bénin à travers des rituels sacrés et des rencontres avec des maîtres traditionnels dans un cadre respectueux. L’objectif est de vivre une immersion spirituelle encadrée et sécurisée.",
    image: "https://images.unsplash.com/photo-1590845947376-b638fd89969c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 'romantique',
    icon: PartyPopper,
    title: "Expériences romantiques",
    desc: "Moments personnalisés pour célébrer une occasion spéciale.",
    longDesc: "Créez des moments magiques et inoubliables avec nos prestations sur mesure, mêlant romantisme et authenticité béninoise. Cela peut inclure des mises en scène spéciales, dîners, surprises ou décorations adaptées.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop"
  },

  // Confort & accompagnement
  {
    id: 'garderie',
    icon: Baby,
    title: "Garderie pour enfants",
    desc: "Prise en charge sécurisée de vos enfants pendant vos activités.",
    longDesc: "Profitez pleinement de vos sorties en toute sérénité, grâce à notre service de garderie attentif et bienveillant pour vos enfants. Nous collaborons avec des personnes de confiance pour assurer leur confort et leur sécurité.",
    image: "https://images.unsplash.com/photo-1502086223501-636a20045636?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'coursier',
    icon: Truck,
    title: "Service de coursier",
    desc: "Courses et envois urgents, rapides et discrets.",
    longDesc: "Confiez-nous vos courses et envois urgents, notre service de coursier fiable et discret assure rapidité, sécurité et tranquillité d’esprit. Ce service couvre les livraisons, achats ou documents importants à faire circuler.",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'guides',
    icon: Languages,
    title: "Guides & interprètes",
    desc: "Accompagnement culturel et linguistique sur mesure.",
    longDesc: "Bénéficiez d’un accompagnement culturel et linguistique de qualité pour enrichir vos visites et échanges avec une expertise locale. Un réseau fiable de guides et d’interprètes est à votre service pour faciliter la communication et la compréhension du contexte local.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'event',
    icon: PartyPopper,
    title: "Conciergerie événementielle",
    desc: "Organisation d’événements privés ou professionnels.",
    longDesc: "Organisez vos événements professionnels ou privés avec notre accompagnement complet, de la logistique à l’accueil personnalisé. Cela peut concerner des conférences, fora, soirées ou rencontres d’affaires.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 'assistance',
    icon: Headset,
    title: "Assistance 24/7",
    desc: "Support disponible à tout moment en cas d’imprévu.",
    longDesc: "Sécurité et assistance 24/7, pour répondre à vos besoins médicaux ou urgences, avec des partenaires fiables et efficaces. Ce dispositif te garantit un appui en cas d’imprévu ou de problème de santé.",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop"
  }
];

interface ConciergerieViewProps {
  onNavigate?: (view: ViewType) => void;
}

const ConciergerieView: React.FC<ConciergerieViewProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = React.useState<typeof SERVICES[0] | null>(null);

  return (
    <div className="pt-24 pb-24 dark:bg-stone-950 transition-colors duration-500">
      {/* Sub-hero */}
      <section className="relative bg-stone-900 text-white h-[60vh] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" alt="Conciergerie Luxury" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center px-6">
          <span className="text-accent font-bold uppercase tracking-[0.4em] text-[clamp(0.6rem,1.5vw,0.75rem)] mb-6 block">Service d'élite</span>
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-montserrat font-bold mb-8 italic tracking-tighter text-white leading-tight">La Clé de vos besoins</h1>
          <p className="text-white/80 text-base md:text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Parce que votre temps est précieux et votre confort essentiel, notre conciergerie orchestre chaque détail de votre séjour au Bénin avec rigueur et élégance.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div 
              key={service.id || i} 
              onClick={() => setSelectedService(service)}
              className="group bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 pb-8 cursor-pointer"
            >
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
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-8 text-sm line-clamp-2">{service.desc}</p>
                <div className="pt-6 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `https://wa.me/2290169410332?text=Je souhaite commander le service conciergerie : ${service.title}`;
                    }}
                    className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-brand-dark dark:hover:text-white transition-colors"
                  >
                    Commander <ArrowRight size={16} />
                  </button>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Voir détails</span>
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

      {/* Large Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-stone-900 w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={selectedService.image.startsWith('http') ? `${selectedService.image}&w=1000` : selectedService.image}
                  className="w-full h-full object-cover"
                  alt={selectedService.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <selectedService.icon size={28} />
                  </div>
                  <span className="text-accent font-bold uppercase tracking-widest text-xs">Conciergerie Béninéo</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-dark dark:text-white mb-6 leading-tight">
                  {selectedService.title}
                </h2>

                <p className="text-stone-600 dark:text-stone-300 text-lg leading-relaxed mb-8 font-light italic">
                  "{selectedService.desc}"
                </p>

                <div className="bg-stone-50 dark:bg-stone-800/50 p-6 rounded-2xl mb-10 border border-stone-100 dark:border-stone-800">
                  <p className="text-stone-700 dark:text-stone-400 leading-relaxed font-sans">
                    {selectedService.longDesc}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => window.location.href = `https://wa.me/2290169410332?text=Je souhaite commander le service conciergerie : ${selectedService.title}`}
                    className="flex-1 bg-accent text-white px-8 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-amber-600 transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-3"
                  >
                    Commander <ArrowRight size={18} />
                  </button>
                  {selectedService.id === 'finance' && (
                    <button
                      onClick={() => {
                        if (onNavigate) onNavigate('finance');
                        setSelectedService(null);
                      }}
                      className="flex-1 bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-all flex items-center justify-center"
                    >
                      Détails techniques
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConciergerieView;
