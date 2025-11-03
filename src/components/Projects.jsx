import { useMemo } from 'react';

function ProjectCard({ title, description, tags, link, image }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors overflow-hidden"
    >
      <div className="aspect-video w-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20" style={{ backgroundImage: image ? `url(${image})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-white font-medium text-lg">{title}</h3>
          <svg className="h-5 w-5 text-white/60 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
        </div>
        <p className="mt-2 text-sm text-white/70">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs text-white/80 bg-white/5 border border-white/10 rounded-md px-2 py-1">{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const projects = useMemo(() => [
    {
      title: 'Neon Commerce',
      description: 'E-commerce experience with real-time search, smooth checkout, and micro-interactions.',
      tags: ['React', 'FastAPI', 'MongoDB'],
      link: 'https://example.com',
      image: '',
    },
    {
      title: 'Studio Folio',
      description: 'Creative studio website with 3D hero, case studies, and CMS integration.',
      tags: ['Spline', 'Framer Motion', 'Tailwind'],
      link: 'https://example.com',
      image: '',
    },
    {
      title: 'DataViz Dash',
      description: 'Interactive dashboards with beautiful charts and seamless animations.',
      tags: ['React', 'D3', 'Design Systems'],
      link: 'https://example.com',
      image: '',
    },
  ], []);

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Selected work</h2>
          <p className="mt-2 text-white/70">A few projects that showcase my focus on clean interfaces, performance, and delightful details.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
