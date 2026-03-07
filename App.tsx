
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ChatAssistant from './components/ChatAssistant';
import HomeView from './views/HomeView';
import CircuitsView from './views/CircuitsView';
import ConciergerieView from './views/ConciergerieView';
import EbunboxView from './views/EbunboxView';
import BoutiqueView from './views/BoutiqueView';

export type ViewType = 'home' | 'circuits' | 'conciergerie' | 'ebunbox' | 'boutique';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onNavigate={setCurrentView} />;
      case 'circuits':
        return <CircuitsView />;
      case 'conciergerie':
        return <ConciergerieView />;
      case 'ebunbox':
        return <EbunboxView />;
      case 'boutique':
        return <BoutiqueView />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderView()}
      <ChatAssistant />
    </Layout>
  );
};

export default App;
