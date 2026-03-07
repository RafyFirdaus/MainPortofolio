"use client";

import React from 'react';
import { MagicCard } from '@/components/ui/magic-card';
import { Badge } from '@/components/ui/badge';

interface AboutSectionProps {
  t: {
    about: {
      title: string;
      subtitle: string;
      frontendTitle: string;
      frontendDesc: string;
      mobileTitle: string;
      mobileDesc: string;
      backendTitle: string;
      backendDesc: string;
      devopsTitle: string;
      devopsDesc: string;
    };
  };
}

const AboutSection = React.memo(function AboutSection({ t }: AboutSectionProps) {
  return (
    <section className="max-w-6xl mx-auto py-16" id="about">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 px-2">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{t.about.title}</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">{t.about.subtitle}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        <MagicCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-white dark:bg-surface-dark p-8 border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-shadow relative overflow-hidden group" gradientColor="rgba(19, 127, 236, 0.08)">
          <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-9xl">html</span>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">language</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.about.frontendTitle}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">{t.about.frontendDesc}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </div>
          </div>
        </MagicCard>

        <MagicCard className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 bg-white dark:bg-surface-dark p-8 border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-shadow relative overflow-hidden group" gradientColor="rgba(14, 165, 233, 0.08)">
          <div className="absolute -right-4 -bottom-4 p-6 opacity-5 dark:opacity-10 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-8xl">smartphone</span>
          </div>
          <div className="relative z-10 flex items-start justify-between h-full">
            <div className="flex flex-col h-full justify-between w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-10 rounded-xl bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center text-sky-500">
                  <span className="material-symbols-outlined text-2xl">flutter_dash</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.about.mobileTitle}</h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{t.about.mobileDesc}</p>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 border-sky-100 dark:border-sky-800">Flutter</Badge>
                <Badge variant="secondary" className="bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 border-sky-100 dark:border-sky-800">Dart</Badge>
              </div>
            </div>
          </div>
        </MagicCard>

        <MagicCard className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-white dark:bg-surface-dark p-6 border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-shadow flex flex-col justify-between group" gradientColor="rgba(249, 115, 22, 0.08)">
          <div className="size-10 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 mb-2 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">dns</span>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t.about.backendTitle}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t.about.backendDesc}</p>
          </div>
        </MagicCard>
        <MagicCard className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 bg-white dark:bg-surface-dark p-6 border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-shadow flex flex-col justify-between group" gradientColor="rgba(168, 85, 247, 0.08)">
          <div className="size-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-500 mb-2 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">terminal</span>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t.about.devopsTitle}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t.about.devopsDesc}</p>
          </div>
        </MagicCard>
      </div>
    </section>
  );
});

export { AboutSection };
