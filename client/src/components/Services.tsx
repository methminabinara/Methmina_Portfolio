import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cloud, Smartphone, Database, Palette, Wrench } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Focus on performance, scalability, and user experience.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications using React Native and Expo. Native iOS and Android development for high-performance requirements.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Cloud infrastructure design and deployment on AWS, Azure, and GCP. Serverless architectures, microservices, and container orchestration.",
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description:
        "RESTful and GraphQL API development with robust authentication, data validation, and comprehensive documentation. Scalable database design.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design with modern interfaces. Responsive layouts, accessibility compliance, and seamless user experiences across devices.",
    },
    {
      icon: Wrench,
      title: "DevOps & CI/CD",
      description:
        "Automated deployment pipelines, infrastructure as code, monitoring solutions, and performance optimization for production environments.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="hover-elevate active-elevate-2 cursor-pointer"
              onClick={() => console.log(`${service.title} clicked`)}
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="p-6">
                <div className="mb-4 p-3 rounded-md bg-primary/10 w-fit">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
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
