import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/timeline";
import { HoverBorderGradient } from "@/components/hover-border-gradient";

const dataContent = [
  {
    year: "2024 - current",
    content: {
      title: "Design System Developer",
      company: "Schneider Electric",
      skills: [
        "TypeScript",
        "CSS",
        "Web Components",
        "StencilJS",
        "Storybook",
        "Github Actions",
      ],
      tasks: [
        {
          title: "Set Up a Monorepo for a Design System",
          description: `Established a scalable monorepo with Yarn and Turborepo,
                    integrating a components library, Storybook, and both
                    SvelteKit and Next.js applications.`,
        },
        {
          title: "Built Scalable Web Components with StencilJS",
          description: `Developed complex, reusable web components with StencilJS, ensuring UI consistency, accessibility (WCAG compliance), and server-side rendering (SSR) for high-performance web applications.`,
        },
        {
          title: "Optimized Component Performance",
          description: `Enhanced SSR hydration, reduced bundle sizes, and implemented lazy loading to improve load times and efficiency.`,
        },
        {
          title: "Developed a Themeable Design System",
          description: `Implemented CSS variables, design tokens, and component theming for flexible styling across multiple projects.`,
        },
        {
          title: "Implemented Robust Testing Strategies",
          description: `Implemented a robust testing strategy, including unit tests, snapshots end-to-end testing, and visual regression testing with Playwright, chromatic and storybook.`,
        },
        {
          title: "Created Developer Documentation",
          description: `Maintained documentation with Docusaurus and Storybook, improving developer onboarding and adoption of the design system.`,
        },
        {
          title: "Collaborated in Agile Teams",
          description: `Worked with project managers, and developers, designers, testers using Agile (SCRUM), Jira, and Figma to align goals and requirements.`,
        },
        {
          title: "Mentored and Reviewed Code",
          description: `Provided technical guidance, conducted reviews, and shared best practices to elevate code quality and maintainability.`,
        },
      ],
      images: [],
    },
  },
  {
    year: "2023 - 2024",
    content: {
      title: "",
      company: "",
      skills: [""],
      tasks: [
        {
          title: "",
          description: ``,
        },
      ],
      images: [],
    },
  },
  {
    year: "",
    content: {
      title: "",
      company: "",
      skills: [""],
      tasks: [
        {
          title: "",
          description: ``,
        },
      ],
      images: [],
    },
  },
  {
    year: "",
    content: {
      title: "",
      company: "",
      skills: [""],
      tasks: [
        {
          title: "",
          description: ``,
        },
      ],
      images: [],
    },
  },
];

export default function Experience() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-8">
            <div className="text-2xl">
              <span>Design System Developer</span> @{" "}
              <span className="font-bold bg-gradient-to-r from-[#3A7EED] to-[#A158F7] text-transparent bg-clip-text">
                Schneider Electric
              </span>
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
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Set Up a Monorepo for a Design System
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Established a scalable monorepo with Yarn and Turborepo,
                integrating a components library, Storybook, and both SvelteKit
                and Next.js applications.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Built Scalable Web Components with StencilJS
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Developed complex, reusable web components with StencilJS,
                ensuring UI consistency, accessibility (WCAG compliance), and
                server-side rendering (SSR) for high-performance web
                applications.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Optimized Component Performance
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Enhanced SSR hydration, reduced bundle sizes, and implemented
                lazy loading to improve load times and efficiency.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Developed a Themeable Design System
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Implemented CSS variables, design tokens, and component theming
                for flexible styling across multiple projects.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Implemented Robust Testing Strategies
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Implemented a robust testing strategy, including unit tests,
                snapshots end-to-end testing, and visual regression testing with
                Playwright, chromatic and storybook.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Created Developer Documentation
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Maintained documentation with Docusaurus and Storybook,
                improving developer onboarding and adoption of the design
                system.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Collaborated in Agile Teams
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Worked with project managers, and developers, designers, testers
                using Agile (SCRUM), Jira, and Figma to align goals and
                requirements.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Mentored and Reviewed Code
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Provided technical guidance, conducted reviews, and shared best
                practices to elevate code quality and maintainability.
              </p>
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
            <div className="text-2xl">
              <span>Fullstack JavaScript Developer </span> @{" "}
              <span className="font-bold bg-gradient-to-r from-[#3A7EED] to-[#A158F7] text-transparent bg-clip-text">
                Pixelium
              </span>
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
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Took full project ownership
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Led end-to-end development, including business decision-making,
                project planning, client meetings, and final delivery.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Crafting Engaging Frontends
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Designed and implemented dynamic, responsive user interfaces
                using React, Bootstrap 5, and Tabler, integrating UI designs
                from Figma prototypes.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Engineering Robust Backends
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Built and optimized server-side logic with Node.js, ensuring
                efficient data handling and seamless API integration with
                Mongoose and Fastify.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Handling Complex Data Operations
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Developed advanced CRUD functionalities and complex forms,
                including image uploads.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Automating Tasks & Notifications
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Leveraged Cronicle for multi-server task execution and automated
                user alerts, ensuring timely updates and seamless operations.
              </p>
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
            <div className="text-2xl">
              <span>Web Developer Intern </span> @{" "}
              <span className="font-bold bg-gradient-to-r from-[#3A7EED] to-[#A158F7] text-transparent bg-clip-text">
                Proxym
              </span>
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
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Developed and Integrated Scalable APIs
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Designed and implemented RESTful APIs to efficiently connect the
                React frontend with the backend, ensuring seamless data flow and
                optimal functionality.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Secured Authentication with JWT
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Integrated JSON Web Tokens (JWT) for secure user authentication
                and role-based access control, strengthening data security and
                user access management.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Created Backend Architecture
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Built scalable server-side logic using PrismaORM, PostgreSQL,
                Node.js, and NestJS, optimizing database schemas and data
                workflows for high performance.
              </p>
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
            <div className="text-2xl">
              <span>Frontend Developer Intern </span> @{" "}
              <span className="font-bold bg-gradient-to-r from-[#3A7EED] to-[#A158F7] text-transparent bg-clip-text">
                Proxym
              </span>
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
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Learned the basics of ElectronJS
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Learned ElectronJS, including main/renderer processes and IPC
                communication, and built a simple desktop app prototype.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-semibold text-gray-800 dark:text-gray-200">
                Consumed Redmine API
              </p>
              <p className="pl-6 text-gray-600 dark:text-gray-400 mt-1">
                Designed and developed an app that integrates with the Redmine
                API to manage tasks, improving team productivity.
              </p>
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
