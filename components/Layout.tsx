import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook, Linkedin, MessageSquare, MapPin, Sun, Moon } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ViewType } from '../App';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Custom Cursor Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 6);
      mouseY.set(e.clientY - 6);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Management
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (systemPrefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks: { name: string; view: ViewType }[] = [
    { name: 'Accueil', view: 'home' },
    { name: 'Nos Circuits', view: 'circuits' },
    { name: 'Conciergerie', view: 'conciergerie' },
    { name: 'Finance', view: 'finance' },
    { name: 'Ebunbox', view: 'ebunbox' },
    { name: 'Goodies & Souvenirs', view: 'boutique' },
  ];

  const isTransparent = currentView === 'home' && !isScrolled;

  return (
    <div className="relative min-h-screen flex flex-col cursor-none bg-stone-50 dark:bg-stone-950 transition-colors duration-500">
      {/* Custom Laser Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_rgba(242,145,0,0.6)] mix-blend-screen"
        style={{ translateX: cursorX, translateY: cursorY }}
      />

      {/* Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isTransparent ? 'bg-transparent py-4 md:py-6' : 'bg-white/60 dark:bg-stone-950/60 backdrop-blur-xl py-2 md:py-3 shadow-sm border-b border-stone-200/20 dark:border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20 md:h-24">
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center group relative z-10 -ml-2"
          >
            <img
              src="/images/LoDi-logo.png.svg"
              alt="Béninéo Logo"
              className="h-28 md:h-36 w-auto object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-xl scale-110 origin-left"
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => onNavigate(link.view)}
                className={`text-sm font-medium tracking-wide transition-colors ${currentView === link.view
                  ? 'text-amber-600'
                  : isTransparent ? 'text-white hover:text-amber-400' : 'text-stone-600 hover:text-amber-700 dark:text-stone-300 dark:hover:text-amber-400'
                  }`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800'}`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <a
              href="https://wa.me/2290169410332"
              className="bg-amber-700 text-white px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold hover:bg-amber-800 transition-colors tracking-widest"
            >
              RÉSERVER
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className={isTransparent ? 'text-white' : 'text-stone-900'} /> : <Menu className={isTransparent ? 'text-white' : 'text-stone-900'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-stone-900 z-[60] flex flex-col items-center justify-center gap-8 md:hidden">
          <button className="absolute top-6 right-6 p-2 text-white" onClick={() => setIsMenuOpen(false)}>
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <button
              key={link.view}
              className={`text-white text-2xl font-serif tracking-widest hover:text-amber-500 transition-colors ${currentView === link.view ? 'text-amber-500' : ''}`}
              onClick={() => {
                onNavigate(link.view);
                setIsMenuOpen(false);
              }}
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://wa.me/2290169410332"
            className="mt-4 bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
          >
            WHATSAPP DIRECT
          </a>
        </div>
      )}

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-300 py-20 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6 group -ml-4 md:-ml-8">
              <img
                src="/images/LoDi-logo.png.svg"
                alt="Béninéo Logo"
                className="h-32 md:h-48 w-auto object-contain opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
            <p className="max-w-md text-stone-400 leading-relaxed mb-8 italic text-sm">
              "Plus qu'une agence, nous sommes des conteurs d'histoires, créateurs d'expériences et artisans du voyage sur mesure au berceau vivant de la culture Vodoun."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-amber-700 hover:border-amber-700 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-amber-700 hover:border-amber-700 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-amber-700 hover:border-amber-700 hover:text-white transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Navigation</h3>
            <ul className="space-y-4 text-xs font-medium uppercase tracking-wider">
              {navLinks.map(link => (
                <li key={link.view}>
                  <button onClick={() => onNavigate(link.view)} className="hover:text-amber-500 text-left transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Contact</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-amber-600 shrink-0" />
                <span className="text-stone-400">Carrefour Zogbo, Cotonou, Bénin</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-amber-600 shrink-0" />
                <span className="text-stone-400">+229 01 69 41 03 32</span>
              </li>
              <li className="flex items-center gap-4">
                <MessageSquare size={18} className="text-amber-600 shrink-0" />
                <span className="text-stone-400">contact@benineo.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-900 text-center text-[10px] text-stone-600 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Béninéo. Conçu avec passion pour le Bénin.
        </div>
      </footer>
    </div>
  );
};

export default Layout;