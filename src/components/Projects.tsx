import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  github?: string;
  demo?: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");

  const projects: Project[] = [
    {
      title: "Open Research Nexus",
      description: "Decentralized AI collaboration platform for researchers",
      longDescription: "A comprehensive platform enabling researchers worldwide to collaborate on AI projects, share datasets, and publish findings in a decentralized manner. Built with blockchain technology for transparency and IPFS for distributed storage.",
      tags: ["React", "Python", "Blockchain", "IPFS"],
      category: "AI/ML",
      github: "https://github.com",
    },
    {
      title: "Knowledge-Graph Framework",
      description: "GNN-based contextual reasoning with Vision-Language Models",
      longDescription: "Advanced framework leveraging Graph Neural Networks and Vision-Language Models to build intelligent knowledge graphs that understand visual and textual context. Enables complex reasoning and inference across multimodal data.",
      tags: ["PyTorch", "GNN", "Vision-Language Models", "Python"],
      category: "Research",
      github: "https://github.com",
    },
    {
      title: "Accessible Computing Interface",
      description: "Multi-modal interaction system for enhanced accessibility",
      longDescription: "An inclusive computing interface supporting voice, gesture, and eye-tracking inputs to make technology accessible to users with diverse abilities. Features real-time processing and adaptive UI.",
      tags: ["React", "TensorFlow", "WebRTC", "Node.js"],
      category: "Web",
      demo: "https://demo.com",
    },
    {
      title: "Doc Scrapper",
      description: "Intelligent document extraction and analysis tool",
      longDescription: "Automated tool for extracting structured information from various document formats using NLP and computer vision. Supports PDFs, images, and scanned documents with high accuracy.",
      tags: ["Python", "NLP", "OCR", "Flask"],
      category: "AI/ML",
      github: "https://github.com",
    },
    {
      title: "EspeceSense",
      description: "Wildlife monitoring and species identification platform",
      longDescription: "AI-powered platform for wildlife conservation, using computer vision to identify species, track populations, and analyze behavioral patterns from camera trap data.",
      tags: ["Python", "Computer Vision", "AWS", "React"],
      category: "AI/ML",
      github: "https://github.com",
    },
    {
      title: "Chess Engine",
      description: "High-performance chess engine with AI opponent",
      longDescription: "A sophisticated chess engine implementing minimax algorithm with alpha-beta pruning, evaluation functions, and opening book. Features adjustable difficulty and move analysis.",
      tags: ["C++", "Algorithms", "Game Theory"],
      category: "Cloud",
      github: "https://github.com",
    },
  ];

  const categories = ["All", "AI/ML", "Web", "Cloud", "Research"];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-lg text-foreground/80 max-w-3xl">
            A selection of projects showcasing my work in AI/ML, web development, and research.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "bg-card border border-border text-foreground/80 hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover-glow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl bg-card">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
              <DialogDescription className="text-foreground/70 mt-2">
                {selectedProject?.longDescription}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject?.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                {selectedProject?.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white hover-glow"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
                {selectedProject?.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
