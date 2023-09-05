import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "On-Site Cook",
      company_name: "Guckenheimer @ Google",
      icon: starbucks,
      iconBg: "#383E56",
      date: "October 2018 - March 2023",
      points: [
        "Prepared food and beverages efficiently and effectively for large-scale clients, serving an average of 800+ guests per shift, with a consistent satisfaction rate of 95%.",
        "Implemented and maintained rigorous standards for cleanliness, sanitation, and safety, resulting in a 30% improvement in health inspection scores.",
        "Demonstrated excellent communication skills in a fast-paced environment, effectively collaborating with 30+ coworkers, clients, and guests daily, ensuring their needs were met, and maintaining a satisfaction rate of 95%",
      ],
    },
    {
      title: "Garde Manger",
      company_name: "Gesso",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2017 - October 2018",
      points: [
        "Played a crucial role in the successful opening of the restaurant, contributing to the development and implementation of food standards in compliance with food service and sanitation regulations.",
        "Assumed responsibility for inventory management, maintaining accurate records, and optimizing stock levels, resulting in a 30% reduction in food waste and a 25% decrease in ingredient costs.",
        "Collaborated with team members to streamline processes and improve efficiency in the Garde Manger station, reducing prep time by 20% and increasing productivity by 25%.",
      ],
    },
    {
      title: "Line Cook",
      company_name: "Gjusta",
      icon: shopify,
      iconBg: "#383E56",
      date: "August 2016 - June 2017",
      points: [
        "Developed expertise in working with organic produce, incorporating it into 20+ dishes per week, resulting in a 15% increase in customer satisfaction.",
        "Gained proficiency in from-scratch cooking methods, executing 10+ recipes from scratch daily, and enhancing the quality and flavor of dishes.",
        "Demonstrated a strong commitment to continuous learning by staying updated on industry trends, techniques, and best practices, reading 5+ culinary publications per month.",
      ],
    },
    {
      title: "Chief Steward",
      company_name: "Soho House",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "February 2011 - July 2016",
      points: [
        "Successfully managed and supervised the shipping and receiving department, overseeing a team of 5+ employees, and ensuring smooth and efficient operations.",
        "Collaborated with cross-functional teams, including kitchen and warehouse staff, fostering strong communication and coordination, and achieving a 20% improvement in overall workflow efficiency.",
        "Demonstrated strong organizational skills by effectively managing inventory levels, conducting regular stock checks, and implementing inventory control measures, resulting in a 30% reduction in stock discrepancies and improved accuracy.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };