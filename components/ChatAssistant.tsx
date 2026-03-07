
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Loader2 } from 'lucide-react';
import { getTravelAdvice } from '../services/geminiService';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Bonjour ! Je suis votre guide virtuel Béninéo. Comment puis-je vous aider à découvrir l'âme du Bénin aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const botResponse = await getTravelAdvice(userMessage);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col h-[500px] border border-stone-200 overflow-hidden">
          <div className="bg-stone-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white text-xs font-bold">B</div>
              <div>
                <h4 className="text-white text-sm font-semibold">Assistant Béninéo</h4>
                <p className="text-stone-400 text-[10px] uppercase tracking-tighter">Toujours en ligne</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-stone-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' ? 'bg-amber-700 text-white' : 'bg-white text-stone-800'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl p-3 shadow-sm flex items-center gap-2 text-stone-400">
                  <Loader2 className="animate-spin" size={16} />
                  <span className="text-xs italic">Béninéo réfléchit...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-stone-100 bg-white">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex gap-2"
            >
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 text-sm bg-stone-100 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-amber-700 text-white p-2 rounded-full hover:bg-amber-800 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-amber-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-3"
        >
          <MessageCircle />
          <span className="hidden sm:block font-medium">Assistant</span>
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;
