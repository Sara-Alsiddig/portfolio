import { FadeIn } from "@/components/animations/FadeIn";
import { Terminal, Database, Activity, GitBranch, Download } from "lucide-react";
import { motion } from "framer-motion";

export function ExecutiveSummary() {
  const highlights = [
    {
      icon: <Terminal className="w-5 h-5" />,
      title: "End-to-End Solutions",
      desc: "Architecting Power BI solutions from raw data modeling to interactive, C-suite ready dashboards."
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Robust ETL Pipelines",
      desc: "Deep background in data warehousing, T-SQL, and Python automation for real-time feeding."
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "High-Impact KPIs",
      desc: "Translating ambiguous business requirements into precise metrics that drive institutional action."
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "System Migrations",
      desc: "Proven execution of full-scale live production migrations across enterprise database systems."
    }
  ];

  return (
    <section id="summary" className="py-24 bg-background relative border-t border-card-border/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeIn>
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Executive Summary</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8">
                Turning complex data into decisions that move organisations forward.
              </h3>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="prose prose-invert text-muted-foreground text-lg leading-relaxed mb-8">
                <p>
                  With over 5 years of dedicated experience, I bridge the critical gap between complex, disparate data sources and actionable, high-level business insights. 
                </p>
                <p>
                  My expertise lies not just in visualization, but in the rigorous engineering beneath it—designing robust data mart models, automating Python ETL pipelines, and applying machine learning and NLP techniques to ensure that when leadership looks at a dashboard, they are looking at undeniable truth.
                </p>
              </div>
              <motion.a
                href="/Sara_MohammedAhmed_CV.docx"
                download
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                data-testid="link-download-cv"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </motion.a>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                <div className="p-6 bg-card border border-card-border rounded-lg h-full hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
