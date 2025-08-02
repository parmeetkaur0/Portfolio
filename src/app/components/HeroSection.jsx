"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-14 ">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left "
        >
          <div className="sm:max-w-full max-w-md mx-auto px-2 ">
            <h1 className="text-[#181818] dark:text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Parmeet Kaur",
                  1000,
                  "Full Stack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 lg:text-xl">
              I’m a passionate developer who loves building web applications and solving real-world problems through code. Let’s create something impactful together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-start">
              <Link
                href="/#contact"
                className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white text-center"
              >
                Hire Me
              </Link>
              <Link
                href="/Parmeet_Kaur_Resume.pdf"
                className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white text-center"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download Resume
                </span>
              </Link>
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 flex justify-center mt-4 lg:mt-0 order-first sm:order-none"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;

