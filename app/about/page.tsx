import { MainNav } from "@/components/main-nav";
import ProfileCard from "@/components/rpg/character/profile-card";
import SkillTree from "@/components/rpg/skills/skill-tree";
import { 
  LucideBook, 
  LucideBriefcase, 
  LucideGraduationCap, 
  LucideHeart, 
  LucideUser,
  LucideStar,
  LucideMap,
  LucideTrophy
} from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <MainNav />
      
      {/* Hero Section - Character Introduction */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-3 py-1 bg-amber-900/40 border border-amber-600/50 text-amber-300">
              The Digital Alchemist's Origin
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              The Tale of Adepu Vaatsava Sri Bhargav
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A Full Stack Sorcerer and AI Enchanter, crafting digital solutions and mastering the arcane arts of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Character Card */}
            <div className="lg:col-span-1">
              <ProfileCard expanded={true} />
            </div>
            
            {/* Character Story */}
            <div className="lg:col-span-2">
              <Card className="rpg-card border-amber-800/50 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-r from-amber-900 to-amber-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LucideBook className="h-20 w-20 text-amber-300/30" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">The Origin Story</CardTitle>
                  <CardDescription>
                    A journey through the realms of technology and innovation
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose prose-amber dark:prose-invert">
                  <p>
                  In the land of Telangana, under the rising sun of innovation and amidst the thrum of machines whispering secrets of the future, a gifted soul emerged—Adepu Vaatsava Sri Bhargav, born not with a sword, but with a mind destined to master the ancient and evolving arts of computation.
                  </p>
                  <p>
                  From the modest village of Spectra, young Bhargav’s brilliance shone early. His mastery of numbers, logic, and order earned him the rare and perfect 10.0 Star Crystals—a sign foretold by the Elders of Tech. At the Narayana Junior College, he ventured deeper into the mystical realm of Physics, Chemistry, and Mathematics, wielding the power of 8.99 Knowledge Shards, a feat that opened gates to higher arcane institutions.
                  </p>
                  <p>
                  At the citadel of CMR College of Engineering & Technology, he chose the path of the Codeforged Sage—a rare hybrid of the Full-Stack Mage and Machine Learning Warlock. Though the trials were tough, and the CGPA winds turbulent at times (7.58), Bhargav’s fire never waned. His journey wasn't one of silent study but of battlefields—hackathons, builds, and battles of wits across the continent.
                  </p>
                  <p>
                  He traveled to the Open Source Realms, where he joined the legendary order of Google Summer of Code 2025, aligning with the ancient guild of VideoLAN. There, he was tasked with conjuring the AI-Powered Media Recommendation Engine—a sentient spirit capable of suggesting the perfect song or saga, reading into the user’s soul. It was not just a project; it was a magical relic powered by neural prophecy and Python incantations.
                  </p>
                  <p>
                  But Bhargav was not just a lone wanderer. He led guilds and mentored squires. As the Internshala Student Partner, he spread the light of opportunity across campus villages. His campaigns reached far and wide—HackByte at VIT-AP, FCCxAIESEC at IIT-H, Specathon, and the noble Intinta Innovator Council of Telangana—bringing him not gold, but honor, renown, and trust.  
                  </p>
                  <p>
                  Now, as he stands on the precipice of graduation and faces the swirling void of the unknown future, Bhargav remains undaunted. For he knows—he is not merely a developer. He is a Codeforged Sage, chosen by the Source Code itself. And his story… is only just beginning.
                  </p>
                  <p>
                  And so, the tale of Adepu Vaatsava Sri Bhargav, the Digital Alchemist, continues. For in the realm of technology, the journey is never over. It is only just beginning.
                  </p>
                  <div className="flex justify-center mt-6">
                    <Link href="/timeline">
                      <Button variant="outline" className="gap-2 border-amber-600">
                        <LucideMap className="h-4 w-4" />
                        View Full Journey
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Character Stats and Background */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="stats" className="w-full">
          <TabsList className="mb-8 grid grid-cols-4 max-w-xl mx-auto">
            <TabsTrigger value="stats" className="gap-2">
              <LucideStar className="h-4 w-4" />
              <span className="hidden sm:inline">Character Stats</span>
            </TabsTrigger>
            <TabsTrigger value="guilds" className="gap-2">
              <LucideBriefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Past Guilds</span>
            </TabsTrigger>
            <TabsTrigger value="training" className="gap-2">
              <LucideGraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Training</span>
            </TabsTrigger>
            <TabsTrigger value="lore" className="gap-2">
              <LucideHeart className="h-4 w-4" />
              <span className="hidden sm:inline">Personal Lore</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Character Stats */}
          <TabsContent value="stats">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-amber-800/30 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LucideStar className="h-5 w-5 text-amber-500" />
                    Primary Attributes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Creativity */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium">Frontend Magic</span>
                      <span className="text-amber-500 font-bold">92</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <p className="text-sm text-gray-400">Mastery of React, Next.js, and modern UI frameworks</p>
                  </div>
                  
                  {/* Code Mastery */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium">Backend Sorcery</span>
                      <span className="text-blue-500 font-bold">88</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <p className="text-sm text-gray-400">Expertise in Node.js, Express, and database management</p>
                  </div>
                  
                  {/* Problem Solving */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium">System Architecture</span>
                      <span className="text-purple-500 font-bold">85</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-400 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-sm text-gray-400">Designing scalable and efficient system solutions</p>
                  </div>
                  
                  {/* Collaboration */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium">Team Synergy</span>
                      <span className="text-green-500 font-bold">90</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-600 to-green-400 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <p className="text-sm text-gray-400">Leading and collaborating in development teams</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-800/30 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LucideUser className="h-5 w-5 text-amber-500" />
                    Character Traits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h3 className="font-bold text-amber-400">Innovative Thinker</h3>
                      <p className="text-sm text-gray-300 mt-2">
                        Constantly exploring new technologies and creative solutions.
                      </p>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h3 className="font-bold text-blue-400">Code Craftsman</h3>
                      <p className="text-sm text-gray-300 mt-2">
                        Dedicated to writing clean, efficient, and maintainable code.
                      </p>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h3 className="font-bold text-purple-400">Agile Practitioner</h3>
                      <p className="text-sm text-gray-300 mt-2">
                        Adaptable to changing requirements and project needs.
                      </p>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h3 className="font-bold text-green-400">User Advocate</h3>
                      <p className="text-sm text-gray-300 mt-2">
                        Focused on creating intuitive and engaging user experiences.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-bold text-lg mb-3">Special Abilities</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Badge className="bg-amber-700">Full Stack Mastery</Badge>
                        <span className="text-sm text-gray-300">Proficient in both frontend and backend development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="bg-blue-700">Performance Optimization</Badge>
                        <span className="text-sm text-gray-300">Expert in optimizing application performance and speed</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge className="bg-purple-700">Cloud Architecture</Badge>
                        <span className="text-sm text-gray-300">Skilled in designing and implementing cloud solutions</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Past Guilds (Companies) */}
          <TabsContent value="guilds">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-amber-800/30 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Google Summer of Code 2025</CardTitle>
                      <CardDescription>VideoLAN Organization • May 2025 - Sept 2025</CardDescription>
                    </div>
                    <Badge className="bg-purple-600">Contributor</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    Selected for the prestigious GSoC program, working on an AI-powered Media Recommendation Engine for VLC.
                  </p>
                  <h4 className="font-semibold text-amber-400 mb-2">Achievements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span>Building ML-based system for personalized media content</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span>Contributing to open-source media player development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-amber-800/30 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Internshala Student Partner</CardTitle>
                      <CardDescription>ISP 32 • Jan 2024 - Mar 2024</CardDescription>
                    </div>
                    <Badge className="bg-blue-600">Campus Ambassador</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    Led campus initiatives to promote internship opportunities and skill development.
                  </p>
                  <h4 className="font-semibold text-amber-400 mb-2">Achievements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span>Conducted awareness campaigns on career growth</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span>Promoted skill development resources</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Training (Education) */}
          <TabsContent value="training">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-amber-800/30 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>B.Tech in Computer Science</CardTitle>
                      <CardDescription>CMR College of Engineering & Technology • 2022 - Present</CardDescription>
                    </div>
                    <Badge className="bg-purple-600">CGPA: 7.58</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    Pursuing comprehensive training in computer science and engineering.
                  </p>
                  <h4 className="font-semibold text-amber-400 mb-2">Key Studies</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="outline" className="justify-center">Data Structures</Badge>
                    <Badge variant="outline" className="justify-center">Algorithms</Badge>
                    <Badge variant="outline" className="justify-center">Operating Systems</Badge>
                    <Badge variant="outline" className="justify-center">Machine Learning</Badge>
                    <Badge variant="outline" className="justify-center">Web Development</Badge>
                    <Badge variant="outline" className="justify-center">Database Management</Badge>
                    <Badge variant="outline" className="justify-center">Artificial Intelligence</Badge>
                    <Badge variant="outline" className="justify-center">Software Engineering</Badge>
                    <Badge variant="outline" className="justify-center">Computer Networks</Badge>
                    <Badge variant="outline" className="justify-center">Computer Architecture</Badge> 
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-800/30 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Previous Education</CardTitle>
                      <CardDescription>Academic Journey</CardDescription>
                    </div>
                    <Badge className="bg-amber-600">Scholar</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border border-gray-700 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Intermediate (PCM)</h4>
                      <Badge className="bg-blue-800">2022</Badge>
                    </div>
                    <p className="text-sm text-gray-400">
                      Narayana Junior College • CGPA: 8.99
                    </p>
                  </div>
                  
                  <div className="border border-gray-700 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">SSC</h4>
                      <Badge className="bg-blue-800">2020</Badge>
                    </div>
                    <p className="text-sm text-gray-400">
                      Spectra School • CGPA: 10.0
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Personal Lore (Projects & Achievements) */}
          <TabsContent value="lore">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-amber-800/30 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LucideHeart className="h-5 w-5 text-red-500" />
                    Legendary Quests
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h3 className="font-bold text-amber-400">Voxera - Social Media Platform</h3>
                    <p className="text-sm text-gray-300 mt-2">
                      Built a real-time social platform supporting 5,000+ concurrent users with Next.js and Supabase.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h3 className="font-bold text-blue-400">Communitifx - Community Platform</h3>
                    <p className="text-sm text-gray-300 mt-2">
                      Developed a community issue tracking system handling 10,000+ reports with React and Spring Boot.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h3 className="font-bold text-purple-400">PharmaCare - Medicine Tracking</h3>
                    <p className="text-sm text-gray-300 mt-2">
                      Created a comprehensive medicine tracking system with Redis caching and PostgreSQL.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-800/30 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LucideTrophy className="h-5 w-5 text-amber-500" />
                    Epic Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-amber dark:prose-invert">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Badge className="bg-amber-700 mt-1">🥉</Badge>
                        <div>
                          <strong className="text-amber-400">2nd Runner-Up</strong>
                          <p className="text-sm text-gray-300">HackByte National Hackathon, VIT-AP (300+ teams)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="bg-amber-700 mt-1">🏅</Badge>
                        <div>
                          <strong className="text-amber-400">Honorable Mention</strong>
                          <p className="text-sm text-gray-300">FCCxAIESEC SDG 11 Challenge, IIT Hyderabad</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="bg-amber-700 mt-1">🏁</Badge>
                        <div>
                          <strong className="text-amber-400">Finalist</strong>
                          <p className="text-sm text-gray-300">Specathon 2024, St. Peter's Engineering College</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="bg-amber-700 mt-1">🌟</Badge>
                        <div>
                          <strong className="text-amber-400">Intinta Innovator</strong>
                          <p className="text-sm text-gray-300">Selected by Government of Telangana</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}