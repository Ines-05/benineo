
import React from 'react';
import { Gift, Star, ArrowRight } from 'lucide-react';

const BOXES = [
  {
    title: "Bien-être Royal",
    price: "50 000 FCFA",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    details: ["Massage complet", "Gommage corporel", "Soins du visage", "Déjeuner Royal (Entrée/Plat/Dessert)"]
  },
  {
    title: "Réalité Virtuelle & Nautisme",
    price: "35 000 FCFA",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    details: ["Jet ski (10 min)", "Hydrokèkè / Kayak", "Réalité virtuelle (1h)"]
  },
  {
    title: "Weekend Magique Solo",
    price: "166 000 FCFA",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    details: ["1 Nuit à Casa del Papa", "Côté Lagune", "Petit déjeuner & Dîner", "Bain d'argile à Gogotinkpon"]
  },
  {
    title: "Vitesse & Immersion",
    price: "25 000 FCFA",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop",
    details: ["Karting (1 session)", "Réalité virtuelle (1h)"]
  }
];

const EbunboxView: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <section className="bg-amber-50 py-24 px-6 mb-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <Gift className="text-amber-600 mb-8" size={48} />
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 italic">Ebunbox</h1>
          <p className="text-stone-600 text-lg max-w-2xl font-light italic leading-relaxed">
            "Un cadeau, un voyage, une émotion". Offrez la magie du Bénin à vos proches à travers nos coffrets cadeaux d'exception.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {BOXES.map((box, i) => (
          <div key={i} className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col md:flex-row border border-stone-50">
            <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
              <img src={box.image} alt={box.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-serif text-stone-900 leading-tight">{box.title}</h3>
                <Star className="text-amber-400 shrink-0" size={20} />
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {box.details.map((d, index) => (
                  <li key={index} className="text-stone-500 text-sm flex items-center gap-3 italic">
                    <span className="w-1.5 h-1.5 bg-amber-300 rounded-full" /> {d}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-stone-50 flex items-center justify-between">
                <span className="text-amber-900 font-bold text-xl">{box.price}</span>
                <button 
                   onClick={() => window.location.href = `https://wa.me/2290169410332?text=Je souhaite offrir l'Ebunbox : ${box.title}`}
                   className="bg-stone-900 text-white p-4 rounded-full hover:bg-amber-700 transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EbunboxView;
