import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import courseFlow from "@assets/generated_images/CourseFlow.png";
import rathagala from "@assets/generated_images/Rathagala.png";
import maternyCare from "@assets/generated_images/MaternyCare.png";
import trafficMonitor from "@assets/generated_images/TrafficMonitor.png";
import portfolio from "@assets/generated_images/Portfolio.png";

export function Projects() {
  const projects = [
    {
      title: "CourseFlow",
      description:
        "CourseFlow is a course management platform for students, teachers, and affiliates to manage courses and track progress.",
      image: courseFlow,
      tags: ["Next.js", "Express.js", "PostgreSQL"],
      github: "https://github.com/iamVihanga/donext-lms",
      demo: "https://www.courseflow.academy/",
      featured: true,
    },
    {
      title: "Rathagala.lk",
      description:
        "Rathagala.lk is an online vehicle listing platform where users can publish ads, browse available vehicles, and contact sellers directly.",
      image: rathagala,
      tags: ["Next.js", "MongoDB"],
      github: "https://github.com/methminabinara/Rathagala.lk",
      demo: "https://rathagala-delta.vercel.app/",
    },
    {
      title: "MaternyCare",
      description:
        "MaternyCare is a maternal care platform that helps pregnant women track health and access guidance from healthcare professionals.",
      image: maternyCare,
      tags: ["React", "Express.js", "PostgreSQL"],
      github: "https://github.com/Xanvia/MaternyCare",
      demo: "https://demo.com",
    },
    {
      title: "Traffic Monitor",
      description:
        "Traffic Monitor is a system that tracks and counts vehicles, analyzing traffic flow and providing real-time movement insights.",
      image: trafficMonitor,
      tags: ["Python", "OpenCV", "YOLOv8"],
      github: "https://github.com/methminabinara/TrafficMonitor",
      demo: "https://demo.com",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Personal Portfolio showcasing my projects, skills, and experience as a software engineer, built for performance and responsiveness.",
      image: portfolio,
      tags: ["React", "Azure", "Cloudflare"],
      github: "https://github.com/methminabinara/Methmina_Portfolio",
      demo: "https://methminabinara.online/",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of recent projects showcasing my expertise in full-stack
            development, cloud architecture, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden hover-elevate flex flex-col"
              data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 flex-1">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-project-tag-${tag.toLowerCase()}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 gap-2 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.github, "_blank")}
                  data-testid={`button-project-github-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  size="sm"
                  onClick={() => window.open(project.demo, "_blank")}
                  data-testid={`button-project-demo-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {project.title === "CourseFlow" || project.title === "Personal Portfolio Website"
                    ? "Live Site"
                    : "Demo"}
                </Button>


              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
