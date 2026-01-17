import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 section-padding">
      <div className="section-container text-center">
        {/* Greeting */}
        <p className="text-muted-foreground text-base md:text-lg mb-4 animate-fade-in">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in font-heading">
          Mohamed Imran S
        </h1>

        {/* Role */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold gradient-text mb-6 animate-fade-in">
          Java Full-Stack Developer
        </h2>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-fade-in">
          <MapPin size={18} />
          <span>Chennai, Tamil Nadu, India</span>
        </div>

        {/* Summary */}
        <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed mb-10 animate-fade-in">
          Software Developer with hands-on experience in Java, Spring Boot, REST APIs, MySQL, and React. 
          Strong backend fundamentals and full application workflows. 
          Actively seeking an entry-level software engineer role.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border border-border bg-card text-foreground hover:bg-secondary transition-colors w-full sm:w-auto"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-fade-in">
          <a
            href="https://github.com/Imranmeh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-imran-ba2283297"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contact@mohamedimran.dev"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
