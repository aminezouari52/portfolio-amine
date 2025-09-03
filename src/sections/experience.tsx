import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/timeline";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/link-preview";

export default function Experience() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-8">
            <div className="flex gap-2 text-2xl relative z-[200]">
              <span>Frontend Developer</span> @{" "}
              <LinkPreview
                url="https://se.com/"
                className="flex align-center gap-3"
              >
                <span
                  className="font-bold bg-gradient-to-r from-[#008C44] to-[#6DBE45]
 text-transparent bg-clip-text"
                >
                  Schneider Electric
                </span>
              </LinkPreview>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              {[
                "TypeScript",
                "CSS",
                "Web Components",
                "StencilJS",
                "Storybook",
                "Github Actions",
                "DOM",
              ].map((skill: string) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
          <ul className="space-y-1 list-disc list-inside">
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Set Up a Monorepo for a Design System
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Established a scalable monorepo with Yarn and Turborepo,
                integrating a components library, Storybook, and both SvelteKit
                and Next.js applications.
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Built Scalable Web Components with StencilJS
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Developed complex, reusable web components with StencilJS,
                ensuring UI consistency, accessibility (WCAG compliance), and
                server-side rendering (SSR).
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Optimized Component Performance
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Enhanced SSR hydration, reduced bundle sizes, and optimized
                performance by integrating lazy loading techniques.
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Developed a Themeable Design System
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Engineered theming using CSS variables, design tokens, and
                component theming across multiple projects.
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Implemented Robust Testing Strategies
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Executed a robust testing strategy, including unit tests,
                snapshots end-to-end testing, and visual regression testing with
                Playwright, chromatic and storybook.
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Created Developer Documentation
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Maintained documentation with Docusaurus and Storybook,
                improving developer onboarding and adoption of the design
                system.
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Collaborated in Agile Teams
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Collaborated with project managers, developers, designers, and
                testers using Agile (SCRUM), Jira, and Figma to align goals and
                requirements.
              </motion.div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-8">
            <div className="flex gap-2 text-2xl relative z-[200]">
              <span>Full Stack JavaScript Developer </span> @{" "}
              <LinkPreview
                url="https://www.linkedin.com/company/pixelium-tech/"
                className="flex align-center gap-3"
              >
                <span className="font-bold bg-gradient-to-r from-[#3A7EED] to-[#A158F7] text-transparent bg-clip-text">
                  Pixelium
                </span>
              </LinkPreview>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              {[
                "TypeScript",
                "NextJS",
                "ReactJS",
                "Bootstrap 5",
                "Tabler.io",
                "Redux Toolkit",
                "NodeJS",
                "FastifyJS",
                "MongoDB",
              ].map((skill: string) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          <ul className="space-y-1 list-disc list-inside">
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Took full project ownership
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Led end-to-end development, including business decision-making,
                project planning, client meetings, and final delivery.
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Crafting Engaging Frontends
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Designed dynamic, responsive user interfaces using React,
                Bootstrap 5, and Tabler, integrating UI designs from Figma
                prototypes.
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Engineering Robust Backends
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Built and optimized server-side logic with Node.js, ensuring
                efficient data handling and seamless API integration with
                Mongoose and Fastify.
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Handling Complex Data Operations
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Developed advanced CRUD functionalities and complex forms,
                including image uploads.
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Automating Tasks & Notifications
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Leveraged Cronicle for multi-server task execution and automated
                user alerts, ensuring timely updates and seamless operations.
              </motion.div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-8">
            <div className="flex gap-2 text-2xl relative z-[200]">
              <span>Web Developer Intern </span> @{" "}
              <LinkPreview
                url="https://www.proxym-group.com/"
                className="flex align-center gap-3"
              >
                <span className="font-bold bg-gradient-to-r from-[#D946EF] to-[#9333EA] text-transparent bg-clip-text">
                  Proxym
                </span>
              </LinkPreview>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              {[
                "TypeScript",
                "ReactJS",
                "ChakraUI",
                "RTK Query",
                "SQL",
                "PostgresSQL",
                "NestJS",
                "PrismaORM",
              ].map((skill: string) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          <ul className="space-y-1 list-disc list-inside">
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Developed functional user interfaces
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Built responsive user interfaces using React to deliver seamless
                and high-performance user experiences.
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Secured Authentication with JWT
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Integrated JSON Web Tokens (JWT) for secure user authentication
                and role-based access control, strengthening data security and
                user access management.
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Created Backend Architecture
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Built scalable server-side logic using PrismaORM, PostgreSQL,
                Node.js, and NestJS, optimizing database schemas and data
                workflows for high performance.
              </motion.div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="mb-8">
            <div className="flex gap-2 text-2xl relative z-[200]">
              <span>Frontend Developer Intern </span> @{" "}
              <LinkPreview
                url="https://www.proxym-group.com/"
                className="flex align-center gap-3"
              >
                <span className="font-bold bg-gradient-to-r from-[#D946EF] to-[#9333EA] text-transparent bg-clip-text">
                  Proxym
                </span>
              </LinkPreview>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              {[
                "JavaScript",
                "ReactJS",
                "ElectronJS",
                "Material UI",
                "RestAPI",
              ].map((skill: string) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          <ul className="space-y-1 list-disc list-inside">
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Learned the basics of ElectronJS
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Learned ElectronJS, including main/renderer processes and IPC
                communication, and built a simple desktop app prototype.
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block pl-3 text-xl font-semibold text-gray-800 dark:text-gray-200"
              >
                Consumed Redmine API
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pl-6 text-gray-600 dark:text-gray-400 mt-1"
              >
                Designed and developed an app that integrates with the Redmine
                API to manage tasks, improving team productivity.
              </motion.div>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div id="career" className="w-full">
      <Timeline data={data} />
    </div>
  );
}

const SkillBadge = ({ skill }: { skill: string }) => (
  <HoverBorderGradient
    containerClassName="rounded-full"
    as="div"
    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-base"
  >
    <span>{skill}</span>
  </HoverBorderGradient>
);
