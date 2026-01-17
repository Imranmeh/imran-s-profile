import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {/* Experience Item */}
          <div className="relative pl-8 pb-8">
            {/* Timeline Line */}
            <div className="absolute left-[5px] top-3 bottom-0 timeline-line" />
            
            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 timeline-dot" />

            {/* Content */}
            <div className="card-base bg-background">
              {/* Header */}
              <div className="mb-4">
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  Java Full-Stack Developer Intern
                </h3>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Building size={16} />
                    <span>Networkz Systems Pvt Ltd</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    <span>Nagercoil</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>June 2025 – August 2025</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Built and tested REST APIs using Spring Boot for various business requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Designed MySQL database schemas and implemented CRUD operations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Implemented authentication features and conducted API testing with Postman
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Developed React frontend components with seamless API integration
                  </span>
                </li>
              </ul>

              {/* Tech Stack */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "React", "MySQL", "REST APIs", "Postman"].map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
