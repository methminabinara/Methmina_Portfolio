import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cloud, Smartphone, Database, Palette, Wrench } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Focus on performance, scalability, and user experience.",
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Cloud infrastructure design and deployment on AWS, Azure, and GCP. Serverless architectures, microservices, and container orchestration.",
      color: "from-cyan-500/10 to-cyan-600/10",
      iconColor: "text-cyan-600",
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description:
        "RESTful and GraphQL API development with robust authentication, data validation, and comprehensive documentation. Scalable database design.",
      color: "from-green-500/10 to-green-600/10",
      iconColor: "text-green-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design with modern interfaces. Responsive layouts, accessibility compliance, and seamless user experiences across devices.",
      color: "from-purple-500/10 to-purple-600/10",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive software engineering services tailored to your business
            needs. From concept to deployment and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="hover-elevate overflow-hidden border-2 group cursor-pointer"
              onClick={() => console.log(`${service.title} clicked`)}
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-white/5" />
                <service.icon className={`w-16 h-16 ${service.iconColor} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}