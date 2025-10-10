"use client";

import { createContext, useContext, useRef, RefObject } from 'react';

interface ScrollContextType {
  collectionsGridRef: RefObject<HTMLElement | null>;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const collectionsGridRef = useRef<HTMLElement | null>(null);

  return (
    <ScrollContext.Provider value={{ collectionsGridRef }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
}
