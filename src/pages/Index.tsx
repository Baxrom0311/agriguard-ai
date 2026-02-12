import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TeamSection from "@/components/TeamSection";
import RoadmapSection from "@/components/RoadmapSection";
import ImplementationSection from "@/components/ImplementationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <TeamSection />
      <RoadmapSection />
      <ImplementationSection />
      <Footer />
    </div>
  );
};

export default Index;
