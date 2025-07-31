"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GithubDark from "../../../public/github-dark.webp";
import LinkedinDark from "../../../public/li.webp";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useTheme } from "next-themes";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     emailjs.send(
      'service_37zmdwc',      
      'template_ph30yrv',  
      formData,
      '-xTHW38pU9dR9sGe2'      
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); 
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-10 md:my-5 py-10 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold dark:text-white text-black mb-7 my-2">
          Let&apos;s Connect
        </h5>
        <p className="dark:text-[#ADB7BE] text-gray-500 mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, and my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 mb-4">
          <Link href="https://github.com/parmeetkaur0">
            <Image src={isDark ? GithubIcon : GithubDark} alt="Github Icon" width={32} height={32} />
          </Link>
          <Link href="https://www.linkedin.com/in/parmeetkaur0">
            <Image src={isDark ? LinkedinIcon : LinkedinDark} alt="Linkedin Icon" width={32} height={32} />
          </Link>
        </div>

       
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-black dark:text-white block mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                name="name"
                type="text"
                 value={formData.name}
            onChange={handleChange}
                id="name"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#18191E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black dark:text-white block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                 value={formData.email}
            onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#18191E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black dark:text-white block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
            onChange={handleChange}
                rows="4"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#18191E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg text-sm"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
