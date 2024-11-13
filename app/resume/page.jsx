"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGit
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

//about data
const about = {
  title: "About me",
  description: "I'm a self-taught frontend developer with a year of hands-on freelancing experience, passionate about crafting clean, responsive, and visually captivating web interfaces. Over the past year, I've honed my skills in ReactJS, TailwindCSS, JavaScript, and Framer Motion, translating client visions into smooth, interactive user experiences.Whether building from scratch or adding life to existing designs, I thrive on finding creative, efficient solutions. Every project I take on is an opportunity to learn something new, sharpen my skills, and push the boundaries of what’s possible in frontend development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohammed Ifthar",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 8157983699",
    },
    {
      fieldName: "Email",
      fieldValue: "iftharkamal@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 year experience",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Malayalam, Hindi, Tamil",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Frontend developer with a year of freelancing experience, skilled in ReactJS, TailwindCSS, JavaScript, and Framer Motion. Passionate about creating responsive, engaging interfaces and always eager to push the limits of web development.",

  items: [
    {
      company: "Freelancing",
      position: "Web development",
      duration: "1 year",
    },
    {
      company: "Internship Studio",
      position: "Website development (intern)",
      duration: "2024",
    },
    {
      company: "Full Stack academy",
      position: "Software Developing (Bootcamp)",
      duration: "2024",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Self-taught frontend developer, driven by a commitment to continuous learning and hands-on experience in modern web technologies.",
  items: [
    {
      institution: "Internship Studio",
      degree: "Website design and development",
      duration: "2024",
    },
    {
      institution: "Full-stack academy",
      degree: "Bootcamp for developers",
      duration: "2024",
    },
    {
      institution: "Online Course platform",
      degree: "Frontend-development",
      duration: "2024",
    },
    {
      institution: "Zoople technologies",
      degree: "MERN Stack Workshop",
      duration: "2024",
    },
    {
      institution: "MES Ponnani College",
      degree: "Bsc.Geology",
      duration: "2021 - 2024",
    },
    {
      institution: "Govt.rajahs higher secondary",
      degree: "+2 (science)",
      duration: "2018 - 2020",
    },
  ],
};

//skills data
const skills = {
  title: "My Skills",
  description:
    "Proficient in building dynamic, responsive web applications with a strong focus on user experience. Skilled in ReactJS, TailwindCSS, JavaScript, and Framer Motion, with experience bringing animations and interactivity to life. Committed to clean code, adaptability, and staying up-to-date with the latest trends and best practices in frontend development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex py-12 xl:py-0 justify-center items-center"
    >
      <div className="container mx-auto ">
        <Tabs
           className="flex flex-col gap-[280px] xl:flex-row xl:gap-[60px]"
           defaultValue="experience"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                   <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index) =>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center gap-1 lg:items-start">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                           <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                   </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                   <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index) =>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center gap-1 lg:items-start">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                           <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                   </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill,index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="h-[150px] w-full group bg-[#232329] flex items-center justify-center rounded-xl">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4 ">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl whitespace-nowrap">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
