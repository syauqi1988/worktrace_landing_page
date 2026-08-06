import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WorkflowSection from "@/components/WorkflowSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import FounderNote from "@/components/FounderNote";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProblemSection />
      <WorkflowSection />
      <FeaturesGrid />
      <FounderNote />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
