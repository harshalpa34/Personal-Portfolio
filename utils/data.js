import awsLambda from "../public/aws-lambda.svg";
import expressJs from "../public/expressjs.svg";
import nodeJs from "../public/nodejs.svg";
import javascript from "../public/javascript.svg";
import mongodb from "../public/mongodb.svg";
import nextjs from "../public/nextjs.svg";
import mysql from "../public/mysql.svg";
import reactjs from "../public/reactjs.svg";
import tailwindcss from "../public/tailwindcss.svg";
import typescript from "../public/typescript.svg";
import sass from "../public/sass.png";

export const experienceData = [
  {
    companyName: "Eight Network",
    jobPost: "Frontend Developer",
    startDate: {
      month: "Dec",
      year: 2023,
    },
    isPresent: true,
    achievements: [
      "Developing and maintaining APIs with AWS Lambda and DynamoDB.",
      "Created a dynamic web player with an audio player, show listings, and a server-driven user interface that is customizable (e.g., Hero Carousel, Continue Listening), improved user experience with loading skeletons and sophisticated search capabilities.",
      "Created a podcasting platform that makes it simple for consumers to record and edit audio episodes. Implemented features for podcast distribution, metadata handling, and audio management.",
      "Developed a platform for interactive audio streaming that lets people run their own stations and broadcast live, real-time chat, participant controls for smooth user engagement, microphone sharing, user kick and block, and station administration tools.",
      "Created a thorough dashboard for a content management system (CMS) to enable effective processes for content creation, administration, and publication. Integrated functions for scheduling, version control, user permissions management, content editing, and analytics tracking.",
      "Developed a dynamic company homepage website featuring brand identity, services, and achievements with intuitive UI, responsive design, and interactive elements to enhance user engagement.",
    ],
  },
  {
    companyName: "GrowMore Media",
    jobPost: "Web Developer",
    startDate: {
      month: "Dec",
      year: 2023,
    },
    isPresent: true,
    achievements: [
      "Freelanced as a web developer for a marketing agency, delevered custom web solutions to enhance digital presence and user experience.",
    ],
  },
];

export const skillsData = [
  { title: "React JS", svg: reactjs },
  { title: "Next JS", svg: nextjs },
  { title: "Javascript", svg: javascript },
  { title: "Tailwind CSS", svg: tailwindcss },
  { title: "SASS", svg: sass },
  { title: "Node JS ", svg: nodeJs },
  { title: "MongoDB", svg: mongodb },
  { title: "Typescript", svg: typescript },
  { title: "MySql", svg: mysql },
  { title: "Aws Lambda", svg: awsLambda },
  { title: "Express JS", svg: expressJs },
];
