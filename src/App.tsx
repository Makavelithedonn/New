import { I18nProvider } from '@/i18n/provider';
import { SiteHeader } from '@/components/SiteHeader';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { WhyBCare } from '@/components/WhyBCare';
import { CompaniesTicker } from '@/components/CompaniesTicker';
import { CTASection } from '@/components/CTASection';
import { SiteFooter } from '@/components/SiteFooter';
import { ChatWidget } from '@/components/ChatWidget';

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-bcare-cream">
        <SiteHeader />
        <main>
          <Hero />
          <Features />
          <WhyBCare />
          <CompaniesTicker />
          <CTASection />
        </main>
        <SiteFooter />
        <ChatWidget />
      </div>
    </I18nProvider>
  );
}

export default App;
