import { useState, useEffect } from 'react';
import { Menu, X, Dot, PanelsTopLeft } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'research', label: 'Research' },
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
        <button
          className="flex items-center gap-2 rounded-full px-3 py-1.5 hover:bg-white/10 transition"
          onClick={() => scrollTo('home')}
          aria-label="Go to home"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
            <PanelsTopLeft className="w-4 h-4 text-white" />
          </span>
          <span className="font-semibold text-white">Srivani</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span className="hidden sm:flex items-center gap-1 text-xs text-zinc-300 border border-white/10 rounded-full px-2 py-1">
            <Dot className="w-5 h-5 text-orange-500" />
            Available for Work
          </span>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
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
          </nav>
        </div>
      )}
    </header>
  );
}
