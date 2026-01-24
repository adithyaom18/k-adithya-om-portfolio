import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, Database, Brain, BarChart3, 
  Wrench, MessageSquare, Sparkles 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "primary",
    skills: ["Python", "C++"],
  },
  {
    title: "Web Technologies",
    icon: Sparkles,
    color: "accent",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "primary",
    skills: ["MySQL"],
  },
  {
    title: "Machine Learning & Data Science",
    icon: Brain,
    color: "accent",
    skills: [
      "Regression",
      "Classification",
      "Clustering",
      "NLP",
      "TF-IDF",
      "Sentiment Analysis",
    ],
  },
  {
    title: "Libraries & Frameworks",
    icon: BarChart3,
    color: "primary",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "NLTK",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "accent",
    skills: [
      "Streamlit",
      "Flask",
      "Git",
      "VS Code",
      "Jupyter",
      "Google Colab",
      "Power BI",
      "Tableau",
      "Excel",
    ],
  },
  {
    title: "Soft Skills",
    icon: MessageSquare,
    color: "primary",
    skills: ["Critical Thinking", "Problem Solving", "Communication"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-medium tracking-wider uppercase mb-4 block">
            Skills & Expertise
          </span>
          <h2 className="section-title">Tech Stack & Capabilities</h2>
          <p className="section-subtitle mx-auto mt-4">
            A comprehensive toolkit for building intelligent, data-driven applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card-hover p-6 rounded-2xl group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    category.color === "primary"
                      ? "bg-primary/10 group-hover:bg-primary/20"
                      : "bg-accent/10 group-hover:bg-accent/20"
                  }`}
                >
                  <category.icon
                    className={`w-5 h-5 ${
                      category.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
