"use client";

import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/animated-modal";
import { CanvasRevealEffect } from "@/components/canvas-reveal-effect";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  Bell,
  Calendar,
  User,
  Lock,
  Wrench,
  Box,
  ShoppingCart,
  CreditCard,
  HeartPulse,
  Globe,
  Gift,
  LayoutDashboard,
  Sparkles,
  Workflow,
} from "lucide-react";

import scan2winImg1 from "../assets/scan2win/scan2win-1.png";
import scan2winImg2 from "../assets/scan2win/scan2win-2.png";
import scan2winImg3 from "../assets/scan2win/scan2win-3.png";
import scan2winImg4 from "../assets/scan2win/scan2win-4.png";
import scan2winImg5 from "../assets/scan2win/scan2win-5.png";

import telemedicineImg1 from "../assets/telemedicine/telemedicine-1.png";
import telemedicineImg2 from "../assets/telemedicine/telemedicine-2.png";
import telemedicineImg3 from "../assets/telemedicine/telemedicine-3.png";
import telemedicineImg4 from "../assets/telemedicine/telemedicine-4.png";
import telemedicineImg5 from "../assets/telemedicine/telemedicine-5.png";

import Home from "../assets/ecommerce/Home.png";
import Login from "../assets/ecommerce/Login.png";
import Shop from "../assets/ecommerce/Shop.png";
import UserImg from "../assets/ecommerce/User.png";
import Checkout from "../assets/ecommerce/Checkout.png";

const scan2winImages = [
  scan2winImg1,
  scan2winImg2,
  scan2winImg3,
  scan2winImg4,
  scan2winImg5,
];

const telemedicineImages = [
  telemedicineImg1,
  telemedicineImg2,
  telemedicineImg3,
  telemedicineImg4,
  telemedicineImg5,
];

const imagesCommerce = [Login, Shop, Home, UserImg, Checkout];

export default function Project() {
  return (
    <div id="projects" className="pb-20">
      <h2 className="text-lg md:text-4xl text-black dark:text-white max-w-4xl max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        Projects
      </h2>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base py-16">
          Freelance projects for clients with real-world problems.
        </p>
        <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-[48px]">
          <Modal>
            <ModalTrigger className="dark:text-black text-white flex justify-center group/modal-btn w-[100%] sm:w-[50%] overflow-visible">
              <div className="flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-transparent w-full gap-4">
                <Card
                  title="Scan2Win"
                  icon={
                    <Gift className="text-neutral-700 dark:text-[#fff] h-[80px] w-[80px]" />
                  }
                >
                  <CanvasRevealEffect
                    animationSpeed={5}
                    containerClassName="bg-[#FF6B6B]"
                    colors={[[255, 220, 220]]}
                  />
                </Card>
              </div>
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <div className="flex justify-center align-center mb-8">
                  <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 text-center font-bold">
                    Scan2Win{" "}
                  </h4>
                </div>
                <hr className="mb-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                <p className="mb-4 mt-0 text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                  Scan2Win is an interactive reward platform that lets users
                  scan QR codes to instantly discover and claim prizes. It's a
                  fun, fast, and engaging way for companies to boost customer
                  interaction, run promotions, and gather insights, while giving
                  users the excitement of winning something on the spot.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {[
                    "TypeScript",
                    "ReactJs",
                    "Tanstack Query",
                    "Zustand",
                    "NestJS",
                    "PostgreSQL",
                    "SendGrid",
                    "Google APIs",
                    "Nginx",
                    "Docker",
                    "Containerization",
                    "Kubernetes",
                  ].map((item) => (
                    <span
                      key={item}
                      className={`bg-[#FF6B6B] text-[#fff] text-xs font-medium px-2.5 py-0.5 rounded-sm`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center items-center flex-wrap mb-4">
                  {scan2winImages.map((image, idx) => (
                    <motion.div
                      key={"images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 overflow-hidden"
                    >
                      <a
                        href={image.src}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={image}
                          alt="telemedicine images"
                          width="500"
                          height="500"
                          className="rounded-lg h-[200px] w-[150px] sm:w-[150px] md:w-[170px] lg:w-[220px] xl:w-[290px] object-cover shrink-0 cursor-pointer"
                        />
                      </a>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <div className="pt-10 max-w-sm mx-auto grid grid-cols-2 gap-4">
                    <div className="flex items-center ">
                      <LayoutDashboard className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Admin KPI's Dashboard
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Sparkles className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        User Friendly UI
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Lock className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Secure Authentication
                      </span>
                    </div>
                    <div className="flex  items-center ">
                      <Workflow className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Google APIs Integration
                      </span>
                    </div>
                  </div>
                </div>
              </ModalContent>
            </ModalBody>
          </Modal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base py-16">
          Side projects that I&apos;ve created in my free time.
        </p>
        <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-[48px]">
          <Modal>
            <ModalTrigger className="dark:text-black text-white flex justify-center group/modal-btn w-[100%] sm:w-[50%] overflow-visible">
              <div className="flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-transparent w-full gap-4">
                <Card
                  title="Telemedicine Website"
                  icon={
                    <HeartPulse className="text-neutral-700 dark:text-[#fff] h-[80px] w-[80px]" />
                  }
                >
                  <CanvasRevealEffect
                    animationSpeed={5}
                    containerClassName="bg-[#615EFC]"
                    colors={[[125, 211, 252]]}
                  />
                </Card>
              </div>
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <div className="flex justify-center align-center mb-8">
                  <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 text-center font-bold">
                    Telemedicine Website{" "}
                  </h4>
                </div>
                <hr className="mb-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                <p className="mb-4 mt-0 text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                  A platform designed to facilitate secure, real-time text-based
                  consultations between doctors and patients. With a focus on
                  simplicity and ease of use.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {[
                    "Socket.io",
                    "Cron Job",
                    "NodeJS",
                    "Express",
                    "MongoDB",
                    "ReactJS",
                    "Firebase",
                    "JWT",
                    "React Query",
                    "render.com",
                    "netlify",
                  ].map((item) => (
                    <span
                      key={item}
                      className="bg-[#615EFC] text-[#fff] text-xs font-medium px-2.5 py-0.5 rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center items-center flex-wrap mb-4">
                  {telemedicineImages.map((image, idx) => (
                    <motion.div
                      key={"images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                      <a
                        href={image.src}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={image}
                          alt="telemedicine images"
                          width="500"
                          height="500"
                          className="rounded-lg h-[200px] w-[150px] sm:w-[150px] md:w-[170px] lg:w-[220px] xl:w-[290px] object-cover shrink-0 cursor-pointer"
                        />
                      </a>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <div className="pt-10 max-w-sm mx-auto grid grid-cols-2 gap-4">
                    <div className="flex  items-center ">
                      <MessageCircle className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Real-time Secure Chat
                      </span>
                    </div>
                    <div className="flex items-center ">
                      <Bell className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Real-time Notifications
                      </span>
                    </div>
                    <div className="flex items-center ">
                      <Calendar className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Appointment Scheduling
                      </span>
                    </div>
                    <div className="flex  items-center ">
                      <User className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        User Profiles
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Lock className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      User Authentication
                    </span>
                  </div>
                </div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <ActionButton
                  href="https://bucolic-malabi-07ed64.netlify.app/"
                  icon={<Globe className="text-black h-5 w-5" />}
                  title="Live Website"
                />
                <ActionButton
                  href="https://github.com/aminezouari52/telemedicine-website"
                  icon={<GithubIcon />}
                  title="Github"
                />
              </ModalFooter>
            </ModalBody>
          </Modal>

          <Modal>
            <ModalTrigger className="dark:text-black text-white flex justify-center group/modal-btn w-[100%] sm:w-[50%] overflow-visible">
              <div className="flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-transparent w-full gap-4">
                <Card
                  title="E-Commerce Website"
                  icon={
                    <ShoppingCart className="text-neutral-700 dark:text-[#fff] h-[80px] w-[80px]" />
                  }
                >
                  <CanvasRevealEffect
                    animationSpeed={5}
                    containerClassName="bg-[#800000]"
                    colors={[
                      [236, 72, 153],
                      [232, 121, 249],
                    ]}
                    dotSize={2}
                  />
                </Card>
              </div>
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <div className="flex justify-center align-center mb-8">
                  <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 text-center font-bold">
                    E-Commerce Website{" "}
                  </h4>
                </div>
                <hr className="mb-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                <p className="mb-4 mt-0 text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                  A dynamic e-commerce website that offers a seamless shopping
                  experience, with a focus on scalability, performance, and
                  responsiveness.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {[
                    "NodeJS",
                    "Express",
                    "MongoDB",
                    "ReactJS",
                    "Firebase",
                    "JWT",
                    "ChakraUI",
                    "Redux Toolkit",
                    "render.com",
                    "netlify",
                  ].map((item) => (
                    <span
                      key={item}
                      className="bg-[#800000] text-[#fff] text-xs font-medium px-2.5 py-0.5 rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-center items-center flex-wrap mb-4">
                  {imagesCommerce.map((image, idx) => (
                    <motion.div
                      key={"images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                      <a
                        href={image.src}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={image}
                          alt="ecommerce images"
                          width="500"
                          height="500"
                          className="rounded-lg h-[200px] w-[150px] sm:w-[150px] md:w-[170px] lg:w-[220px] xl:w-[290px] object-cover shrink-0"
                        />
                      </a>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <div className="pt-10 max-w-sm mx-auto grid grid-cols-2 gap-4">
                    <div className="flex  items-center ">
                      <Wrench className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Admin Dashboard
                      </span>
                    </div>
                    <div className="flex items-center ">
                      <Box className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Product Listings
                      </span>
                    </div>
                    <div className="flex items-center ">
                      <ShoppingCart className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Cart System
                      </span>
                    </div>
                    <div className="flex  items-center ">
                      <CreditCard className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Seamless Checkout
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Lock className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      User Authentication
                    </span>
                  </div>
                </div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <ActionButton
                  href="https://polite-cassata-060142.netlify.app/"
                  icon={<Globe className="text-black h-5 w-5" />}
                  title="Live Website"
                />
                <ActionButton
                  href="https://github.com/aminezouari52/e-commerce"
                  icon={<GithubIcon />}
                  title="Github"
                />
              </ModalFooter>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
}

const ActionButton = ({ href, icon, title }: any) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex gap-2 bg-black dark:bg-white text-sm px-2 py-1 rounded-md border border-black transform hover:-translate-y-1 transition duration-400"
    >
      {icon}
      <div className="w-100 text-white dark:text-black">{title}</div>
    </a>
  );
};

const GithubIcon = () => {
  return (
    <svg
      className="w-5 h-5 text-[#fff] dark:text-[#000] ms-2"
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
};

// const CarouselElement = ({ images }: string[]) => {
//   return (
//     <div className="p-15 sm:p-20 pt-0 sm:pt-0 cursor-grab">
//       <Carousel
//         opts={{
//           slidesToScroll: "auto",
//         }}
//       >
//         <CarouselContent>
//           {images?.map((image, index) => (
//             <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   delay: index * 0.1,
//                   duration: 0.3,
//                   ease: "easeOut",
//                 }}
//                 viewport={{ once: true }}
//               >
//                 <ImageCard image={image} className="m-4" />
//               </motion.div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// };

const ImageCard = ({ image }: any) => {
  return (
    <div className="relative bg-layer-card flex flex-col justify-between shadow-lg cursor-pointer rounded-md group">
      <div>
        <img
          src={image}
          alt="Product Image"
          crossOrigin="anonymous"
          className="rounded-md block"
        />
      </div>
    </div>
  );
};

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
