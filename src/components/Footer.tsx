import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-display text-xl font-bold text-gradient inline-block mb-2"
            >
              K ADITHYA OM
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} K Adithya Om. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/adithyaom18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass-card rounded-lg hover:border-primary/50 transition-colors group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/k-adithya-om"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass-card rounded-lg hover:border-primary/50 transition-colors group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:kadithyaom@gmail.com"
              className="p-2.5 glass-card rounded-lg hover:border-primary/50 transition-colors group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
