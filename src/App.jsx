import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Navbar from "./components/Navbar";
import IMG from "./assets/image.jpg";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <Navbar />

      {/* ---------- HERO SECTION ---------- */}
      <section
        id="home"
        className="h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-5"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-teal-500 overflow-hidden group"
        >
          <img
            src={IMG}
            alt="Profile"
            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-cyan-400 transition duration-500"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 md:mt-0 md:ml-16 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-teal-400">
            Professional Frontend Developer
          </h1>

          <p className="mt-4 text-gray-300 max-w-xl text-lg md:text-xl">
            Crafting modern, responsive, and user-friendly interfaces with the latest web technologies.  
            Currently also learning <span className="text-teal-400">Java</span> to expand my skillset.
          </p>

          <div className="overflow-hidden mt-6">
            <div className="whitespace-nowrap animate-marquee">
              <ReactTyped
                strings={[
                  "React ⚛️",
                  "Next.js 🚀",
                  "Tailwind CSS 🎨",
                  "JavaScript 💻",
                  "Responsive Web Design 📱",
                  "Java Learner ☕",
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
                showCursor={false}
                className="inline-block text-lg md:text-2xl text-teal-400"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section id="about" className="py-20 px-6 md:px-20 bg-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 max-w-4xl mx-auto text-center text-lg leading-relaxed"
        >
          I’m a <span className="text-teal-400">Frontend Developer</span> with{" "}
          <span className="text-teal-400 font-semibold">1+ year of experience</span> 
          in creating engaging, responsive, and interactive user interfaces.  
          Skilled in{" "}
          <span className="text-teal-400 font-semibold">
            React, HTML5, CSS3, Tailwind CSS, and JavaScript
          </span>.  
          Alongside frontend, I am also learning <span className="text-teal-400 font-semibold">Java</span> 
          to strengthen my backend foundations.
        </motion.p>
      </section>

      {/* ---------- SKILLS SECTION ---------- */}
      <section id="skills" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Skills
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            { name: "React", level: "90%" },
            { name: "Next.js", level: "85%" },
            { name: "JavaScript", level: "90%" },
            { name: "HTML5", level: "95%" },
            { name: "CSS3", level: "90%" },
            { name: "Tailwind CSS", level: "90%" },
            { name: "Responsive Web Design", level: "95%" },
            { name: "Java (Learning)", level: "60%" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <p className="mb-2 text-gray-300">{skill.name}</p>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.2, delay: index * 0.2 }}
                  className="bg-gradient-to-r from-teal-500 to-cyan-400 h-3 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
{/* ---------- PROJECTS SECTION ---------- */}
<section id="projects" className="py-20 px-6 md:px-20 bg-gray-800">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
    Featured Projects
  </h2>
  <p className="text-gray-400 text-center mb-12">
    Swipe through my completed and ongoing projects.
  </p>

  <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
    {/* -------- E-Commerce Project -------- */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative min-w-[300px] md:min-w-[400px] snap-center rounded-lg overflow-hidden shadow-lg bg-gray-900"
    >
      {/* Blurred placeholder */}
      <div className="h-64 bg-gray-700 flex items-center justify-center">
        <span className="text-gray-400 text-xl">[Blurred Preview]</span>
      </div>

      {/* Coming Soon badge */}
      <span className="absolute top-3 left-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm px-3 py-1 rounded-lg shadow">
        Coming Soon
      </span>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-teal-400">
          E-Commerce Website
        </h3>
        <p className="text-gray-400 mb-4">
          A modern e-commerce platform with product listing, filtering, cart,
          and secure checkout. Currently under development.
        </p>
        <p className="text-gray-300 text-sm">
          <span className="text-teal-400">Tech Stack:</span> React, Next.js,
          Tailwind CSS, JavaScript, Responsive Design, Local Storage for Login and Sign in.  
          Future backend: node.js.
        </p>
      </div>
    </motion.div>

    {/* -------- Weather App Project -------- */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative min-w-[300px] md:min-w-[400px] snap-center rounded-lg overflow-hidden shadow-lg bg-gray-900"
    >
      {/* Weather app preview */}
      <div className="h-64 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
        <span className="text-white text-xl">Weather App Preview</span>
      </div>

      {/* Completed badge */}
      <span className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm px-3 py-1 rounded-lg shadow">
        Completed
      </span>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-teal-400">
          Weather App
        </h3>
        <p className="text-gray-400 mb-4">
          My first project: live weather data with temperature, humidity, and
          conditions using a clean responsive UI.
        </p>
        <p className="text-gray-300 text-sm mb-3">
          <span className="text-teal-400">Tech Stack:</span> React, Tailwind CSS,
          OpenWeather API, JavaScript.
        </p>
        <a
          href="http://weather-app-five-beta-92.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-500 hover:text-white transition"
        >
          View Project
        </a>
      </div>
    </motion.div>
  </div>
</section>



      {/* ---------- CONTACT SECTION ---------- */}
      <section id="contact" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Reach me at{" "}
          <span className="text-teal-400">abdullahfida645@gmail.com</span>
        </p>
        <div className="flex justify-center gap-8 text-lg">
          <a href="https://github.com/Abdullah-Fida/Portfolio" className="hover:text-teal-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/abdullah-fida-88423b322/" className="hover:text-teal-400">
            LinkedIn
          </a>
          <a
            href="mailto:abdullahfida645@gmail.com"
            className="hover:text-teal-400"
          >
            Email
          </a>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="py-6 text-center text-gray-500 bg-black">
        © {new Date().getFullYear()} Abdullah. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
