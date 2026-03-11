"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MagicCard } from '@/components/ui/magic-card';

interface ProjectsSectionProps {
  t: {
    projects: {
      title: string;
      subtitle: string;
      viewGithub: string;
      viewGithubProfile: string;
      mbh: {
        title: string;
        tagline: string;
        desc: string;
      };
      kalbaca: {
        title: string;
        tagline: string;
        desc: string;
      };
      beatify: {
        title: string;
        tagline: string;
        desc: string;
      };
      chatbot: {
        title: string;
        tagline: string;
        desc: string;
      };
    };
  };
}

const ProjectsSection = React.memo(function ProjectsSection({ t }: ProjectsSectionProps) {
  return (
    <section className="max-w-6xl mx-auto py-20" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 px-2">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{t.projects.title}</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">{t.projects.subtitle}</p>
        </div>
        <a className="hidden md:flex items-center text-primary font-medium hover:text-blue-700 transition-colors mt-4 md:mt-0" href="https://github.com/RafyFirdaus">
          {t.projects.viewGithub}
          <span className="material-symbols-outlined ml-1 text-lg">open_in_new</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MagicCard className="group flex flex-col bg-white dark:bg-surface-dark overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1" gradientColor="rgba(19, 127, 236, 0.1)">
          <div className="h-48 overflow-hidden bg-slate-50 dark:bg-slate-800 relative">
            <Image
              src="/images/projects/thumbnail-1.png"
              alt="Manajemen Barang Hilang"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col grow">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{t.projects.mbh.title}</h3>
              <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">{t.projects.mbh.tagline}</p>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
              {t.projects.mbh.desc}
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
        </MagicCard>

        <MagicCard className="group flex flex-col bg-white dark:bg-surface-dark overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1" gradientColor="rgba(19, 127, 236, 0.1)">
          <div className="h-48 overflow-hidden bg-slate-50 dark:bg-slate-800 relative">
            <Image
              src="/images/projects/thumbnail-2.png"
              alt="KalBaCa (e-FluidCalc)"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col grow">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{t.projects.kalbaca.title}</h3>
              <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">{t.projects.kalbaca.tagline}</p>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
              {t.projects.kalbaca.desc}
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
        </MagicCard>

        <MagicCard className="group flex flex-col bg-white dark:bg-surface-dark overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1" gradientColor="rgba(19, 127, 236, 0.1)">
          <div className="h-48 overflow-hidden bg-slate-50 dark:bg-slate-800 relative">
            <Image
              src="/images/projects/thumbnail-3.png"
              alt="Beatify"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col grow">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{t.projects.beatify.title}</h3>
              <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">{t.projects.beatify.tagline}</p>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
              {t.projects.beatify.desc}
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
        </MagicCard>

        <MagicCard className="group flex flex-col bg-white dark:bg-surface-dark overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1" gradientColor="rgba(19, 127, 236, 0.1)">
          <div className="h-48 overflow-hidden bg-slate-50 dark:bg-slate-800 relative">
            <Image
              src="/images/projects/thumbnail-4.png"
              alt="AI Customer Assistant"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col grow">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{t.projects.chatbot.title}</h3>
              <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">{t.projects.chatbot.tagline}</p>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
              {t.projects.chatbot.desc}
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">PYTHON</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">NLP</span>
              </div>
              <Link href="/projects/chatbot">
                <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-xl">arrow_outward</span>
              </Link>
            </div>
          </div>
        </MagicCard>
      </div>
      <div className="mt-12 text-center md:hidden">
        <a className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors" href="https://github.com/RafyFirdaus">
          {t.projects.viewGithubProfile}
          <span className="material-symbols-outlined ml-1 text-lg">open_in_new</span>
        </a>
      </div>
    </section>
  );
});

export { ProjectsSection };
