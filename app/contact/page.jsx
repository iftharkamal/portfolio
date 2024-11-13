"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    Description: "(+91) 8157983699",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    Description: "iftharkamal@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "address",
    Description: "Adiyattil House, p/o Ponmundam, 676106",
  },
];

const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">

        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 bg-[#27272c] p-10 rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">“Feel free to reach out for any inquiries or collaboration opportunities. I’m always open to new projects and excited to connect!”</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname"/>
                <Input type="lastname" placeholder="Lastname"/>
                <Input type="email" placeholder="Email address"/>
                <Input type="phone" placeholder="Phone number"/>
              </div>
              {/* select */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Service"/>
                </SelectTrigger >
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="est">Web development</SelectItem>
                    <SelectItem value="cst">Graphic designing</SelectItem>
                    <SelectItem value="mst">Art/Calligraphy</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Enter your message here..."/>
              {/* button */}
              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="order-1 xl:order-none flex-1 flex items-center mb-8 xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item,index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] rounded-[12px] flex items-center justify-center text-accent">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                     <h3 className="text-xl">{item.Description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default contact;
