import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "kadithyaom@gmail.com",
    href: "mailto:kadithyaom@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/k-adithya-om",
    href: "https://linkedin.com/in/k-adithya-om",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/adithyaom18",
    href: "https://github.com/adithyaom18",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: "kadithyaom@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
      console.error("EmailJS error:", error);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-medium tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="section-title">Let's Build Something</h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground">
            Impactful Together
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            Whether you have a project idea, want to collaborate, or just want to say hi — 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card-hover p-5 rounded-2xl flex items-center gap-4 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 mt-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-foreground">
                  Open to Opportunities
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm currently looking for internship and full-time opportunities in 
                Data Science, Machine Learning, and Full-Stack Development. Let's connect!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground mb-2"
              >
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="bg-background/50 border-border/50 focus:border-primary resize-none"
              />
            </div>

            <Button variant="hero" size="lg" type="submit" className="w-full">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
