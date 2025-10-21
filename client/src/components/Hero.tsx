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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">Hi, I am</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Methmina Binara
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                Full-Stack Developer
              </h2>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Crafting scalable, high-performance applications with modern web technologies. 
              Specializing in full-stack development, cloud infrastructure, and DevOps practices.
            </p>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap items-center gap-3 py-2">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                  title={tech.name}
                  data-testid={`badge-tech-${tech.name.toLowerCase()}`}
                >
                  <tech.icon className="w-6 h-6" />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                data-testid="button-view-projects"
              >
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1g0FQmfiejroG87nhR-5GikVbaSRQT_Mf/view?usp=sharing", "_blank")
                }
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => window.open("https://github.com/methminabinara", "_blank")}
                data-testid="button-github"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => window.open("https://www.linkedin.com/in/methmina-binara-864999251/", "_blank")}
                data-testid="button-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => scrollToSection("contact")}
                data-testid="button-email"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                <img 
                  src={profileImage} 
                  alt="Methmina Binara" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce rounded-full"
            onClick={() => scrollToSection("about")}
            data-testid="button-scroll-down"
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}