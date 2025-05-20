"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LucideFlame, 
  LucideSparkles, 
  LucideSwords, 
  LucideChevronDown,
  LucideShield,
  LucideWand2,
  LucideCode2,
  LucideBrain
} from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const HeroSection = ({
  title = "Bhargav Adepu - The Code Wizard",
  subtitle = "A Full Stack Developer crafting digital realms with React, Node.js, and AI. Transforming ideas into extraordinary web experiences.",
  ctaText = "Explore My Realm",
  ctaLink = "/about",
  secondaryCtaText = "View My Quests",
  secondaryCtaLink = "/quests"
}: HeroSectionProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated magic effects
  const FloatingRune = ({ children, delay = 0, x = 0, y = 0 }: { children: React.ReactNode; delay?: number; x?: number; y?: number }) => (
    <motion.div
      className="absolute text-amber-500/20 text-7xl font-medieval pointer-events-none"
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: [0.2, 0.4, 0.2],
        y: [y, y - 20, y],
        rotate: [0, 5, 0, -5, 0],
        scale: [0.9, 1.1, 0.9]
      }}
      transition={{ 
        delay,
        duration: 8, 
        repeat: Infinity,
        ease: "easeInOut" 
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/20 rounded-full filter blur-[100px] animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-600/20 rounded-full filter blur-[100px]" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[100px]" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>
      
      {/* Decorative Runes */}
      {mounted && (
        <>
          <FloatingRune delay={0} x={-300} y={-100}>⚡</FloatingRune>
          <FloatingRune delay={1.5} x={300} y={-150}>💻</FloatingRune>
          <FloatingRune delay={3} x={-250} y={150}>🧠</FloatingRune>
          <FloatingRune delay={4.5} x={350} y={100}>⚛</FloatingRune>
        </>
      )}
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="inline-block mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="px-4 py-1 bg-amber-900/40 border border-amber-600/50 rounded-full text-amber-300 text-sm font-medium tracking-wider uppercase">
            Level 25 Full Stack Developer
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link href={ctaLink}>
            <Button className="rpg-btn !px-8 !py-6 text-lg group relative flex items-center">
              <LucideCode2 className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              {ctaText}
              <div className="absolute inset-0 rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-300/30 to-amber-500/0 -translate-x-full animate-shimmer"></div>
              </div>
            </Button>
          </Link>
          <Link href={secondaryCtaLink}>
            <Button variant="outline" className="border-2 border-amber-600/50 bg-transparent hover:bg-amber-950/30 px-6 py-3 text-amber-300 hover:text-amber-200 transition-all">
              <LucideBrain className="mr-2 h-5 w-5" />
              {secondaryCtaText}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Right Side Character */}
      <motion.div 
        className="absolute bottom-0 right-10 hidden lg:block"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="relative w-28 h-64">
          <div className="absolute bottom-0 w-full h-5/6 flex flex-col items-center">
            {/* Character Body */}
            <div className="w-16 h-16 rounded-full bg-amber-900/50 border-2 border-amber-700 animate-float" style={{ animationDuration: '3s' }}>
              <div className="w-full h-full flex items-center justify-center">
                <LucideCode2 className="h-8 w-8 text-amber-500" />
              </div>
            </div>
            
            <div className="h-32 w-6 bg-gradient-to-b from-amber-700/80 to-amber-900/80 border-x border-amber-600/50"></div>
            
            <div className="w-20 flex">
              <div className="h-12 w-1/2 bg-gradient-to-b from-amber-700/80 to-amber-900/80 border border-amber-600/50 transform -rotate-12"></div>
              <div className="h-12 w-1/2 bg-gradient-to-b from-amber-700/80 to-amber-900/80 border border-amber-600/50 transform rotate-12"></div>
            </div>
            
            {/* Flame Effect */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 0.9, 1.05, 1],
                  rotate: [0, 2, -2, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <LucideBrain className="h-8 w-8 text-purple-500 filter drop-shadow-lg" />
              </motion.div>
            </div>
          </div>
          
          {/* Shadow */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-black/20 rounded-full filter blur-sm"></div>
        </div>
      </motion.div>
      
      {/* Left Side Character */}
      <motion.div 
        className="absolute bottom-0 left-10 hidden xl:block"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <div className="relative w-28 h-64">
          <div className="absolute bottom-0 w-full h-5/6 flex flex-col items-center">
            {/* Character Body */}
            <div className="w-16 h-16 rounded-full bg-blue-900/50 border-2 border-blue-700 animate-float" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
              <div className="w-full h-full flex items-center justify-center">
                <LucideBrain className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            
            <div className="h-32 w-6 bg-gradient-to-b from-blue-700/80 to-blue-900/80 border-x border-blue-600/50"></div>
            
            <div className="w-20 flex">
              <div className="h-12 w-1/2 bg-gradient-to-b from-blue-700/80 to-blue-900/80 border border-blue-600/50 transform -rotate-12"></div>
              <div className="h-12 w-1/2 bg-gradient-to-b from-blue-700/80 to-blue-900/80 border border-blue-600/50 transform rotate-12"></div>
            </div>
            
            {/* Flame Effect */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 0.9, 1.05, 1],
                  rotate: [0, -2, 2, -1, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <LucideCode2 className="h-8 w-8 text-red-500 filter drop-shadow-lg" />
              </motion.div>
            </div>
          </div>
          
          {/* Shadow */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-black/20 rounded-full filter blur-sm"></div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div 
          className="flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-14 border-2 border-amber-500/50 rounded-full flex justify-center pt-2 mb-2">
            <div className="w-1 h-3 bg-amber-500 rounded-full animate-pulse"></div>
          </div>
          <LucideChevronDown className="h-4 w-4 text-amber-500/70" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;