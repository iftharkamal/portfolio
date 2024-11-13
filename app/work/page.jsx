"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Fifty Fifth",
    description:
      "I created a responsive website for a London-based video production company, focusing on sleek, user-friendly frontend development. The site adapts seamlessly across devices, ensuring a polished and engaging experience for all visitors.",
    stack: [{ name: "Html5" }, { name: "css3" }, { name: "javascript" }],
    image: "/Assets/fifty-fifth.png",
    live: "https://fifty-fifth.com/",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Praanatantra",
    description:
      "I developed the website for Praanatantra, a unique design and styling brand, focusing on delivering an elegant and user-centered experience. My role involved crafting a visually appealing and intuitive interface that reflects the brand’s aesthetic and styling ethos.",
    stack: [{ name: "Html5" }, { name: "css3" }, { name: "javascript" }],
    image: "/Assets/praanatantra.png",
    live: "https://www.praanatantra.com/",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Forever",
    description:
      "As part of my learning journey, I developed 'Forever,' an e-commerce website clone. This project helped me strengthen my skills in React and TailwindCSS while focusing on building responsive, user-friendly interfaces for online shopping experiences.",
    stack: [{ name: "React js" }, { name: "Tailwind Css" }, { name: "Framer motion" }],
    image: "/Assets/forever.png",
    live: "https://warm-choux-3d6a7e.netlify.app/",
    github: "",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Netflix",
    description:
      "I created a Netflix clone to deepen my frontend development skills. This project allowed me to focus on replicating a complex, media-rich user interface, implementing features like responsive design and seamless navigation for an engaging streaming experience.",
    stack: [{ name: "React js" }, { name: "Css3" }, { name: "API fetching" }],
    image: "/Assets/netflix.png",
    live: "https://cheery-seahorse-30e262.netlify.app/",
    github: "",
  },
];

const work = () => {
  const [project, setproject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setproject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* text */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title */}
              <h2 className="text-[42px] leading-none font-bold text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} 
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="h-[70px] w-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="h-[70px] w-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex items-center justify-center bg-pink-50/20">
                      {/* overlay */}
                      <div
                        className="absolute top-0 bottom-0 bg-black/10  
                     w-full h-full z-10"
                      ></div>
                      {/* image */}
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 w-full z-20 justify-between xl:justify-none xl:w-max" btnStyles="text-primary bg-accent hover:bg-accent-hover text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default work;
