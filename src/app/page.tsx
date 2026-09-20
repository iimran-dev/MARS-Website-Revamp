import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { AuthorityRibbon } from "@/components/site/AuthorityRibbon";
import { FounderImpact } from "@/components/site/FounderImpact";
import { ExpertiseConstellation } from "@/components/site/ExpertiseConstellation";
import { TransformationEngine } from "@/components/site/TransformationEngine";
import { Industries } from "@/components/site/Industries";
import { ProcessBlueprint } from "@/components/site/ProcessBlueprint";
import { SuccessStories } from "@/components/site/SuccessStories";
import { TrustedLeaders } from "@/components/site/TrustedLeaders";
import { TrainingExcellence } from "@/components/site/TrainingExcellence";
import { KnowledgeCenter } from "@/components/site/KnowledgeCenter";
import { GlobalStandardsWall } from "@/components/site/GlobalStandardsWall";
import { DigitalQualityFuture } from "@/components/site/DigitalQualityFuture";
import { LeadershipPerspective } from "@/components/site/LeadershipPerspective";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-mars-navy-night">
      <Navigation />
      <Hero />
      <Industries />
      <AuthorityRibbon />
      <FounderImpact />
      <ExpertiseConstellation />
      <TransformationEngine />
      
      <ProcessBlueprint />
      <SuccessStories />
      <TrustedLeaders />
      <TrainingExcellence />
      <KnowledgeCenter />
      <GlobalStandardsWall />
      <DigitalQualityFuture />
      <LeadershipPerspective />
      <FinalCTA />
      <Footer />
    </main>
  );
}
