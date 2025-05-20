"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideSwords, LucideSparkles, LucideShield, LucideDiamond, LucideScroll } from 'lucide-react';

export interface LoadingScreenProps {
  isLoading: boolean;
  text?: string;
}

const LoadingScreen = ({ isLoading, text = "Loading next area..." }: LoadingScreenProps) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingTip, setLoadingTip] = useState<string>("");
  
  // RPG loading tips
  const loadingTips = [
    "Equip your best gear before challenging difficult dungeons",
    "Remember to save your progress regularly on your journey",
    "Some treasures are hidden in unexpected places",
    "Allies can provide valuable assistance in tough battles",
    "Ancient scrolls may contain forgotten knowledge",
    "Your skills improve as you use them more frequently",
    "The path of a hero is never easy, but always rewarding",
    "Darkness may hide danger or valuable treasures"
  ];
  
  useEffect(() => {
    if (!isLoading) {
      setLoadingProgress(0);
      return;
    }
    
    // Set random tip when loading starts
    setLoadingTip(loadingTips[Math.floor(Math.random() * loadingTips.length)]);
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const next = prev + Math.random() * 15;
        return next > 100 ? 100 : next;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, [isLoading]);
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-950/95 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Decorative runes */}
            <div className="absolute top-10 left-10 text-amber-600/20 text-6xl font-medieval rotate-12">⚔</div>
            <div className="absolute bottom-10 right-10 text-amber-600/20 text-6xl font-medieval -rotate-12">⛏</div>
            <div className="absolute top-10 right-10 text-amber-600/20 text-6xl font-medieval rotate-45">✧</div>
            <div className="absolute bottom-10 left-10 text-amber-600/20 text-6xl font-medieval -rotate-45">⚜</div>
          </div>
          
          <div className="max-w-md w-full px-8 py-10 relative">
            <motion.div
              className="absolute -top-12 left-1/2 -translate-x-1/2 text-amber-500 text-2xl font-medieval"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <LucideScroll className="h-8 w-8 mx-auto mb-2" />
            </motion.div>
            
            <div className="rpg-card border-2 border-amber-800/70 p-6 bg-gray-900/80 shadow-xl">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  {/* Center emblem */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="relative w-24 h-24 animate-magic-glow"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full"></div>
                    <div className="absolute inset-2 w-20 h-20 bg-gray-950 rounded-full border border-amber-700/50"></div>
                    <LucideSwords className="absolute inset-0 w-full h-full text-amber-500 p-4" />
                  </motion.div>
                  
                  {/* Orbiting elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <LucideSparkles className="h-6 w-6 text-amber-300" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                      <LucideShield className="h-6 w-6 text-blue-400" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: 180 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <motion.div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
                      <LucideDiamond className="h-6 w-6 text-purple-400" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-center text-amber-400 mb-6 font-title">{text}</h2>
              
              {/* Progress bar with decorative elements */}
              <div className="relative">
                <div className="absolute -left-2 -top-1 text-amber-500 text-xs">•</div>
                <div className="absolute -right-2 -top-1 text-amber-500 text-xs">•</div>
                <div className="w-full h-3 bg-gray-800/80 rounded-md overflow-hidden mb-3 border border-amber-900/50">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    className="h-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 relative"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_60%)] opacity-50"></div>
                  </motion.div>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-xs text-amber-200/70 font-medieval mb-6">
                <span className="bg-gray-800/50 px-2 py-1 rounded border border-amber-900/30">
                  Entering realm...
                </span>
                <span className="bg-gray-800/50 px-2 py-1 rounded border border-amber-900/30">
                  {Math.round(loadingProgress)}%
                </span>
              </div>
              
              {/* Loading tip */}
              <div className="mt-6 text-center text-sm text-amber-100/70 bg-gray-800/30 p-4 rounded-md border border-amber-900/30">
                <div className="flex items-center justify-center mb-2">
                  <LucideScroll className="h-4 w-4 text-amber-500 mr-2" />
                  <span className="text-amber-400 font-medium">Adventurer's Tip</span>
                </div>
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="font-body italic"
                >
                  "{loadingTip}"
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;