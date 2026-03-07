"use client";

import React from 'react';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { DotPattern } from '@/components/ui/dot-pattern';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  t: {
    hero: {
      available: string;
      role: string;
      expert: string;
      description: string;
      viewProjects: string;
      downloadCV: string;
    };
  };
}

const HeroSection = React.memo(function HeroSection({ t }: HeroSectionProps) {
  return (
    <>
      <DotPattern
        className={cn(
          "mask-[linear-gradient(to_bottom,white,transparent)]",
        )}
      />
      <section className="max-w-4xl mx-auto py-20 md:py-32 flex flex-col items-center text-center relative z-10">
        <AnimatedShinyText className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/50 border border-blue-100/50 text-xs font-semibold tracking-wide uppercase dark:bg-blue-900/10 dark:border-blue-800/50 transition-all hover:bg-blue-100/50 dark:hover:bg-blue-900/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>{t.hero.available}</span>
        </AnimatedShinyText>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-slate-900 dark:text-white">
          MHD Rafy Firdaus
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
          {t.hero.role} <span className="text-slate-900 dark:text-slate-200">{t.hero.expert}</span>. <br className="hidden md:block" />{t.hero.description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="group">
            <ShimmerButton className="h-12 px-8 shadow-2xl transition-all transform hover:-translate-y-0.5" background="#137fec" shimmerColor="#ffffff">
              <span className="z-10 flex items-center whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white lg:text-base">
                {t.hero.viewProjects}
                <span className="material-symbols-outlined ml-2 text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
              </span>
            </ShimmerButton>
          </a>
          <a href="/CV/Curriculum Vitae Mhd. Rafy Firdaus_20260305_123810_0000.pdf" download>
            <Button variant="outline" className="h-12 px-8 rounded-full font-semibold text-base gap-2">
              {t.hero.downloadCV}
              <span className="material-symbols-outlined text-lg">download</span>
            </Button>
          </a>
        </div>
      </section>
    </>
  );
});

export { HeroSection };
