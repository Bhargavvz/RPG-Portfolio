"use client";

import React from 'react';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useRpg } from '@/providers/rpg-provider';
import { LucideShield, LucideSword, LucideWand2, LucideFeather, LucideFlame, LucideBook } from 'lucide-react';

const getClassIcon = (className: string) => {
  switch (className) {
    case 'Wizard':
      return <LucideWand2 className="h-10 w-10 text-purple-400 animate-float" />;
    case 'Warrior':
      return <LucideSword className="h-10 w-10 text-red-400 animate-float" />;
    case 'Rogue':
      return <LucideFeather className="h-10 w-10 text-green-400 animate-float" />;
    default:
      return <LucideShield className="h-10 w-10 text-blue-400 animate-float" />;
  }
};

interface ProfileCardProps {
  expanded?: boolean;
}

const ProfileCard = ({ expanded = false }: ProfileCardProps) => {
  const { character } = useRpg();
  const { level, exp, expToNextLevel, stats, equipment, gold, class: characterClass } = character || {
    level: 1,
    exp: 0,
    expToNextLevel: 100,
    stats: {
      strength: 5,
      intelligence: 10,
      dexterity: 7,
      charisma: 6,
      wisdom: 8,
      constitution: 5,
    },
    equipment: {
      weapon: 'Starter Keyboard',
      armor: 'Casual Clothes',
      accessory: 'Basic Mouse',
    },
    gold: 50,
    class: 'Wizard' as const,
  };
  
  const expPercentage = (exp / expToNextLevel) * 100;
  
  return (
    <Card className="rpg-card overflow-visible">
      <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-amber-600 border-4 border-amber-800 flex items-center justify-center text-white font-bold shadow-lg transform rotate-12 z-10">
        {level}
      </div>
      <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center shadow-lg animate-pulse z-10">
        <LucideFlame className="h-4 w-4 text-amber-900" />
      </div>
      <CardHeader className="pb-2 border-b border-amber-900/30">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold text-amber-400 flex items-center">
            <span className="mr-1 text-white">The</span> Developer
          </CardTitle>
          <Badge className="bg-gradient-to-r from-amber-500 to-amber-700 border border-amber-900/50 shadow-inner">
            <span className="mr-1">⚔️</span> Level {level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {/* Avatar and Class */}
          <div className="flex items-center gap-4 mt-2">
            <div className="relative h-24 w-24 rounded-full border-4 border-amber-700 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-700/20"></div>
              {getClassIcon(characterClass)}
            </div>
            <div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">{characterClass}</h3>
              <p className="text-sm text-amber-200/70">Legendary Digital Adventurer</p>
              <div className="mt-2 flex items-center">
                <div className="flex items-center px-3 py-1 bg-amber-950/40 border border-amber-700/50 rounded-md">
                  <span className="text-yellow-500 mr-1 animate-pulse">✦</span>
                  <span className="text-amber-400 font-bold">{gold}</span>
                  <span className="text-amber-400 ml-1">gold</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Bar */}
          <div className="space-y-1 mt-2">
            <div className="flex justify-between text-sm">
              <span className="text-amber-200">EXPERIENCE</span>
              <span className="font-mono text-amber-300">{exp} / {expToNextLevel}</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full border border-amber-700/50 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-yellow-500 rounded-full"
                style={{ width: `${expPercentage}%` }}
              >
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_60%)]"></div>
              </div>
            </div>
          </div>

          <Separator className="bg-amber-900/30" />

          {/* Stats */}
          <div>
            <h3 className="font-bold mb-3 text-amber-400 flex items-center">
              <LucideShield className="h-5 w-5 mr-2" />
              Character Stats
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex justify-between items-center bg-gray-800/50 rounded-md p-2 border border-amber-900/30">
                <span className="text-red-400 font-bold">STR</span>
                <div className="flex items-center">
                  <span className="font-semibold bg-gray-900 px-2 py-1 rounded-md border border-red-900/50">{stats.strength}</span>
                </div>
              </div>
              <div className="flex justify-between items-center bg-gray-800/50 rounded-md p-2 border border-amber-900/30">
                <span className="text-blue-400 font-bold">INT</span>
                <div className="flex items-center">
                  <span className="font-semibold bg-gray-900 px-2 py-1 rounded-md border border-blue-900/50">{stats.intelligence}</span>
                </div>
              </div>
              <div className="flex justify-between items-center bg-gray-800/50 rounded-md p-2 border border-amber-900/30">
                <span className="text-green-400 font-bold">DEX</span>
                <div className="flex items-center">
                  <span className="font-semibold bg-gray-900 px-2 py-1 rounded-md border border-green-900/50">{stats.dexterity}</span>
                </div>
              </div>
              <div className="flex justify-between items-center bg-gray-800/50 rounded-md p-2 border border-amber-900/30">
                <span className="text-purple-400 font-bold">CHA</span>
                <div className="flex items-center">
                  <span className="font-semibold bg-gray-900 px-2 py-1 rounded-md border border-purple-900/50">{stats.charisma}</span>
                </div>
              </div>
              <div className="flex justify-between items-center bg-gray-800/50 rounded-md p-2 border border-amber-900/30">
                <span className="text-yellow-400 font-bold">WIS</span>
                <div className="flex items-center">
                  <span className="font-semibold bg-gray-900 px-2 py-1 rounded-md border border-yellow-900/50">{stats.wisdom}</span>
                </div>
              </div>
              <div className="flex justify-between items-center bg-gray-800/50 rounded-md p-2 border border-amber-900/30">
                <span className="text-orange-400 font-bold">CON</span>
                <div className="flex items-center">
                  <span className="font-semibold bg-gray-900 px-2 py-1 rounded-md border border-orange-900/50">{stats.constitution}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-amber-900/30" />

          {/* Equipment */}
          <div>
            <h3 className="font-bold mb-3 text-amber-400 flex items-center">
              <LucideSword className="h-5 w-5 mr-2" />
              Equipment
            </h3>
            <div className="space-y-3">
              <div className="flex items-center p-2 bg-gray-800/40 rounded-md border border-amber-900/30 hover:bg-gray-800/60 transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center mr-3 border border-red-700">
                  <LucideSword className="h-4 w-4 text-red-400" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-gray-400 block">Weapon</span>
                  <span className="font-semibold text-amber-200">{equipment.weapon}</span>
                </div>
              </div>
              <div className="flex items-center p-2 bg-gray-800/40 rounded-md border border-amber-900/30 hover:bg-gray-800/60 transition-colors">
                <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 border border-blue-700">
                  <LucideShield className="h-4 w-4 text-blue-400" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-gray-400 block">Armor</span>
                  <span className="font-semibold text-amber-200">{equipment.armor}</span>
                </div>
              </div>
              <div className="flex items-center p-2 bg-gray-800/40 rounded-md border border-amber-900/30 hover:bg-gray-800/60 transition-colors">
                <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center mr-3 border border-purple-700">
                  <LucideWand2 className="h-4 w-4 text-purple-400" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-gray-400 block">Accessory</span>
                  <span className="font-semibold text-amber-200">{equipment.accessory}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Extended Biography (Only shown when expanded is true) */}
          {expanded && (
            <>
              <Separator className="bg-amber-900/30 mt-4" />
              <div className="mt-4">
                <h3 className="font-bold mb-3 text-amber-400 flex items-center">
                  <LucideFeather className="h-5 w-5 mr-2" />
                  Character Background
                </h3>
                <div className="bg-gray-800/40 p-3 rounded-md border border-amber-900/30">
                  <p className="text-gray-300 mb-2">
                    A seeker of knowledge in the digital realms, this developer has mastered both the arcane arts of frontend sorcery and the sturdy craftsmanship of backend engineering.
                  </p>
                  <p className="text-gray-300">
                    Having completed numerous quests across diverse technological landscapes, they bring wisdom, skill, and a passion for elegant solutions to every challenge they face.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;