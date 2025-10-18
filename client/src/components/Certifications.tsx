import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { SiGoogle, SiKubernetes } from "react-icons/si";
import { Cloud, Server } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      icon: Cloud,
      date: "2023",
      credential: "AWS-SA-2023-123456",
      link: "https://aws.amazon.com/certification/",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      icon: SiGoogle,
      date: "2023",
      credential: "GCP-PD-2023-789012",
      link: "https://cloud.google.com/certification",
    },
    {
      name: "Microsoft Azure Developer Associate",
      issuer: "Microsoft",
      icon: Server,
      date: "2022",
      credential: "AZ-204-2022-345678",
      link: "https://microsoft.com/learn",
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      icon: SiKubernetes,
      date: "2023",
      credential: "CKA-2023-901234",
      link: "https://cncf.io",
    },
  ];

  const achievements = [
    "Top 1% Stack Overflow Contributor",
    "Open Source Maintainer - 5K+ Stars",
    "Tech Conference Speaker",
    "Hackathon Winner 2023",
  ];

  return (
    <section id="certifications" className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and industry recognitions demonstrating
            expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert) => (
            <Card
              key={cert.credential}
              className="hover-elevate"
              data-testid={`card-cert-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground mb-3">
                      {cert.credential}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(cert.link, "_blank")}
                      data-testid={`button-verify-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Verify
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Notable Achievements</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="flex items-center gap-2"
                  data-testid={`text-achievement-${achievement.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CheckCircle2 className="w-4 h-4 text-chart-2 flex-shrink-0" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
