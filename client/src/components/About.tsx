import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiTypescript, SiOpenjdk, SiNextdotjs, SiNodedotjs, SiExpress, SiPython, SiFastapi, SiPostgresql, SiMongodb, SiRedis, SiDocker, SiKubernetes, SiGit, SiJavascript, SiC, SiHtml5, SiTailwindcss, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export function About() {
  const techStack = [
    {
      category: "Programming Languages",
      techs: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: SiPython },
        { name: "Java", icon: FaJava },
        { name: "C", icon: SiC },
        { name: "HTML/CSS", icon: SiHtml5 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      techs: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      category: "DevOps & Tools",
      techs: [
        // { name: "Docker", icon: SiDocker },
        // { name: "Kubernetes", icon: SiKubernetes },
        { name: "Git", icon: SiGit },
      ],
    },
    {
      category: "Databases",
      techs: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
      ],
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12">
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
                    className="flex flex-col items-center gap-3 hover-elevate rounded-lg p-4"
                    data-testid={`tech-${tech.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-primary/20 bg-card flex items-center justify-center hover:border-primary/40 transition-colors">
                      <tech.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
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

        {/* <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="text-years-experience">
              5+
            </div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="text-projects-completed">
              50+
            </div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="text-clients-served">
              30+
            </div>
            <div className="text-muted-foreground">Clients Served</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
