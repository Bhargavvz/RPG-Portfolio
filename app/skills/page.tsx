import { MainNav } from "@/components/main-nav";
import SkillTree from "@/components/rpg/skills/skill-tree";
import ProfileCard from "@/components/rpg/character/profile-card";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background">
      <MainNav />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-6">Skills Tree</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProfileCard />
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-card/50 rounded-lg p-6 border border-border">
              <p className="text-muted-foreground mb-6">
                As you progress through your journey, you'll acquire various skills across different domains. 
                Use the timeline to see how your skills evolved over time, and unlock new skills to enhance your abilities.
              </p>
              <SkillTree />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}