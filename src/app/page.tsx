"use client";

import { useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { dictionaries } from '@/locales/dictionaries';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { FooterSection } from '@/components/sections/FooterSection';

export default function Home() {
  const { language } = useLanguage();
  const t = useMemo(() => dictionaries[language], [language]);

  return (
    <>
      <Navbar t={t} />

      <main className="grow pt-24 pb-20 px-6 overflow-x-hidden relative">
        <HeroSection t={t} />
        <AboutSection t={t} />
        <ProjectsSection t={t} />
        <FooterSection t={t} />
      </main>
    </>
  );
}
