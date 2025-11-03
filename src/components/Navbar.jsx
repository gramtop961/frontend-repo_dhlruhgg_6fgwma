import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-auto transition-all ${scrolled ? 'drop-shadow-xl' : ''}`}>
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
        {/* Brand */}
        <button
          className="flex items-center gap-2 rounded-full px-3 py-1.5 hover:bg-white/10 transition"
          onClick={() => scrollTo('home')}
          aria-label="Go to home"
        >
          <span className="text-sm font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            SRIVANI
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="ml-auto hidden sm:flex">
          <button
            onClick={() => scrollTo('contact')}
            className="rounded-full bg-white text-black text-sm font-medium px-3 py-1.5 hover:bg-white/90 transition"
          >
            Hire me
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition ml-auto"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {open && (
        <div className="mt-2 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-3 md:hidden">
          <nav className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-zinc-200 hover:text-white px-3 py-2 rounded-2xl bg-white/5 hover:bg-white/10 transition text-left"
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="col-span-2 rounded-2xl bg-white text-black text-sm font-medium px-3 py-2 hover:bg-white/90 transition">
              Hire me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
