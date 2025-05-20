"use client";

import React, { useState, useEffect } from 'react';
import { useRpg } from '@/providers/rpg-provider';
import { skills, getSkillsForYear, Skill, SkillTier } from '@/lib/data/skills-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { LucideCode, LucideServer, LucideDatabase, LucideSettings, LucideBrain } from 'lucide-react';

const SkillTree = () => {
  const { character, timelineYear, learnSkill } = useRpg();
  const [availableSkills, setAvailableSkills] = useState<Skill[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Languages');

  useEffect(() => {
    setAvailableSkills(getSkillsForYear(timelineYear));
  }, [timelineYear]);

  const isSkillLearned = (skillId: string) => {
    return character.skills.includes(skillId);
  };

  const canLearnSkill = (skill: Skill) => {
    if (isSkillLearned(skill.id)) return false;
    return skill.requiredSkills.every(reqSkill => character.skills.includes(reqSkill));
  };

  const handleLearnSkill = (skill: Skill) => {
    if (canLearnSkill(skill)) {
      learnSkill(skill.id);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <LucideCode className="h-4 w-4" />;
      case 'Web':
        return <LucideServer className="h-4 w-4" />;
      case 'Databases':
        return <LucideDatabase className="h-4 w-4" />;
      case 'DevOps':
        return <LucideSettings className="h-4 w-4" />;
      case 'AI/ML':
        return <LucideBrain className="h-4 w-4" />;
      default:
        return <LucideCode className="h-4 w-4" />;
    }
  };

  const getSkillTierLabel = (tier: SkillTier) => {
    switch (tier) {
      case 1: return 'Novice';
      case 2: return 'Apprentice';
      case 3: return 'Adept';
      case 4: return 'Expert';
      case 5: return 'Master';
    }
  };

  const getSkillColor = (tier: SkillTier, isLearned: boolean) => {
    if (!isLearned) return 'bg-gray-800 border-gray-700 opacity-70';
    
    switch (tier) {
      case 1: return 'bg-green-900 border-green-700';
      case 2: return 'bg-blue-900 border-blue-700';
      case 3: return 'bg-purple-900 border-purple-700';
      case 4: return 'bg-amber-900 border-amber-700';
      case 5: return 'bg-red-900 border-red-700';
    }
  };

  const filteredSkills = availableSkills.filter(skill => skill.category === selectedCategory);
  
  return (
    <Card className="w-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Skill Tree</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="Languages" value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="Languages" className="flex items-center gap-1">
              <LucideCode className="h-4 w-4" />
              <span className="hidden sm:inline">Languages</span>
            </TabsTrigger>
            <TabsTrigger value="Web" className="flex items-center gap-1">
              <LucideServer className="h-4 w-4" />
              <span className="hidden sm:inline">Web</span>
            </TabsTrigger>
            <TabsTrigger value="Databases" className="flex items-center gap-1">
              <LucideDatabase className="h-4 w-4" />
              <span className="hidden sm:inline">Databases</span>
            </TabsTrigger>
            <TabsTrigger value="DevOps" className="flex items-center gap-1">
              <LucideSettings className="h-4 w-4" />
              <span className="hidden sm:inline">DevOps</span>
            </TabsTrigger>
            <TabsTrigger value="AI/ML" className="flex items-center gap-1">
              <LucideBrain className="h-4 w-4" />
              <span className="hidden sm:inline">AI/ML</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {filteredSkills.map((skill) => {
              const isLearned = isSkillLearned(skill.id);
              const canLearn = canLearnSkill(skill);
              
              return (
                <TooltipProvider key={skill.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card 
                        className={`relative border-2 transition-all duration-300 hover:-translate-y-1 ${getSkillColor(skill.tier, isLearned)}`}
                      >
                        <CardContent className="pt-6 pb-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-bold text-lg">{skill.name}</h3>
                              <p className="text-sm text-gray-400">{skill.yearAcquired}</p>
                            </div>
                            <Badge variant={isLearned ? "default" : "outline"} className="ml-2">
                              {getSkillTierLabel(skill.tier)}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-300 mb-4">{skill.description}</p>
                          
                          {!isLearned && (
                            <Button 
                              variant={canLearn ? "default" : "outline"} 
                              size="sm" 
                              disabled={!canLearn}
                              onClick={() => handleLearnSkill(skill)}
                              className="w-full mt-2"
                            >
                              {canLearn ? 'Learn Skill' : 'Locked'}
                            </Button>
                          )}
                          
                          {isLearned && (
                            <Badge variant="secondary" className="w-full flex justify-center p-2">
                              Learned
                            </Badge>
                          )}
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="p-2">
                        <p className="font-bold">{skill.name}</p>
                        {skill.requiredSkills.length > 0 && (
                          <div className="mt-2">
                            <p className="text-xs font-semibold">Requirements:</p>
                            <ul className="text-xs list-disc pl-4">
                              {skill.requiredSkills.map(reqId => {
                                const req = skills.find(s => s.id === reqId);
                                return (
                                  <li key={reqId} className={character.skills.includes(reqId) ? "text-green-400" : "text-red-400"}>
                                    {req?.name || reqId}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SkillTree;