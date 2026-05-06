import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import FeedbackSection from "@/components/FeedbackSection";
import PromiseSection from "@/components/PromiseSection";
import SpeakerSection from "@/components/SpeakerSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyUrgencyBar from "@/components/StickyUrgencyBar";
import PixelPageEvents from "@/components/PixelPageEvents";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <main>
      <PixelPageEvents />
      <HeroSection />
      <MarqueeStrip />
      <PromiseSection />
      <FeedbackSection />
      <SpeakerSection />
      <FAQSection />
      <CTABanner />
      <Footer />
      <StickyUrgencyBar />
    </main>
  );
}
