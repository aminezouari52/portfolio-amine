"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/infinite-moving-cards";
import { motion } from "framer-motion";

import logoReact from "@/assets/skills/logo-react.svg";
import logoNode from "@/assets/skills/logo-node.svg";
import logoWebcomponents from "@/assets/skills/webcomponents.svg";
import next from "@/assets/skills/next.svg";
import nest from "@/assets/skills/nest.svg";
import ts from "@/assets/skills/ts.svg";

export default function Skills() {
  return (
    <div id="skills">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          What I do
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Tools I use & general skills I have.
        </p>
      </div>
      <div className="relative w-[96vw] max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <InfiniteMovingCards logos={testimonials} direction="right" />
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 align-center justify-between pt-20">
          <div className="flex flex-col align-center justify-center gap-2 w-full lg:w-[45%] text-lg text-gray-500 dark:text-gray-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi,{" "}
              <span className="font-semibold dark:text-white">I'm Amine!</span>{" "}
              A highly motivated JavaScript developer with{" "}
              <span className="font-semibold dark:text-white">
                over two years of experience
              </span>
              , I'm currently based in{" "}
              <span className="font-semibold dark:text-white">Tunisia.</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
            >
              I specialize in building scalable, high-performance, and
              user-friendly web applications.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
            >
              I have a strong grasp of fundamental programming concepts and
              modern web technologies, working extensively with{" "}
              <span className="font-semibold dark:text-white">
                JavaScript frameworks and tools.
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
            >
              I specialize in developing{" "}
              <span className="font-semibold dark:text-white">
                full stack web solutions
              </span>
              , creating seamless UI/UX experiences, and building efficient,
              well-structured APIs.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
            >
              In my free time, I'm always{" "}
              <span className="font-semibold dark:text-white">
                seeking continuous improvement
              </span>
              , whether it's participating in AI challenges, random hackathons,
              learning new technologies or building my own website portfolio.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
            >
              <span className="font-semibold dark:text-white">
                I love my craft
              </span>
              , passionate about my career, working hard every day to improve
              and achieve better things!
            </motion.div>
          </div>

          <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400 w-full lg:w-[45%]">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
            >
              <div className="font-semibold text-gray-900 dark:text-white mb-2">
                Web Development
              </div>
              <ul className="flex flex-col gap-1 list-none ml-0">
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    Solid experience in{" "}
                    <span className="text-black dark:text-gray-200">
                      front-end
                    </span>{" "}
                    and{" "}
                    <span className="text-black dark:text-gray-200">
                      back-end
                    </span>{" "}
                    development
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    Proficiency in vanilla{" "}
                    <span className="text-black dark:text-gray-200">
                      JavaScript.
                    </span>
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    Good understanding of{" "}
                    <span className="text-black dark:text-gray-200">
                      RESTful API
                    </span>{" "}
                    design principles.
                  </span>
                </motion.li>

                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    Skilled in{" "}
                    <span className="text-black dark:text-gray-200">
                      deploying
                    </span>{" "}
                    and managing web applications in production.
                  </span>
                </motion.li>
              </ul>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
            >
              <div className="font-semibold text-gray-900 dark:text-white mb-2">
                UI/UX Implementation
              </div>
              <ul className="flex flex-col gap-1 list-none ml-0">
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    Capable of converting Figma designs into{" "}
                    <span className="text-black dark:text-gray-200">
                      functional user interfaces
                    </span>
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    Proficient in modern{" "}
                    <span className="text-black dark:text-gray-200">
                      CSS libraries.
                    </span>
                  </span>
                </motion.li>
              </ul>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
            >
              <div className="font-semibold text-gray-900 dark:text-white mb-2">
                Design System
              </div>
              <ul className="flex flex-col gap-1 list-none ml-0">
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    Experienced in building{" "}
                    <span className="text-black dark:text-gray-200">
                      pixel-perfect
                    </span>
                    , scalable design systems.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    Focused on{" "}
                    <span className="text-black dark:text-gray-200">
                      web components
                    </span>
                    , style guidelines, and UI consistency.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    Ensures{" "}
                    <span className="text-black dark:text-gray-200">
                      accessibility
                    </span>
                    , responsiveness, and thorough testing.
                  </span>
                </motion.li>
              </ul>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
            >
              <div className="font-semibold text-gray-900 dark:text-white mb-2">
                Soft Skills
              </div>
              <ul className="flex flex-col gap-1 list-none ml-0">
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    Strong{" "}
                    <span className="text-black dark:text-gray-200">
                      problem-solving
                    </span>{" "}
                    skills and capable of working autonomously
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    <span className="text-black dark:text-gray-200">
                      Communicative
                    </span>{" "}
                    and takes responsibility for the product
                  </span>
                </motion.li>
              </ul>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
            >
              <div className="font-semibold text-gray-900 dark:text-white mb-2">
                Languages
              </div>
              <ul className="flex flex-col gap-1 list-none ml-0">
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    English:{" "}
                    <span className="text-black dark:text-gray-200">
                      Fluent - C2
                    </span>
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    French:{" "}
                    <span className="text-black dark:text-gray-200">
                      Advanced - C1
                    </span>
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    German:{" "}
                    <span className="text-black dark:text-gray-200">
                      Advanced - C1
                    </span>
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  // viewport={{ once: true }}
                >
                  <CheckIcon />
                  <span>
                    Arabic:{" "}
                    <span className="text-black dark:text-gray-200">
                      Native
                    </span>
                  </span>
                </motion.li>
              </ul>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const testimonials = [logoReact, logoNode, logoWebcomponents, next, nest, ts];

const CheckIcon = () => {
  return (
    <svg
      className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917 5.724 10.5 15 1.5"
      />
    </svg>
  );
};
