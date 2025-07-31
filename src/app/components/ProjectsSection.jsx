"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const projectsData = [
  {
    id: 1,
    title: "ShopByte - E-commerce Application",
    description: "A comprehensive E-commerce platform built using MERN Stack with Firebase Authentication. It features product listings, dynamic filtering, secure user authentication, a full-fledged Admin Panel for product & order management, and a responsive UI for seamless shopping experience.",
    features: [
      "MERN Stack Architecture (MongoDB, Express.js, React.js, Node.js)",
      "Firebase Authentication Integration",
      "Dynamic Product Filtering & Shopping Cart",
      "Admin Panel for Product & Order Management",
      "Responsive Design with Tailwind CSS",
    ],
    tags: ["MERN", "Firebase", "Tailwind CSS", "Admin Panel"],
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/parmeetkaur0/shopByte-Ecommerce",
    previewUrl: "https://shop-byte-ecommerce.vercel.app/",
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "A MERN-based real-time chat application leveraging WebSockets for instant messaging. The React frontend communicates with a Node.js & Express backend, with MongoDB as database. Firebase handles user authentication. It supports multiple chat rooms, real-time updates, and CRUD operations for managing conversations.",
    features: [
      "MERN Stack with WebSockets for Real-Time Messaging",
      "Firebase Authentication & Secure Login",
      "Chat Rooms & Conversation Management",
      "Real-Time Message Broadcasting",
      "Responsive & Interactive UI with Tailwind CSS",
    ],
    tags: ["MERN", "WebSockets", "Firebase", "Real-Time"],
    image: "/images/projects/1.webp",
    gitUrl: "https://github.com/parmeetkaur0/Chat_Application",
    previewUrl: "https://chat-application-xi-nine.vercel.app/",
  },
  {
    id: 3,
    title: "Alzheimer's Detection System",
    description: "An AI-driven system that analyzes MRI scans and Voice data to predict Alzheimer's disease stages. It integrates Machine Learning models for image classification and voice analysis. The frontend is built with Flask & React, backend APIs with Node.js, and Firebase is used for data handling and authentication.",
    features: [
      "Machine Learning Models for MRI & Voice Analysis",
      "Flask & React.js Hybrid Frontend Architecture",
      "Node.js Backend APIs for Data Handling",
      "Firebase Authentication & Storage",
      "Visualization of Prediction Stages",
    ],
    tags: ["Machine Learning", "Flask", "React", "Node.js", "Firebase"],
    image: "/images/projects/2.webp",
    gitUrl: "https://github.com/parmeetkaur0/Alzheimer-Detection-Tool",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-5">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-14 mb-10">
          My Projects
        </h2>

        <div className="space-y-16">
          {projectsData.map((project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: false, margin: "-100px" });

            return (
              <motion.div
                key={project.id}
                ref={ref}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-[#1f1f1f] rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group min-h-[450px]"
              >
                {/* Text Section */}
                <div className="w-full md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-[#181818] dark:text-white mb-3 flex items-center gap-2">
                    {project.title}
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:hidden inline-flex items-center px-3 py-1 text-xs border border-[#181818] dark:border-white rounded-full hover:bg-[#181818] hover:text-white transition"
                    >
                      Live Preview
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-1/2 relative group hidden sm:block">
                  <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 w-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
                      >
                        <CodeBracketIcon className="h-6 w-6 text-white" />
                      </a>
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 w-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/20 transition"
                      >
                        <EyeIcon className="h-6 w-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
