
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container px-4 mx-auto">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-primary rounded mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
              Showcasing my technical skills and problem-solving abilities through various projects
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedSection animation="fadeIn" delay={200}>
            <Card className="h-full overflow-hidden card-hover">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <div className="text-6xl">📚</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Library Management System</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Developed a Java-based console application to manage library operations
                  such as adding, searching, and issuing books. Applied Object-Oriented Programming
                  principles and implemented a file-based system for data storage.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag">Java</span>
                  <span className="tag">OOP</span>
                  <span className="tag">File I/O</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button variant="outline" size="sm" className="w-full">
                  <GithubIcon className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={300}>
            <Card className="h-full overflow-hidden card-hover">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <div className="text-6xl">🤖</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Machine Learning Project</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Implemented a Python-based machine learning model for predictive analysis.
                  Applied knowledge gained from the Foundations of Machine Learning course
                  by IIIT-Hyderabad.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag">Python</span>
                  <span className="tag">Machine Learning</span>
                  <span className="tag">Data Analysis</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button variant="outline" size="sm" className="w-full">
                  <GithubIcon className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={400}>
            <Card className="h-full overflow-hidden card-hover">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <div className="text-6xl">💻</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Final Year Project</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Currently leading a team for the development of an innovative
                  solution as part of the final year project. Applying technical skills and
                  leadership abilities to ensure successful project delivery.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag">Team Lead</span>
                  <span className="tag">In Progress</span>
                  <span className="tag">Innovation</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLinkIcon className="h-4 w-4 mr-2" />
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Projects;
