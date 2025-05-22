"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import logo from "../assets/logo.png";
import logoPis from "../assets/logoPis.jpg";
import logoSROMS from "../assets/logoSROMS.png";
import logoXTravis from "../assets/logoXTravis.png";
export default function Projects() {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description:
        "A full-stack real-time chat web application supporting one-on-one messaging with persistent chat history.",
      image: logo,
      techStack: [
        "ReactJS",
        "Tailwind CSS",
        "TypeScript",
        "Java Spring Boot",
        "Microservices",
        "PostgreSQL",
        "Docker",
        "WebSocket",
        "Git",
      ],
      points: [
        "Developed a full-stack real-time chat web application supporting one-on-one messaging with persistent chat history.",
        "Built a responsive frontend using ReactJS and Tailwind CSS, enabling a clean and user-friendly chat interface.",
        "Designed and implemented the backend with Java Spring Boot, structured as microservices for scalability and maintainability.",
        "Integrated WebSocket for bi-directional, low-latency communication between clients and server.",
        "Utilized PostgreSQL to store user accounts, message history, and metadata with optimized schema design.",
        "Containerized services using Docker, enabling consistent local development and deployment environments.",
      ],
      github: "https://github.com/NVNnguyen",
      demo: "#",
    },
    {
      title: "FPT University Student Management System",
      description:
        "A web-based system to manage student information, courses, and grades for internal university use.",
      image: logoSROMS,
      techStack: [
        "JSP/Servlet",
        "HTML",
        "CSS",
        "SQL Server",
        "MVC Architecture",
        "GitHub",
        "Docker",
      ],
      points: [
        "Developed a web-based system to manage student information, courses, and grades for internal university use.",
        "Built backend logic using JSP and Servlet, following the MVC architecture to separate concerns and improve maintainability.",
        "Designed frontend interfaces with HTML/CSS, allowing users (staff/admin) to create, view, edit, and delete student data.",
        "Integrated SQL Server to store and retrieve data with secure and efficient queries.",
        "Used GitHub for version control and collaboration with another team member, applying agile principles.",
        "Containerized the project using Docker for consistent development and deployment.",
      ],
      github: "https://github.com/NVNnguyen",
      demo: "#",
    },
    {
      title: "Social Media Mobile App",
      description:
        "A cross-platform social networking app inspired by Locket and Threads, focusing on real-time photo sharing and short message interactions.",
      image: logoPis,
      techStack: ["React Native", "Java Spring Boot", "AWS", "Docker", "Git"],
      points: [
        "Built a cross-platform social networking app inspired by Locket and Threads, focusing on real-time photo sharing and short message interactions.",
        "Developed the mobile interface using React Native, implementing features such as user authentication, posting, commenting, following, and real-time updates.",
        "Designed and implemented scalable RESTful APIs with Java Spring Boot, handling user management, media storage, and social interactions.",
        "Deployed backend services on AWS (EC2, S3, RDS) with Docker, ensuring high availability and scalability.",
        "Integrated real-time notifications and live feed updates to enhance user experience.",
      ],
      github: "https://github.com/NVNnguyen",
      demo: "#",
    },
    {
      title: "Multiple Camera Tracking Search System",
      description:
        "An AI-powered system to track and search individuals across multiple cameras using deep learning models.",
      image: logoXTravis,
      techStack: [
        "ReactJS",
        "TailwindCSS",
        "Java Spring Boot",
        "FastAPI",
        "PostgreSQL",
        "Qdrant",
        "Docker",
        "GitHub",
        "TensorFlow",
        "PyTorch",
      ],
      points: [
        "Developed an AI-powered system to track and search individuals across multiple cameras using deep learning models.",
        "Built an interactive frontend using ReactJS + TailwindCSS for displaying live tracking and search results.",
        "Developed REST APIs using Spring Boot and FastAPI to handle image ingestion, feature extraction, and identity matching.",
        "Applied PyTorch and TensorFlow to train and deploy deep learning models for object detection and feature embedding.",
        "Used Qdrant vector database to perform high-performance vector similarity search across embeddings.",
        "Managed containerization and service orchestration via Docker and GitHub workflows.",
      ],
      github: "https://github.com/NVNnguyen",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.png"}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 5 && (
                      <Badge variant="outline">
                        +{project.techStack.length - 5} more
                      </Badge>
                    )}
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    {project.points.slice(0, 3).map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gap-1 bg-green-600 hover:bg-green-700"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
