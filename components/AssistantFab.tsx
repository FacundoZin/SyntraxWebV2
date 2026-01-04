
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

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY || '';
      if (!apiKey) {
        throw new Error('API Key no encontrada. Asegúrate de configurar GEMINI_API_KEY en tu archivo .env.local');
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview', // Actualizado a la versión 2.0 ya que la 1.5 reporta 404 en 2026
        contents: userMessage,
        config: {
          systemInstruction: `
Sos un asesor virtual de una empresa argentina que desarrolla sistemas de software a medida para empresas del interior del país, principalmente en Córdoba y Santa Fe.

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
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 active:scale-90 transition-transform duration-300 group"
      >
        <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] max-h-[500px] bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-primary p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined">auto_fix_high</span>
              <span className="font-bold tracking-widest text-sm">SYNTRAX AI</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow p-4 overflow-y-auto space-y-4 text-sm bg-stone-50 dark:bg-stone-950/50"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-tl-none border border-stone-100 dark:border-stone-700'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-stone-800 p-3 rounded-2xl rounded-tl-none border border-stone-100 dark:border-stone-700">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 flex items-center space-x-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregunta sobre Syntrax..."
              className="flex-grow bg-stone-100 dark:bg-stone-800 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary dark:text-white"
            />
            <button 
              onClick={handleSend}
              className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AssistantFab;
