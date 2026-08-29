import { useState } from 'react';
import { Car, HeartPulse, Plane, ShieldCheck, Users, Stethoscope, ChevronDown, Search, CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/i18n/context';
import type { TranslationKey } from '@/i18n/translations';

type TabId = 'vehicles' | 'medical' | 'medical_errors' | 'travel' | 'domestic';

interface TabDef {
  id: TabId;
  labelKey: TranslationKey;
  icon: typeof Car;
  color: string;
  bgColor: string;
}

const tabs: TabDef[] = [
  { id: 'vehicles', labelKey: 'tab_vehicles', icon: Car, color: 'text-bcare-navy', bgColor: 'bg-bcare-navy' },
  { id: 'medical', labelKey: 'tab_medical', icon: HeartPulse, color: 'text-bcare-green', bgColor: 'bg-bcare-green' },
  { id: 'medical_errors', labelKey: 'tab_medical_errors', icon: Stethoscope, color: 'text-bcare-teal-accent', bgColor: 'bg-bcare-teal-accent' },
  { id: 'travel', labelKey: 'tab_travel', icon: Plane, color: 'text-bcare-blue-accent', bgColor: 'bg-bcare-blue-accent' },
  { id: 'domestic', labelKey: 'tab_domestic', icon: Users, color: 'text-bcare-orange', bgColor: 'bg-bcare-orange' },
];

export function Hero() {
  const { t, lang } = useI18n();
  const [activeTab, setActiveTab] = useState<TabId>('vehicles');
  const [purpose, setPurpose] = useState<'new' | 'transfer'>('new');
  const [regType, setRegType] = useState<'estmara' | 'customs'>('estmara');
  const [repairType, setRepairType] = useState<'agency' | 'garage'>('agency');
  const [idValue, setIdValue] = useState('');
  const [serialValue, setSerialValue] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idValue || !serialValue || !agreed || !captchaValue) return;
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setShowResults(true);
    }, 2000);
  };

  const heroBg = lang === 'ar'
    ? 'https://images.pexels.com/photos/14989848/pexels-photo-14989848.jpeg?auto=compress&cs=tinysrgb&w=1920'
    : 'https://images.pexels.com/photos/14989848/pexels-photo-14989848.jpeg?auto=compress&cs=tinysrgb&w=1920';

  return (
    <section id="home" className="relative overflow-hidden pt-16 lg:pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bcare-navy/95 via-bcare-navy/85 to-bcare-navy-dark/90" />
        {/* Decorative shapes */}
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-bcare-orange/10 blur-3xl" />
        <div className="absolute top-40 -left-20 h-96 w-96 rounded-full bg-bcare-blue-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Hero text */}
          <div className="animate-fade-in-up text-center lg:text-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-bcare-orange" />
              <span>{t('hero_badge')}</span>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              {t('hero_title')}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
              {t('hero_subtitle')}
            </p>
          </div>

          {/* Right: Insurance comparison card */}
          <div className="animate-fade-in-up rounded-3xl bg-white p-5 shadow-bcare-xl sm:p-6 lg:p-8" style={{ animationDelay: '0.15s' }}>
            {/* Tabs */}
            <div className="mb-6 flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? `${tab.bgColor} text-white shadow-md`
                        : 'bg-bcare-gray-light text-bcare-dark hover:bg-bcare-navy/5'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{t(tab.labelKey)}</span>
                  </button>
                );
              })}
            </div>

            {/* Form */}
            {activeTab === 'vehicles' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Insurance purpose */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-bcare-dark">
                    {t('insurance_purpose')}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPurpose('new')}
                      className={`rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition-all ${
                        purpose === 'new'
                          ? 'border-bcare-navy bg-bcare-navy/5 text-bcare-navy'
                          : 'border-bcare-gray-border text-bcare-dark hover:border-bcare-navy/30'
                      }`}
                    >
                      {t('new_insurance')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setPurpose('transfer')}
                      className={`rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition-all ${
                        purpose === 'transfer'
                          ? 'border-bcare-navy bg-bcare-navy/5 text-bcare-navy'
                          : 'border-bcare-gray-border text-bcare-dark hover:border-bcare-navy/30'
                      }`}
                    >
                      {t('ownership_transfer')}
                    </button>
                  </div>
                </div>

                {/* Registration type */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-bcare-dark">
                    {t('vehicle_reg_type')}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setRegType('estmara')}
                      className={`rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition-all ${
                        regType === 'estmara'
                          ? 'border-bcare-navy bg-bcare-navy/5 text-bcare-navy'
                          : 'border-bcare-gray-border text-bcare-dark hover:border-bcare-navy/30'
                      }`}
                    >
                      {t('estmara')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setRegType('customs')}
                      className={`rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition-all ${
                        regType === 'customs'
                          ? 'border-bcare-navy bg-bcare-navy/5 text-bcare-navy'
                          : 'border-bcare-gray-border text-bcare-dark hover:border-bcare-navy/30'
                      }`}
                    >
                      {t('customs_card')}
                    </button>
                  </div>
                </div>

                {/* ID/Iqama */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-bcare-dark">
                    {t('id_iqama')}
                  </label>
                  <input
                    type="text"
                    value={idValue}
                    onChange={(e) => setIdValue(e.target.value)}
                    placeholder={t('id_iqama')}
                    className="bcare-input"
                  />
                </div>

                {/* Serial number */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-bcare-dark">
                    {t('serial_number')}
                  </label>
                  <input
                    type="text"
                    value={serialValue}
                    onChange={(e) => setSerialValue(e.target.value)}
                    placeholder={t('serial_number')}
                    className="bcare-input"
                  />
                </div>

                {/* Repair type */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-bcare-dark">
                    {t('repair_type')}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setRepairType('agency')}
                      className={`rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition-all ${
                        repairType === 'agency'
                          ? 'border-bcare-navy bg-bcare-navy/5 text-bcare-navy'
                          : 'border-bcare-gray-border text-bcare-dark hover:border-bcare-navy/30'
                      }`}
                    >
                      {t('repair_agency')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setRepairType('garage')}
                      className={`rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition-all ${
                        repairType === 'garage'
                          ? 'border-bcare-navy bg-bcare-navy/5 text-bcare-navy'
                          : 'border-bcare-gray-border text-bcare-dark hover:border-bcare-navy/30'
                      }`}
                    >
                      {t('repair_garage')}
                    </button>
                  </div>
                </div>

                {/* Captcha */}
                <div className="flex items-end gap-3">
                  <div className="flex-1">
                    <label className="mb-1.5 block text-sm font-semibold text-bcare-dark">
                      {t('captcha_label')}
                    </label>
                    <input
                      type="text"
                      value={captchaValue}
                      onChange={(e) => setCaptchaValue(e.target.value)}
                      placeholder={t('captcha_placeholder')}
                      className="bcare-input"
                    />
                  </div>
                  <div className="flex h-[50px] min-w-[120px] items-center justify-center rounded-xl bg-gradient-to-br from-bcare-navy to-bcare-navy-light px-4 select-none">
                    <span className="text-lg font-bold tracking-widest text-white" style={{ fontFamily: 'monospace', fontStyle: 'italic', textDecoration: 'line-through' }}>
                      7A3K
                    </span>
                  </div>
                </div>

                {/* Agree checkbox */}
                <label className="flex cursor-pointer items-center gap-2 text-sm text-bcare-dark">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="h-4 w-4 rounded border-bcare-gray-border text-bcare-navy focus:ring-bcare-navy/20"
                  />
                  <span>{t('agree_inquiry')}</span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={searching || showResults}
                  className="bcare-btn-primary w-full text-base"
                >
                  {searching ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      <span>{t('searching')}</span>
                    </>
                  ) : showResults ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      <span>{t('show_offers')}</span>
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5" />
                      <span>{t('show_offers')}</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Non-vehicle tabs - placeholder forms */}
            {activeTab !== 'vehicles' && (
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-bcare-dark">
                    {t('id_iqama')}
                  </label>
                  <input type="text" placeholder={t('id_iqama')} className="bcare-input" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-bcare-dark">
                    {activeTab === 'travel' ? t('id_iqama') : activeTab === 'domestic' ? t('id_iqama') : t('id_iqama')}
                  </label>
                  <input type="text" placeholder={t('serial_number')} className="bcare-input" />
                </div>
                <div className="flex items-end gap-3">
                  <div className="flex-1">
                    <label className="mb-1.5 block text-sm font-semibold text-bcare-dark">
                      {t('captcha_label')}
                    </label>
                    <input type="text" placeholder={t('captcha_placeholder')} className="bcare-input" />
                  </div>
                  <div className="flex h-[50px] min-w-[120px] items-center justify-center rounded-xl bg-gradient-to-br from-bcare-navy to-bcare-navy-light px-4 select-none">
                    <span className="text-lg font-bold tracking-widest text-white" style={{ fontFamily: 'monospace', fontStyle: 'italic', textDecoration: 'line-through' }}>
                      9B2X
                    </span>
                  </div>
                </div>
                <label className="flex cursor-pointer items-center gap-2 text-sm text-bcare-dark">
                  <input type="checkbox" className="h-4 w-4 rounded border-bcare-gray-border text-bcare-navy focus:ring-bcare-navy/20" />
                  <span>{t('agree_inquiry')}</span>
                </label>
                <button className="bcare-btn-primary w-full text-base">
                  <Search className="h-5 w-5" />
                  <span>{t('show_offers')}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative">
        <svg className="block w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: '40px' }}>
          <path d="M0,32 C480,80 960,0 1440,32 L1440,80 L0,80 Z" fill="#f8f8f7" />
        </svg>
      </div>
    </section>
  );
}
