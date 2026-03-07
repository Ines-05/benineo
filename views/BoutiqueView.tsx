
import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  {
    name: "Tee-shirt Classique",
    price: "7 000 FCFA",
    eur: "11€",
    usd: "12$",
    desc: "Stylé, confortable, doux et respirant, avec le logo emblématique Béninéo.",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Tee-shirt Personnalisable",
    price: "10 000 FCFA",
    eur: "15€",
    usd: "18$",
    desc: "Créez votre propre style. Personnalisation totale (texte, visuel, couleurs).",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b721fa?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Casquette Béninéo",
    price: "5 000 FCFA",
    eur: "8€",
    usd: "9$",
    desc: "Tendance, légère et ajustable. L'accessoire indispensable de l'explorateur.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2070&auto=format&fit=crop"
  }
];

const BoutiqueView: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <section className="py-20 px-6 bg-stone-50 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <ShoppingBag className="mx-auto text-stone-300 mb-8" size={48} />
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 italic">Goodies & Souvenirs</h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto italic">
            "Emportez un morceau de votre voyage sur le Bénin."
          </p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {PRODUCTS.map((product, i) => (
          <div key={i} className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-[32px] mb-8 relative bg-stone-100 shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
              <h3 className="text-2xl font-serif text-stone-900">{product.name}</h3>
              <p className="text-stone-500 text-sm font-light italic leading-relaxed">{product.desc}</p>
              <div className="pt-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-amber-900 font-bold text-xl">{product.price}</span>
                  <span className="text-xs text-stone-400">{product.eur} / {product.usd}</span>
                </div>
                <button className="text-stone-300 group-hover:text-amber-700 transition-colors">
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Upcoming Products placeholder */}
        <div className="aspect-[3/4] border-2 border-dashed border-stone-200 rounded-[32px] flex flex-col items-center justify-center p-10 text-center text-stone-300">
          <h4 className="font-serif text-2xl mb-4">Prochainement</h4>
          <p className="text-sm italic">Mugs, sculptures & créations locales</p>
        </div>
      </section>
    </div>
  );
};

export default BoutiqueView;
