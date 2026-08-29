import { Heart, BarChart3, ThumbsUp, Rocket, CreditCard, LifeBuoy } from 'lucide-react';
import { useI18n } from '@/i18n/context';
import type { TranslationKey } from '@/i18n/translations';

interface WhyDef {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  icon: typeof Heart;
}

const whyItems: WhyDef[] = [
  { titleKey: 'why_1', descKey: 'why_1_desc', icon: Heart },
  { titleKey: 'why_2', descKey: 'why_2_desc', icon: BarChart3 },
  { titleKey: 'why_3', descKey: 'why_3_desc', icon: ThumbsUp },
  { titleKey: 'why_4', descKey: 'why_4_desc', icon: Rocket },
  { titleKey: 'why_5', descKey: 'why_5_desc', icon: CreditCard },
  { titleKey: 'why_6', descKey: 'why_6_desc', icon: LifeBuoy },
];

export function WhyBCare() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-bcare-navy via-bcare-navy to-bcare-navy-dark py-16 sm:py-20 lg:py-24">
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-bcare-orange/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-bcare-blue-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
            {t('why_title')}
          </h2>
          <p className="mt-4 text-lg text-white/70">{t('why_subtitle')}</p>
          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-bcare-orange to-bcare-orange-light" />
        </div>

        {/* Why cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.titleKey}
                className="group animate-fade-in-up rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-bcare-orange/30 hover:bg-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-bcare-orange to-bcare-orange-dark text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {t(item.titleKey)}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">
                      {t(item.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-white/5 p-8 backdrop-blur-sm lg:grid-cols-4">
          {[
            { value: '500K+', labelKey: 'stats_customers' as TranslationKey },
            { value: '1M+', labelKey: 'stats_policies' as TranslationKey },
            { value: '20+', labelKey: 'stats_companies' as TranslationKey },
            { value: '10+', labelKey: 'stats_years' as TranslationKey },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
            >
              <div className="text-3xl font-extrabold text-bcare-orange sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-white/70">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
