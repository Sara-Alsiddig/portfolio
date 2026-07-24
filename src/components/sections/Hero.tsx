import { FadeIn } from "@/components/animations/FadeIn";
import bgImage from "@/assets/hero-bg.png";
import profileImage from "@assets/IMG_6405_1781178862752.JPG";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Power BI Developer",
  "Business Intelligence Specialist",
  "Data Analyst",
  "Machine Learning Engineer",
];

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="text-primary">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const floatingDots = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
}));

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Abstract Data Visualization"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      {/* Floating animated dots */}
      {floatingDots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-primary/20 z-0"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 max-w-2xl">
            <FadeIn delay={0.2} direction="up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] tracking-tight mb-4">
                Sara <br /> MohammedAhmed
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <h2 className="text-xl md:text-2xl text-muted-foreground font-light mb-8 leading-relaxed min-h-[2rem]">
                <TypewriterText />
              </h2>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="bg-card/50 backdrop-blur-sm border border-card-border p-6 md:p-8 rounded-lg max-w-xl mb-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-transparent blur"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <p className="font-mono text-sm md:text-base text-primary mb-2 uppercase tracking-wider">Featured Impact</p>
                <p className="text-lg md:text-xl text-foreground font-medium">
                  Designed critical data room KPIs that secured a <span className="text-primary font-bold">$1M USD</span> external investment for Tirhal.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center h-12 px-8 font-medium text-white bg-primary rounded-md gap-2"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#experience"
                  className="inline-flex items-center justify-center h-12 px-8 font-medium text-foreground bg-secondary/50 backdrop-blur-sm border border-card-border rounded-md"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  View Experience
                </motion.a>
              </div>
            </FadeIn>
          </div>

          {/* Right: Profile photo */}
          <FadeIn delay={0.35} direction="left" className="flex-shrink-0">
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={profileImage}
                  alt="Sara MohammedAhmed"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-profile"
                />
              </motion.div>
              {/* Rotating ring */}
              <motion.div
                className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl -z-10" />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-foreground opacity-40" />
        </motion.div>
      </div>
    </section>
  );
}
