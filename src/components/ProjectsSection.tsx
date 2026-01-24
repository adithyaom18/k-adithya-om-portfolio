import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "OncoPredict",
    subtitle: "Breast Cancer Diagnosis App",
    description:
      "A machine learning web application that predicts whether a breast tumor is benign or malignant using 30 biopsy-based features.",
    features: [
      "EDA and ML model comparison",
      "Hyperparameter tuning with GridSearchCV",
      "98% test accuracy with balanced evaluation metrics",
      "Interactive Streamlit UI with real-time predictions",
    ],
    techStack: ["Python", "Streamlit", "Scikit-learn"],
    gradient: "from-primary to-accent",
    github: "https://github.com/adithyaom18/OncoPredict---Breast-Cancer-Diagnosis-Predictor.git",
    demo: "https://oncopredict---breast-cancer-diagnosis-predictor.streamlit.app/",
  },
  {
    title: "Smart Sales Analytics",
    subtitle: "Sales Forecasting System",
    description:
      "A full-stack analytics platform for sales insights and time-series forecasting with interactive dashboards.",
    features: [
      "KPI computation and trend analysis",
      "Time-series forecasting using lag features",
      "Interactive dashboards with Chart.js",
      "Dynamic CSV upload and column mapping",
    ],
    techStack: ["Python", "Flask", "Scikit-learn", "Chart.js"],
    gradient: "from-accent to-neon-pink",
    github: "https://github.com/adithyaom18/SMART-SALES-ANALYTICS-FORECASTING.git",
    demo: "https://smart-sales-analytics-forecasting.onrender.com",
  },
  {
  title: "AI Credit Risk Intelligence Platform",
  subtitle: "Loan Approval & Risk Assessment System",
  description:
    "A full-stack machine learning application that predicts loan approval status with risk classification, explainable AI insights, and downloadable PDF credit assessment reports.",
  features: [
    "Loan approval prediction using SVM",
    "Approval probability and risk classification",
    "Explainable AI decision insights",
    "Demo scenarios for approval and rejection",
    "Downloadable PDF loan assessment report",
  ],
  techStack: [
    "Python",
    "Flask",
    "Scikit-learn",
    "Support Vector Machine (SVM)",
    "Bootstrap",
    "ReportLab",
  ],
  gradient: "from-accent to-neon-blue",
  github: "https://github.com/adithyaom18/AI-Credit-Risk-Intelligence-Platform",
  demo: "https://ai-credit-risk-intelligence-platform.onrender.com",
},
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-medium tracking-wider uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="section-title">Projects That Deliver Impact</h2>
          <p className="section-subtitle mx-auto mt-4">
            Real-world applications showcasing data science and machine learning expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 md:p-10 rounded-3xl group hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10 grid lg:grid-cols-2 gap-8">
                {/* Left: Content */}
                <div>
                  {/* Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-display font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-1`}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 transform duration-300" />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button variant="neon" size="lg" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="glass" size="lg" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Right: Features */}
                <div className="space-y-4">
                  <h4 className="text-sm font-display font-medium text-muted-foreground uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + featureIndex * 0.1,
                        }}
                        className="flex items-start gap-3"
                      >
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`} />
                        <span className="text-foreground/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
