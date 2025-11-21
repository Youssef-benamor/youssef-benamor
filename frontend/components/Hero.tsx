import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import YousseF from "./figma/YousseF.jpeg";

// Serve the image from the public folder and reference it by path in the img src

export function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-20"
      id="home"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary" className="w-fit">
              Available for work
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Youssef Benamor</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground">
              Full Stack Developer & Entry-level Cybersecurity Learner
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-md">
            I create beautiful, functional web applications that solve
            real-world problems. Passionate about clean code, user experience,
            and innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 cursor-pointer">
            <a href="#projects">
              <Button
                size="lg"
                className="w-fit hover:bg-primary/10 hover:text-white hover:shadow-lg hover:shadow-primary/10 hover:shadow-primary/10 hover:shadow-primary/10 hover:shadow-primary/10 hover:shadow-primary/10 hover:shadow-primary/10 hover:shadow-primary/10 hover:shadow-primary/10 hover:shadow-primary/10 hover:shadow-primary/10 hover:shadow-primary/"
              >
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="w-fit cursor-pointer hover:bg-primary/10 hover:text-white hover:shadow-lg hover:shadow-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:shadow-lg hover:shadow-primary/"
              >
                Get In Touch
              </Button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/10">
              <img
                src={YousseF}
                alt="Youssef Benamor"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">👋</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
