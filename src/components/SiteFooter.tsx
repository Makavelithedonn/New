import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Apple, Play } from 'lucide-react';
import { useI18n } from '@/i18n/context';
import type { TranslationKey } from '@/i18n/translations';

interface FooterCol {
  titleKey: TranslationKey;
  links: { key: TranslationKey; href: string }[];
}

const columns: FooterCol[] = [
  {
    titleKey: 'footer_products',
    links: [
      { key: 'footer_vehicle_ins', href: '#' },
      { key: 'footer_medical_ins', href: '#' },
      { key: 'footer_travel_ins', href: '#' },
      { key: 'footer_medical_err', href: '#' },
      { key: 'footer_domestic_ins', href: '#' },
    ],
  },
  {
    titleKey: 'footer_support',
    links: [
      { key: 'footer_blog', href: '#' },
      { key: 'footer_cancel', href: '#' },
      { key: 'footer_ticket', href: '#' },
      { key: 'footer_print', href: '#' },
    ],
  },
  {
    titleKey: 'footer_links',
    links: [
      { key: 'footer_authority', href: '#' },
      { key: 'footer_complaint', href: '#' },
      { key: 'footer_rules', href: '#' },
      { key: 'footer_vat', href: '#' },
    ],
  },
];

export function SiteFooter() {
  const { t } = useI18n();

  const aboutLinks: { key: TranslationKey; href: string }[] = [
    { key: 'footer_about', href: '#' },
    { key: 'footer_discounts', href: '#' },
    { key: 'footer_privacy', href: '#' },
    { key: 'footer_terms', href: '#' },
    { key: 'footer_jobs', href: '#' },
  ];

  return (
    <footer id="contact" className="bg-bcare-dark text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Col 1: Brand + about */}
          <div className="lg:col-span-4">
            <img src="/Bcarelogo.svg" alt="BCare" className="h-10 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {t('footer_about_desc')}
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-bcare-orange" />
                <span dir="ltr">+966 55 500 7258</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-bcare-orange" />
                <span dir="ltr">info@bcare.com.sa</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 shrink-0 text-bcare-orange mt-0.5" />
                <span>Riyadh 13315, Saudi Arabia</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/60 transition-all hover:bg-bcare-orange hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: About links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-base font-bold text-white">{t('footer_about')}</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-bcare-orange"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3-5: Footer columns */}
          {columns.map((col) => (
            <div key={col.titleKey} className="lg:col-span-2">
              <h4 className="mb-4 text-base font-bold text-white">{t(col.titleKey)}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-bcare-orange"
                    >
                      {t(link.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App stores */}
        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
          <span className="text-sm font-semibold text-white/70">Download App:</span>
          <a href="#" className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 transition-all hover:bg-white/10">
            <Apple className="h-6 w-6 text-white" />
            <div className="text-start">
              <div className="text-[10px] text-white/50">Download on the</div>
              <div className="text-sm font-bold text-white">App Store</div>
            </div>
          </a>
          <a href="#" className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 transition-all hover:bg-white/10">
            <Play className="h-6 w-6 text-white" />
            <div className="text-start">
              <div className="text-[10px] text-white/50">GET IT ON</div>
              <div className="text-sm font-bold text-white">Google Play</div>
            </div>
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-white/50">{t('footer_copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
