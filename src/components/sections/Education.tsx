import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { Award, Star, Download, BookOpen } from "lucide-react";

const education = [
  {
    degree: "MSc in Data Science",
    institution: "University of Potsdam",
    location: "Potsdam, Germany",
    date: "Oct 2023 – Present",
    status: "Ongoing",
    description:
      "Advanced graduate programme covering the full data science lifecycle — from statistical modelling to applied machine learning and reproducible research practices.",
    modules: [
      "Research Software Engineering",
      "Natural Language Processing",
      "Machine Learning",
      "Statistical Analysis",
      "Data Mining",
      "Python Package Development",
      "Scientific Computing",
    ],
    highlight: "Currently working as a Business Analyst at the university, building real-world case studies for the RSE course.",
    download: { label: "Download Transcript", file: "/Sara_MohammedAhmed_Transcripts.pdf" },
  },
  {
    degree: "MSc in Business Intelligence",
    institution: "University of Khartoum",
    location: "Khartoum, Sudan",
    date: "Jan 2018 – Aug 2020",
    status: "Completed",
    description:
      "Postgraduate programme at the intersection of data engineering and strategic business decision-making, with a strong focus on data warehouse architecture and analytical systems.",
    modules: [
      "Business Intelligence Systems",
      "Data Warehousing & OLAP",
      "ETL Design & Implementation",
      "Decision Support Systems",
      "AI for Business",
      "Data Mining & Knowledge Discovery",
    ],
    highlight: "Applied BI knowledge directly to industry — building Power BI dashboards and data mart models throughout studies.",
    download: { label: "Download Transcript", file: "/Sara_MohammedAhmed_Transcripts.pdf" },
  },
  {
    degree: "BSc (Honours) in Information Technology",
    institution: "University of Bahri",
    location: "Khartoum, Sudan",
    date: "2012 – 2017",
    status: "Completed",
    description:
      "Four-year honours programme covering the full spectrum of IT — from software engineering and systems design to data analysis and web development.",
    modules: [
      "Data Structures & Algorithms",
      "Software Development",
      "Machine Learning Fundamentals",
      "Data Mining",
      "Database Design",
      "Web Development",
      "Network & Security",
    ],
    highlight: "Graduated 2nd on the Dean's List. Served as Teaching Assistant in Data Structures, ML, and Data Mining.",
    download: { label: "Download Degree Certificate", file: "/Sara_MohammedAhmed_Degree.pdf" },
  },
];

const awards = [
  {
    icon: <Star className="w-4 h-4" />,
    title: "2nd on Dean's List",
    org: "University of Bahri",
    date: "2012–2017",
    desc: "Maintained exceptional academic performance across all four years, finishing 2nd in the faculty.",
  },
  {
    icon: <Award className="w-4 h-4" />,
    title: "Employee of the Month ×2",
    org: "Life Connection Technology (LCT)",
    date: "2019",
    desc: "Recognised for two consecutive months for outstanding contributions to data infrastructure and Power BI delivery.",
  },
];


export function EducationAwards() {
  return (
    <section id="education" className="py-24 bg-background relative border-t border-card-border/50">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Education</h2>
            <div className="flex-1 h-px bg-card-border/60" />
          </div>
        </FadeIn>

        {/* Degree Cards */}
        <div className="space-y-8 mb-20">
          {education.map((edu, i) => (
            <FadeIn key={i} delay={0.08 * i}>
              <motion.div
                className="bg-card border border-card-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Top bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-7 py-4 border-b border-card-border/60 bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full ${edu.status === "Ongoing" ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`}>
                      {edu.status}
                    </span>
                    <h3 className="text-base font-bold text-foreground">{edu.degree}</h3>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{edu.date}</span>
                </div>

                {/* Body */}
                <div className="px-7 py-6 space-y-5">
                  {/* Institution */}
                  <div>
                    <p className="text-sm font-semibold text-primary">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu.location}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>

                  {/* Modules */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-3.5 h-3.5 text-primary/50" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Key Modules</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.modules.map((mod, j) => (
                        <motion.span
                          key={j}
                          className="text-xs px-3 py-1 bg-secondary rounded-full text-foreground/70 border border-card-border/50"
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + j * 0.04 }}
                          whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.08)" }}
                        >
                          {mod}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="flex gap-3 items-start p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="w-0.5 self-stretch bg-primary rounded-full shrink-0" />
                    <p className="text-xs text-muted-foreground leading-relaxed italic">{edu.highlight}</p>
                  </div>

                  {/* Download */}
                  <motion.a
                    href={edu.download.file}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 border border-card-border rounded-lg text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors group w-fit"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Download className="w-3.5 h-3.5 group-hover:animate-bounce" />
                    {edu.download.label}
                  </motion.a>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Awards */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-serif font-bold text-foreground">Recognitions</h3>
            <div className="flex-1 h-px bg-card-border/60" />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4">
          {awards.map((award, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1}>
              <motion.div
                className="flex gap-4 items-start p-5 bg-card border border-card-border rounded-xl hover:border-primary/30 transition-colors group"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                  {award.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="font-bold text-foreground text-sm">{award.title}</p>
                    <span className="text-[10px] font-mono text-primary px-2 py-0.5 bg-primary/10 rounded">{award.date}</span>
                  </div>
                  <p className="text-xs font-medium text-primary/70 mb-1.5">{award.org}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{award.desc}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
