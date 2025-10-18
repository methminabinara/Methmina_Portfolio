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
      name: "AWS Educate Introduction to Cloud 101 - Training Badge",
      issuer: "Amazon Web Services",
      icon: FaAws,
      date: "2025",
      // credential: "AWS-SA-2023-123456",
      link: "https://www.credly.com/badges/183be4a1-2aa0-4a64-837d-c032f214cd97",
      badgeImage: null,
    },
    {
      name: "AWS Educate Getting Started with Networking - Training Badge",
      issuer: "Amazon Web Services",
      icon: FaAws,
      date: "2025",
      // credential: "GCP-PD-2023-789012",
      link: "https://www.credly.com/badges/b449c9bc-cf16-4fd8-8421-f283f48de1aa",
      badgeImage: null,
    },
    {
      name: "AWS Educate Getting Started with Security - Training Badge",
      issuer: "Amazon Web Services",
      icon: FaAws,
      date: "2025",
      // credential: "GCP-PD-2023-789012",
      link: "https://www.credly.com/badges/14b94e25-14b3-4693-873d-f16417a3d985",
      badgeImage: null,
    },
    {
      name: "React (Basic)",
      issuer: "HackerRank",
      icon: SiHackerrank ,
      date: "2024",
      // credential: "AZ-204-2022-345678",
      link: "https://www.hackerrank.com/certificates/f54807c979a1",
      badgeImage: null,
    },
    {
      name: "Introduction to Frontend Development",
      issuer: "Meta (Coursera)",
      icon: SiCoursera,
      date: "2023",
      // credential: "CKA-2023-901234",
      link: "https://www.coursera.org/account/accomplishments/verify/M7JL7ERUCU24?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      badgeImage: null,
    },
    {
      name: "Introduction to Backend Development",
      issuer: "Meta (Coursera)",
      icon: SiCoursera,
      date: "2023",
      // credential: "CKA-2023-901234",
      link: "https://www.coursera.org/account/accomplishments/verify/94TTKYEQSB9J?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      badgeImage: null,
    },
    {
      name: "Fundamentals of DevOps",
      issuer: "KodeKloud",
      icon: PiCertificate,
      date: "2025",
      // credential: "CKA-2023-901234",
      link: "https://learn.kodekloud.com/certificate/c8bbf133-31ed-48ad-8ec4-275027f3f4c4",
      badgeImage: null,
    },
    {
      name: "Get Started with Figma",
      issuer: "Coursera",
      icon: SiCoursera,
      date: "2023",
      // credential: "CKA-2023-901234",
      link: "https://www.coursera.org/account/accomplishments/verify/ZWYCBGBUKKW2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project",
      badgeImage: null,
    },
    {
      name: "Car Transport App in Figma",
      issuer: "Coursera",
      icon: SiCoursera,
      date: "2023",
      // credential: "CKA-2023-901234",
      link: "https://www.coursera.org/account/accomplishments/verify/CD2ZD7JDHH44?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=project",
      badgeImage: null,
    },
    {
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Google (Coursera)",
      icon: SiCoursera,
      date: "2022",
      // credential: "CKA-2023-901234",
      link: "https://drive.google.com/file/d/1MOPTdr5-xiDYmhwjFautilJJahbmsYX4/view?pli=1",
      badgeImage: null,
    },
    {
      name: "Artificial Intelligence in Marketing",
      issuer: "University of Virginia Darden School of Business (Coursera)",
      icon: SiCoursera,
      date: "2021",
      // credential: "CKA-2023-901234",
      link: "https://drive.google.com/file/d/1XDxw63RtfnANxsk2czfstywrhD5W53D7/view",
      badgeImage: null,
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
              // key={cert.credential}
              className="hover-elevate"
              data-testid={`card-cert-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {cert.badgeImage ? (
                    <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-card border">
                      <img
                        src={cert.badgeImage}
                        alt={`${cert.name} badge`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                      <cert.icon className="w-8 h-8 text-primary" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    {/* {cert.credential && (
                      <p className="text-xs font-mono text-muted-foreground mb-3">
                        {cert.credential}
                      </p>
                    )} */}
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

        {/* <Card>
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
        </Card> */}
      </div>
    </section>
  );
}
