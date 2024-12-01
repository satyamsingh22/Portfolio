import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Doctor Appointment"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          src={projectOne}
          projectLink="https://doctor-appoitment.onrender.com/"
        />
        <ProjectsCard
          title="Tour and Travel"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          src={projectTwo}
          projectLink="https://tour-andtravel.netlify.app/"
        />
        <ProjectsCard
          title="Chatting App"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          src={projectThree}
          projectLink="https://satyam-chat.onrender.com/login"
        />
        <ProjectsCard
          title="Recipe App"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          src={projectThree}
          projectLink="https://recipe-app.com"
        />
        <ProjectsCard
          title="Portfolio"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          src={projectOne}
          projectLink="https://portfolio.com"
        />
        <ProjectsCard
          title="To-do List"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          src={projectTwo}
          projectLink="https://to-do-list.com"
        />
      </div>
    </section>
  );
};

export default Projects;
