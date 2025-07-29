import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, file sharing, and team communication.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/Youssef-benamor/Chat-Shawty",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and personalized alerts.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Chat shawty",
      description:
        "A full-stack chat application with real-time messaging, user profiles and authentication.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "react",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "Node.js",
        "Express",
        "Socket.io",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Youssef-benamor/Chat-Shawty",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of projects that showcase my skills and passion for
            creating innovative digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
