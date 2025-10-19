import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Cloud, Palette } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Python, Java, C++, React, Flask, Django, Node.js",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "NLP, GNNs, LangChain, Vision-Language Models, PyTorch",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Docker, Kubernetes, CI/CD, Microservices",
    },
    {
      icon: Palette,
      title: "Design & Accessibility",
      description: "UI/UX, Accessible Computing, Multi-modal Interfaces",
    },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mb-12">
            I'm a passionate Software Engineer and AI Researcher from VNRVJIET, driven by the mission to build
            intelligent systems that bridge cutting-edge research with real-world applications. My journey spans
            AI/ML development, full-stack web engineering, and cloud infrastructure—all unified by a commitment
            to creating accessible, impactful technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover-glow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-foreground/70">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">What Drives Me</h3>
          <p className="text-foreground/80 leading-relaxed">
            I'm fascinated by the intersection of artificial intelligence and human-centered design. Whether
            it's developing decentralized AI collaboration platforms, building knowledge graphs with
            vision-language models, or creating accessible computing interfaces, I strive to make technology
            more intelligent, intuitive, and inclusive. Outside of code, I'm passionate about leadership,
            having served as Vice President at Street Cause, and continuously exploring new frontiers in
            research and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
