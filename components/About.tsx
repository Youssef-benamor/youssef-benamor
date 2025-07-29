import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function About() {
  const skills = [
    "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB",
    "Tailwind CSS", "Figma",  "Git", "REST APIs","Next.js","JavaScript", "HTML", "CSS", "Basic cybersecurity" 
  ];

  const stats = [
    { label: "Years Experience", value: "2+" },
   
    { label: "Happy Clients", value: "10+" },
    { label: "Code Commits", value: "1000+"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm a passionate full-stack developer with over 2 years of
            experience building scalable web applications and intuitive user
            interfaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my journey in web development with a focus on creating
                meaningful digital experiences. I believe that great software
                should be both functional and beautiful.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or chilling with my furry
                friends.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl mb-6">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}