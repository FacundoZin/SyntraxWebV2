
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="py-24 md:py-32 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6 space-y-20">
        
        {/* Row 1: Web Design & Custom Software */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Web Design Grid */}
          <div className="bg-stone-50 dark:bg-stone-900/50 p-10 rounded-2xl flex flex-col justify-between border border-stone-100 dark:border-stone-800 shadow-sm">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wide text-stone-900 dark:text-white">
                PÁGINA WEB + POSICIONAMIENTO
              </h2>
              <p className="mt-3 text-stone-500 dark:text-stone-400 font-medium">
                Diseño web moderno + optimización SEO para destacar tu marca.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDeq5UjzySGEhmRrNINEOS40Rzxzc5H0pGe3FtPjP4vqpVHUjq3RNdtZRJTThM1n_ejXXoas6THNiJDfQuqSvDy-LdtxCGtORPCBxMH0mDjarxQSPd3InMGNcNIpLJlQav_USlmf_1_sK7-up43wzroBFzWw60Ms5h26UQfY-Q4zgwbXstaXQ9hgvUFKIARM6Ixxq53gGd6d-j6V941UBEMyNXQdzZ2cvb8GfB23qDw1AAWGZ20zvBx1HCEl8hGEKtTb3wB4bEKeq8',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDO6i5sUuJ9YWJvNSCvaxgbnSVoHS8o5V0Urqcw9L9URH8RvUYpRgMHsvxkq9szqvd5JWuWumiCv_V8NV4SzYHKtaCVgLPIvbu7I3LSxpTKEQ464UkHKBCgdBoGkIQ0d0RmxtWplwW7QJ89H4QdiJ9sGiqqTZ-V48knPU_2vF25CdoPf9XaDQKtUksxRl0L24M8K4eN6qOj5TCTh_zrWjI9ztwFUUU6ISn7iquoQCWtuS93h7j0qHmvmtkbq2KYSg9EEiiJ9LX6VYo',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDJe70d42Cp9uvb2kuz9vm546q9M_OSFXww_sSm1jb37F8eAtf_G2i1QBNc_5va-fvUv5-b3FR-TB2c4cp0Y-Of85eTvpoqy_U--FTQLGug-iUJ_nDVPM0ItqP7Euh0hwj2swF4F9VcMchfV41xBo-PvAzW7JqfpAd5cswT4rTml_tefNW3PNDKSYosWK5-3AXdzCQxMgrWCu65qW_M_c8lgNnZyaFQQKKyEb4B9Ew7UNOhtFO0BhwLnW1Nr9Pa05tEfDpa1TFnZeI',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDVcWHOcywX85o3QeUjzPy5Daernnn-kakOsmw_avn7az8n9VPvcyTDsWysAUmw6sDG62KX-oHHtDHanTyxEtaVvpLz1n6LChVNHALyh8JNYpmsbo4VXqgwjmZf6VcA_1IC9KiXW-hetyf1lDVFb4rARdka8k1Jn7S18RRoZ0LKqL2JXbezdPDM4NhFOWk_j4A4O1PUFaRJ-_px9DlMnsVFDs0MolaJq3tLyy_K8o_NoBjxCgn0EyiGj86faqAsLBy5u0M5UW5JW44',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuC7_eE3RK5sOfNCd6h0cRVRhv7NeOx-2LCcreqkAnDwhsCRF-B7PqcIPz_tnwcWGqpkbhK21ogUhosii8Pipx4Mdl_n5bPRUKQO4-c2Fr6e6HCVTsGQCR7zA12qhqDQw9jD7uDyQeXjcPrEThPnV_MqgGW3pFrwKiwWAPZAE4zMZfOAOwIuuS5Q9uSPHUxOtiVLMWDwv-huzsk-nNIQZ6pqX49TzdQ29uH4QbQuv1Htkx4o7BigV4M16gA1k13X6Xik1MhwdEmUPU8',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDpfHm2dkADfZNM8ht5C7OZQq5tVy2YgtyFN5x2wAoKL-2d3kLrb9D532NjVjr714NONQvNT-qQMzJx0Js1KCch9XUPtTLsH2Mt48Vxb9dWoobz7CjKEjWAYOXVlc9jXkVFbln5O_HllUncHhEEYZgGEo9vWgXwXM3D-b5F5GrXjj1tjecok0rBGEp5jH5C89ZKThk62pwtO7NK13HKUONQ3qQxhlazvF_xPtyeclPmArl-o6kODsPEvMO9BwAshhWPV0g8iIw04_Q'
              ].map((url, idx) => (
                <div key={idx} className="group overflow-hidden rounded-xl">
                  <img 
                    src={url} 
                    alt={`Preview ${idx + 1}`} 
                    className="aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Custom Software with Overlay */}
          <div className="relative overflow-hidden rounded-2xl h-[400px] md:h-auto group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPomipOJdUTCcQHOZ9qVwkL-3DKlyWGqek1sOWd-Px23DIvWdqyYJopiI2z60KVPHJ3tyONhURwx4B_eBLHCLp4e589nlylF5ykD2n6reD4oNgl1sjORq9R7fwEOCpAkW6WzBYIJR6xiCYaHEx4fxu9VmwdYLyXgnyHxBQ-EOXxOAw-QiYBb4bH3PJQMiHJ8bVcong9gXI6NVlmw_KyOsrAigAXMVQ00l_p9KOy6obr5mOdXo6_z0cR9_icAyrMh9T35t1j6zrpwA" 
              alt="Software development code" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 p-10 flex flex-col justify-end">
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">SOFTWARE A MEDIDA</h2>
              <p className="mt-3 text-stone-300 max-w-sm">
                Aplicaciones completas y sistemas a medida para respaldar toda la operativa de tu empresa.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: IoT & Cloud Deployment */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* IoT with Overlay */}
          <div className="relative overflow-hidden rounded-2xl h-[400px] md:h-auto group order-2 md:order-1">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbImbaUFWGg23E0raUxMc2UTaFnvAykyibtH41gOWXjdKyjGaJs5v1z8_NxTpxjAZlpn9KZXXsOSv0B7jY0S9LYUTnlvXmtxHs1u9ETlGPR-d3IzEU5FKfQlzaE4BvUk7Bjk8Sh06WY-Nrqz1oDwpXoQ5yoy1IJFL4qgdaIq7SJU-wIIoq0Qdf2cO-SFE9RTVWHT0sk-6GSASEv0BlyIn6BezgTewK__NeiJr2ypJodmPa8pDJg0Bzl5EcrZVVmff7Dr9SsmPwxYA" 
              alt="IoT Agriculture" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 p-10 flex flex-col justify-end">
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Integraciones</h2>
              <p className="mt-3 text-stone-300 max-w-sm">
                Integración con sistemas existentes y servicios externos como ARCA, SAP, Mercado Pago, Whatsapp, entre otros.
              </p>
            </div>
          </div>

          {/* Cloud Deployment */}
          <div className="bg-stone-50 dark:bg-stone-900/50 p-12 rounded-2xl flex flex-col items-center justify-center text-center order-1 md:order-2 border border-stone-100 dark:border-stone-800 shadow-sm">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-stone-900 dark:text-white">
              DESPLIEGUE EN LA NUBE
            </h2>
            <p className="mt-4 text-stone-500 dark:text-stone-400 font-medium max-w-xs mx-auto">
              Despliegue seguro y escalable con plataformas como DigitalOcean o Azure para alta disponiblidad.
            </p>
            <div className="mt-10 p-6 bg-white dark:bg-stone-800 rounded-xl shadow-inner flex items-center justify-center gap-8">
              <img 
                src="https://static.cdnlogo.com/logos/d/90/digitalocean.svg" 
                alt="DigitalOcean Logo" 
                className="h-8 w-auto opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="w-px h-8 bg-stone-100 dark:bg-stone-700/50"></div>
              <img 
                src="https://static.cdnlogo.com/logos/m/57/microsoft-azure.svg" 
                alt="Azure Logo" 
                className="h-8 w-auto opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
