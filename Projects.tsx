import { ExternalLink, Calendar, ShoppingCart, UtensilsCrossed } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Immart – E-commerce REST API",
    description:
      "A comprehensive e-commerce backend API with product management, search functionality, order processing, and user authentication.",
    date: "September 2025",
    icon: ShoppingCart,
    features: [
      "Product, search, and order management",
      "Image upload with reviews and ratings",
      "Pagination, filtering, and sorting",
      "Role-based authentication",
    ],
    technologies: ["Spring Boot", "MySQL", "REST APIs", "Postman"],
  },
  {
    id: 2,
    title: "Foody – Food Ordering Application",
    description:
      "A full-stack food ordering application with secure user authentication and complete ordering workflow from menu browsing to checkout.",
    date: "August 2025",
    icon: UtensilsCrossed,
    features: [
      "Full-stack application architecture",
      "Secure user authentication",
      "Complete ordering workflow",
      "Responsive React frontend",
    ],
    technologies: ["Spring Boot", "React", "MySQL", "REST APIs"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Featured work from my portfolio
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <article key={project.id} className="card-base group">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                    <IconComponent className="text-accent" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/Imranmeh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            <span>View more on GitHub</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
