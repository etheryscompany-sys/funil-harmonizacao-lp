import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import PainPointsSection from "@/components/PainPointsSection";
import PromiseSection from "@/components/PromiseSection";
import SpeakerSection from "@/components/SpeakerSection";
import MasterclassInfoSection from "@/components/MasterclassInfoSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyUrgencyBar from "@/components/StickyUrgencyBar";
import PixelPageEvents from "@/components/PixelPageEvents";

export default function Home() {
  return (
    <main>
      <PixelPageEvents />
      <HeroSection />
      <MarqueeStrip />
      <PainPointsSection />
      <PromiseSection />
      <SpeakerSection />
      <MasterclassInfoSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <StickyUrgencyBar />
    </main>
  );
}
