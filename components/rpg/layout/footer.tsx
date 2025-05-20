"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  LucideGithub,
  LucideLinkedin,
  LucideTwitter,
  LucideMail,
  LucideScrollText
} from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/bhargavvz', icon: LucideGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/bhargavadepu', icon: LucideLinkedin },
  { name: 'Twitter', href: 'https://twitter.com/AVSBhar', icon: LucideTwitter },
  { name: 'Email', href: 'mailto:adepuvaatsavasribhargav@gmail.com', icon: LucideMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-cinzel text-lg font-bold">Bhargav Adepu</h3>
            <p className="text-sm text-muted-foreground">
              Embark on a legendary journey through my interactive RPG-themed portfolio.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/skills" className="text-sm text-muted-foreground hover:text-primary">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/quests" className="text-sm text-muted-foreground hover:text-primary">
                  Quests
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-sm text-muted-foreground hover:text-primary">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-sm text-muted-foreground hover:text-primary">
                  Timeline
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive updates on new quests and achievements.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Bhargav Adepu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 