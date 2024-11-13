"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I offer tailored frontend development services to bring your ideas to life with clean, responsive, and visually appealing designs. Specializing in ReactJS, TailwindCSS, and interactive animations with Framer Motion, I focus on creating smooth, user-friendly experiences that look great on any device. Whether you need a brand-new site or improvements to an existing one, I’m dedicated to delivering high-quality, modern web solutions that meet your unique needs.",
    href: "",
  },
  {
    num: "02",
    title: "Graphic Designing",
    description:
      "I provide a range of creative services to help you stand out online and in print. With expertise in frontend development, I build clean, responsive websites using ReactJS, TailwindCSS, and Framer Motion to deliver smooth, interactive experiences. I also offer graphic design services, including custom poster designs for events, blending aesthetic appeal with effective messaging. Whether you need a website or eye-catching visuals, I’m committed to bringing your vision to life.",
    href: "",
  },
  {
    num: "03",
    title: "Video Editing",
    description:
      "I provide a range of creative services to help you stand out online and in print. With expertise in frontend development, I build clean, responsive websites using ReactJS, TailwindCSS, and Framer Motion to deliver smooth, interactive experiences. I also offer graphic design services, including custom poster designs for events, blending aesthetic appeal with effective messaging. Whether you need a website or eye-catching visuals, I’m committed to bringing your vision to life.",
    href: "",
  },
  {
    num: "04",
    title: "Art | Calligraphy",
    description:
      "In addition to web and graphic design, I offer custom art services, including portrait drawings, paintings, and calligraphy. With a strong eye for detail and a passion for expressive visuals, I create personalized artwork that captures personality and elegance. Whether you’re looking for unique illustrations, calligraphy for special occasions, or one-of-a-kind portraits, I’m here to bring artistry and creativity to your project.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col py-12 justify-center xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-outline text-transparent text-5xl font-extrabold group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[60px] h-[60px] bg-white rounded-full group-hover:bg-accent flex items-center justify-center transition-all duration-500 hover:-rotate-45">
                    <BsArrowDownRight className="text-2xl text-primary"/>
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
