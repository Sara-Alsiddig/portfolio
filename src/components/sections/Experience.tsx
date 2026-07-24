import { FadeIn } from "@/components/animations/FadeIn";

const experiences = [
  {
    role: "Business Analyst (Part-Time)",
    company: "University of Potsdam",
    date: "Apr 2025–Present",
    location: "Potsdam, Germany",
    points: [
      "Analyzed domain-specific requirements from diverse student body to develop case studies for reproducible data analysis course",
      "Conducted interviews with SMEs from Bioinformatics, Geology, and Physics departments",
      "Developed case studies illustrating Research Software Engineering (Git, software testing, data analysis workflows, Python packages)"
    ]
  },
  {
    role: "BI Developer (Full-Time)",
    company: "Tirhal",
    date: "Jan 2021–Jan 2025",
    location: "Khartoum, Sudan",
    points: [
      "Designed and implemented critical data room KPIs (trips, cohort analysis) in Power BI — directly contributed to securing $1M external investment",
      "Executed end-to-end data migration from SQL Server to PostgreSQL (requirements analysis, schema mapping, migration scripts)",
      "Developed and maintained Python ETL automation to transform/load data from third-party app into in-house data mart",
      "Provided structured data feeds supporting data science team's churn and customer segmentation models"
    ]
  },
  {
    role: "Power BI Developer (Full-Time)",
    company: "Life Connection Technology (LCT)",
    date: "Feb 2019–Jan 2021",
    location: "Khartoum, Sudan",
    points: [
      "Created and delivered actionable Power BI dashboards connected directly to SSAS data warehouse cubes",
      "Designed and developed a data mart model from scratch (dimensions, measures, KPIs)",
      "Supported SSAS cube development and complex T-SQL + ETL for CDR (Call Detail Record) data"
    ]
  },
  {
    role: "Web Developer (Full-Time)",
    company: "AlNahda International College",
    date: "Oct 2018–Feb 2019",
    location: "Khartoum, Sudan",
    points: [
      "Led website development and CMS integration",
      "Used Google Analytics for UX/UI improvement recommendations"
    ]
  },
  {
    role: "Fraud Analyst (Full-Time)",
    company: "Sudatel Telecommunication Group",
    date: "May 2018–Oct 2018",
    location: "Khartoum, Sudan",
    points: [
      "Investigated large-scale data patterns to detect fraudulent activities",
      "Developed formal reports and fraud prevention programs"
    ]
  },
  {
    role: "Web Developer (Full-Time)",
    company: "National University Sudan",
    date: "Jul 2017–Apr 2018",
    location: "Khartoum, Sudan",
    points: [
      "Developed full-stack accounting and finance system",
      "Built dynamic websites for high traffic engagement"
    ]
  },
  {
    role: "Teaching Assistant (Part-Time)",
    company: "University of Bahri",
    date: "Aug 2017–Dec 2017",
    location: "Khartoum, Sudan",
    points: [
      "Conducted tutorials and explanations, prepared lab materials, and supervised students in Data Structures, Software Development, Machine Learning, and Data Mining",
      "Assisted in developing course materials including lecture slides, handouts, and online sessions",
      "Collaborated with faculty on research projects related to data mining and machine learning"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30 relative border-t border-card-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Professional Tenure</h2>
            <div className="flex-1 h-px bg-card-border/60"></div>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <FadeIn key={index} delay={0.1}>
              <div className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8 group">
                <div className="md:text-right pt-1">
                  <div className="text-sm font-mono text-primary mb-1">{exp.date}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{exp.location}</div>
                </div>
                
                <div className="relative pb-12 md:pl-8 md:border-l border-card-border/60 group-last:border-transparent group-last:pb-0">
                  <div className="hidden md:block absolute w-3 h-3 bg-background border-2 border-primary rounded-full -left-[6.5px] top-1.5 transition-colors group-hover:bg-primary" />
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-muted-foreground mb-6 font-serif italic">{exp.company}</h4>
                  
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1.5 opacity-50 block w-1.5 h-1.5 rounded-sm bg-primary shrink-0" />
                        <span dangerouslySetInnerHTML={{ 
                          __html: point.replace('$1M', '<span class="text-foreground font-semibold border-b border-primary/30">$1M</span>')
                        }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
