"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LucideHelpCircle, 
  LucideMessageCircle, 
  LucideX, 
  LucideCompass,
  LucideScroll,
  LucideTrophy,
  LucideSword,
  LucideSparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { useRpg } from '@/providers/rpg-provider';

const TIPS = [
  "Try exploring the quests section to find new challenges.",
  "Remember to check your skills to see what you've mastered.",
  "Your character levels up as you complete more quests and challenges.",
  "Click on any skill to see more details about your mastery.",
  "The timeline shows your journey through the digital realms.",
  "Achievements are unlocked by completing specific challenges.",
  "Some legendary quests may require multiple skills to complete."
];

const GREETINGS = [
  "Greetings, brave adventurer!",
  "Well met, fellow developer!",
  "Salutations, coding hero!",
  "Welcome back to your journey!",
  "Hail, traveler of the digital realm!"
];

interface CompanionMessage {
  id: number;
  text: string;
  type: 'system' | 'user';
}

export const GuideCompanion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<CompanionMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentTip, setCurrentTip] = useState(0);
  const pathname = usePathname();
  const { character } = useRpg();
  
  // Initialize with a greeting
  useEffect(() => {
    const randomGreeting = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
    setMessages([
      { 
        id: Date.now(), 
        text: randomGreeting, 
        type: 'system' 
      }
    ]);
  }, []);

  // Change tips every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % TIPS.length);
    }, 20000);
    
    return () => clearInterval(interval);
  }, []);

  // Context-aware companion reactions
  useEffect(() => {
    if (pathname === '/quests') {
      addSystemMessage("I see you're exploring quests! Each quest represents a project or challenge in your journey.");
    } else if (pathname === '/skills') {
      addSystemMessage("Ah, examining your skills? These represent your technical abilities and knowledge domains.");
    } else if (pathname === '/achievements') {
      addSystemMessage("Achievements showcase your milestones and special accomplishments. Quite impressive!");
    } else if (pathname === '/timeline') {
      addSystemMessage("The timeline chronicles your adventure through the realms of development. What a journey!");
    }
  }, [pathname]);

  const addSystemMessage = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now(), text, type: 'system' }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: inputValue, type: 'user' }]);
    
    // Simple responses based on keywords
    setTimeout(() => {
      let response = "I'm not sure I understand. Try asking about quests, skills, or achievements!";
      
      const input = inputValue.toLowerCase();
      
      if (input.includes('quest') || input.includes('project')) {
        response = "Quests represent projects you've worked on. Each quest tests different skills and rewards you with experience!";
      } else if (input.includes('skill') || input.includes('ability')) {
        response = `You currently have ${character.skills.length} skills in your arsenal. Keep completing quests to unlock more!`;
      } else if (input.includes('level') || input.includes('experience')) {
        response = `You're currently level ${character.level} with ${character.exp}/${character.expToNextLevel} experience points. Keep going!`;
      } else if (input.includes('achievement') || input.includes('trophy')) {
        response = `Achievements are special recognitions of your accomplishments. They're like badges of honor in your journey!`;
      } else if (input.includes('help') || input.includes('guide')) {
        response = "I'm your guide on this adventure! I can help you navigate the site and understand your character stats.";
      } else if (input.includes('gold') || input.includes('money')) {
        response = `You currently have ${character.gold} gold pieces. You earn gold by completing quests and achievements!`;
      } else if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
        response = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
      }
      
      addSystemMessage(response);
    }, 600);
    
    setInputValue('');
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="relative"
            >
              <Button 
                onClick={() => setIsOpen(true)}
                className="h-14 w-14 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 border-2 border-amber-800 shadow-lg hover:shadow-amber-600/20 p-0"
              >
                <LucideMessageCircle className="h-6 w-6 text-white" />
              </Button>
              
              {/* Floating tip */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-16 right-0 w-64 p-3 bg-black/90 border border-amber-700 rounded-lg text-white text-sm shadow-lg"
              >
                <div className="flex items-start space-x-2">
                  <LucideSparkles className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                  <p>{TIPS[currentTip]}</p>
                </div>
                <div className="absolute -bottom-2 right-5 w-4 h-4 bg-black/90 border-r border-b border-amber-700 transform rotate-45"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Companion dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 w-80 h-96 bg-gray-950 border-2 border-amber-700 rounded-lg shadow-2xl shadow-amber-900/20 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-3 border-b border-amber-800/50 bg-gradient-to-r from-amber-900 to-amber-950 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center mr-2">
                  <LucideCompass className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-white font-bold">Adventure Guide</h3>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 hover:bg-amber-800/20 text-amber-300"
              >
                <LucideX className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3 bg-gradient-to-b from-gray-950 to-gray-900">
              {messages.map(message => (
                <div 
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-amber-700 text-white' 
                      : 'bg-gray-800 border border-amber-700/30 text-amber-100'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-amber-800/30 bg-gray-900 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask your guide..."
                className="flex-1 bg-gray-800 border border-amber-700/30 rounded-md px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <Button 
                type="submit"
                size="icon"
                className="h-9 w-9 bg-amber-700 hover:bg-amber-600 text-white rounded-md"
              >
                <LucideScroll className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GuideCompanion;