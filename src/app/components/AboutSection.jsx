"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-3">
        {["JavaScript", "Java", "React", "Node.js", "Next.js", "Express", "MongoDB", "HTML & CSS"].map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 text-sm border border-gray-400 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>B.Tech in Computer Science and Engineering —<span className="font-semibold"> Baba Farid College of Engineering & Technology</span></li>
      </ul>
    ),
  },

];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="py-8 mt-14 bg-white dark:bg-[#0a0a0a] text-[#181818] dark:text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
          <Image src="/images/about-image.png" alt="About" layout="fill" objectFit="cover" />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Hi, I’m <strong>Parmeet Kaur</strong> — a passionate <strong>Full Stack Developer</strong> with expertise in the <strong>MERN Stack</strong> (MongoDB, Express.js, React.js, Node.js). I specialize in building scalable web applications with a focus on clean architecture, performance, and user-centric design.
            <br />
            I am continuously refining my skills in <strong>Web Development</strong> and <strong>Data Structures & Algorithms</strong>, with a drive to build impactful digital solutions.
          </p>

          {/* Tabs */}
          <div className="flex gap-2 flex-wrap mt-6">
            {TAB_DATA.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`px-3 py-1 rounded-md text-sm transition ${tab === tabItem.id
                    ? "bg-[#181818] text-white dark:bg-white dark:text-black"
                    : "border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
              >
                {tabItem.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
