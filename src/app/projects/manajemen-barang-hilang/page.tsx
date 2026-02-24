import Link from 'next/link';

export default function ManajemenBarangHilangProject() {
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
              Manajemen Barang Hilang
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
              A smart reporting platform that uses AI to match lost items with their owners quickly and accurately.
            </p>
          </div>
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">Flutter</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">Dart</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">Hugging Face AI</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">REST API</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">Node.js</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">JWT</div>
          </div>
        </section>

        {/* Video Showcase */}
        <section className="w-full relative group cursor-pointer">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-200 dark:border-slate-800">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida/AOfcidWZ4egI-3AQBW5Vbe1iCNMVLfvPNVQ87Qu5FOWgy0MzXgX0sKO8qEfTCt0CowO6wX54NJdyWuO2T9zY-3OWE83H99PxUKCuEj00ocHvzdPGlAdgAHait7m5YgzOccFMS41p0z3JWuuwMY5qMTfliQAGNiieyxXd49yeJKU-QYMdRz1I8AYum2-ECM0nMAo6pMuw1YpBGLOKk9v9NMJ0gAmK-JX-Ctp6o0Kimw1uEVnmJUXz3mjT9dHOVA')`,
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
                  <strong className="text-slate-900 dark:text-white">The Problem:</strong> In campuses and public places, lost item reports are usually messy and scattered across chat groups or physical bulletin boards. It is very hard to match a lost item report with a found item report. On top of that, there is no clear way to verify who really owns the item, which makes the claiming process risky and open to fraud.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">The Solution:</strong> A Flutter mobile app that brings the entire Lost &amp; Found system into one place. Users can easily report a lost item or post a found item with photos and location details. The app has a smart AI engine that automatically scans and matches descriptions from both sides, so security guards or admins can quickly verify and connect the real owner with their belongings.
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
                    <span className="material-symbols-outlined">psychology</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">AI-Powered Item Matching</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Automatically calculates how similar a lost report is to a found report using an NLP model (Natural Language Processing). No more searching through items one by one.</p>
                </div>
                <div className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Rich Media Reporting</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Report items with photos taken from the camera or gallery. Images are uploaded to the server in the background so the app stays fast and smooth.</p>
                </div>
                <div className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">admin_panel_settings</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Role-Based Access (RBAC)</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Different users see different things. Regular users can report items, while security guards and admins can verify claims and approve matches in real-time.</p>
                </div>
                <div className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Claim &amp; Verification System</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">A step-by-step process to claim items, requiring approval from security staff. This prevents fraud and makes sure items go back to the right owner.</p>
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
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Service-Repository Pattern</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    The app is built with a clean architecture that separates the UI layer (screens) from the business logic layer (services), keeping the code organized and easy to maintain.
                  </p>
                </div>
                {/* Item 2 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">AI / NLP Integration</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Uses the Hugging Face Inference API with the <em>all-MiniLM-L6-v2</em> sentence transformer model. The MatchingService sends report texts to the model and gets back a similarity score to find the best matches.
                  </p>
                </div>
                {/* Item 3 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">RESTful API + Node.js</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Connects to a Node.js backend deployed on Vercel using the http package. Handles all CRUD operations, image uploads (multipart/form-data), and user authentication through REST endpoints.
                  </p>
                </div>
                {/* Item 4 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Security &amp; Performance</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    JWT auth tokens are stored securely using flutter_secure_storage. The app uses Dart&apos;s async features (Future &amp; scheduleMicrotask) to keep the UI smooth while fetching large data or uploading images.
                  </p>
                </div>
              </div>
            </div>
            {/* Stats Card */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
                <div className="text-2xl font-black text-primary">AI</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">NLP Matching</div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
                <div className="text-2xl font-black text-primary">RBAC</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Role Security</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10 mt-12">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">search</span>
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
