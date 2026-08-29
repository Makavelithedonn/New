import { Clock, SlidersHorizontal, BadgeDollarSign, CalendarCheck, Zap, Tag, Shield, FolderOpen } from 'lucide-react';
import { useI18n } from '@/i18n/context';
import type { TranslationKey } from '@/i18n/translations';

interface FeatureDef {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  icon: typeof Clock;
  color: string;
  bgColor: string;
}

const features: FeatureDef[] = [
  { titleKey: 'feature_1_title', descKey: 'feature_1_desc', icon: Clock, color: 'text-bcare-navy', bgColor: 'bg-bcare-navy/10' },
  { titleKey: 'feature_2_title', descKey: 'feature_2_desc', icon: SlidersHorizontal, color: 'text-bcare-green', bgColor: 'bg-bcare-green/10' },
  { titleKey: 'feature_3_title', descKey: 'feature_3_desc', icon: BadgeDollarSign, color: 'text-bcare-orange', bgColor: 'bg-bcare-orange/10' },
  { titleKey: 'feature_4_title', descKey: 'feature_4_desc', icon: CalendarCheck, color: 'text-bcare-blue-accent', bgColor: 'bg-bcare-blue-accent/10' },
  { titleKey: 'feature_5_title', descKey: 'feature_5_desc', icon: Zap, color: 'text-bcare-teal-accent', bgColor: 'bg-bcare-teal-accent/10' },
  { titleKey: 'feature_6_title', descKey: 'feature_6_desc', icon: Tag, color: 'text-bcare-orange', bgColor: 'bg-bcare-orange/10' },
  { titleKey: 'feature_7_title', descKey: 'feature_7_desc', icon: Shield, color: 'text-bcare-navy', bgColor: 'bg-bcare-navy/10' },
  { titleKey: 'feature_8_title', descKey: 'feature_8_desc', icon: FolderOpen, color: 'text-bcare-green', bgColor: 'bg-bcare-green/10' },
];

export function Features() {
  const { t } = useI18n();

  return (
    <section id="products" className="bg-bcare-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="bcare-section-title">{t('features_title')}</h2>
          <p className="mt-4 text-lg text-bcare-gray">{t('features_subtitle')}</p>
          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-bcare-navy to-bcare-orange" />
        </div>

        {/* Feature cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.titleKey}
                className="group animate-fade-in-up rounded-2xl bg-white p-6 shadow-bcare transition-all duration-300 hover:-translate-y-1.5 hover:shadow-bcare-lg"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-bcare-dark">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm leading-relaxed text-bcare-gray">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
