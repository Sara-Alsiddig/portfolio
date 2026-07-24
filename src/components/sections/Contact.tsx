import { FadeIn } from "@/components/animations/FadeIn";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative border-t border-card-border/50">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Ready to scale your data intelligence?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Currently exploring BI and data analysis, AI, and machine learning opportunities across Saudi Arabia and the broader GCC region.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-8 bg-card border border-card-border rounded-lg flex flex-col items-center justify-center group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Email</h3>
              <a href="mailto:Saramalsiddig@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium">
                Saramalsiddig@gmail.com
              </a>
            </div>
            
            <div className="p-8 bg-card border border-card-border rounded-lg flex flex-col items-center justify-center group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Phone</h3>
              <a href="tel:+966543624492" className="text-foreground hover:text-primary transition-colors font-medium font-mono">
                +966 543 624 492
              </a>
            </div>

            <div className="p-8 bg-card border border-card-border rounded-lg flex flex-col items-center justify-center group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Location</h3>
              <span className="text-foreground font-medium">
                Saudi Arabia
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
