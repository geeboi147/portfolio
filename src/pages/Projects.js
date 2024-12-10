import React from "react";

const projects = [
  {
    title: "Fintech App",
    description: "A full-stack fintech app with React and Flutterwave API.",
    link: "#",
  },
  {
    title: "Fashion Measurement App",
    description: "An AI-powered app for fashion designers.",
    link: "#",
  },
  {
    title: "Fintech App",
    description: "A full-stack fintech app with React and Flutterwave API.",
    link: "#",
  },
  {
    title: "Fashion Measurement App",
    description: "An AI-powered app for fashion designers.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline mt-4 block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
