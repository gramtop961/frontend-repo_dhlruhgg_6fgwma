import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0D0D0D' }}>
      {/* Huge background name */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="text-[18vw] md:text-[12vw] font-extrabold tracking-tighter text-white/5 select-none leading-none">
          Srivani
        </h1>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* Left: heading */}
        <div className="order-2 lg:order-1">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300">
            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#FF6A00' }} />
            Available for Work
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Brand & UI/UX Designer based in Hyderabad
          </h2>
          <p className="text-zinc-400 max-w-md">
            Hi, I’m Srivani – a UI/UX and brand designer passionate about creating seamless digital experiences that connect and convert.
          </p>
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium text-white shadow-lg"
            style={{ backgroundColor: '#FF6A00' }}
          >
            See my works
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Center: Interactive Spline ring (replaces portrait and old 3D) */}
        <div className="order-1 lg:order-2 relative mx-auto w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Neon glow ring */}
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),rgba(59,130,246,0.08)_60%,transparent_70%)] blur-2xl" />
        </div>

        {/* Right: bio */}
        <div className="order-3">
          <p className="text-zinc-300 leading-relaxed">
            I design brands and interfaces that feel effortless and memorable. From strategy to pixel-perfect details, I bring clarity, hierarchy, and motion to every product experience.
          </p>
        </div>
      </div>

      {/* Soft edge gradient for depth without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
    </section>
  );
}
