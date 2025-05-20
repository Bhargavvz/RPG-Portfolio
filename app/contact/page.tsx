import { MainNav } from "@/components/main-nav";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  LucideMessageCircle, 
  LucideGithub, 
  LucideTwitter, 
  LucideLinkedin,
  LucideMail,
  LucideMapPin,
  LucideSparkles,
  LucideFlame
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <MainNav />
      
      {/* Hero Banner */}
      <div className="relative pt-24 pb-12 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-4 px-3 py-1 bg-amber-900/40 border border-amber-600/50 text-amber-300">
            The Summoning Circle
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Send a Message to the Digital Alchemist
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Seeking to collaborate on a project, discuss opportunities, or share knowledge?
            Use this magical summoning circle to establish contact.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Connection Points Card */}
            <Card className="border-amber-800/30 shadow-lg overflow-hidden">
              <div className="h-16 bg-gradient-to-r from-amber-900 to-amber-700 flex items-center justify-center">
                <LucideMessageCircle className="h-8 w-8 text-amber-300/70" />
              </div>
              <CardHeader>
                <CardTitle>Connection Points</CardTitle>
                <CardDescription>
                  Ways to establish contact
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-900/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center">
                    <LucideMail className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">adepuvaatsavasribhargav@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-900/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center">
                    <LucideMapPin className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">Warangal, Telangana, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links Card */}
            <Card className="border-amber-800/30 shadow-lg overflow-hidden">
              <div className="h-16 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                <LucideSparkles className="h-8 w-8 text-blue-300/70" />
              </div>
              <CardHeader>
                <CardTitle>Social Networks</CardTitle>
                <CardDescription>
                  Find me in other realms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start gap-3 border-gray-700 hover:border-github hover:text-white hover:bg-github/10" asChild>
                  <a href="https://github.com/Bhargavvz" target="_blank" rel="noopener noreferrer">
                    <LucideGithub className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start gap-3 border-gray-700 hover:border-twitter hover:text-twitter hover:bg-twitter/10" asChild>
                  <a href="https://x.com/AVSBhar" target="_blank" rel="noopener noreferrer">
                    <LucideTwitter className="h-5 w-5" />
                    <span>Twitter</span>
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start gap-3 border-gray-700 hover:border-linkedin hover:text-linkedin hover:bg-linkedin/10" asChild>
                  <a href="https://linkedin.com/in/bhargavadepu" target="_blank" rel="noopener noreferrer">
                    <LucideLinkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Availability Notice */}
            <Card className="border-amber-800/30 shadow-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <LucideFlame className="h-6 w-6 text-green-500 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-green-400 mb-1">Currently Available</h3>
                    <p className="text-gray-400">
                      I'm open to new adventures and collaborations! Whether it's full-time roles, 
                      freelance projects, or exciting partnerships, let's create something magical together.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <Card className="rpg-card border-amber-800/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill in the magical runes below to establish contact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                      <Input 
                        id="name" 
                        placeholder="Enter your name" 
                        className="bg-gray-800/50 border-amber-800/30 focus:border-amber-500 h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-gray-800/50 border-amber-800/30 focus:border-amber-500 h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="What is this about?" 
                      className="bg-gray-800/50 border-amber-800/30 focus:border-amber-500 h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Write your message here..." 
                      className="bg-gray-800/50 border-amber-800/30 focus:border-amber-500 min-h-[150px]"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button className="rpg-btn !px-8 !py-4 text-lg w-full sm:w-auto group relative">
                      <LucideSparkles className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                      Send Message
                      <div className="absolute inset-0 rounded-md overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-300/30 to-amber-500/0 -translate-x-full animate-shimmer"></div>
                      </div>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            {/* Response Times Card */}
            <Card className="mt-6 border-amber-800/30 bg-gray-900/50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-amber-900/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-amber-500">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-400 mb-1">Response Times</h3>
                    <p className="text-gray-400">
                      I typically respond to messages within 24-48 hours. For urgent matters, please indicate so in your subject line.
                      Rest assured, every message is read and valued!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}