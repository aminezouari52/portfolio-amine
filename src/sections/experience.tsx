import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/timeline";

export default function Experience() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="text-2xl mb-8">
            <span>Design System Developer</span> @{" "}
            <span className="font-bold bg-gradient-to-r from-[#3A7EED] to-[#A158F7] text-transparent bg-clip-text">
              Schneider Electric
            </span>
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
          <div className="text-2xl mb-8">
            <span>Fullstack JavaScript Developer </span> @{" "}
            <span className="font-bold bg-gradient-to-r from-[#3A7EED] to-[#A158F7] text-transparent bg-clip-text">
              Pixelium
            </span>
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
          <div className="text-2xl mb-8">
            <span>Web Developer Intern </span> @{" "}
            <span className="font-bold bg-gradient-to-r from-[#3A7EED] to-[#A158F7] text-transparent bg-clip-text">
              Proxym
            </span>
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
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="text-2xl mb-8">
            <span>Frontend Developer Intern </span> @{" "}
            <span className="font-bold bg-gradient-to-r from-[#3A7EED] to-[#A158F7] text-transparent bg-clip-text">
              Proxym
            </span>
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
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
