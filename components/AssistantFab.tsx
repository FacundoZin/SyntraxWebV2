
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AssistantFab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: '¡Hola! Soy el asistente de Syntrax. ¿Cómo puedo ayudarte con tu proyecto hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const SUGGESTED_QUESTIONS = [
    '¿Qué servicios ofrecen?',
    '¿Cómo pido un presupuesto?',
    '¿Hacen software a medida?',
    '¿Cómo contacto a un humano?',
    '¿Trabajan con pymes?'
  ];

  const handleSend = async (customMessage?: string) => {
    const textToSend = (customMessage || input).trim();
    if (!textToSend || isTyping) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsTyping(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY || '';
      if (!apiKey) {
        throw new Error('API Key no encontrada. Asegúrate de configurar GEMINI_API_KEY en tu archivo .env.local');
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview', 
        contents: textToSend,
        config: {
          systemInstruction: `
Sos un asesor virtual de una empresa argentina llamada Syntrax que desarrolla sistemas de software a medida para empresas del interior del país, principalmente en Córdoba y Santa Fe.

Tu objetivo es asesorar de forma clara, breve y humana a personas que visitan la web.

Reglas clave de comunicación:
- Respondé de manera corta y natural.
- No hagas discursos largos ni presentaciones institucionales.
- Ajustá la profundidad de la respuesta según lo que pregunte el usuario.
- Si el mensaje es simple (por ejemplo: “hola”), respondé con un saludo breve y una sola pregunta.
- No expliques todo lo que hace la empresa si el usuario no lo pidió.

Tono:
- Español rioplatense, profesional y cercano.
- Simple, directo, sin frases de marketing.
- Como alguien real que entiende pymes y empresas del interior.

Sobre el rol:
- Asesorás, no vendés agresivamente.
- Ayudás a entender problemas y posibles soluciones.
- Hacés preguntas solo cuando suman.

Podés:
- Hacer una o dos preguntas para entender el contexto.
- Explicar soluciones de forma simple cuando el usuario lo pida.
- Aclarar que los sistemas son a medida solo si corresponde.

No debés:
- Dar precios cerrados.
- Prometer plazos.
- Pedir datos personales.
- Repetir siempre la ubicación o el tipo de empresa.

Precios, presupuestos o contacto humano:
- Si preguntan por precios, tiempos o quieren hablar con alguien, indicá amablemente que el siguiente paso es completar el formulario de contacto de la web.

Tu meta es generar confianza y facilitar el contacto humano, sin sonar a folleto ni a robot.
`,
          temperature: 0.7,
        },
      });

      const botReply = response.text || 'Lo siento, tuve un problema procesando tu solicitud. ¿Podrías intentar de nuevo?';
      setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    } catch (error: any) {
      console.error('Gemini Error:', error);
      const errorMessage = error.message?.includes('API Key') 
        ? 'Error de configuración: Falta la API Key.' 
        : 'Ocurrió un error al contactar con mi procesador central. Por favor, intenta más tarde.';
      setMessages(prev => [...prev, { role: 'bot', text: errorMessage }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 active:scale-95 transition-transform duration-300 group"
      >
        <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[600px] max-h-[80vh] bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col z-50 overflow-hidden animate-fade-in backdrop-blur-sm">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-5 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <span className="material-symbols-outlined text-white">auto_fix_high</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tighter text-base leading-tight">Syntrax AI</span>
                <span className="text-[10px] text-white/70 uppercase tracking-widest font-medium">Asistente Virtual</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse mr-1.5"></div>
                <span className="text-[10px] uppercase font-bold text-green-400">En línea</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-xl">keyboard_arrow_down</span>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow p-5 overflow-y-auto space-y-4 text-sm bg-stone-50/50 dark:bg-stone-950/30 scroll-smooth"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl shadow-sm transition-all hover:shadow-md ${
                    m.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none font-medium' 
                      : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 rounded-tl-none border border-stone-100 dark:border-stone-700 leading-relaxed'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white dark:bg-stone-800 p-4 rounded-2xl rounded-tl-none border border-stone-100 dark:border-stone-700 flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0s]"></div>
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-primary/80 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <span className="text-[10px] text-stone-400 font-medium">Syntrax está escribiendo...</span>
                </div>
              </div>
            )}
          </div>

          {/* FAQ / Suggestions - Syntrax Styled Scroll */}
          {messages.length < 3 && !isTyping && (
            <div className="relative bg-stone-50/50 dark:bg-stone-900/50 border-t border-stone-100 dark:border-stone-800 group/faq">
              {/* Fade Indicators */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-stone-50/80 dark:from-stone-900/80 to-transparent z-10 pointer-events-none opacity-0 group-hover/faq:opacity-100 transition-opacity"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-stone-50/80 dark:from-stone-900/80 to-transparent z-10 pointer-events-none opacity-0 group-hover/faq:opacity-100 transition-opacity"></div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => {
                  const el = document.getElementById('suggestions-scroll');
                  if (el) el.scrollBy({ left: -100, behavior: 'smooth' });
                }}
                className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-stone-800 rounded-full shadow-md z-20 flex items-center justify-center opacity-0 group-hover/faq:opacity-100 transition-all hover:scale-110 active:scale-90 border border-stone-100 dark:border-stone-700"
              >
                <span className="material-symbols-outlined text-sm text-primary">chevron_left</span>
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('suggestions-scroll');
                  if (el) el.scrollBy({ left: 100, behavior: 'smooth' });
                }}
                className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-stone-800 rounded-full shadow-md z-20 flex items-center justify-center opacity-0 group-hover/faq:opacity-100 transition-all hover:scale-110 active:scale-90 border border-stone-100 dark:border-stone-700"
              >
                <span className="material-symbols-outlined text-sm text-primary">chevron_right</span>
              </button>

              <div 
                id="suggestions-scroll"
                className="flex space-x-2 overflow-x-auto px-5 py-4 no-scrollbar scroll-smooth"
              >
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="flex-shrink-0 px-4 py-2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-full text-[11px] font-bold text-stone-600 dark:text-stone-300 hover:text-primary hover:border-primary/50 transition-all shadow-sm active:scale-95 whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-5 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800">
            <div className="relative flex items-center group">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full bg-stone-100 dark:bg-stone-800/50 border-transparent focus:border-primary/30 focus:bg-white dark:focus:bg-stone-800 border rounded-2xl pl-5 pr-14 py-3.5 text-sm transition-all outline-none dark:text-white"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className={`absolute right-2 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  input.trim() && !isTyping 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105 active:scale-95' 
                    : 'bg-stone-200 dark:bg-stone-700 text-stone-400 cursor-not-allowed'
                }`}
              >
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
            </div>
            <p className="text-[10px] text-center mt-3 text-stone-400 dark:text-stone-500 font-medium tracking-wide">
              Desarrollado con IA por Syntrax Software Lab
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AssistantFab;
