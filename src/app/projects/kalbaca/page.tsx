import Link from 'next/link';

export default function KalbacaProject() {
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
              KalBaCa (e-FluidCalc)
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
              A fast and accurate fluid calculator made for doctors and nurses.
            </p>
          </div>
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">Flutter</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">Dart</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">Firebase</div>
            <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider shadow-sm">Firestore</div>
          </div>
        </section>

        {/* Video Showcase */}
        <section className="w-full relative group cursor-pointer">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-200 dark:border-slate-800">
            <iframe
              src="https://res.cloudinary.com/dhsmcxmeo/video/upload/v1772374990/Kalbaca_z7ettp.mp4"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              title="KalBaCa Product Demo"
            ></iframe>
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
                  <strong className="text-slate-900 dark:text-white">The Problem:</strong> Doctors and nurses in children&apos;s wards spend a lot of time calculating how much fluid a patient needs each day. Doing this by hand is slow and can lead to mistakes, especially when things get busy.
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">The Solution:</strong> e-FluidCalc does the math for you using a trusted medical formula. Just enter the patient&apos;s weight and temperature, and the app gives you the right fluid amount instantly. This lets medical staff focus more on caring for patients.
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
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Smart Grouping</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Sorts patients by age and weight to pick the right formula automatically.</p>
                </div>
                <div className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">thermostat</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Auto Fever Adjustment</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Adds extra fluid when a patient has a fever above 38°C, following medical rules.</p>
                </div>
                <div className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">lock_person</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Secure Login</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Keeps patient data safe with a secure login system and access control.</p>
                </div>
                <div className="flex flex-col p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">cloud_sync</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Cloud Sync</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Saves and syncs data across devices using Firebase so you never lose your work.</p>
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
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Clean Architecture</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    The code is split into three clear layers Data, Domain, and Presentation so it stays organized and easy to test.
                  </p>
                </div>
                {/* Item 2 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Holliday-Segar Formula</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Uses the standard fluid formula: 100ml/kg for the first 10kg, 50ml/kg for the next 10kg, and 20ml/kg for the rest.
                  </p>
                </div>
                {/* Item 3 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Fever Algorithm</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    When a patient has a fever, the app automatically increases the fluid amount based on their temperature.
                  </p>
                </div>
                {/* Item 4 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Firebase Backend</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Uses Cloud Firestore to save data in real-time and Firebase Auth to keep user accounts safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10 mt-12">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">medical_services</span>
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
