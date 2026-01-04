
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <a 
          href="#home" 
          className="text-2xl font-black tracking-[0.2em] text-white hover:text-primary transition-colors"
        >
          SYNTRAX
        </a>

        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs font-bold tracking-widest">
          {['HOME', 'SERVICES', 'ABOUT', 'CONTACT'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <a 
            href="https://www.linkedin.com/company/syntrax-software/?viewAsMember=true" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/syntrax.software/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-[10px] tracking-widest font-bold">
        © {new Date().getFullYear()} SYNTRAX SOFTWARE. TODOS LOS DERECHOS RESERVADOS.
      </div>
    </footer>
  );
};

export default Footer;
