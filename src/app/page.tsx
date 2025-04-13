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
    <div>
      <main className="grid items-center w-[99vw] overflow-x-hidden justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <FloatingNav />
        <div
          className="w-[99vw] overflow-x-hidden bg-[linear-gradient(to_bottom,_white_0%,_#f5f5f5_50%,_white_100%)] dark:bg-[linear-gradient(to_bottom,_#0a0a0a_0%,_#1a1a1a_50%,_#0a0a0a_100%)]
"
        >
          <Hero />
          <Skills />
          <Experience />
          <Project />
          <Education />
          <Contact />
        </div>
      </main>
    </div>
  );
}
