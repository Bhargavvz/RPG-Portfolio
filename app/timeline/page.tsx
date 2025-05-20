import { MainNav } from "@/components/main-nav";
import TimelineNavigator from "@/components/rpg/timeline/timeline-navigator";
import { getTimelineByYear, getYearRange, getEventsByType } from "@/lib/data/timeline-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  LucideScroll, 
  LucideCalendar, 
  LucideBriefcase, 
  LucideGraduationCap,
  LucideCode,
  LucideHeart
} from "lucide-react";

export default function TimelinePage() {
  // Get year range
  const [startYear, endYear] = getYearRange();
  
  // Get all timeline events
  const allEvents = getTimelineByYear(endYear);
  
  // Event type icons
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'career': return <LucideBriefcase className="h-5 w-5 text-blue-500" />;
      case 'education': return <LucideGraduationCap className="h-5 w-5 text-purple-500" />;
      case 'project': return <LucideCode className="h-5 w-5 text-green-500" />;
      case 'personal': return <LucideHeart className="h-5 w-5 text-red-500" />;
      default: return <LucideCalendar className="h-5 w-5 text-gray-500" />;
    }
  };
  
  return (
    <main className="min-h-screen bg-background">
      <MainNav />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <LucideScroll className="h-7 w-7 text-amber-500" />
          <h1 className="text-3xl font-bold">Chronicle of Adventures</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Timeline Navigator */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <TimelineNavigator />
              
              <Card className="mt-6 bg-card/50 border border-border">
                <CardHeader className="pb-2">
                  <h3 className="text-lg font-semibold">Legend</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center mr-2">
                        <LucideBriefcase className="h-4 w-4 text-blue-500" />
                      </div>
                      <span>Career Milestones</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center mr-2">
                        <LucideGraduationCap className="h-4 w-4 text-purple-500" />
                      </div>
                      <span>Educational Achievements</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center mr-2">
                        <LucideCode className="h-4 w-4 text-green-500" />
                      </div>
                      <span>Projects Completed</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-2">
                        <LucideHeart className="h-4 w-4 text-red-500" />
                      </div>
                      <span>Personal Achievements</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Main Content - Timeline */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 border border-border rpg-card">
              <CardContent className="p-4 sm:p-6">
                <p className="text-muted-foreground mb-6">
                  The Chronicle documents your journey as a developer through the years. 
                  Each event marks a significant milestone in your quest to become a master of the digital realm.
                  Navigate through time using the timeline controls or filter by type of milestone.
                </p>
                
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="mb-6 flex-wrap h-auto">
                    <TabsTrigger value="all" className="mb-2 sm:mb-0">Complete Chronicle</TabsTrigger>
                    <TabsTrigger value="career" className="mb-2 sm:mb-0">Career</TabsTrigger>
                    <TabsTrigger value="education" className="mb-2 sm:mb-0">Education</TabsTrigger>
                    <TabsTrigger value="project" className="mb-2 sm:mb-0">Projects</TabsTrigger>
                    <TabsTrigger value="personal" className="mb-2 sm:mb-0">Personal</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all">
                    <div className="relative">
                      {/* Vertical timeline line */}
                      <div className="absolute left-3 top-0 bottom-0 w-1 bg-amber-800/30 rounded-full"></div>
                      
                      <div className="space-y-10">
                        {[...Array(endYear - startYear + 1)].map((_, index) => {
                          const year = endYear - index;
                          const yearEvents = allEvents.filter(event => event.year === year);
                          
                          return (
                            <div key={year} className="relative">
                              {/* Year marker */}
                              <div className="flex items-center mb-4">
                                <div className="w-7 h-7 rounded-full bg-amber-700 flex items-center justify-center z-10">
                                  <LucideCalendar className="h-4 w-4 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold ml-4">{year}</h2>
                              </div>
                              
                              {/* Events list */}
                              <div className="pl-10 space-y-6">
                                {yearEvents.map((event, eventIndex) => (
                                  <div 
                                    key={eventIndex} 
                                    className="p-4 bg-card rounded-lg border border-border hover:border-amber-700/50 transition-all duration-300"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="p-2 rounded-full bg-gray-800/50 flex-shrink-0">
                                        {getEventIcon(event.type)}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <Badge className={`
                                          ${event.type === 'career' ? 'bg-blue-900 text-blue-300' : ''}
                                          ${event.type === 'education' ? 'bg-purple-900 text-purple-300' : ''}
                                          ${event.type === 'project' ? 'bg-green-900 text-green-300' : ''}
                                          ${event.type === 'personal' ? 'bg-red-900 text-red-300' : ''}
                                          uppercase
                                        `}>
                                          {event.type}
                                        </Badge>
                                        <h3 className="text-xl font-bold mt-2 break-words">{event.title}</h3>
                                        <p className="text-gray-400 mt-1 break-words">{event.description}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Filtered tabs */}
                  {['career', 'education', 'project', 'personal'].map(eventType => (
                    <TabsContent key={eventType} value={eventType}>
                      <div className="relative">
                        <div className="absolute left-3 top-0 bottom-0 w-1 bg-amber-800/30 rounded-full"></div>
                        
                        <div className="space-y-10">
                          {[...Array(endYear - startYear + 1)].map((_, index) => {
                            const year = endYear - index;
                            const yearTypeEvents = allEvents.filter(
                              event => event.year === year && event.type === eventType
                            );
                            
                            if (yearTypeEvents.length === 0) return null;
                            
                            return (
                              <div key={year} className="relative">
                                <div className="flex items-center mb-4">
                                  <div className="w-7 h-7 rounded-full bg-amber-700 flex items-center justify-center z-10">
                                    <LucideCalendar className="h-4 w-4 text-white" />
                                  </div>
                                  <h2 className="text-2xl font-bold ml-4">{year}</h2>
                                </div>
                                
                                <div className="pl-10 space-y-6">
                                  {yearTypeEvents.map((event, eventIndex) => (
                                    <div 
                                      key={eventIndex} 
                                      className="p-4 bg-card rounded-lg border border-border hover:border-amber-700/50 transition-all duration-300"
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-full bg-gray-800/50 flex-shrink-0">
                                          {getEventIcon(event.type)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <Badge className={`
                                            ${event.type === 'career' ? 'bg-blue-900 text-blue-300' : ''}
                                            ${event.type === 'education' ? 'bg-purple-900 text-purple-300' : ''}
                                            ${event.type === 'project' ? 'bg-green-900 text-green-300' : ''}
                                            ${event.type === 'personal' ? 'bg-red-900 text-red-300' : ''}
                                            uppercase
                                          `}>
                                            {event.type}
                                          </Badge>
                                          <h3 className="text-xl font-bold mt-2 break-words">{event.title}</h3>
                                          <p className="text-gray-400 mt-1 break-words">{event.description}</p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}