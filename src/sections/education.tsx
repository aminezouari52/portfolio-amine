"use client";

import React from "react";

import { BadgeCheck, GraduationCap } from "lucide-react";
import { GlowingEffect } from "@/components/glowing-effect";
export default function Education() {
  return (
    <div id="education" className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Education & Certifications
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base ">
          Academic Background and Professional Qualifications
        </p>
      </div>
      <div className="relative max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <ul className="grid grid-cols-1 md:grid-rows-3 xl:grid-rows-1 xl:grid-cols-3 gap-4">
          <GridItem
            icon={
              <GraduationCap className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Computer Science Engineer's degree"
            description="Ecole Polytechnique Sousse"
            date="September 2023 - Juin 2026"
          />

          <GridItem
            icon={
              <GraduationCap className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Computer Science Bachelor's degree"
            description="École supérieure des sciences et de la technologie de Hammam Sousse"
            date="September 2020 - Juin 2023"
          />

          <GridItem
            icon={
              <BadgeCheck className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="German Certification C1"
            description="Germany, Bildungsverein Soziales Lernen und Kommunikation e.V. Hannover"
            date="March 2019"
            result="TestDaF 3"
          />
        </ul>
      </div>
    </div>
  );
}

interface GridItemProps {
  area?: string;
  icon: React.ReactNode;
  title: string;
  date: string;
  description: React.ReactNode;
  result?: string;
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  date,
  result,
}: GridItemProps) => {
  return (
    <li className={`min-h-[12rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative  flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative  flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h6 className="text-gray-400">{result}</h6>
              <div className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500">
                {date}
              </div>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
                md:text-base/[1.375rem]  text-black dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
