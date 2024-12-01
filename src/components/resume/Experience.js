import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="FT Salon Acadmey"
            subTitle="Web Developer - (July-August)"
            result="Remote"
            des="I interned at F Saloon Academy, where I developed a website from scratch, working on both frontend and backend components."
          />
         <ResumeCard
  title="Mediversal Pvt Ltd "
  subTitle="Full Stack Developer (August 2024 - Present)"
  result="Patna"
  des="Working as a Full Stack Developer, gaining practical experience by building and managing web applications, including an LMS, lab reporting systems, and other projects. This role has strengthened my skills in both frontend and backend development within a professional environment."
/>

         
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
