import AboutSection from "@/components/sections/AboutSection";
import ClinicSection from "@/components/sections/ClinicSection";
import DepoSection from "@/components/sections/DepoSection";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ClinicSection />
      <DepoSection />
    </main>
  );
}
