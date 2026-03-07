
import React from 'react';
import { Plane, CreditCard, ShieldCheck, MapPin, Coffee, Smartphone, UserCheck, Heart } from 'lucide-react';
import { Circuit, Ebunbox, Goodie, Service } from './types';

export const CIRCUITS: Circuit[] = [
  {
    id: '1',
    title: "WeLovEya - Bénin Vibrant",
    duration: "6 jours / 5 nuits",
    price: "490€",
    description: "Immersion authentique et festive au cœur du Bénin.",
    image: "/images/weloveeya.png",
    category: 'long'
  },
  {
    id: '2',
    title: "Vodoun Days - Weekend Mystique",
    duration: "3 jours / 2 nuits",
    price: "190€",
    description: "Immersion dans le Bénin mystique et les fêtes du Vodoun.",
    image: "/images/vodun-days.png",
    category: 'weekend'
  },
  {
    id: '3',
    title: "Route des Esclaves",
    duration: "1 jour",
    price: "75€",
    description: "Un pèlerinage mémoriel à Ouidah.",
    image: "/images/ouidah.png",
    category: 'theme'
  }
];

export const CONCIERGERIE_SERVICES: Service[] = [
  // Préparation
  {
    id: 'billets',
    title: "Billets d'avion",
    description: "Recherche et réservation de vols adaptés à vos dates et à votre budget.",
    icon: 'Plane',
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
  },
  {
    id: 'visa',
    title: "Assistance visa",
    description: "Accompagnement simple et sécurisé pour vos démarches de visa.",
    icon: 'ShieldCheck',
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'transfert',
    title: "Accueil & transfert",
    description: "Prise en charge dès votre arrivée et transfert confortable.",
    icon: 'MapPin',
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
  },
  // Logistique
  {
    id: 'vehicule',
    title: "Location de véhicule",
    description: "Véhicules fiables avec ou sans chauffeur, selon vos besoins.",
    icon: 'Car',
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'telecom',
    title: "Télécom (SIM & Internet)",
    description: "Aide à l’activation de cartes SIM et forfaits Internet locaux.",
    icon: 'Smartphone',
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'finance',
    title: "Services financiers",
    description: "Assistance pour le change, Mobile Money et retraits sécurisés.",
    icon: 'CreditCard',
    image: "https://images.unsplash.com/photo-1556742046-8078024374b4?q=80&w=2070&auto=format&fit=crop"
  },
  // Expériences
  {
    id: 'activites',
    title: "Activités & excursions",
    description: "Réservation d’expériences culturelles et excursions authentiques.",
    icon: 'MapPin',
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: 'gastro',
    title: "Gastronomie",
    description: "Conseils et réservations dans les meilleures tables locales.",
    icon: 'Utensils',
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'nightlife',
    title: "Vie nocturne",
    description: "Orientation vers bars, lounges et lieux nocturnes incontournables.",
    icon: 'Music',
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'spirituel',
    title: "Immersion spirituelle",
    description: "Expériences culturelles et spirituelles respectueuses.",
    icon: 'Sparkles',
    image: "https://images.unsplash.com/photo-1590845947376-b638fd89969c?q=80&w=2670&auto=format&fit=crop"
  }
];

export const EBUNBOXES: Ebunbox[] = [
  {
    id: 'e1',
    title: "Bien-être Royal",
    price: "50 000 FCFA",
    description: "Massage complet, gommage et déjeuner royal.",
    image: "https://picsum.photos/seed/gift1/600/400"
  },
  {
    id: 'e2',
    title: "Nautisme & VR",
    price: "35 000 FCFA",
    description: "Jet ski, kayak et réalité virtuelle immersive.",
    image: "https://picsum.photos/seed/gift2/600/400"
  },
  {
    id: 'e3',
    title: "Weekend Casa del Papa",
    price: "166 000 FCFA",
    description: "Séjour de luxe, spa et visite culturelle.",
    image: "https://picsum.photos/seed/gift3/600/400"
  }
];

export const GOODIES: Goodie[] = [
  { id: 'g1', name: "Tee-shirt Classique", price: "7 000 FCFA", image: "https://picsum.photos/seed/tshirt/400/400" },
  { id: 'g2', name: "Casquette Béninéo", price: "5 000 FCFA", image: "https://picsum.photos/seed/cap/400/400" }
];
