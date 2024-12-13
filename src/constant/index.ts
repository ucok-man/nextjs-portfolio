import github from "../assets/navbar/github.svg";
import instagram from "../assets/navbar/instagram.svg";
import linkedin from "../assets/navbar/linkedin.svg";
import twitter from "../assets/navbar/x.svg";

import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";

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
    title: "Cloud Deployment Automation",
    image: project1,
    description:
      "Developed a system to automate cloud resource provisioning and deployment processes using Terraform and AWS CloudFormation, reducing setup time by 80%.",
    technologies: ["AWS", "Terraform", "CloudFormation", "Python"],
  },
  {
    title: "Kubernetes Monitoring Dashboard",
    image: project2,
    description:
      "Created a real-time monitoring dashboard for Kubernetes clusters using Prometheus and Grafana, enabling detailed performance metrics and alerts.",
    technologies: ["Kubernetes", "Prometheus", "Grafana", "Helm"],
  },
  {
    title: "CI/CD Pipeline Optimization",
    image: project3,
    description:
      "Designed and optimized CI/CD pipelines for a large-scale application, integrating Jenkins and Docker to enable faster builds and deployments.",
    technologies: ["Jenkins", "Docker", "GitLab CI", "Bash"],
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

export const CONTACT = {
  address: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
  phoneNo: "+1 800 123 4567",
  email: "contact@myportfolio.com",
};
