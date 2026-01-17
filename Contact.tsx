import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm currently looking for new opportunities
          </p>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether you have a question, want to discuss a potential opportunity, 
            or just want to say hello, I'd love to hear from you. Feel free to 
            reach out through any of the channels below.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {/* Email */}
            <a
              href="mailto:contact@mohamedimran.dev"
              className="card-base flex items-center gap-4 hover:border-accent/50 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                <Mail className="text-accent" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">Get in touch</p>
              </div>
            </a>

            {/* Location */}
            <div className="card-base flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary">
                <MapPin className="text-accent" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">Chennai, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Imranmeh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-background hover:border-accent/50 hover:bg-secondary/50 transition-colors"
            >
              <Github size={20} className="text-foreground" />
              <span className="font-medium text-foreground">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-imran-ba2283297"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-background hover:border-accent/50 hover:bg-secondary/50 transition-colors"
            >
              <Linkedin size={20} className="text-foreground" />
              <span className="font-medium text-foreground">LinkedIn</span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="mailto:contact@mohamedimran.dev"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Send size={18} />
              <span>Send Me a Message</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
