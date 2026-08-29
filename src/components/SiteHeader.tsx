import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useI18n } from '@/i18n/context';
import type { TranslationKey } from '@/i18n/translations';

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems: { key: TranslationKey; href: string }[] = [
    { key: 'nav_home', href: '#home' },
    { key: 'nav_products', href: '#products' },
    { key: 'nav_about', href: '#about' },
    { key: 'nav_blog', href: '#blog' },
    { key: 'nav_contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-bcare'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 transition-transform hover:scale-105">
            <img src="/Bcarelogo.svg" alt="BCare" className="h-8 w-auto lg:h-10" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-bcare-dark transition-colors hover:bg-bcare-navy/5 hover:text-bcare-navy"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1.5 rounded-lg border border-bcare-gray-border px-3 py-2 text-sm font-bold text-bcare-navy transition-all hover:bg-bcare-navy/5"
            >
              <Globe className="h-4 w-4" />
              <span>{t('lang_switch')}</span>
            </button>

            <button className="hidden rounded-xl bg-bcare-navy px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-bcare-navy-dark hover:shadow-lg active:scale-95 sm:block">
              {t('nav_login')}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-bcare-dark transition-colors hover:bg-bcare-navy/5 lg:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="animate-slide-down border-t border-bcare-gray-border bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-semibold text-bcare-dark transition-colors hover:bg-bcare-navy/5 hover:text-bcare-navy"
              >
                {t(item.key)}
              </a>
            ))}
            <button className="mt-2 w-full rounded-xl bg-bcare-navy px-5 py-3 text-base font-bold text-white transition-all hover:bg-bcare-navy-dark">
              {t('nav_login')}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
