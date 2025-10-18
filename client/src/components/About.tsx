import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Cloud, Smartphone, GitBranch } from "lucide-react";

export function About() {
  const skills = [
    {
      category: "Frontend",
      icon: Code2,
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"],
    },
    {
      category: "Database",
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle"],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      items: ["React Native", "Expo", "iOS", "Android", "PWA"],
    },
    {
      category: "Tools & Practices",
      icon: GitBranch,
      items: ["Git", "Agile", "TDD", "Microservices", "System Design"],
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dedicated software engineer with 5+ years of experience building
            enterprise-scale applications. I combine technical expertise with
            creative problem-solving to deliver exceptional user experiences and
            robust backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <Card
              key={skillGroup.category}
              className="hover-elevate"
              data-testid={`card-skill-${skillGroup.category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <skillGroup.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
        </div>
      </div>
    </section>
  );
}
