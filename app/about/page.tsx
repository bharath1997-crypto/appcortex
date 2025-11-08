// app/about/page.tsx
import { AboutHero } from "@/components/about/AboutHero";
import { CoreBeliefs } from "@/components/about/CoreBeliefs";
import { HowItWorks } from "@/components/about/HowItWorks";
import { DataGlance } from "@/components/about/DataGlance";
import { AiCollaboration } from "@/components/about/AiCollaboration";
import { OurStory } from "@/components/about/OurStory";
import { TeamSection } from "@/components/about/TeamSection";
import { PartnersSection } from "@/components/about/PartnersSection";
import { DataEthics } from "@/components/about/DataEthics";
import { AppCortexLabs } from "@/components/about/AppCortexLabs";
import { JoinMission } from "@/components/about/JoinMission";

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-10 animate-fade-up">
      {/* Hero Section */}
      <AboutHero />

      {/* Vision & Core Beliefs */}
      <CoreBeliefs />

      {/* How AppCortex Works */}
      <HowItWorks />

      {/* Our Data at a Glance */}
      <DataGlance />

      {/* AI + Human Collaboration */}
      <AiCollaboration />

      {/* Our Story Timeline */}
      <OurStory />

      {/* Meet the Team */}
      <TeamSection />

      {/* Partners & Collaborators */}
      <PartnersSection />

      {/* Data Ethics & Privacy */}
      <DataEthics />

      {/* AppCortex Labs */}
      <AppCortexLabs />

      {/* Join Our Mission CTA */}
      <JoinMission />
    </div>
  );
}
