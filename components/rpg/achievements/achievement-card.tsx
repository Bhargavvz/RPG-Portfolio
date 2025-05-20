"use client";

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Achievement } from '@/lib/data/achievements-data';
import { useRpg } from '@/providers/rpg-provider';
import { LucideAward, LucideTrophy, LucideGraduationCap, LucideBriefcase, LucideCode, LucideHeart } from 'lucide-react';

interface AchievementCardProps {
  achievement: Achievement;
  compact?: boolean;
}

const AchievementCard = ({ achievement, compact = false }: AchievementCardProps) => {
  const { character, unlockAchievement } = useRpg();
  
  const isUnlocked = character.achievements.includes(achievement.id);
  
  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'Career':
        return <LucideBriefcase className={`h-6 w-6 ${isUnlocked ? 'text-blue-400' : 'text-gray-500'}`} />;
      case 'Technical':
        return <LucideCode className={`h-6 w-6 ${isUnlocked ? 'text-purple-400' : 'text-gray-500'}`} />;
      case 'Education':
        return <LucideGraduationCap className={`h-6 w-6 ${isUnlocked ? 'text-green-400' : 'text-gray-500'}`} />;
      case 'Recognition':
        return <LucideTrophy className={`h-6 w-6 ${isUnlocked ? 'text-yellow-400' : 'text-gray-500'}`} />;
      case 'Personal':
        return <LucideHeart className={`h-6 w-6 ${isUnlocked ? 'text-red-400' : 'text-gray-500'}`} />;
      default:
        return <LucideAward className={`h-6 w-6 ${isUnlocked ? 'text-blue-400' : 'text-gray-500'}`} />;
    }
  };
  
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common':
        return 'bg-gray-500 hover:bg-gray-600';
      case 'Uncommon':
        return 'bg-green-500 hover:bg-green-600';
      case 'Rare':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'Epic':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'Legendary':
        return 'bg-amber-500 hover:bg-amber-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };
  
  const handleUnlock = () => {
    if (!isUnlocked) {
      unlockAchievement(achievement.id);
    }
  };

  if (compact) {
    return (
      <Card className={`w-full border hover:shadow-md transition-all duration-300 ${isUnlocked ? 'border-primary/40 bg-primary/5' : 'border-gray-700 opacity-70'}`}>
        <CardHeader className="p-4 pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {getAchievementIcon(achievement.type)}
              <CardTitle className="text-md">{achievement.title}</CardTitle>
            </div>
            <Badge className={getRarityColor(achievement.rarity)}>
              {achievement.rarity}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="px-4 pt-0 pb-2">
          <div className="text-sm text-gray-400">{achievement.year}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`w-full border hover:shadow-md transition-all duration-300 ${isUnlocked ? 'border-primary/40 bg-primary/5' : 'border-gray-700 opacity-70'}`}>
      <CardHeader className="p-6 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getAchievementIcon(achievement.type)}
            <div>
              <div className="text-sm text-gray-400 mb-1">{achievement.type}</div>
              <CardTitle className="text-xl">{achievement.title}</CardTitle>
            </div>
          </div>
          <Badge className={getRarityColor(achievement.rarity)}>
            {achievement.rarity}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-4">
        <p className="text-gray-300 mb-3">{achievement.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{achievement.year}</Badge>
            <Badge variant="outline" className="bg-blue-900/30 border-blue-700/50">
              +{achievement.expReward} EXP
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-2">
        {isUnlocked ? (
          <Badge className="w-full flex justify-center py-2 bg-primary/20 text-primary border border-primary/30">
            Unlocked
          </Badge>
        ) : (
          <Button
            variant="outline"
            className="w-full"
            onClick={handleUnlock}
          >
            Unlock Achievement
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default AchievementCard;