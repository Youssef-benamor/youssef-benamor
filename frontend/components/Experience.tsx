import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const workExperience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Lead development of enterprise applications, mentoring junior developers, and architecting scalable solutions.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Developed responsive web applications and improved user experience for client projects.",
      technologies: ["React", "Vue.js", "Tailwind CSS", "Figma"]
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Built and maintained company website, implemented new features, and optimized performance.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Art",
      school: "Ibno Rachik high school",
      period: "2021 - 2022",
      description: "Focused on history and philosophy."
    },
    {
      degree: "Software Developer Full stack",
      school: "GoMyCode",
      period: "2025",
      description: "Professional certification in full stack development."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My professional journey and educational background that shaped my expertise in web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span>{job.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{job.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl">Education & Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span>{edu.school}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{edu.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}