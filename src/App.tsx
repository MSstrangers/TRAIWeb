import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { CurrentProject } from "./components/current-project";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <CurrentProject />
      <Footer />
    </div>
  );
}