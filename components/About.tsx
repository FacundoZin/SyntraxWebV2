
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="relative about-bg py-32 md:py-48 text-white">
      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center space-y-16">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold uppercase tracking-widest">SOBRE NOSOTROS</h2>
          <p className="text-xl text-stone-300 leading-relaxed font-medium">
            Somos proveedores de soluciones informáticas, con enfoque en la calidad y la innovación. Nuestra misión es transformar procesos complejos en flujos de trabajo eficientes y automatizados, utilizando las últimas tecnologías en Software, IoT e Inteligencia Artificial para que tu empresa mejore su eficiencia y puedas tener un mejor control de tu negocio.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold uppercase tracking-widest">COMO TRABAJAMOS</h2>
          <div className="space-y-4">
            <p className="text-stone-300 leading-relaxed text-lg">
              En primera instancia nos contactamos con vos para conocer mejor los procesos de tu empresa, en base a eso hacemos un análisis de necesidad y requerimientos para identificar los puntos de mejora. Luego de esta instancia, te presentamos una propuesta de solución y un presupuesto. Si estás de acuerdo, comenzamos a trabajar en el desarrollo de la solución.
            </p>
            <p className="text-stone-300 leading-relaxed text-lg">
              Nosotros nos encargamos de todo el proceso, desde la planificación hasta la implementación y el soporte post-lanzamiento. Nuestro objetivo es asegurarnos de que la solución se adapte perfectamente a tus necesidades y que obtengas el máximo beneficio de ella.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
