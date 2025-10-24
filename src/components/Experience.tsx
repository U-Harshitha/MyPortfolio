import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Google Software Engineering Intern",
      company: "Google",
      period: "Summer 2024",
      description: "Developed scalable backend services and contributed to cloud infrastructure optimization.",
      icon: Briefcase,
    },
    {
      title: "DevOps Intern",
      company: "Stalcon",
      period: "2023",
      description: "Implemented CI/CD pipelines and managed cloud infrastructure on AWS.",
      icon: Briefcase,
    },
    {
      title: "GenAI Engineering Intern",
      company: "SHR Softek",
      period: "2023-2024",
      description: "Built generative AI applications using LangChain and large language models.",
      icon: Briefcase,
    },
    {
      title: "Coordinator",
      company: "Designathon, VNRVJIET",
      period: "2025-Present",
      description: "Led community initiatives and organized technology workshops for underprivileged students.",
      icon: Award,
    },
    {
      title: "Documentation Head",
      company: "Computer Society of India, VNRVJIET",
      period: "2024-Present",
      description: "Led workshops and national-level events for over 600 students, enhancing technical and career-oriented skills.",
      icon: Award,
    },
    {
      title: "Vice President",
      company: "Street Cause",
      period: "2023-2025",
      description: "Led community initiatives and organized technology workshops for underprivileged students.",
      icon: Award,
    },
    {
      title: "Technical Head and Hospitality",
      company: "TedXVNRVJIET",
      period: "2023-Present",
      description: "Led community initiatives and organized technology workshops for underprivileged students.",
      icon: Award,
    }
  ];

  return (
    <section id="experience" className="section-padding pt-16 pb-16" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Experience & Leadership</h2>
          <p className="text-lg text-foreground/80 max-w-3xl">
            My journey through internships, and leadership roles.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background" />

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="ml-16 md:ml-0 bg-card border border-border rounded-lg p-5 hover-glow">
                    <div className="flex items-center gap-1 mb-2">
                      <exp.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                    </div>
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
