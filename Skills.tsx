const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "REST APIs", "JPA/Hibernate"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Database",
    skills: ["MySQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Maven"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="card-base">
              <h3 className="font-semibold text-foreground mb-4 text-lg">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
