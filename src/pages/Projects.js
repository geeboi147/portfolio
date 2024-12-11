import React from "react";
import fintechAppImg from "../assets/task.png"; 
import fintechAppImgHover from "../assets/task-hover.png"; 
import fashionAppImg from "../assets/task.png"; 
import fashionAppImgHover from "../assets/task-hover.png"; 

const projects = [
  {
    title: "Task Management App",
    description: "A full-stack task management system using react mongodb and nodejs. ",
    link: "#",
    image: fintechAppImg,
    hoverImage: fintechAppImgHover,
  },
  {
    title: "Fashion Measurement App",
    description: "An AI-powered app for fashion designers.",
    link: "#",
    image: fashionAppImg,
    hoverImage: fashionAppImgHover,
  },
];

function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group p-4 bg-gray-800 rounded-lg shadow-lg text-center"
          >
            {/* Static Image */}
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-50 object-cover rounded-lg transition-all duration-300"
            />
            {/* Hover Image (hidden initially) */}
            <img
              src={project.hoverImage}
              alt={`${project.title} hover preview`}
              className="absolute inset-0 w-full h-50 object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            />
            <h3 className="text-2xl font-bold mt-4 text-white">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline mt-4 block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
