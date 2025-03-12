
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { BriefcaseIcon, GraduationCapIcon, CodeIcon } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container px-4 mx-auto">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary rounded mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
              Ambitious and adaptable graduate with a Bachelor's degree in Computer Science. 
              I am eager to kickstart my career and contribute positively to a forward-thinking 
              organization. Seeking an entry-level position where I can apply my knowledge, learn 
              new skills, and grow both personally and professionally.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <Card className="card-hover h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <GraduationCapIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  B.Tech in CSE with AI & ML specialization from Kakinada Institute of Engineering & Technology
                </p>
                <span className="tag">2021-2025</span>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={400}>
            <Card className="card-hover h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CodeIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Technical Skills</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Proficient in Core Java, basics of Python, SQL, and problem-solving with strong communication skills
                </p>
                <span className="tag">Development</span>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={600}>
            <Card className="card-hover h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <BriefcaseIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Completed internships at Salesforce Developer and a Java Full Stack Virtual Internship through AICTE
                </p>
                <span className="tag">Internships</span>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default About;
