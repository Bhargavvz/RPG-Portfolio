"use client";

import { MainNav } from '@/components/main-nav';
import ProfileCard from '@/components/rpg/character/profile-card';
import SkillTree from '@/components/rpg/skills/skill-tree';
import QuestCard from '@/components/rpg/quests/quest-card';
import TimelineNavigator from '@/components/rpg/timeline/timeline-navigator';
import HeroSection from '@/components/rpg/home/hero-section';
import { getFeaturedQuests } from '@/lib/data/quests-data';
import { Button } from '@/components/ui/button';
import { LucideCode2, LucideBrain, LucideMap, LucideScroll, LucideFlame } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Quest } from '@/lib/data/quests-data';

export default function Home() {
  const [featuredQuests, setFeaturedQuests] = useState<Quest[]>([]);
  
  useEffect(() => {
    setFeaturedQuests(getFeaturedQuests());
  }, []);
  
  return (
    <main className="min-h-screen">
      <MainNav />
      
      {/* Hero Section */}
      <HeroSection 
        title="Bhargav Adepu - The Code Wizard"
        subtitle="A Full Stack Developer crafting digital realms with React, Node.js, and AI. Transforming ideas into extraordinary web experiences."
        ctaText="Explore My Realm"
        ctaLink="/about"
        secondaryCtaText="View My Quests"
        secondaryCtaLink="/quests"
      />
      
      {/* Main Content */}
      <div id="main-content" className="max-w-7xl mx-auto px-4 py-12 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Character Profile */}
          <div className="space-y-8">
            <ProfileCard expanded={false} />
            <TimelineNavigator />
          </div>
          
          {/* Main Content - Featured Quests and Skills */}
          <div className="lg:col-span-2 space-y-12">
            <section className="scroll-parchment rpg-scrollbar">
              <div className="flex items-center mb-6">
                <LucideCode2 className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-400">Featured Projects</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredQuests.slice(0, 2).map((quest) => (
                  <QuestCard key={quest.id} quest={quest} />
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/quests">
                  <Button variant="outline" className="border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/30">
                    <LucideMap className="mr-2 h-4 w-4" />
                    View All Projects
                  </Button>
                </Link>
              </div>
            </section>
            
            <section className="rpg-card p-6 animate-rpg-reveal" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-6">
                <LucideBrain className="h-6 w-6 text-amber-500 mr-3" />
                <h2 className="text-3xl font-bold text-amber-500">Technical Arsenal</h2>
              </div>
              <SkillTree />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}