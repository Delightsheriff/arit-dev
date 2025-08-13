import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen arit-bg">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  );
}
