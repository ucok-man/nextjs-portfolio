import github from "../assets/navbar/github.svg";
import instagram from "../assets/navbar/instagram.svg";
import twitter from "../assets/navbar/x.svg";

import project1 from "../assets/projects/project1.webp";
import project2 from "../assets/projects/project2.webp";
import project3 from "../assets/projects/project3.webp";

export const PROFILE_LINKS = [
  {
    svg: github,
    url: "https://github.com",
  },
  {
    svg: instagram,
    url: "https://instagram.com",
  },
  {
    svg: twitter,
    url: "https://twitter.com",
  },
];

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Senior Fullstack Developer",
    company: "Meta",
    description: `Led the development of scalable web applications using React and Node.js. Improved application performance by 30% through optimized code and database queries. Mentored junior developers and contributed to design system enhancements.`,
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "Docker"],
  },
  {
    year: "2020 - 2022",
    role: "Fullstack Developer",
    company: "Netflix",
    description: `Built interactive user interfaces for streaming platforms using React and Redux. Developed and maintained RESTful APIs to handle millions of user requests daily. Integrated third-party payment gateways and ensured a seamless user experience.`,
    technologies: ["React", "Redux", "Express.js", "MongoDB", "AWS"],
  },
  {
    year: "2018 - 2020",
    role: "Junior Fullstack Developer",
    company: "Shopify",
    description: `Collaborated with cross-functional teams to deliver e-commerce solutions. Built reusable UI components and backend services. Conducted code reviews and wrote unit tests, ensuring high code quality.`,
    technologies: ["Vue.js", "Node.js", "MySQL", "Firebase", "Jest"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    image: project1,
    description:
      "Built a full-stack e-commerce platform featuring user authentication, product browsing, shopping cart functionality, and payment gateway integration. Enhanced SEO and performance with server-side rendering.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Social Media Application",
    image: project2,
    description:
      "Developed a social media app with real-time chat, user posts, likes, and comments. Implemented WebSocket for live updates and a cloud-based media storage system.",
    technologies: [
      "React.js",
      "Express.js",
      "Firebase",
      "WebSocket",
      "PostgreSQL",
    ],
  },
  {
    title: "Project Management Tool",
    image: project3,
    description:
      "Created a project management tool with task tracking, team collaboration, and Gantt chart visualization. Designed a role-based access system for user management.",
    technologies: ["React", "NestJS", "MySQL", "Redis", "Docker"],
  },
];

export const TESTIMONIALS = [
  {
    profilePic: "/testimonial.png",
    testimonial:
      "Alvin's ability to seamlessly bridge the gap between front-end design and back-end functionality is unmatched. Her commitment to delivering high-quality solutions is evident in every project she undertakes.",
    name: "Samantha Lee",
    title: "CTO at Tech Innovators",
  },
  {
    profilePic: "/testimonial.png",
    testimonial:
      "Alvin has a rare talent for simplifying complex concepts. Her teaching not only builds technical skills but also instills confidence in her students. She is a true mentor and inspiration.",
    name: "Michael Johnson",
    title: "Founder at Code Academy",
  },
  {
    profilePic: "/testimonial.png",
    testimonial:
      "Working with Alvin has been an absolute privilege. Her expertise in modern frameworks and focus on user experience make her an invaluable contributor to any development team.",
    name: "Emily Carter",
    title: "Product Manager at Startup Labs",
  },
];
