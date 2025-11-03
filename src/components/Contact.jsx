export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Let’s work together</h2>
          <p className="mt-2 text-white/70">Have a project in mind or want to say hello? I’d love to hear from you.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Your name"
                className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
              />
              <input
                name="email"
                placeholder="Email address"
                type="email"
                className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
              />
              <textarea
                name="message"
                placeholder="Tell me a bit about your project..."
                rows={5}
                className="sm:col-span-2 w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
              />
              <div className="sm:col-span-2 flex items-center justify-between">
                <p className="text-xs text-white/50">I usually reply within 24 hours.</p>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget.closest('form');
                    const data = Object.fromEntries(new FormData(form));
                    alert(`Thanks ${data.name || 'there'}! I will be in touch at ${data.email || 'your inbox'} soon.`);
                  }}
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            <a href="mailto:hello@example.com" className="block rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/[0.08] transition-colors">
              <div className="text-sm text-white/70">Email</div>
              <div className="text-white">hello@example.com</div>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="block rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/[0.08] transition-colors">
              <div className="text-sm text-white/70">GitHub</div>
              <div className="text-white">@yourhandle</div>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="block rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/[0.08] transition-colors">
              <div className="text-sm text-white/70">LinkedIn</div>
              <div className="text-white">/in/yourprofile</div>
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
