import { GraduationCap, Code, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A brief introduction to who I am
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a passionate Software Developer with a strong foundation in 
              Java and full-stack development. Recently completed my B.E. in 
              Computer Science Engineering with a CGPA of 8.0 from Ponjesly 
              College of Engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My experience spans building robust REST APIs, designing efficient 
              database schemas, and creating responsive frontend applications. 
              I enjoy solving complex problems and turning ideas into functional 
              software solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm seeking entry-level opportunities where I can 
              contribute my technical skills while continuing to grow as a 
              developer in a collaborative environment.
            </p>
          </div>

          {/* Right - Quick Facts */}
          <div className="space-y-6">
            {/* Education */}
            <div className="card-base">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-secondary">
                  <GraduationCap className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    B.E. Computer Science Engineering
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Ponjesly College of Engineering • May 2025
                  </p>
                  <p className="text-accent text-sm font-medium mt-1">
                    CGPA: 8.0
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Area */}
            <div className="card-base">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-secondary">
                  <Code className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Focus Area</h3>
                  <p className="text-muted-foreground text-sm">
                    Backend Development with Java & Spring Boot
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Full-Stack Applications with React
                  </p>
                </div>
              </div>
            </div>

            {/* Goal */}
            <div className="card-base">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-secondary">
                  <Target className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Career Goal</h3>
                  <p className="text-muted-foreground text-sm">
                    Seeking entry-level software engineer role to contribute 
                    and grow in a collaborative team environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
