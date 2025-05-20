"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingScreen from '@/components/rpg/loading-screen';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track route changes to show loading state
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = () => {
      // Add a small delay to make the transition feel more natural
      timeout = setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Clean up the timeout
    return () => {
      clearTimeout(timeout);
    };
  }, [pathname, searchParams]);

  // Force loading to finish if still loading after 5 seconds
  useEffect(() => {
    if (!isLoading) return;
    
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, [isLoading]);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      <LoadingScreen isLoading={isLoading} />
      {children}
    </LoadingContext.Provider>
  );
}