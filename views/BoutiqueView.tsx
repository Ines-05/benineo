
import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  {
    name: "Tee-shirt Classique",
    price: "7 000 FCFA",
    eur: "11€",
    usd: "12$",
    desc: "Stylé, confortable, doux et respirant, avec le logo emblématique Béninéo.",
    image: "/images/tshirt_classique.png"
  },
  {
    name: "Tee-shirt Personnalisable",
    price: "10 000 FCFA",
    eur: "15€",
    usd: "18$",
    desc: "Créez votre propre style. Personnalisation totale (texte, visuel, couleurs).",
    image: "/images/tshirt_perso.png"
  },
  {
    name: "Casquette Béninéo",
    price: "5 000 FCFA",
    eur: "8€",
    usd: "9$",
    desc: "Tendance, légère et ajustable. L'accessoire indispensable de l'explorateur.",
    image: "/images/cap_benineo.png"
  }
];

const BoutiqueView: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <section className="py-24 px-6 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <ShoppingBag className="mx-auto text-brand-neutral mb-8" size={64} strokeWidth={1} />
          <h1 className="text-6xl md:text-9xl font-montserrat font-bold text-brand-dark mb-6 tracking-tighter">Goodies <span className="text-accent">&</span> Souvenirs</h1>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto italic font-sans font-light">
            "Emportez un morceau de votre voyage sur le Bénin."
          </p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {PRODUCTS.map((product, i) => (
          <div key={i} className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-[32px] mb-8 relative bg-stone-100 shadow-sm">
              <img
                src={product.image.startsWith('http') ? `${product.image}&w=600` : product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button
                  onClick={() => window.location.href = `https://wa.me/2290169410332?text=Bonjour, je souhaite commander l'article : ${product.name}`}
                  className="bg-white text-stone-900 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs"
                >
                  Commander
                </button>
              </div>
            </div>
            <div className="space-y-3 px-2">
              <h3 className="text-2xl font-montserrat font-bold text-brand-dark">{product.name}</h3>
              <p className="text-stone-500 text-sm font-light italic leading-relaxed font-sans">{product.desc}</p>
              <div className="pt-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-accent font-bold text-2xl tracking-tight">{product.price}</span>
                  <span className="text-[10px] text-stone-400 font-medium uppercase tracking-widest">{product.eur} / {product.usd}</span>
                </div>
                <button className="text-brand-neutral group-hover:text-accent transition-all transform group-hover:translate-x-1">
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Upcoming Products placeholder */}
        <div className="aspect-[3/4] border-2 border-dashed border-brand-neutral rounded-[32px] flex flex-col items-center justify-center p-10 text-center text-stone-300">
          <h4 className="font-montserrat font-bold text-2xl mb-4 text-brand-neutral">Prochainement</h4>
          <p className="text-sm italic font-sans">Mugs, sculptures & créations locales</p>
        </div>
      </section>
    </div>
  );
};

export default BoutiqueView;
