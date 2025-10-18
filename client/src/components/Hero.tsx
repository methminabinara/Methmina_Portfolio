import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { SiReact, SiNodedotjs, SiTypescript, SiPython, SiDocker } from "react-icons/si";
import { Cloud } from "lucide-react";
import profileImage from "@assets/generated_images/Profile.png";

export function Hero() {
  const techStack = [
    { icon: SiReact, name: "React" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiPython, name: "Python" },
    // { icon: SiDocker, name: "Docker" },
    { icon: Cloud, name: "AWS" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto w-full py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-8">
          <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-border">
            <AvatarImage src={profileImage} alt="Profile" />
            <AvatarFallback className="text-4xl">SE</AvatarFallback>
          </Avatar>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Methmina Binara
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Full-Stack Developer
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionate about building scalable, high-performance applications
              with modern technologies. Specializing in web development, cloud
              infrastructure, and DevOps practices.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <Badge
                key={tech.name}
                variant="secondary"
                className="px-3 py-2 text-sm gap-2"
                data-testid={`badge-tech-${tech.name.toLowerCase()}`}
              >
                <tech.icon className="w-4 h-4" />
                {tech.name}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              data-testid="button-view-projects"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open("https://drive.google.com/file/d/1cDsfjE4lTZR0M6dh9uNwP0YmkugRIeR_/view?usp=sharing", "_blank")
              }
              data-testid="button-download-resume"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://github.com/methminabinara", "_blank")}
              data-testid="button-github"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://www.linkedin.com/in/methmina-binara-864999251/", "_blank")}
              data-testid="button-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("contact")}
              data-testid="button-email"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="mt-8 animate-bounce"
            onClick={() => scrollToSection("about")}
            data-testid="button-scroll-down"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
