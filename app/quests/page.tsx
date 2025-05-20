import { MainNav } from "@/components/main-nav";
import QuestCard from "@/components/rpg/quests/quest-card";
import { getQuestsByYear } from "@/lib/data/quests-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function QuestsPage() {
  // Get quests for all years
  const allQuests = getQuestsByYear(2025);
  
  // Group quests by year
  const questsByYear = allQuests.reduce((acc, quest) => {
    if (!acc[quest.year]) {
      acc[quest.year] = [];
    }
    acc[quest.year].push(quest);
    return acc;
  }, {} as Record<number, typeof allQuests>);
  
  // Sort years in descending order
  const years = Object.keys(questsByYear).map(Number).sort((a, b) => b - a);
  
  // If no years are available, show a message
  if (years.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <MainNav />
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
          <h1 className="text-3xl font-bold mb-6">Quests & Projects</h1>
          <div className="bg-card/50 rounded-lg p-6 border border-border">
            <p className="text-muted-foreground">No quests available yet. Check back soon for new adventures!</p>
          </div>
        </div>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen bg-background">
      <MainNav />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-6">Quests & Projects</h1>
        
        <div className="bg-card/50 rounded-lg p-6 border border-border">
          <p className="text-muted-foreground mb-6">
            Each quest represents a project or professional milestone in your developer journey. 
            Complete quests to gain experience, unlock new skills, and advance your career.
          </p>
          
          <Tabs defaultValue={years[0].toString()} className="w-full">
            <TabsList className="mb-6 flex flex-wrap h-auto">
              {years.map((year) => (
                <TabsTrigger key={year} value={year.toString()}>
                  {year}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {years.map((year) => (
              <TabsContent key={year} value={year.toString()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {questsByYear[year].map((quest) => (
                    <QuestCard key={quest.id} quest={quest} />
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