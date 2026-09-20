import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { AuthorityRibbon } from "@/components/site/AuthorityRibbon";
import { Industries } from "@/components/site/Industries";
import { ExpertiseConstellation } from "@/components/site/ExpertiseConstellation";
import { FounderImpact } from "@/components/site/FounderImpact";
import { TransformationEngine } from "@/components/site/TransformationEngine";
import { SuccessStories } from "@/components/site/SuccessStories";
import { TrustedLeaders } from "@/components/site/TrustedLeaders";
import { KnowledgeCenter } from "@/components/site/KnowledgeCenter";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-mars-navy-night">
      <Navigation />
      <Hero />
      <AuthorityRibbon />
      <Industries />
      <ExpertiseConstellation />
      <FounderImpact />
      <TransformationEngine />
      <SuccessStories />
      <TrustedLeaders />
      <KnowledgeCenter />
      <FinalCTA />
      <Footer />
    </main>
  );
}
