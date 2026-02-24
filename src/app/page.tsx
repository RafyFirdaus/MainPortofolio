import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a className="group flex items-center gap-2" href="#">
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-xl">code</span>
            </div>
            <span className="font-bold text-slate-900 dark:text-white tracking-tight">PORTOFOLIO</span>
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#about">About</a>
              <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#contact">Contact</a>
            </div>
            <ThemeToggle />
            <a className="hidden sm:flex items-center justify-center h-9 px-4 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-700 transition-all dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200" href="#contact">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-24 pb-20 px-6">
        <section className="max-w-4xl mx-auto py-20 md:py-32 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold tracking-wide uppercase dark:bg-blue-900/20 dark:border-blue-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-slate-900 dark:text-white">
            MHD Rafy Firdaus
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
            Frontend Developer <span className="text-slate-900 dark:text-slate-200">Web &amp; Mobile App Expert</span>. <br className="hidden md:block" />I build fast, beautiful, and easy-to-use applications.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a className="group flex items-center justify-center h-12 px-8 rounded-full bg-primary hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5" href="#projects">
              View Projects
              <span className="material-symbols-outlined ml-2 text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
            <a className="group flex items-center justify-center h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700" href="#contact">
              Download CV
              <span className="material-symbols-outlined ml-2 text-lg text-slate-400 group-hover:text-slate-600">download</span>
            </a>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16" id="about">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 px-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Tech Stack</h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400">The tools I use to build websites and apps.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-white dark:bg-surface-dark rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl">html</span>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">language</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Frontend Web</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6">Focusing on React to build fast and great websites.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">React.js</span>
                    <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">Next.js</span>
                    <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">TypeScript</span>
                    <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 bg-white dark:bg-surface-dark rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-shadow relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 p-6 opacity-5 dark:opacity-10 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl">smartphone</span>
              </div>
              <div className="relative z-10 flex items-start justify-between h-full">
                <div className="flex flex-col h-full justify-between w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-10 rounded-xl bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center text-sky-500">
                      <span className="material-symbols-outlined text-2xl">flutter_dash</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mobile Apps</h3>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Building great apps for Android that run very fast.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 text-sm font-medium border border-sky-100 dark:border-sky-800">Flutter</span>
                    <span className="px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 text-sm font-medium border border-sky-100 dark:border-sky-800">Dart</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-white dark:bg-surface-dark rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-shadow flex flex-col justify-between group">
              <div className="size-10 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">dns</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Backend</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Firebase, Supabase</p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-white dark:bg-surface-dark rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-shadow flex flex-col justify-between group">
              <div className="size-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-500 mb-2 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">DevOps &amp; Tools</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Git, Linux, CI/CD</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-20" id="projects">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Selected Work</h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400">Some of my best recent projects.</p>
            </div>
            <a className="hidden md:flex items-center text-primary font-medium hover:text-blue-700 transition-colors mt-4 md:mt-0" href="https://github.com/RafyFirdaus">
              View GitHub
              <span className="material-symbols-outlined ml-1 text-lg">open_in_new</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden bg-slate-50 dark:bg-slate-800 relative">
                <Image
                  src="/images/projects/thumbnail-1.png"
                  alt="Manajemen Barang Hilang"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Manajemen Barang Hilang</h3>
                  <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">AI-Powered Lost &amp; Found System</p>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  A smart system that uses AI image recognition to help people find their lost items quickly.
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">FLUTTER</span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">AI</span>
                  </div>
                  <Link href="/projects/manajemen-barang-hilang">
                    <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-xl">arrow_outward</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden bg-slate-50 dark:bg-slate-800 relative">
                <Image
                  src="/images/projects/thumbnail-2.png"
                  alt="KalBaCa (e-FluidCalc)"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">KalBaCa (e-FluidCalc)</h3>
                  <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">Medical Fluid Balance Calculator</p>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  A helpful tool for doctors and nurses to calculate patient fluids. It works offline and saves data online using Firebase.
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">Flutter</span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">Firebase</span>
                  </div>
                  <Link href="/projects/kalbaca">
                    <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-xl">arrow_outward</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden bg-slate-50 dark:bg-slate-800 relative">
                <Image
                  src="/images/projects/thumbnail-3.png"
                  alt="Beatify"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Beatify</h3>
                  <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">Web Music Player</p>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  A beautiful web music player. It uses YouTube to give you endless music in a modern design.
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">React</span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">API</span>
                  </div>
                  <Link href="/projects/beatify">
                    <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-xl">arrow_outward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center md:hidden">
            <a className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors" href="#">
              View GitHub Profile
              <span className="material-symbols-outlined ml-1 text-lg">open_in_new</span>
            </a>
          </div>
        </section>

        <footer className="max-w-4xl mx-auto py-20 mt-10 border-t border-slate-200 dark:border-slate-800" id="contact">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Ready to build something amazing?</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">I am available for freelance work and new projects. Let&apos;s build great software together.</p>
            <a className="text-3xl md:text-5xl font-bold text-primary hover:text-blue-600 transition-colors tracking-tight mb-12" href="mailto:rafy@example.com">
              rafyfirdaus20@gmail.com
            </a>
            <div className="flex gap-8 mb-12">
              <a className="flex flex-col items-center gap-2 group" href="https://github.com/RafyFirdaus">
                <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-all">
                  <Image src="/images/logos/github.png" alt="GitHub" width={24} height={24} />
                </div>
                <span className="text-xs font-medium text-slate-500 group-hover:text-primary transition-colors">GitHub</span>
              </a>
              <a className="flex flex-col items-center gap-2 group" href="mailto:rafyfirdaus20@gmail.com">
                <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <span className="text-xs font-medium text-slate-500 group-hover:text-primary transition-colors">Email</span>
              </a>
            </div>
            <p className="text-sm text-slate-400 dark:text-slate-600">
              © 2026 MHD Rafy Firdaus. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
