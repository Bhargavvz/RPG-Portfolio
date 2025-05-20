"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useRpg } from '@/providers/rpg-provider';
import { Quest } from '@/lib/data/quests-data';
import { LucideCalendar, LucideClock, LucideStar, LucideTarget, LucideTrophy } from 'lucide-react';

interface QuestCardProps {
  quest: Quest;
  compact?: boolean;
}

const QuestCard = ({ quest, compact = false }: QuestCardProps) => {
  const { character, completeQuest } = useRpg();
  
  const isQuestCompleted = character.quests.completed.includes(quest.id);
  const isQuestActive = character.quests.active.includes(quest.id);
  const canCompleteQuest = character.level >= quest.requiredLevel && 
    quest.requiredSkills.every(skill => character.skills.includes(skill));
  
  const handleCompleteQuest = () => {
    if (canCompleteQuest && !isQuestCompleted) {
      completeQuest(quest.id);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500 hover:bg-green-600';
      case 'Medium': return 'bg-blue-500 hover:bg-blue-600';
      case 'Hard': return 'bg-purple-500 hover:bg-purple-600';
      case 'Legendary': return 'bg-amber-500 hover:bg-amber-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getQuestTypeIcon = (type: string) => {
    switch (type) {
      case 'Main': return <LucideStar className="h-4 w-4" />;
      case 'Side': return <LucideTarget className="h-4 w-4" />;
      case 'Daily': return <LucideCalendar className="h-4 w-4" />;
      case 'Special': return <LucideTrophy className="h-4 w-4" />;
      default: return <LucideStar className="h-4 w-4" />;
    }
  };

  if (compact) {
    return (
      <Card className={`w-full border ${isQuestCompleted ? 'bg-gray-800/50 border-green-700/50' : 'border-gray-700'} hover:shadow-md transition-all duration-300`}>
        <CardHeader className="p-4 pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-md font-bold">{quest.title}</CardTitle>
            <Badge className={getDifficultyColor(quest.difficulty)}>
              {quest.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0 pb-2">
          <div className="flex justify-between text-sm mb-2">
            <div className="flex items-center text-gray-400">
              <LucideCalendar className="h-3 w-3 mr-1" />
              {quest.year}
            </div>
            <div className="flex items-center text-gray-400">
              <LucideClock className="h-3 w-3 mr-1" />
              {quest.duration}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          {isQuestCompleted ? (
            <Badge variant="outline" className="w-full flex justify-center py-1 border-green-500 text-green-400">
              Completed
            </Badge>
          ) : (
            <Button 
              size="sm" 
              variant={canCompleteQuest ? "default" : "outline"} 
              disabled={!canCompleteQuest} 
              onClick={handleCompleteQuest}
              className="w-full"
            >
              {isQuestActive ? 'Complete Quest' : 'Start Quest'}
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className={`w-full border ${isQuestCompleted ? 'bg-gray-800/50 border-green-700/50' : 'border-gray-700'} hover:shadow-md transition-all duration-300`}>
      <CardHeader className="p-6 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {getQuestTypeIcon(quest.type)}
              <span className="text-sm text-gray-400">{quest.type} Quest</span>
            </div>
            <CardTitle className="text-xl font-bold">{quest.title}</CardTitle>
          </div>
          <Badge className={getDifficultyColor(quest.difficulty)}>
            {quest.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-4">
        {quest.imageUrl && (
          <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
            <Image
              src={quest.imageUrl}
              alt={quest.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <p className="text-gray-300 mb-4">{quest.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-1">Timeline</h4>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <LucideCalendar className="h-4 w-4 mr-1 text-gray-500" />
                <span>{quest.year}</span>
              </div>
              <div className="flex items-center">
                <LucideClock className="h-4 w-4 mr-1 text-gray-500" />
                <span>{quest.duration}</span>
              </div>
            </div>
          </div>
          
          {quest.companyName && (
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-1">Company</h4>
              <span>{quest.companyName}</span>
            </div>
          )}
        </div>
        
        <Separator className="my-4" />
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Requirements</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className={character.level >= quest.requiredLevel ? "border-green-500" : "border-red-500"}>
                Level {quest.requiredLevel}+
              </Badge>
              {quest.requiredSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className={character.skills.includes(skill) ? "border-green-500" : "border-red-500"}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Rewards</h4>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-600">
                {quest.rewards.exp} EXP
              </Badge>
              <Badge className="bg-amber-600">
                {quest.rewards.gold} Gold
              </Badge>
              {quest.rewards.skills && quest.rewards.skills.length > 0 && (
                <Badge className="bg-purple-600">
                  New Skills
                </Badge>
              )}
              {quest.rewards.items && quest.rewards.items.length > 0 && (
                <Badge className="bg-green-600">
                  Items
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {isQuestCompleted ? (
          <Badge variant="outline" className="w-full flex justify-center py-2 border-green-500 text-green-400">
            Completed
          </Badge>
        ) : (
          <Button 
            variant={canCompleteQuest ? "default" : "outline"} 
            disabled={!canCompleteQuest} 
            onClick={handleCompleteQuest}
            className="w-full"
          >
            {isQuestActive ? 'Complete Quest' : 'Start Quest'}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuestCard;