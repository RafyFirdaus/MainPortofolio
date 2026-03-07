"use client";

import React from 'react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

interface FooterSectionProps {
  t: {
    footer: {
      readyTitle: string;
      readyDesc: string;
      github: string;
      email: string;
      rights: string;
    };
  };
}

const FooterSection = React.memo(function FooterSection({ t }: FooterSectionProps) {
  return (
    <footer className="max-w-4xl mx-auto py-20 mt-10" id="contact">
      <Separator className="mb-16" />
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t.footer.readyTitle}</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">{t.footer.readyDesc}</p>
        <a className="mb-12 break-all sm:break-normal" href="mailto:rafyfirdaus20@gmail.com">
          <span className="text-xl sm:text-3xl md:text-5xl font-bold text-primary tracking-tight hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            rafyfirdaus20@gmail.com
          </span>
        </a>
        <div className="flex gap-8 mb-12">
          <a className="flex flex-col items-center gap-2 group" href="https://github.com/RafyFirdaus">
            <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-all">
              <Image src="/images/logos/github.png" alt="GitHub" width={24} height={24} />
            </div>
            <span className="text-xs font-medium text-slate-500 group-hover:text-primary transition-colors">{t.footer.github}</span>
          </a>
          <a className="flex flex-col items-center gap-2 group" href="mailto:rafyfirdaus20@gmail.com">
            <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <span className="text-xs font-medium text-slate-500 group-hover:text-primary transition-colors">{t.footer.email}</span>
          </a>
        </div>
        <p className="text-sm text-slate-400 dark:text-slate-600">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
});

export { FooterSection };
