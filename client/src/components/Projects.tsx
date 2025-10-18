import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import projectManagement from "@assets/generated_images/Project_management_dashboard_screenshot_3e5c016c.png";
import ecommerce from "@assets/generated_images/E-commerce_platform_interface_screenshot_08e08052.png";
import analytics from "@assets/generated_images/Analytics_dashboard_application_screenshot_3f30d26e.png";
import chatApp from "@assets/generated_images/Mobile_chat_application_screenshot_5245821f.png";

export function Projects() {
  const projects = [
    {
      title: "Project Management Platform",
      description:
        "A comprehensive project management solution with real-time collaboration, task tracking, and team analytics. Built for enterprise teams.",
      image: projectManagement,
      tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online shopping platform with payment integration, inventory management, and customer analytics dashboard.",
      image: ecommerce,
      tags: ["Next.js", "Stripe", "MongoDB", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time business intelligence dashboard with data visualization, custom reports, and predictive analytics capabilities.",
      image: analytics,
      tags: ["React", "Python", "FastAPI", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Modern messaging platform with end-to-end encryption, file sharing, video calls, and group chat functionality.",
      image: chatApp,
      tags: ["React Native", "WebRTC", "Socket.io", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
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
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
