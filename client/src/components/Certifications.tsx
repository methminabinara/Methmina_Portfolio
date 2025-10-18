import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { SiCoursera, SiHackerrank } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Cloud, Server } from "lucide-react";
import { PiCertificate } from "react-icons/pi";

export function Certifications() {
  const certifications = [
    {
      name: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services",
      icon: FaAws,
      date: "2025",
      link: "https://www.credly.com/badges/183be4a1-2aa0-4a64-837d-c032f214cd97",
      color: "from-orange-500/10 to-orange-600/10",
      iconColor: "text-orange-600",
    },
    {
      name: "AWS Educate Getting Started with Networking",
      issuer: "Amazon Web Services",
      icon: FaAws,
      date: "2025",
      link: "https://www.credly.com/badges/b449c9bc-cf16-4fd8-8421-f283f48de1aa",
      color: "from-orange-500/10 to-orange-600/10",
      iconColor: "text-orange-600",
    },
    {
      name: "AWS Educate Getting Started with Security",
      issuer: "Amazon Web Services",
      icon: FaAws,
      date: "2025",
      link: "https://www.credly.com/badges/14b94e25-14b3-4693-873d-f16417a3d985",
      color: "from-orange-500/10 to-orange-600/10",
      iconColor: "text-orange-600",
    },
    {
      name: "React (Basic)",
      issuer: "HackerRank",
      icon: SiHackerrank,
      date: "2024",
      link: "https://www.hackerrank.com/certificates/f54807c979a1",
      color: "from-green-500/10 to-green-600/10",
      iconColor: "text-green-600",
    },
    {
      name: "Introduction to Frontend Development",
      issuer: "Meta (Coursera)",
      icon: SiCoursera,
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/M7JL7ERUCU24",
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600",
    },
    {
      name: "Introduction to Backend Development",
      issuer: "Meta (Coursera)",
      icon: SiCoursera,
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/94TTKYEQSB9J",
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600",
    },
    {
      name: "Fundamentals of DevOps",
      issuer: "KodeKloud",
      icon: PiCertificate,
      date: "2025",
      link: "https://learn.kodekloud.com/certificate/c8bbf133-31ed-48ad-8ec4-275027f3f4c4",
      color: "from-purple-500/10 to-purple-600/10",
      iconColor: "text-purple-600",
    },
    {
      name: "Get Started with Figma",
      issuer: "Coursera",
      icon: SiCoursera,
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/ZWYCBGBUKKW2",
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600",
    },
    {
      name: "Car Transport App in Figma",
      issuer: "Coursera",
      icon: SiCoursera,
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/CD2ZD7JDHH44",
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600",
    },
    {
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Google (Coursera)",
      icon: SiCoursera,
      date: "2022",
      link: "https://drive.google.com/file/d/1MOPTdr5-xiDYmhwjFautilJJahbmsYX4/view?pli=1",
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600",
    },
    {
      name: "Artificial Intelligence in Marketing",
      issuer: "University of Virginia Darden School of Business (Coursera)",
      icon: SiCoursera,
      date: "2021",
      link: "https://drive.google.com/file/d/1XDxw63RtfnANxsk2czfstywrhD5W53D7/view",
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600",
    },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="hover-elevate group overflow-hidden border-2 cursor-pointer"
              onClick={() => window.open(cert.link, "_blank")}
              data-testid={`card-cert-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className={`h-32 bg-gradient-to-br ${cert.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-white/5" />
                <cert.icon className={`w-16 h-16 ${cert.iconColor} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="text-sm font-semibold mb-2 leading-tight line-clamp-2 min-h-[2.5rem]">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {cert.issuer}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {cert.date}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs px-2 -mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(cert.link, "_blank");
                    }}
                    data-testid={`button-verify-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}