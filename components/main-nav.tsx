"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LucideHome, 
  LucideSword, 
  LucideBook, 
  LucideTrophy, 
  LucideClock,
  LucideMenu,
  LucideX,
  LucideScroll,
  LucideFlame,
  LucideUser,
  LucideMessageCircle
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';

export function MainNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const routes = [
    {
      href: '/',
      label: 'Start Journey',
      icon: <LucideHome className="h-5 w-5 mr-2 text-amber-500" />,
      active: pathname === '/',
      description: "Begin your adventure",
    },
    {
      href: '/about',
      label: 'Hero\'s Origin',
      icon: <LucideUser className="h-5 w-5 mr-2 text-purple-500" />,
      active: pathname === '/about',
      description: "Your background story",
    },
    {
      href: '/skills',
      label: 'Armory',
      icon: <LucideBook className="h-5 w-5 mr-2 text-blue-500" />,
      active: pathname === '/skills',
      description: "Master your abilities",
    },
    {
      href: '/quests',
      label: 'Quests',
      icon: <LucideSword className="h-5 w-5 mr-2 text-red-500" />,
      active: pathname === '/quests',
      description: "Heroic accomplishments",
    },
    {
      href: '/achievements',
      label: 'Treasure',
      icon: <LucideTrophy className="h-5 w-5 mr-2 text-yellow-500" />,
      active: pathname === '/achievements',
      description: "Rewards unlocked",
    },
    {
      href: '/timeline',
      label: 'Chronicle',
      icon: <LucideScroll className="h-5 w-5 mr-2 text-emerald-500" />,
      active: pathname === '/timeline',
      description: "The epic story",
    },
    {
      href: '/contact',
      label: 'Summon',
      icon: <LucideMessageCircle className="h-5 w-5 mr-2 text-green-500" />,
      active: pathname === '/contact',
      description: "Message the oracle",
    },
  ];

  return (
    <div className={cn(
      "border-b border-amber-800/30 fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? 
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg" : 
        "bg-transparent"
    )}>
      <div className="flex h-20 items-center px-4 max-w-7xl mx-auto">
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {routes.map((route) => (
            <div key={route.href} className="group relative">
              <Button
                variant={route.active ? "default" : "ghost"}
                asChild
                className={cn(
                  "text-md transition-all duration-300 hover-float",
                  route.active ? 
                    "bg-gradient-to-b from-amber-500/80 to-amber-700/80 border border-amber-600 text-white" : 
                    "hover:bg-amber-500/10"
                )}
              >
                <Link href={route.href} className="flex items-center px-4 py-2">
                  <div className={cn(
                    "absolute -left-1 -top-1 w-3 h-3 rounded-full transition-all duration-300",
                    route.active ? "bg-amber-500 animate-pulse" : "bg-transparent group-hover:bg-amber-500/50"
                  )} />
                  {route.icon}
                  {route.label}
                </Link>
              </Button>
              
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/80 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
                  {route.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="rpg-btn">
                <LucideMenu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px] border-r-4 border-amber-800 bg-gradient-to-b from-gray-900 to-gray-950">
              <div className="flex flex-col gap-6 py-6">
                {routes.map((route) => (
                  <SheetClose asChild key={route.href}>
                    <Button
                      variant="ghost"
                      asChild
                      className={cn(
                        "justify-start h-14 overflow-hidden transition-all",
                        route.active ? 
                          "bg-gradient-to-r from-amber-800/50 to-transparent border-l-4 border-amber-500 pl-4" : 
                          "hover:bg-amber-700/10 hover:border-l-4 hover:border-amber-500/50 hover:pl-4"
                      )}
                    >
                      <Link href={route.href} className="flex items-center">
                        <div className="mr-4 p-2 rounded-full bg-gray-800">
                          {route.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold">{route.label}</span>
                          <span className="text-xs text-gray-400">{route.description}</span>
                        </div>
                      </Link>
                    </Button>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="mx-auto md:mx-0 flex-1 md:flex-none">
          <div className="flex items-center">
            <LucideFlame className="h-6 w-6 text-amber-500 mr-2 animate-pulse" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Bhargav Adepu
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}