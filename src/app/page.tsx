"use client";

import React from "react";
import { FloatingNav } from "@/components/floating-navbar";
import { ModalProvider } from "@/components/animated-modal";
import Hero from "@/sections/hero";
import Experience from "@/sections/experience";
import Education from "@/sections/education";
import Project from "@/sections/project";
export default function Home() {
  return (
    <div>
      <main className="grid items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
        <FloatingNav />
        <Hero />
        <ModalProvider>
          <div className="w-full bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800">
            <Experience />
            <Education />
            <Project />
          </div>
        </ModalProvider>
      </main>
    </div>
  );
}
