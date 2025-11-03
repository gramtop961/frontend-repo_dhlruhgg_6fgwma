import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full flex items-center overflow-hidden" style={{ backgroundColor: '#0B0B0F' }}>
      {/* Decorative grid + glow (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.15),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize:'40px 40px'}} />
      </div>

      {/* Background name watermark */}
      <div className="pointer-events-none absolute inset-x-0 -top-8 flex justify-center">
        <h1 className="text-[18vw] md:text-[12vw] font-extrabold tracking-tighter text-white/5 select-none leading-none">Srivani</h1>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: headline and CTA */}
        <div className="order-2 lg:order-1 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            Available for Work
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Srivani Vinnakota — Product & UI/UX Designer
          </h2>
          <p className="text-zinc-400 max-w-xl">
            I craft modern, accessible interfaces with a focus on clarity, motion, and a touch of play. Currently exploring interactive 3D and delightful micro-interactions.
          </p>
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-2 inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium text-black bg-white hover:bg-white/90 shadow-lg shadow-white/10"
          >
            See my work
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Right: Interactive Spline scene */}
        <div className="order-1 lg:order-2 relative mx-auto w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Soft neon aura */}
          <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),rgba(168,85,247,0.15)_60%,transparent_70%)] blur-2xl" />
        </div>
      </div>

      {/* Edge vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_40%,rgba(0,0,0,0.5))]" />
    </section>
  );
}
