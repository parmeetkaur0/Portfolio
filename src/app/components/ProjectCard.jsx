"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
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

      {/* Image Section */}
      <div className="w-full md:w-1/2 relative group hidden sm:block">
        <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
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
};

export default ProjectCard;
