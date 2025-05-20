import { MainNav } from "@/components/main-nav";
import AchievementCard from "@/components/rpg/achievements/achievement-card";
import { getAchievementsByYear, getAchievementsByType, AchievementType } from "@/lib/data/achievements-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AchievementsPage() {
  // Get all achievements
  const allAchievements = getAchievementsByYear(2025);
  
  // Define achievement types
  const achievementTypes: AchievementType[] = [
    'Technical', 
    'Career', 
    'Education', 
    'Recognition', 
    'Personal'
  ];
  
  // If no achievements are available, show a message
  if (allAchievements.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <MainNav />
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
          <h1 className="text-3xl font-bold mb-6">Achievements</h1>
          <div className="bg-card/50 rounded-lg p-6 border border-border">
            <p className="text-muted-foreground">No achievements unlocked yet. Keep completing quests to earn achievements!</p>
          </div>
        </div>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen bg-background">
      <MainNav />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-6">Achievements</h1>
        
        <div className="bg-card/50 rounded-lg p-6 border border-border">
          <p className="text-muted-foreground mb-6">
            Throughout your journey as a developer, you've unlocked various achievements. 
            Each achievement represents a milestone or accomplishment in your professional career.
          </p>
          
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="All">All</TabsTrigger>
              {achievementTypes.map((type) => (
                <TabsTrigger key={type} value={type}>{type}</TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="All">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allAchievements.map((achievement) => (
                  <AchievementCard key={achievement.id} achievement={achievement} />
                ))}
              </div>
            </TabsContent>
            
            {achievementTypes.map((type) => (
              <TabsContent key={type} value={type}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getAchievementsByType(type).map((achievement) => (
                    <AchievementCard key={achievement.id} achievement={achievement} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </main>
  );
}