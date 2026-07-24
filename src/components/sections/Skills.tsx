import { FadeIn } from "@/components/animations/FadeIn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Power BI & Visualization",
    skills: [
      { name: "Power BI Desktop", level: 95 },
      { name: "Power BI Service", level: 90 },
      { name: "DAX", level: 95 },
      { name: "Power Query (M)", level: 90 },
      { name: "Dashboard Design", level: 100 },
      { name: "Google Data Studio", level: 85 }
    ]
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "SQL (PostgreSQL, T-SQL)", level: 95 },
      { name: "ETL Processes", level: 90 },
      { name: "Data Warehousing", level: 85 },
      { name: "Star Schema", level: 90 },
      { name: "Research Software Engineering", level: 80 }
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 85 },
      { name: "Pandas", level: 85 },
      { name: "Scikit-learn", level: 75 },
      { name: "Advanced Excel", level: 95 }
    ]
  },
  {
    title: "AI, NLP & Machine Learning",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Natural Language Processing (NLP)", level: 75 },
      { name: "Predictive Modeling", level: 80 },
      { name: "Statistical Analysis", level: 85 },
      { name: "Data Mining", level: 85 }
    ]
  },
  {
    title: "Business & AI Strategy",
    skills: [
      { name: "Business Intelligence", level: 95 },
      { name: "AI for Business", level: 75 },
      { name: "KPI Design & Strategy", level: 95 },
      { name: "Stakeholder Communication", level: 90 },
      { name: "Requirements Analysis", level: 90 }
    ]
  }
];

function AnimatedBar({ level, delay }: { level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full bg-background h-1.5 rounded-full overflow-hidden">
      <motion.div
        className="bg-primary h-full rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative border-t border-card-border/50">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Technical Capability Matrix</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured overview of core competencies across the data lifecycle.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {skillCategories.map((category, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1}>
              <div className="bg-card/30 p-8 rounded-lg border border-card-border/50 h-full">
                <h3 className="text-xl font-bold text-foreground mb-8 pb-4 border-b border-card-border/60">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      className="group"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                        <span className="text-xs font-mono text-primary/70">{skill.level}%</span>
                      </div>
                      <AnimatedBar level={skill.level} delay={0.1 + j * 0.07} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
