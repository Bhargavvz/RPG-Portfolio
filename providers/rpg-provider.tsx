"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

// Types
export type CharacterClass = 'Wizard' | 'Warrior' | 'Rogue' | 'Bard';

export interface Character {
  name: string;
  level: number;
  exp: number;
  expToNextLevel: number;
  class: CharacterClass;
  stats: {
    strength: number;
    intelligence: number;
    dexterity: number;
    charisma: number;
    wisdom: number;
    constitution: number;
  };
  skills: string[];
  equipment: {
    weapon: string;
    armor: string;
    accessory: string;
  };
  gold: number;
  quests: {
    completed: string[];
    active: string[];
  };
  achievements: string[];
}

export interface RpgContextType {
  character: Character;
  timelineYear: number;
  setTimelineYear: (year: number) => void;
  gainExp: (amount: number) => void;
  completeQuest: (questId: string) => void;
  unlockAchievement: (achievementId: string) => void;
  learnSkill: (skillId: string) => void;
}

// Initial character state
const initialCharacter: Character = {
  name: 'Developer',
  level: 1,
  exp: 0,
  expToNextLevel: 100,
  class: 'Wizard',
  stats: {
    strength: 5,
    intelligence: 10,
    dexterity: 7,
    charisma: 6,
    wisdom: 8,
    constitution: 5,
  },
  skills: ['html', 'css'],
  equipment: {
    weapon: 'Starter Keyboard',
    armor: 'Casual Clothes',
    accessory: 'Basic Mouse',
  },
  gold: 50,
  quests: {
    completed: [],
    active: ['first-website'],
  },
  achievements: [],
};

// Create context
const RpgContext = createContext<RpgContextType | undefined>(undefined);

export const RpgProvider = ({ children }: { children: React.ReactNode }) => {
  const { toast } = useToast();
  const [character, setCharacter] = useState<Character>(initialCharacter);
  const [timelineYear, setTimelineYear] = useState<number>(2023);

  // Load character from localStorage if available
  useEffect(() => {
    const savedCharacter = localStorage.getItem('rpg-character');
    if (savedCharacter) {
      setCharacter(JSON.parse(savedCharacter));
    }
  }, []);

  // Save character to localStorage when updated
  useEffect(() => {
    localStorage.setItem('rpg-character', JSON.stringify(character));
  }, [character]);

  // Level up function
  const levelUp = () => {
    setCharacter((prev) => {
      const newLevel = prev.level + 1;
      const newExpToNextLevel = prev.expToNextLevel * 1.5;
      
      toast({
        title: "Level Up!",
        description: `You've reached level ${newLevel}!`,
        variant: "default",
      });
      
      return {
        ...prev,
        level: newLevel,
        expToNextLevel: newExpToNextLevel,
        stats: {
          strength: prev.stats.strength + 1,
          intelligence: prev.stats.intelligence + 2,
          dexterity: prev.stats.dexterity + 1,
          charisma: prev.stats.charisma + 1,
          wisdom: prev.stats.wisdom + 2,
          constitution: prev.stats.constitution + 1,
        },
      };
    });
  };

  // Gain experience
  const gainExp = (amount: number) => {
    setCharacter((prev) => {
      const newExp = prev.exp + amount;
      
      // Check if should level up
      if (newExp >= prev.expToNextLevel) {
        setTimeout(() => levelUp(), 500);
        return {
          ...prev,
          exp: newExp - prev.expToNextLevel,
        };
      }
      
      return {
        ...prev,
        exp: newExp,
      };
    });
  };

  // Complete quest
  const completeQuest = (questId: string) => {
    setCharacter((prev) => {
      if (prev.quests.completed.includes(questId)) return prev;
      
      // Remove from active quests if it's there
      const newActive = prev.quests.active.filter(id => id !== questId);
      
      toast({
        title: "Quest Completed!",
        description: `You've completed a new quest!`,
        variant: "default",
      });
      
      return {
        ...prev,
        quests: {
          active: newActive,
          completed: [...prev.quests.completed, questId],
        },
        gold: prev.gold + 50, // Reward for completing quest
      };
    });
    
    gainExp(50); // Gain experience for completing a quest
  };

  // Unlock achievement
  const unlockAchievement = (achievementId: string) => {
    setCharacter((prev) => {
      if (prev.achievements.includes(achievementId)) return prev;
      
      toast({
        title: "Achievement Unlocked!",
        description: `You've unlocked a new achievement!`,
        variant: "default",
      });
      
      return {
        ...prev,
        achievements: [...prev.achievements, achievementId],
      };
    });
    
    gainExp(30); // Gain experience for unlocking an achievement
  };

  // Learn skill
  const learnSkill = (skillId: string) => {
    setCharacter((prev) => {
      if (prev.skills.includes(skillId)) return prev;
      
      toast({
        title: "Skill Learned!",
        description: `You've learned a new skill!`,
        variant: "default",
      });
      
      return {
        ...prev,
        skills: [...prev.skills, skillId],
      };
    });
    
    gainExp(40); // Gain experience for learning a skill
  };

  const value = {
    character,
    timelineYear,
    setTimelineYear,
    gainExp,
    completeQuest,
    unlockAchievement,
    learnSkill,
  };

  return <RpgContext.Provider value={value}>{children}</RpgContext.Provider>;
};

// Custom hook to use the RPG context
export const useRpg = () => {
  const context = useContext(RpgContext);
  if (context === undefined) {
    throw new Error('useRpg must be used within a RpgProvider');
  }
  return context;
};