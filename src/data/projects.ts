import type { Project } from "../types/project";

// Add or edit your projects here. Each one renders automatically
// in the Projects section — no JSX to touch.
export const projects: Project[] = [
  {
    id: "proj-01",
    title: "Music is Peace",
    year: "2026",
    description:
      "A music streaming application for discovering and streaming music through albums, artists, stations, and playlists, with analytics and content management features for artists.",
    stack: ["React Native", "TypeScript", "Redux Toolkit", "Next.js"],
  },
  {
    id: "proj-02",
    title: "Global Food Critic",
    year: "2026",
    description:
      "A multi-restaurant food delivery platform where users can explore restaurants, browse menus, add items from multiple restaurants, and place orders.",
    stack: ["React Native", "TypeScript", "Redux", "Next.js", "Tailwind CSS"],
  },
  {
    id: "proj-03",
    title: "Clique",
    year: "2026",
    description:
      "A community platform where users can join interest-based groups, share media, publish blogs, chat with members, and create or attend events.",
    stack: ["React Native", "TypeScript", "Redux Toolkit"],
  },
  {
    id: "proj-04",
    title: "EasyOp",
    year: "2026",
    description:
      "An online OP appointment booking platform that helps patients find hospitals, departments, doctors, and available consultation slots.",
    stack: ["React Native", "TypeScript", "Redux"],
  },
  {
    id: "proj-05",
    title: "Listing Hub",
    year: "2026",
    description:
      "A listing platform for discovering properties, meeting spaces, party venues, seminar halls, and other event spaces.",
    stack: ["React Native", "TypeScript", "Redux", "REST APIs", "Tailwind CSS"],
  },
  {
    id: "proj-06",
    title: "Global Tattoo",
    year: "2026",
    description:
      "A mobile platform for exploring tattoo content and discovering tattoo artists through tagged images and artist profiles.",
    stack: ["React Native", "TypeScript", "Redux"],
  },
  {
    id: "proj-07",
    title: "MSAL Authentication",
    year: "2026",
    description:
      "Integrated Microsoft Authentication Library into a React Native application with secure authentication, session management, and access-token handling.",
    stack: ["React Native", "TypeScript", "MSAL", "Azure AD"],
  },
  {
    id: "proj-08",
    title: "V-Tube",
    year: "2025",
    description:
      "A full-stack video streaming platform with authentication, video uploads, playback, search, content browsing, and user interactions.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    repo: "https://github.com/praneethboilla/vtube-frontend",
  },
  {
    id: "proj-09",
    title: "Grad Stickers",
    year: "2025",
    description:
      "A MERN-based e-commerce application for browsing, selecting, and purchasing customizable wall stickers.",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT"],
    repo: "https://github.com/praneethboilla/Grab-Stickers_Front-end",
  },
  {
    id: "proj-10",
    title: "SoulMagle",
    year: "2025",
    description:
      "A privacy-first video calling platform with real-time communication and interest-based user matching using OpenAI embeddings.",
    stack: ["React", "Node.js", "WebRTC", "Socket.IO", "OpenAI Embeddings", "JWT"],
    repo: "https://github.com/praneethboilla/soulmagle",
  },
];
