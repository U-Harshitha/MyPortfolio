import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = {
    "Languages": ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"],
    "AI/ML": ["PyTorch", "TensorFlow", "LangChain", "Hugging Face", "OpenCV", "Scikit-learn"],
    "Web": ["React", "Next.js", "Node.js", "Flask", "Django", "FastAPI"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "Pinecone"],
    "Tools": ["Git", "VS Code", "Jupyter", "Postman", "Figma"],
  };

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Technical Stack</h2>
          <p className="text-lg text-foreground/80 max-w-3xl">
            Technologies and tools I work with to build innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
