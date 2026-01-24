import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech – Computer Science (Data Science)",
    institution: "Malla Reddy Engineering College, Hyderabad",
    period: "2024 – 2027",
    grade: "CGPA: 8.78",
    current: true,
  },
  {
    degree: "Diploma – Electronics & Communication Engineering",
    institution: "Government Polytechnic College, Gadwal",
    period: "2021 – 2024",
    grade: "CGPA: 9.24",
    current: false,
  },
  {
    degree: "Secondary Education",
    institution: "New Rishi High School, Mahbubnagar",
    period: "2021",
    grade: "CGPA: 10/10",
    current: false,
  },
];

const certifications = [
  {
    name: "Azure AI Fundamentals",
    platform: "Microsoft",
    date: "Nov 2024",
    link: "https://www.credly.com/badges/460b6f06-9a1a-4779-8f7c-7bb1a7075958/public_url",
  },
  {
    name: "Complete Data Analyst Bootcamp",
    platform: "Udemy",
    date: "Apr 2025",
    link: "https://ude.my/UC-3f9d0023-c79c-4897-b4c7-e6e9b3209f51",
  },
  {
    name: "Deloitte Australia - Data Analytics Job Simulation",
    platform: "Forage",
    date: "Dec 2025",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_mxaLpNNgw5Sob4aqp_1766408298682_completion_certificate.pdf",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32 relative" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-display text-sm font-medium tracking-wider uppercase mb-4 block">
              Education
            </span>
            <h2 className="section-title mb-12">Academic Journey</h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="timeline-line" />

              {/* Timeline items */}
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative pl-14"
                  >
                    {/* Timeline dot */}
                    <div className="timeline-dot">
                      {item.current && (
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                      )}
                    </div>

                    {/* Content card */}
                    <div className="glass-card-hover p-6 rounded-2xl">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-display font-semibold text-foreground">
                          {item.degree}
                        </h3>
                        {item.current && (
                          <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {item.institution}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </span>
                        <span className="text-primary font-medium">
                          {item.grade}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent font-display text-sm font-medium tracking-wider uppercase mb-4 block">
              Certifications
            </span>
            <h2 className="section-title mb-12">
              <span className="text-foreground">Credentials</span>
            </h2>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="glass-card-hover p-6 rounded-2xl block group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {cert.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-muted-foreground">{cert.platform}</p>
                        <span className="text-sm text-muted-foreground">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="font-display font-semibold text-foreground">
                  Academic Excellence
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Consistently maintaining high academic performance while actively 
                pursuing industry certifications to stay at the forefront of 
                data science and AI technologies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
