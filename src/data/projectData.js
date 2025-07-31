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

export default projectsData;