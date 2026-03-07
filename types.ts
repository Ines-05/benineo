
export interface Circuit {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  category: 'theme' | 'weekend' | 'long';
}

export interface Ebunbox {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

export interface Goodie {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}
