import Link from 'next/link';

export default function BeatifyProject() {
  return (
    <>
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-xl">code</span>
            </div>
            <span className="font-bold text-slate-900 dark:text-white tracking-tight">PORTFOLIO</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors dark:text-slate-400"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to Home
          </Link>
        </div>
      </header>

      <main className="grow w-full max-w-[1200px] mx-auto px-6 py-12 md:py-20 flex flex-col gap-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Beatify
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
              Play your YouTube music and local audio files together in one beautiful player.
            </p>
          </div>
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">React 19</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">Tailwind CSS</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">HTML5 Audio</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">React Router v7</div>
          </div>
        </section>

        {/* Video Showcase */}
        <section className="w-full relative group cursor-pointer">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-200 dark:border-slate-800">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHY8vVAa84Z-Bzgih78F-oPkAqe0TOQ_ruGo3rTsoWKbXRKlQaqKfYn2-5wHH_xBCPqWZxQOw8g916cVuSBKS-I1WXtl_vb1TtXb4Ox-40LWYPcE27CNsfTz7IV97YW0ZYO3YrNqJD4enkWVR7qKCpP0teBTWe8tiKZ2aQcJcGDklc78NYTyWb6j_TGgCw1Aezb6d0h2yHoPPZgCU-cf5pr6_Aoy_YQ9eb85gTvaKWsTR4W-0ggKGrC8MUQpS33tgcHMpMbkSlXzk')`,
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transition-transform group-hover:scale-110 shadow-lg">
                <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-semibold text-sm uppercase tracking-widest opacity-80">Product Demo</p>
              <p className="font-bold text-lg">Watch how it works</p>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Features */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {/* The Context Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">lightbulb</span>
                The Context
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                <p>
                  <strong className="text-slate-900 dark:text-white">The Problem:</strong> People often have their music in two different places some on YouTube and some saved as files on their computer. Switching between a browser and a music player all the time is annoying and breaks the listening flow.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">The Solution:</strong> Beatify is a smart web app that puts all your music in one place. It combines YouTube videos and local audio files into a single custom player, so you never have to switch between apps again.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 w-full" />

            {/* Key Features Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">swap_horiz</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Hybrid Media Engine</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Plays YouTube streams and local files without any lag.</p>
                </div>
                <div className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">database</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Smart Storage</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Saves your playlists and data in a smart way so nothing is lost.</p>
                </div>
                <div className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">link</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">URL Extractor</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Just paste any YouTube link and it will work right away.</p>
                </div>
                <div className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">route</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Client-Side Routing</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Fast page switching with no reloads, powered by React Router v7.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering & Architecture */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-24">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-500">code</span>
                Technical Deep-Dive
              </h3>
              <div className="space-y-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-[11px] top-2 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700" />
                {/* Item 1 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">React 19</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Built with the latest React for fast and smooth UI updates, even when playing music and switching tracks.
                  </p>
                </div>
                {/* Item 2 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Smart Storage Split</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Splits data into small metadata and large audio payloads to save space and keep the app fast.
                  </p>
                </div>
                {/* Item 3 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Player Sync Engine</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Keeps YouTube and HTML5 audio perfectly in sync using requestAnimationFrame for a super smooth progress bar.
                  </p>
                </div>
                {/* Item 4 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Tailwind CSS</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Uses utility-first CSS for a clean, responsive design that looks great on any screen size.
                  </p>
                </div>
              </div>
            </div>
            {/* Stats Card */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
                <div className="text-2xl font-black text-primary">60fps</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Smooth Playback</div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
                <div className="text-2xl font-black text-primary">0ms</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Switch Delay</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10 mt-12">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">equalizer</span>
            <span className="text-slate-500 text-sm font-medium">© 2026 MHD Rafy Firdaus. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="/" className="text-slate-400 hover:text-primary transition-colors text-sm">
              Portfolio
            </Link>
            <a href="https://github.com/RafyFirdaus" className="text-slate-400 hover:text-primary transition-colors text-sm">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
