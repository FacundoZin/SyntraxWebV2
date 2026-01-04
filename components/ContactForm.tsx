
import React, { useState, useRef, useEffect } from 'react';

const cities = [
  { value: 'san-francisco', label: 'San Francisco (Córdoba)' },
  { value: 'rafaela', label: 'Rafaela' },
  { value: 'rosario', label: 'Rosario' },
  { value: 'cordoba', label: 'Córdoba' },
  { value: 'santa-fe', label: 'Santa Fe' },
  { value: 'villa-maria', label: 'Villa María' },
  { value: 'rio-cuarto', label: 'Río Cuarto' },
  { value: 'arroyito', label: 'Arroyito' },
  { value: 'otra', label: 'Otra ciudad' },
];

const sectors = [
  { value: 'comercio-minorista', label: 'Comercio minorista / Retail' },
  { value: 'ecommerce', label: 'E-commerce / Tienda online' },
  { value: 'gastronomia', label: 'Gastronomía / Bares / Restaurantes' },
  { value: 'industria', label: 'Industria / Manufactura' },
  { value: 'logistica', label: 'Logística / Transporte' },
  { value: 'construccion', label: 'Construcción / Arquitectura / Ingeniería' },
  { value: 'agro', label: 'Agroindustria / Producción rural' },
  { value: 'salud', label: 'Salud / Clínicas / Consultorios' },
  { value: 'educacion', label: 'Educación / Instituciones / Academias' },
  { value: 'servicios-profesionales', label: 'Servicios profesionales (contadores, abogados, consultores)' },
  { value: 'tecnologia', label: 'Tecnología / Software / Startups' },
  { value: 'finanzas', label: 'Finanzas / Seguros / Inversiones' },
  { value: 'inmobiliario', label: 'Inmobiliarias / Administración de propiedades' },
  { value: 'turismo', label: 'Turismo / Hotelería / Viajes' },
  { value: 'gobierno', label: 'Organismos públicos / Gobierno' },
  { value: 'ong', label: 'ONG / Fundaciones' },
  { value: 'otro', label: 'Otro rubro' },
];
const CustomDropdown: React.FC<{
  label: string;
  options: { value: string; label: string }[];
  placeholder: string;
  name: string;
  required?: boolean;
}> = ({ label, options, placeholder, name, required }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<{ value: string; label: string } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="sr-only">{label}</label>
      <input type="hidden" name={name} value={selected?.value || ''} required={required} />
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 rounded-xl px-5 py-4 text-left flex items-center justify-between transition-all outline-none focus:ring-2 focus:ring-primary ${
          isOpen ? 'ring-2 ring-primary border-transparent' : 'hover:border-stone-300 dark:hover:border-stone-700'
        }`}
      >
        <span className={`${!selected ? 'text-stone-400' : 'text-stone-900 dark:text-white'}`}>
          {selected ? selected.label : placeholder}
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={`text-stone-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 origin-top">
          <div className="max-h-60 overflow-y-auto py-2 custom-scrollbar">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`w-full px-5 py-3 text-left transition-colors flex items-center gap-3 ${
                  selected?.value === option.value 
                    ? 'bg-primary/10 text-primary font-bold' 
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {selected?.value === option.value && (
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                )}
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.');
    }, 1500);
  };

  return (
    <div className="py-24 md:py-32 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-stone-900 dark:text-white leading-none">
            PONETE EN CONTACTO <br /> CON NOSOTROS
          </h2>
          <p className="mt-6 text-stone-500 dark:text-stone-400 font-bold tracking-[0.3em] uppercase">
            QUEREMOS SABER DE VOS.
          </p>
          <div className="mt-12 h-1 w-24 bg-primary rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-stone-50 dark:bg-stone-900/40 p-10 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm">
          <h3 className="text-2xl font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-2">
            CONTÁCTANOS
          </h3>
          
          <div className="space-y-5">
            <div>
              <label className="sr-only" htmlFor="nombre">Nombre</label>
              <input 
                required
                className="w-full bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-stone-400 dark:text-white"
                id="nombre" 
                name="nombre" 
                placeholder="Nombre" 
                type="text" 
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">Correo electrónico</label>
              <input 
                required
                className="w-full bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-stone-400 dark:text-white"
                id="email" 
                name="email" 
                placeholder="Correo electrónico" 
                type="email" 
              />
            </div>

            <CustomDropdown 
              label="Ciudad" 
              name="ciudad" 
              options={cities} 
              placeholder="Selecciona tu ciudad" 
              required 
            />

            <CustomDropdown 
              label="Rubro del Negocio" 
              name="rubro" 
              options={sectors} 
              placeholder="Selecciona el rubro de tu negocio" 
              required 
            />

            <div>
              <label className="sr-only" htmlFor="mensaje">Mensaje</label>
              <textarea 
                required
                className="w-full bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-stone-400 dark:text-white min-h-[150px] hover:border-stone-300 dark:hover:border-stone-700"
                id="mensaje" 
                name="mensaje" 
                placeholder="Mensaje" 
                rows={5}
              ></textarea>
            </div>
            <button 
              disabled={loading}
              className={`w-full bg-primary text-white font-black py-5 px-8 rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 tracking-[0.2em] flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95'}`}
              type="submit"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'ENVIAR'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

