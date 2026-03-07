"use client";

import { useMemo } from 'react';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { dictionaries } from '@/locales/dictionaries';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MagicCard } from '@/components/ui/magic-card';
import { BorderBeam } from '@/components/ui/border-beam';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

export default function BeatifyProject() {
  const { language } = useLanguage();
  const t = useMemo(() => dictionaries[language], [language]);

  return (
    <>
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-xl">code</span>
            </div>
            <span className="font-bold text-slate-900 dark:text-white tracking-tight">{t.nav.portfolio}</span>
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              {t.nav.backToHome}
            </Button>
          </Link>
        </div>
      </header>

      <main className="grow w-full max-w-[1200px] mx-auto px-6 py-12 md:py-20 flex flex-col gap-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              {t.projects.beatify.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
              {t.projects.beatify.heroDesc}
            </p>
          </div>
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Badge variant="secondary">React 19</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">HTML5 Audio</Badge>
            <Badge variant="secondary">React Router v7</Badge>
          </div>
        </section>

        {/* Video Showcase */}
        <section className="w-full relative group cursor-pointer">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-200 dark:border-slate-800">
            <iframe
              src="https://res.cloudinary.com/dhsmcxmeo/video/upload/v1772376629/Beatify_-_Google_Chrome_2026-03-01_21-47-27_qpp0t9.mp4"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              title="Beatify Product Demo"
            ></iframe>
            <BorderBeam size={200} duration={8} colorFrom="#137fec" colorTo="#9c40ff" />
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
                {t.projectDetails.theContext}
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                <p>
                  <strong className="text-slate-900 dark:text-white">{t.projectDetails.theProblem}</strong> {t.projectDetails.beatify.problemText}
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">{t.projectDetails.theSolution}</strong> {t.projectDetails.beatify.solutionText}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 w-full" />

            {/* Key Features Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.projectDetails.keyFeatures}</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <MagicCard className="flex flex-col p-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow" gradientColor="rgba(19, 127, 236, 0.1)">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">swap_horiz</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t.projectDetails.beatify.feature1Title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t.projectDetails.beatify.feature1Desc}</p>
                </MagicCard>
                <MagicCard className="flex flex-col p-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow" gradientColor="rgba(19, 127, 236, 0.1)">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">database</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t.projectDetails.beatify.feature2Title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t.projectDetails.beatify.feature2Desc}</p>
                </MagicCard>
                <MagicCard className="flex flex-col p-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow" gradientColor="rgba(19, 127, 236, 0.1)">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">link</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t.projectDetails.beatify.feature3Title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t.projectDetails.beatify.feature3Desc}</p>
                </MagicCard>
                <MagicCard className="flex flex-col p-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow" gradientColor="rgba(19, 127, 236, 0.1)">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">route</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t.projectDetails.beatify.feature4Title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t.projectDetails.beatify.feature4Desc}</p>
                </MagicCard>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering & Architecture */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-24">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <DotPattern className={cn("opacity-30 dark:opacity-20", "mask-[linear-gradient(to_bottom,white,transparent)]")} />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-500">code</span>
                {t.projectDetails.technicalDeepDive}
              </h3>
              <div className="space-y-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-[11px] top-2 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700" />
                {/* Item 1 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{t.projectDetails.beatify.tech1Title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {t.projectDetails.beatify.tech1Desc}
                  </p>
                </div>
                {/* Item 2 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{t.projectDetails.beatify.tech2Title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {t.projectDetails.beatify.tech2Desc}
                  </p>
                </div>
                {/* Item 3 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{t.projectDetails.beatify.tech3Title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {t.projectDetails.beatify.tech3Desc}
                  </p>
                </div>
                {/* Item 4 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-full z-10" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{t.projectDetails.beatify.tech4Title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {t.projectDetails.beatify.tech4Desc}
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
            <span className="material-symbols-outlined text-primary">equalizer</span>
            <span className="text-slate-500 text-sm font-medium">{t.footer.rights}</span>
          </div>
          <div className="flex gap-2">
            <Link href="/">
              <Button variant="ghost" size="sm">{t.footer.portfolio}</Button>
            </Link>
            <a href="https://github.com/RafyFirdaus">
              <Button variant="ghost" size="sm">{t.footer.github}</Button>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
