import github from "../assets/navbar/github.svg";
import instagram from "../assets/navbar/instagram.svg";
import linkedin from "../assets/navbar/linkedin.svg";
import twitter from "../assets/navbar/x.svg";

import project1 from "../assets/projects/project1.webp";
import project2 from "../assets/projects/project2.webp";
import project3 from "../assets/projects/project3.webp";

export const PROFILE_LINKS = [
  {
    svg: linkedin,
    url: "https://linkedin.com",
  },
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
    year: "2023 - Present",
    role: "Senior DevOps Engineer",
    company: "Amazon Web Services",
    description: `Led initiatives to automate deployment pipelines using AWS services and Terraform. Implemented containerized microservices with Docker and orchestrated them with Kubernetes. Enhanced CI/CD workflows, improving deployment speed and reducing downtime.`,
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
  },
  {
    year: "2021 - 2023",
    role: "DevOps Engineer",
    company: "Microsoft",
    description: `Architected and maintained scalable infrastructure on Azure, ensuring 99.9% uptime. Automated configuration management processes using Ansible and Terraform. Collaborated with development teams to improve build processes and integrate CI/CD pipelines.`,
    technologies: ["Azure", "Terraform", "Ansible", "Bash", "GitLab CI"],
  },
  {
    year: "2020 - 2021",
    role: "Cloud Infrastructure Engineer",
    company: "Google Cloud",
    description: `Designed and managed cloud infrastructure for high-traffic applications. Implemented monitoring and logging solutions using Prometheus and Grafana. Assisted in migrating legacy systems to Google Cloud Platform, ensuring minimal service disruption.`,
    technologies: ["Google Cloud", "Prometheus", "Grafana", "Python", "Helm"],
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
