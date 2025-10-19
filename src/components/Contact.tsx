import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "harshitha@example.com",
      href: "mailto:harshitha@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/harshitha",
      href: "https://linkedin.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/harshitha",
      href: "https://github.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Let's Connect</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {method.href ? (
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block bg-card border border-border rounded-lg p-6 hover-glow text-center h-full"
                >
                  <method.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{method.label}</h3>
                  <p className="text-sm text-foreground/70">{method.value}</p>
                </a>
              ) : (
                <div className="bg-card border border-border rounded-lg p-6 text-center h-full">
                  <method.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{method.label}</h3>
                  <p className="text-sm text-foreground/70">{method.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">Ready to collaborate?</h3>
          <p className="text-foreground/80 mb-6">
            Whether you have a project in mind or just want to explore ideas, I'd love to hear from you.
          </p>
          <a
            href="mailto:harshitha@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover-glow"
          >
            <Mail size={18} />
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
