import React from 'react';
import Title from '../layouts/Title';
import {   doctor, tour, chat, portfolio, recipe, weather, job, wallpaper } from "../../assets/index";
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
          title="Chatting App"
          des="Satyam Chat is a real-time communication app built with MERN stack and Socket.io for live chat and notifications. It uses Redux for efficient state management, providing seamless user interactions."
          src={chat}
          projectLink="https://satyam-chat.onrender.com/login"
        />
          <ProjectsCard
          title="Job Portal"
          des="Developed a Job Portal using the MERN stack, implementing JWT authentication for secure login and role-based access for job seekers, employers, and admins. Created an Admin Panel for managing job postings, applications, and company profiles. Used Redux for state management and MongoDB for efficient data storage."
          src={job}
          projectLink="hhttps://job-portal-hchg.onrender.com/"
        />
          <ProjectsCard
          title="Doctor Appointment"
          des="A Doctor Appointment system built with MERN stack and Redux for state management. It allows users to book, manage appointments, and interact with doctors through an intuitive, responsive interface."
          src={doctor}
          projectLink="https://doctor-appoitment.onrender.com/"
        />
        <ProjectsCard
          title="Tour and Travel"
          des="A Tour and Travel web application built with React and Firebase for backend. It provides users with a responsive, dynamic platform to explore destinations, book trips, and manage bookings effortlessly"
          src={tour}
          projectLink="https://tour-andtravel.netlify.app/"
        />
        <ProjectsCard
          title="Recipe App"
          des="A Recipe App developed using HTML, CSS, and JavaScript. It fetches data from an API, allowing users to search and explore various recipes, with an interactive and user-friendly interface."
          src={recipe}
          projectLink=""
        />
        <ProjectsCard
          title="WallPaper App"
          des="Built a Wallpaper App using React Native and Unsplash API, allowing users to search and download high-quality wallpapers. Focused on delivering a smooth and responsive user experience with optimized API integration."
          src={wallpaper}
          projectLink="https://github.com/satyamsingh22/Wallpaper-App"
        />
        <ProjectsCard
          title="Portfolio"
          des="A Portfolio built with React, designed to showcase projects and skills in a responsive and dynamic layout, ensuring a seamless experience across all devices while highlighting professional achievements and expertise."
          src={portfolio}
          projectLink="https://satyamportfolioo.netlify.app/"
        />
        <ProjectsCard
          title="Weather App"
          des="A Weather App developed using HTML, CSS, and JavaScript, fetching real-time weather data from an API. It allows users to check the weather in different locations with an intuitive and responsive interface."
          src={weather}
          projectLink=""
        />
      </div>
    </section>
  );
};

export default Projects;
