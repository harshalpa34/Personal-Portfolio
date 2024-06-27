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

import ChillSpace1 from "../public/projects/chill-space-1.png";
import ChillSpace2 from "../public/projects/chill-space-2.png";
import ChillSpace3 from "../public/projects/chill-space-3.png";
import ChillSpace4 from "../public/projects/chill-space-4.png";
import ChillSpace5 from "../public/projects/chill-space-5.png";
import ChillSpace6 from "../public/projects/chill-space-6.png";
import EightHome from "../public/projects/eight-home.png";
import EightHome1 from "../public/projects/eight-home-1.gif";
import EightHome2 from "../public/projects/eight-home-2.png";
import EightHome3 from "../public/projects/eight-home-3.png";
import EightHome4 from "../public/projects/eight-home-4.png";
import Podcast1 from "../public/projects/podcast-1.png";
import Podcast2 from "../public/projects/podcast-2.png";
import Podcast from "../public/projects/podcast.png";
import Studio from "../public/projects/studio.png";
import webPlayer from "../public/projects/web-player.png";
import webPlayer1 from "../public/projects/web-player-1.png";
import webPlayer2 from "../public/projects/web-player-2.png";
import webPlayer3 from "../public/projects/web-player-3.png";
import webPlayer4 from "../public/projects/web-player-4.png";
import webPlayer5 from "../public/projects/web-player-5.png";
import webPlayer6 from "../public/projects/web-player-6.png";
import webPlayer7 from "../public/projects/web-player-7.png";
import webPlayer8 from "../public/projects/web-player-8.png";
import webPlayer9 from "../public/projects/web-player-9.png";
import webPlayer10 from "../public/projects/web-player-10.png";

import { Download, Linkedin, Mail, Phone } from "lucide-react";

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
      month: "Jun",
      year: 2022,
    },
    endDate: {
      month: "Nov",
      year: 2022,
    },
    achievements: [
      "Freelanced as a web developer for a marketing agency, developed custom web solutions to enhance digital presence and user experience.",
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

export const projectData = [
  {
    title: "Web Player",
    about:
      "Eight Web Player is specifically designed for audio playback. It is a web-based audio player that enables users to listen to audio content directly from their browsers without requiring additional software installations. Here are some specific features and functionalities of the Eight Web Player",
    subPoints: [
      {
        title: "Audio Format Support",
        about:
          "It supports various audio formats, allowing users to play a wide range of audio files seamlessly.",
      },
      {
        title: "Cross-Platform Accessibility",
        about:
          "Being a web-based player, it can be accessed from different devices and operating systems, such as Windows, macOS, Linux, iOS, and Android.",
      },
      {
        title: "User-Friendly Interface",
        about:
          "The interface is typically designed to be intuitive and easy to use, making it simple for users to manage their audio playback.",
      },
      {
        title: "Streaming Capability",
        about:
          "Users can stream audio content from the web, making it convenient for listening to online audio files without downloading them.",
      },
      {
        title: "Integration Options",
        about:
          "The player can be integrated into websites and web applications, providing a seamless audio playback experience for users.",
      },
      {
        title: "Customization",
        about:
          "Developers can often customize the appearance and functionality of the player to match the design and requirements of their websites or applications.",
      },
    ],
    demoLink: "https://play.eight.network",
    image: webPlayer,
    isDown: false,
    imageArray: [
      webPlayer1,
      webPlayer2,
      webPlayer3,
      webPlayer4,
      webPlayer5,
      webPlayer6,
      webPlayer7,
      webPlayer8,
      webPlayer9,
      webPlayer10,
    ],
  },
  {
    title: "Chill Space",
    about:
      "Chill Space is a platform designed as an alternative to Discord, focusing on replicating most of Discord's core functionalities",
    subPoints: [
      {
        title: "Messaging and Chat",
        about:
          "Users engage in real-time text communication through servers and channels, similar to Discord. They can share messages, media, and reactions within dedicated server environments.",
      },
      {
        title: "Server Structure",
        about:
          "Communities are organized into servers with multiple channels for different topics or activities. Users can create, join, and manage servers tailored to specific interests or communities.",
      },
      {
        title: "User Roles and Permissions",
        about:
          "Role-based permissions regulate access within servers, allowing administrators to assign roles with customizable permissions to manage member interactions and administrative tasks.",
      },
      {
        title: "Emojis and Reactions",
        about:
          "Emojis and reactions enhance user interaction within conversations, mirroring social dynamics seen in platforms like Discord.",
      },
      {
        title: "Cross-Platform Accessibility",
        about:
          "Accessible across various devices and operating systems, ensuring seamless connectivity and communication.",
      },
      {
        title: "Community Management",
        about:
          "Tools for community moderation include features for user bans, message deletion, and content moderation to maintain a positive and safe environment.",
      },
    ],
    isPersonal: true,
    demoLink: "https://chill-space.up.railway.app/",
    image: ChillSpace1,
    imageArray: [
      ChillSpace1,
      ChillSpace2,
      ChillSpace3,
      ChillSpace4,
      ChillSpace5,
      ChillSpace5,
      ChillSpace6,
    ],
    isDown: false,
  },
  {
    title: "Eight Home",
    about: "Landing Website showcasing the brand.",
    subPoints: [
      {
        title: "Sleek and Modern Design With Animations ",
        about:
          "The landing page of Eight Network features a sleek and modern design, reflecting a contemporary aesthetic. It employs clean layouts, visually appealing graphics, and intuitive navigation to create a user-friendly experience.",
      },
      {
        title: "Responsive Design",
        about:
          "The landing page is responsive, ensuring optimal viewing and interaction experience across a wide range of devices and screen sizes. This responsiveness enhances accessibility and usability for all visitors.",
      },
      {
        title: "SEO Optimization",
        about:
          "Elements of search engine optimization (SEO) are integrated into the landing page to improve visibility and search engine rankings. This includes optimized content, meta tags, alt text for images, and structured data.",
      },
      {
        title: "Footer",
        about:
          "Includes essential links, contact information, and social media icons to enhance user navigation and accessibility.",
      },
    ],
    demoLink: "https://home.eight.network",
    image: EightHome,
    imageArray: [EightHome1, EightHome2, EightHome3, EightHome4],
    isDown: false,
  },
  {
    title: "Eight Podcast",
    about:
      "Eight Podcast provides podcasters with live broadcasting, recording, editing tools, episode management, cross-platform publishing, community engagement features, analytics, monetization options, and a user-friendly interface—all in one centralized platform.",
    subPoints: [
      {
        title: "Live Broadcasting",
        about:
          "Podcasters can go live and broadcast their podcasts in real-time on podcast.eight.network. This feature allows for interactive sessions with listeners and immediate engagement during recordings.",
      },
      {
        title: "Recording Studio",
        about:
          "The platform provides a virtual recording studio where podcasters can record their podcasts. This studio may offer tools for capturing audio, adjusting settings, and ensuring high-quality recordings.",
      },
      {
        title: "Audio Editing Tools",
        about:
          "Integrated audio editing tools enable podcasters to edit their recordings directly within the platform. Users can trim, enhance, add effects, and adjust audio levels to refine their podcasts before publishing.",
      },
      {
        title: "Podcast Management",
        about:
          "Podcasters have comprehensive management capabilities, allowing them to organize, categorize, and manage their podcast episodes. They can schedule episodes, set release dates, and archive older content.",
      },
      {
        title: "Listing and Publishing",
        about:
          "The platform facilitates listing and publishing podcasts across major podcast directories and platforms. Podcasters can manage metadata, descriptions, and cover art, ensuring visibility and accessibility for their audience.",
      },
      {
        title: "Community Engagement",
        about:
          "Podcast.eight.network supports community engagement features such as listener comments, ratings, and sharing capabilities. These features encourage interaction and feedback from the audience, fostering a community around each podcast.",
      },
      {
        title: "Analytics and Insights",
        about:
          "Analytics tools provide podcasters with valuable insights into their audience demographics, listening trends, and performance metrics. This data helps creators understand their audience better and refine their content strategy.",
      },
      {
        title: "Monetization Options",
        about:
          "The platform may offer monetization options such as sponsorship integrations, subscription models, or ad placements within podcasts. These opportunities enable podcasters to generate revenue from their content.",
      },
      {
        title: "User-Friendly Interface",
        about:
          "With a user-friendly interface, podcast.eight.network makes it easy for podcasters to navigate and utilize its features effectively. Intuitive controls and clear workflows streamline the podcasting process from recording to publishing.",
      },
    ],
    demoLink: "https://podcast.eight.network",
    image: Podcast,
    imageArray: [Podcast1, Podcast2, Podcast],
    isDown: false,
  },
  {
    title: "Eight Studio",
    about:
      "Eight Podcast provides podcasters with live broadcasting, recording, editing tools, episode management, cross-platform publishing, community engagement features, analytics, monetization options, and a user-friendly interface—all in one centralized platform.",
    subPoints: [
      {
        title: "Live Audio Streaming",
        about:
          "Eight Studio enables broadcasters to host live shows, interviews, discussions, and events in real-time through audio streaming.",
      },
      {
        title: "Recording Capabilities",
        about:
          "Users can record podcasts, audio documentaries, interviews, and more directly within Eight Studio.",
      },
      {
        title: "Listener Management",
        about:
          "Manage listeners during live broadcasts, including features to view and interact with audience members, moderate comments, and engage in real-time.",
      },
      {
        title: "Mic Passing",
        about:
          "Enable mic passing functionality to allow multiple hosts or guests to take turns speaking during live shows or discussions.",
      },
      {
        title: "Kick Listener",
        about:
          "Moderation tools include the ability to remove or temporarily block listeners who violate community guidelines or disrupt the broadcast.",
      },
      {
        title: "Cross-Platform Accessibility",
        about:
          "Accessible across various devices and operating systems, ensuring flexibility and convenience for broadcasters and listeners.",
      },
      {
        title: "Interactive Features",
        about:
          "Engage listeners with interactive features such as live chat, audience polls, and real-time feedback mechanisms.",
      },
      {
        title: "Analytics and Insights",
        about:
          "Gain insights into audience engagement, listener demographics, playback metrics, and content performance with comprehensive analytics.",
      },
      {
        title: "User-Friendly Interface",
        about:
          "An intuitive interface simplifies audio streaming, management tasks, and interaction with listeners.",
      },
    ],
    demoLink: "https://studio.eight.network",
    image: Studio,
    isDown: true,
    imageArray: [Studio],
  },
];

export const navItems = [
  {
    icon: <Linkedin />,
    name: "LinkedIn",
    isDownload: false,
    link: "https://www.linkedin.com/in/harshal-pagare-4169221b3",
    target: "_blank",
  },
  {
    icon: <Phone />,
    name: "WhatsApp",
    isDownload: false,
    link: "https://wa.me/7387709840",
    target: "_blank",
  },
  {
    icon: <Mail />,
    name: "Mail",
    isDownload: false,
    link: "mailto:harshalpa34@gmail.com",
    target: "_blank",
  },

  {
    icon: <Download />,
    name: "Resume",
    isDownload: true,
    link: "https://drive.google.com/file/d/1BYXeTurMdeaohnwi-OO7CzTdMJtuRoVz/view",
    target: "_blank",
  },
];
