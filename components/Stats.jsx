"use client";

import CountUp from "react-countup"


const stats = [
    {
      num : "01",
      text: "Years of Experience",
    },
    {
        num : "04",
        text: "Projects Completed",
      },
      {
        num : "08",
        text: "Technologies Mastered",
      },
      {
        num : 300,
        text: "Code Commits",
      },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
     <div className="container mx-auto">

        <div className="flex flex-wrap max-w-[80vw] xl:max-w-none gap-6 mx-auto">
        {stats.map((item,index) =>{
            return <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
               <CountUp end={item.num} delay={2} duration={5} className="text-4xl xl:text-6xl font-extrabold" />
               <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
            </div>
        })}
        </div>

     </div>
    </section>
  )
}

export default Stats
