import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiTypescript, SiOpenjdk, SiNextdotjs, SiNodedotjs, SiExpress, SiPython, SiFastapi, SiPostgresql, SiMongodb, SiRedis, SiDocker, SiKubernetes, SiGit, SiJavascript, SiC, SiHtml5, SiTailwindcss, SiMysql, SiCloudflare } from "react-icons/si";
import { FaJava, FaMicrosoft } from "react-icons/fa";

export function About() {
  const techStack = [
    {
      category: "Programming Languages",
      techs: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Python", icon: SiPython, color: "text-blue-400" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "C", icon: SiC, color: "text-blue-600" },
        { name: "HTML/CSS", icon: SiHtml5, color: "text-orange-500" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      techs: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express", icon: SiExpress, color: "text-foreground" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      ],
    },
    {
      category: "Cloud & DevOps",
      techs: [
        { name: "Microsoft Azure", icon: FaMicrosoft, color: "text-blue-500" },
        { name: "Cloudflare", icon: SiCloudflare, color: "text-orange-500" },
        { name: "Git", icon: SiGit, color: "text-orange-600" },
      ],
    },
    {
      category: "Databases",
      techs: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      ],
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dedicated software engineer with 1+ years of experience building
            enterprise-scale applications. I combine technical expertise with
            creative problem-solving to deliver exceptional user experiences and
            robust backend systems.
          </p>
        </div>

        <div className="space-y-12">
          {techStack.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-3 hover-elevate rounded-lg p-4 group"
                    data-testid={`tech-${tech.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted border-2 border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tech.icon className={`w-10 h-10 md:w-12 md:h-12 ${tech.color}`} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}