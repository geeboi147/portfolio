import React from "react";

function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm <span className="text-blue-500">Oguntoye Oluwaseyi</span></h2>
        <p className="text-lg mb-6">I'm a Full-Stack Developer with 3 years of experience building dynamic web applications.</p>
        <a href="#projects" className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-700">View Projects</a>
      </div>
    </section>
  );
}

export default Home;
