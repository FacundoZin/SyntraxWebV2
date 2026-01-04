
import React from 'react';

const ContactDetails: React.FC = () => {
  const details = [
    { icon: 'location_on', title: 'DIRECCIÓN', value: 'Córdoba 1636, San Francisco, Córdoba' },
    { icon: 'phone', title: 'TELÉFONO', value: '+54 (3564) 653136' },
    { icon: 'email', title: 'EMAIL', value: 'syntrax@gmail.com' },
    { icon: 'schedule', title: 'HORARIO', value: 'Lunes a Viernes, 9:00 - 18:00' },
  ];

  return (
    <div className="py-24 container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center uppercase tracking-widest mb-16 text-stone-900 dark:text-white">
        CONTACTO
      </h2>
      <div className="max-w-4xl mx-auto bg-stone-200 dark:bg-stone-800 p-10 md:p-16 rounded-3xl shadow-xl border border-stone-300 dark:border-stone-700">
        <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {details.map((item, idx) => (
            <li key={idx} className="flex items-start group">
              <span className="material-symbols-outlined text-primary text-3xl mr-6 mt-1 transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <div>
                <h3 className="font-extrabold text-sm tracking-widest text-stone-800 dark:text-stone-200 mb-1">
                  {item.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 font-medium">
                  {item.value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
