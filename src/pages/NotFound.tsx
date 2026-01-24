import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 px-4"
      >
        <h1 className="text-8xl md:text-9xl font-display font-bold text-gradient mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Oops! Page not found
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/">
            <Home className="w-4 h-4" />
            Return to Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
