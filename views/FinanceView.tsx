
import React from 'react';
import { CreditCard, RefreshCw, Smartphone, ShieldCheck, ArrowRight, CheckCircle2, Globe, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const FinanceView: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="pt-24 pb-24 dark:bg-stone-950 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mb-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1556742046-8078024374b4?q=80&w=2070&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-30 dark:opacity-20 transition-all duration-1000 scale-105 hover:scale-100"
                        alt="Financial Services"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-transparent to-stone-50 dark:from-stone-950 dark:to-stone-950"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Transactions sans frontières</span>
                        <h1 className="text-[clamp(3rem,10vw,8rem)] font-montserrat font-bold mb-8 text-brand-dark dark:text-white tracking-tighter leading-tight">
                            Services <span className="text-accent italic">Financiers</span>
                        </h1>
                        <p className="text-stone-600 dark:text-stone-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed font-sans">
                            Simplifiez vos opérations de change, activez vos services Mobile Money et profitez de retraits sécurisés partout au Bénin.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="px-6 max-w-7xl mx-auto relative z-10 -mt-32">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Change Service */}
                    <motion.div variants={itemVariants} className="group bg-white dark:bg-stone-900 p-10 rounded-[2.5rem] shadow-xl border border-stone-100 dark:border-stone-800 flex flex-col items-center text-center hover:-translate-y-4 transition-all duration-500">
                        <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:rotate-[360deg] transition-transform duration-1000">
                            <RefreshCw size={32} />
                        </div>
                        <h3 className="text-2xl font-montserrat font-bold text-brand-dark dark:text-white mb-4">Assistance au Change</h3>
                        <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-6 font-sans">
                            Conversion fluide de vos devises étrangères (€, $, £) en Francs CFA au meilleur taux du marché local.
                        </p>
                        <div className="flex gap-4 mb-8">
                            <span className="px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-full text-[10px] font-bold text-stone-600 dark:text-stone-400">EURO</span>
                            <span className="px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-full text-[10px] font-bold text-stone-600 dark:text-stone-400">DOLLAR</span>
                            <span className="px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-full text-[10px] font-bold text-stone-600 dark:text-stone-400">CFA</span>
                        </div>
                    </motion.div>

                    {/* Mobile Money Service */}
                    <motion.div variants={itemVariants} className="group bg-brand-dark dark:bg-stone-800 p-10 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center text-white hover:-translate-y-4 transition-all duration-500">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                            <Smartphone size={32} />
                        </div>
                        <h3 className="text-2xl font-montserrat font-bold mb-4">Mobile Money</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6 font-sans">
                            Activation de cartes SIM locales, recharges internet et assistance pour les transferts via MTN, Moov ou Celtis.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-80">
                            <span className="text-[10px] font-black tracking-tighter text-yellow-400">MTN</span>
                            <span className="text-[10px] font-black tracking-tighter text-white">CELTIS</span>
                            <span className="text-[10px] font-black tracking-tighter text-purple-400">MOOV</span>
                        </div>
                    </motion.div>

                    {/* Secure Withdrawal Service */}
                    <motion.div variants={itemVariants} className="group bg-white dark:bg-stone-900 p-10 rounded-[2.5rem] shadow-xl border border-stone-100 dark:border-stone-800 flex flex-col items-center text-center hover:-translate-y-4 transition-all duration-500">
                        <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                            <CreditCard size={32} />
                        </div>
                        <h3 className="text-2xl font-montserrat font-bold text-brand-dark dark:text-white mb-4">Retraits Sécurisés</h3>
                        <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-6 font-sans">
                            Accompagnement pour vos retraits par carte bancaire internationale (Visa, Mastercard) en toute sécurité.
                        </p>
                        <div className="flex gap-4">
                            <Globe size={18} className="text-stone-300" />
                            <Landmark size={18} className="text-stone-300" />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Security & Trust */}
            <section className="py-32 px-6 max-w-5xl mx-auto">
                <div className="bg-accent/10 dark:bg-accent/5 rounded-[3rem] p-12 md:p-20 border border-accent/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 text-accent/10 pointer-events-none">
                        <ShieldCheck size={200} strokeWidth={0.5} />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-montserrat font-bold text-brand-dark dark:text-white mb-6">Sécurité <span className="text-accent italic">Garantie</span></h2>
                            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-8 font-light font-sans">
                                Toutes nos opérations financières sont effectuées dans un cadre formel et sécurisé. Nous vous garantissons une discrétion totale et une transparence sur les commissions.
                            </p>
                            <ul className="space-y-4">
                                {['Taux de change compétitifs', 'Opérations instantanées', 'Support client 24/7', 'Traçabilité complète'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-brand-dark dark:text-stone-300">
                                        <CheckCircle2 size={18} className="text-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <a
                                href="https://wa.me/2290169410332?text=Bonjour, j'ai besoin d'une assistance financière (change/retrait/mobile money)."
                                className="group relative inline-flex items-center gap-4 bg-brand-dark text-white px-10 py-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent transition-all duration-500 shadow-2xl overflow-hidden"
                            >
                                <span className="relative z-10">Démarrer une opération</span>
                                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Quote */}
            <section className="px-6 text-center max-w-3xl mx-auto pb-20">
                <p className="text-2xl md:text-3xl font-serif italic text-stone-400 dark:text-stone-500 leading-relaxed">
                    "La liberté de mouvement passe par la liberté de transaction. Nous sommes votre pont financier au Bénin."
                </p>
            </section>
        </div>
    );
};

export default FinanceView;
