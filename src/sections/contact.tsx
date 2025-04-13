"use client";
import { cn } from "@/lib/utils";

import React, { useEffect, useState, useRef } from "react";
import { BackgroundBeams } from "@/components/background-beams";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    emailjs
      .send(serviceId, templateId, values, {
        publicKey,
      })
      .then(
        (result) => {
          console.log("Message sent!", result.text);
          setSuccess(true);
        },
        (error) => {
          console.log("Error:", error);
          setErrorState(true);
        }
      );

    formRef?.current?.reset();
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
    if (errorState) {
      setTimeout(() => {
        setErrorState(false);
      }, 5000);
    }
  }, [success, errorState]);

  return (
    <BackgroundBeams
      id="contact"
      className="flex flex-col h-screen w-[99vw] overflow-hidden gap-8 md:gap-20"
    >
      <p
        style={{ letterSpacing: "4px" }}
        className="font-bold text-2xl md:text-4xl xl:text-5xl dark:text-white text-black text-center mt-10 md:mt-18 z-[10]"
      >
        Let's{" "}
        <span className="text-neutral-400">
          {"Connect!".split("").map((word, idx) => (
            <motion.span
              key={idx}
              className="inline-block"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: idx * 0.04 }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      </p>
      <div className="z-[10]">
        <div className="mx-auto w-full max-w-md rounded-none bg-white md:rounded-2xl dark:bg-transparent flex flex-col gap-10">
          <form
            ref={formRef}
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-3">
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label htmlFor="name" className="mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    type="text"
                    name="name"
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  {/* className="" */}

                  <Label htmlFor="email" className="mb-2 mt-4 md:mt-0">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    placeholder="Your email address"
                    type="email"
                    name="email"
                  />
                </LabelInputContainer>
              </div>
              <div className="mb-4">
                <LabelInputContainer className="">
                  <Label htmlFor="message" className="mb-2">
                    Message
                  </Label>
                  <Input
                    id="message"
                    placeholder="Hey Amine! I really like your work, let's connect!"
                    type="textarea"
                    className="h-20"
                    name="message"
                  />
                </LabelInputContainer>
              </div>
            </div>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
            >
              Submit &rarr;
              <BottomGradient />
            </button>
          </form>
          <div className=" h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          <div className="flex items-end justify-between mb-10">
            <div className=" flex flex-col gap-1">
              <div className="flex align-center gap-2">
                <MapPin className="h-5 w-5" />
                <p>Tunisia, Sousse</p>
              </div>
              <div className="flex align-center gap-2">
                <Mail className="h-5 w-5" />
                <p>zouariamine52@gmail.com</p>
              </div>
              <div className="flex align-center gap-2">
                <Phone className="h-5 w-5" />
                <p>+216 21 439 094</p>
              </div>
            </div>
            <div className="flex gap-2">
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
        </div>

        {/* <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <ul>
            <li>Tunisia, Sousse</li>
            <li>+216 21 439 094</li>
            <li>zouariamine52@gmail.com</li>
            <li>linkedin</li>
            <li>github</li>
          </ul>
        </div> */}
        {success && <AlertToast icon={<SuccessIcon />} />}
        {errorState && (
          <AlertToast title="Message failed to submit!" icon={<ErrorIcon />} />
        )}
      </div>
    </BackgroundBeams>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const GithubButton = ({ href, icon, text }: any) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex gap-2 bg-black dark:bg-white text-sm rounded-md border border-black px-2 py-1 font-bold transform hover:-translate-y-1 transition duration-400"
      // px-6 py-2 bg-black text-white rounded-lg "
    >
      <div className="h-5 w-5">{icon}</div>
    </a>
  );
};

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

const AlertToast = ({ title, icon }) => {
  return (
    <div
      id="toast-success"
      className="z-[100] absolute bottom-0 right-0 mr-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      {icon}
      <div className="ms-3 text-sm font-normal">{title}.</div>
    </div>
  );
};

const ErrorIcon = () => {
  return (
    <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-10 rounded-lg dark:bg-red-800 dark:text-red-200">
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
      </svg>
      <span className="sr-only">Error icon</span>
    </div>
  );
};

const SuccessIcon = () => {
  return (
    <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
      <span className="sr-only">Check icon</span>
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
