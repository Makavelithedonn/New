import { ArrowRight, Sparkles } from 'lucide-react';
import { useI18n } from '@/i18n/context';

export function CTASection() {
  const { t, dir } = useI18n();

  return (
    <section className="bg-bcare-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bcare-navy via-bcare-navy to-bcare-navy-dark p-8 text-center shadow-bcare-xl sm:p-12 lg:p-16">
          {/* Decorative shapes */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-bcare-orange/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-bcare-blue-accent/10 blur-3xl" />

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-bcare-orange" />
              <span>{t('insurance_companies')}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              {t('cta_title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              {t('cta_subtitle')}
            </p>
            <a
              href="#home"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-bcare-orange px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:bg-bcare-orange-dark hover:shadow-xl active:scale-95"
            >
              <span>{t('cta_button')}</span>
              <ArrowRight className={`h-5 w-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
