"use client";

import React, { useMemo } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  t: {
    nav: {
      portfolio: string;
      about: string;
      contact: string;
      letsTalk: string;
    };
  };
}

const Navbar = React.memo(function Navbar({ t }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a className="group flex items-center gap-2" href="#">
          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <span className="material-symbols-outlined text-xl">code</span>
          </div>
          <span className="font-bold text-slate-900 dark:text-white tracking-tight">{t.nav.portfolio}</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#about">{t.nav.about}</a>
            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#contact">{t.nav.contact}</a>
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <a href="#contact">
            <Button className="hidden sm:flex rounded-full text-xs font-semibold h-9 px-4">
              {t.nav.letsTalk}
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
});

export { Navbar };
