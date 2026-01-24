import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-float delay-300" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} className="mb-8">
            <div className="relative inline-block">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-xl opacity-50 animate-pulse" />
              {/* Image container */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-r from-primary via-accent to-primary">
                <div className="w-full h-full rounded-full bg-background p-1">
                  <img alt="K Adithya Om" className="w-full h-full rounded-full object-cover" src="/lovable-uploads/f55dbb77-4781-41e4-a4c4-b7ad1e9f37da.jpg" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display mb-6">
            <span className="text-foreground">K </span>
            <span className="text-gradient text-glow">Adithya</span>
            <span className="text-foreground"> Om</span>
          </motion.h1>

          {/* Role */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-muted-foreground">
              <span className="text-primary">Data Analyst</span>
              <span className="mx-3 text-border">|</span>
              <span className="text-accent">Data Scientist</span>
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Building intelligent systems and scalable web applications using{" "}
            <span className="text-foreground font-medium">data</span>,{" "}
            <span className="text-foreground font-medium">machine learning</span>, and{" "}
            <span className="text-foreground font-medium">modern web technologies</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                <ExternalLink className="w-5 h-5" />
                View Projects
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://github.com/adithyaom18" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="flex items-center justify-center gap-4">
            <a href="https://github.com/adithyaom18" target="_blank" rel="noopener noreferrer" className="p-3 glass-card-hover rounded-xl group" aria-label="GitHub">
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/in/k-adithya-om" target="_blank" rel="noopener noreferrer" className="p-3 glass-card-hover rounded-xl group" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="mailto:kadithyaom@gmail.com" className="p-3 glass-card-hover rounded-xl group" aria-label="Email">
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 0.8
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors" animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }}>
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>;
};
export default HeroSection;