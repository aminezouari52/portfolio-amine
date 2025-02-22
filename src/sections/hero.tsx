"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { BackgroundBeams } from "@/components/background-beams";

import Image from "next/image";
import Link from "next/link";
import AminePP from "@/assets/amine-pp.png";

export default function Hero() {
  return (
    <BackgroundBeams className="flex h-screen sm:gap-20 md:gap-30 lg:gap-40 justify-around w-full p-8 sm:p-12 md:p-16 xl:p-24">
      <h2 className="text-2xl relative z-20 md:text-4xl xl:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Fullstack JavaScript Developer <br />
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">2+ years of experience</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">2+ years of experience</span>
          </div>
        </div>
      </h2>
      <CardContainer className="inter-var">
        <CardBody className="hidden sm:block bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[14rem] md:w-[18rem] xl:w-[24rem] h-auto rounded-xl sm:p-2 md:p-6 border mx-auto">
          <CardItem
            translateZ="50"
            className="md:text-xl font-bold text-neutral-600 dark:text-white text-center"
          >
            Amine Zouari
          </CardItem>
          <CardItem
            translateZ="100"
            className="w-auto mt-4 flex justify-center"
          >
            <Image
              src={AminePP}
              height="500"
              width="500"
              className="sm:w-28 md:w-full object-cover rounded-full group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center sm:mt-2 md:mt-5">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="sm:px-2 sm:py-1 md:px-4 md:py-2 rounded-xl text-xs font-normal dark:text-white border dark:border-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="sm:px-2 sm:py-1 md:px-4 md:py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Shop now!
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </BackgroundBeams>
  );
}
