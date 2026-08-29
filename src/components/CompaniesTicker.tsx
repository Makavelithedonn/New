import { Building2, ShieldCheck } from 'lucide-react';
import { useI18n } from '@/i18n/context';

const companies = [
  { ar: 'التعاونية', en: 'Al Tawuniya' },
  { ar: 'أمانة', en: 'Amana' },
  { ar: 'المتحدة للتأمين التعاوني', en: 'Al Mutahida' },
  { ar: 'الجزيرة تكافل', en: 'Al Jazira Takaful' },
  { ar: 'ميين', en: 'MEEM' },
  { ar: 'بوبا العربية', en: 'Bupa Arabia' },
  { ar: 'تكافل الراجحي', en: 'Rajhi Takaful' },
  { ar: 'ولاء', en: 'Walaa' },
  { ar: 'الاتحاد التجاري', en: 'Al Etihad' },
  { ar: 'سلامة', en: 'Salama' },
  { ar: 'الدرع العربي', en: 'Al Darb Al Arabi' },
  { ar: 'المدينة تكافل', en: 'Al Madina Takaful' },
];

export function CompaniesTicker() {
  const { t, lang } = useI18n();
  const doubled = [...companies, ...companies];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-bcare-navy/5 px-4 py-2 text-sm font-bold text-bcare-navy">
            <ShieldCheck className="h-4 w-4" />
            <span>{t('insurance_authority')}</span>
          </div>
          <h2 className="bcare-section-title">{t('companies_title')}</h2>
          <p className="mt-4 text-lg text-bcare-gray">{t('companies_subtitle')}</p>
        </div>

        {/* Marquee */}
        <div className="marquee-container relative">
          <div className="marquee-content gap-4">
            {doubled.map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-2xl border border-bcare-gray-border bg-bcare-gray-light px-6 py-4 transition-colors hover:border-bcare-navy/30 hover:bg-white"
              >
                <Building2 className="h-6 w-6 shrink-0 text-bcare-navy" />
                <span className="whitespace-nowrap text-base font-bold text-bcare-dark">
                  {lang === 'ar' ? company.ar : company.en}
                </span>
              </div>
            ))}
          </div>
          {/* Gradient fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
