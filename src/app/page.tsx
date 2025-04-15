"use client";

import React from "react";
import { FloatingNav } from "@/components/floating-navbar";
import Hero from "@/sections/hero";
import Experience from "@/sections/experience";
import Education from "@/sections/education";
import Project from "@/sections/project";
import Skills from "@/sections/skills";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <FloatingNav />
      <div className="bg-[linear-gradient(to_bottom,_white_0%,_#f5f5f5_50%,_white_100%)] dark:bg-[linear-gradient(to_bottom,_#0a0a0a_0%,_#1a1a1a_50%,_#0a0a0a_100%)] w-full">
        <Hero />
        <Skills />
        <Experience />
        <Project />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
