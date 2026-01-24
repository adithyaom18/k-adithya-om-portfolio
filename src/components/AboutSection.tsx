import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, Code2, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "CGPA",
    value: "8.78",
    description: "Computer Science (Data Science)",
  },
  {
    icon: Brain,
    label: "Focus",
    value: "ML & AI",
    description: "Machine Learning & Data Analytics",
  },
  {
    icon: Code2,
    label: "Stack",
    value: "Full Stack",
    description: "Python, Flask, Streamlit",
  },
  {
    icon: TrendingUp,
    label: "Passion",
    value: "Data-Driven",
    description: "Real-world Applications",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-display text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="section-title mb-6">
              Turning Data Into
              <br />
              <span className="text-foreground">Intelligent Solutions</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a <span className="text-foreground font-medium">Computer Science</span> undergraduate 
                specializing in <span className="text-primary font-medium">Data Science</span> with a strong 
                foundation in machine learning and data analytics.
              </p>
              <p>
                My passion lies in building <span className="text-accent font-medium">real-world, data-driven applications</span> that 
                solve complex problems and deliver measurable impact. From predictive models to interactive 
                dashboards, I thrive on transforming raw data into actionable insights.
              </p>
              <p>
                With a problem-solving mindset and a commitment to continuous learning, I'm always 
                exploring new technologies and methodologies to enhance my craft.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-card-hover p-6 rounded-2xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
                </div>
                <div className="text-2xl font-display font-bold text-gradient mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
