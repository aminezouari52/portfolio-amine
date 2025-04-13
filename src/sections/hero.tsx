"use client";

import React from "react";

import { ShootingStars } from "@/components/shooting-stars";
import { StarsBackground } from "@/components/stars-background";

import { CardBody, CardContainer, CardItem } from "@/components/3d-card";

import Image from "next/image";
import AminePP from "@/assets/amine-pp.png";
// import resume from "@/assets/resume.pdf";

export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row h-screen items-center justify-center overflow-hidden relative w-full gap-0 sm:gap-20 md:gap-30 lg:gap-40   p-8 sm:p-12 md:p-16 xl:p-24"
    >
      <h2 className=" relative z-20 text-2xl md:text-4xl xl:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Fullstack JavaScript Developer <br />
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent py-4 bg-gradient-to-r  from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">2+ years of experience</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">2+ years of experience</span>
          </div>
        </div>
      </h2>
      <div className="flex flex-col align-center justify-center gap-[50px] sm:gap-[40px] z-[50]">
        <h1
          className="bg-opacity-50 bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl xl:text-5xl"
          style={{ letterSpacing: "3px" }}
        >
          Amine Zouari
        </h1>
        <CardContainer className="hidden inter-var md:block">
          <CardBody className="hidden sm:block bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-800 dark:border-white/[0.1] border-black/[0.1] w-auto sm:w-[14rem] md:w-[18rem] xl:w-[24rem] h-auto rounded-full sm:p-2 md:p-6 border mx-auto">
            <CardItem translateZ="100" className="w-auto flex justify-center">
              <Image
                src={AminePP}
                height="500"
                width="500"
                className="sm:w-28 lg:w-full object-cover rounded-full group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <div className="flex flex-col sm:flex-row justify-between px-5">
          <ResumeButton
            text="Resume"
            href="https://github.com/aminezouari52/portfolio-amine/blob/master/public/resume.pdf"
            icon={<ResumeSvg />}
          />
          <GithubButton
            text="Github"
            href="https://github.com/aminezouari52"
            icon={<GithubSvg />}
          />
          <GithubButton
            text="LinkedIn"
            href="https://www.linkedin.com/in/amine-zouari52/"
            icon={<LinkedinSvg />}
          />
        </div>
      </div>
      <ShootingStars minDelay={400} maxDelay={700} />
      <StarsBackground />
    </div>
  );
}

const ResumeButton = ({ href, icon, text }: any) => {
  return (
    <a
      href={href}
      download
      className="flex gap-2 bg-black dark:bg-white text-sm rounded-md border border-black px-2 py-1 font-bold transform hover:-translate-y-1 transition duration-400"
    >
      <div className="h-5 w-5">{icon}</div>
      <div className="w-100 text-white dark:text-black">{text}</div>
    </a>
  );
};

const GithubButton = ({ href, icon, text }: any) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex gap-2 bg-black dark:bg-white text-sm rounded-md border border-black px-2 py-1 font-bold transform hover:-translate-y-1 transition duration-400"
    >
      <div className="h-5 w-5">{icon}</div>
      <div className="w-100 text-white dark:text-black">{text}</div>
    </a>
  );
};

const GithubSvg = () => (
  <svg
    className="w-5 h-5 text-[#fff] dark:text-[#000]"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinSvg = () => (
  <svg
    className="text-[#57a6f4] dark:text-[#0A66C2]"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill="currentColor"
        d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
      ></path>
    </g>
  </svg>
);

const ResumeSvg = () => (
  <svg
    className="text-[#fff] dark:text-[#000]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 12H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 8H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 16H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);
