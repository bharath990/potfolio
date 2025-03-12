import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { GraduationCapIcon, BriefcaseIcon, CodeIcon, HeartIcon, AwardIcon, TerminalIcon, DatabaseIcon, BrainIcon, SpeakerIcon, FileSpreadsheetIcon, TrophyIcon, BookmarkIcon, LightbulbIcon, BadgeCheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Resume() {
  return (
    <section id="career" className="section-padding">
      <div className="container px-4 mx-auto">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Career Summary</h2>
            <div className="w-20 h-1 bg-primary rounded mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
              My academic journey, technical skills, and professional experiences
            </p>
          </div>
        </AnimatedSection>
        
        <Tabs defaultValue="education" className="w-full">
          <AnimatedSection>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 md:grid-cols-4 mb-12">
              <TabsTrigger value="education" className="transition-all duration-200 hover:bg-primary/10">
                <GraduationCapIcon className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger value="skills" className="transition-all duration-200 hover:bg-primary/10">
                <CodeIcon className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Skills</span>
              </TabsTrigger>
              <TabsTrigger value="experience" className="transition-all duration-200 hover:bg-primary/10">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger value="interests" className="transition-all duration-200 hover:bg-primary/10">
                <HeartIcon className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Interests</span>
              </TabsTrigger>
            </TabsList>
          </AnimatedSection>
          
          <TabsContent value="education" className="space-y-8">
            <AnimatedSection animation="fadeIn" delay={200}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <span className="tag mb-2">2021-2025</span>
                      <h3 className="text-xl font-bold">B.Tech in CSE - AI & ML</h3>
                      <p className="text-muted-foreground">Kakinada Institute of Engineering & Technology</p>
                    </div>
                    <span className="mt-2 md:mt-0 font-semibold text-primary">CGPA: 8.00</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={300}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <span className="tag mb-2">2019-2021</span>
                      <h3 className="text-xl font-bold">Intermediate</h3>
                      <p className="text-muted-foreground">Aditya Junior College</p>
                    </div>
                    <span className="mt-2 md:mt-0 font-semibold text-primary">Percentage: 56.4%</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={400}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <span className="tag mb-2">2018-2019</span>
                      <h3 className="text-xl font-bold">SSC</h3>
                      <p className="text-muted-foreground">M.V.R. Montessori EM School</p>
                    </div>
                    <span className="mt-2 md:mt-0 font-semibold text-primary">CGPA: 8.3</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>
          
          <TabsContent value="skills" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { name: "Core Java", icon: <CodeIcon className="h-8 w-8 text-[#f89820]" /> },
                        { name: "Python Basics", icon: <TerminalIcon className="h-8 w-8 text-[#4B8BBE]" /> },
                        { name: "SQL", icon: <DatabaseIcon className="h-8 w-8 text-[#00758F]" /> },
                        { name: "Problem Solving", icon: <BrainIcon className="h-8 w-8 text-primary" /> },
                      ].map((skill, index) => (
                        <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                          <CardContent className="p-4 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                              {skill.icon}
                            </div>
                            <span className="font-medium text-center">{skill.name}</span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInRight" delay={300}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { name: "Communication", icon: <SpeakerIcon className="h-8 w-8 text-primary" /> },
                        { name: "Teamwork", icon: <BadgeCheckIcon className="h-8 w-8 text-primary" /> },
                        { name: "Microsoft Excel", icon: <FileSpreadsheetIcon className="h-8 w-8 text-[#217346]" /> },
                        { name: "Leadership", icon: <LightbulbIcon className="h-8 w-8 text-[#FFD700]" /> },
                      ].map((skill, index) => (
                        <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                          <CardContent className="p-4 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                              {skill.icon}
                            </div>
                            <span className="font-medium text-center">{skill.name}</span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
            
            <AnimatedSection animation="fadeIn" delay={400}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Career Edge Young Professional", issuer: "TCS ION", icon: <AwardIcon /> },
                      { title: "Basics of Python", issuer: "GUVI", icon: <BookmarkIcon /> },
                      { title: "Developer Job Simulation", issuer: "Accenture", icon: <TrophyIcon /> },
                      { title: "Foundations of Machine Learning", issuer: "IIIT-Hyderabad", icon: <BadgeCheckIcon /> },
                    ].map((cert, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                        <CardContent className="p-4 flex items-start">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                            {React.cloneElement(cert.icon, { className: "h-6 w-6 text-primary" })}
                          </div>
                          <div>
                            <h4 className="font-medium">{cert.title}</h4>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-8">
            <AnimatedSection animation="fadeIn" delay={200}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
                    <div>
                      <span className="tag mb-2">8 weeks</span>
                      <h3 className="text-xl font-bold">Salesforce Developer Virtual Internship</h3>
                      <p className="text-muted-foreground">Remote</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gained hands-on experience with Salesforce development platform, learned about CRM solutions and cloud applications.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={300}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
                    <div>
                      <span className="tag mb-2">10 weeks</span>
                      <h3 className="text-xl font-bold">Java Full Stack Virtual Internship</h3>
                      <p className="text-muted-foreground">AICTE</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Developed full-stack web applications using Java, Spring Boot, and modern frontend technologies. Worked on real-world projects and improved coding practices.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={400}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Hackathons & Workshops</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-4 flex items-start">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <CodeIcon className="h-5 w-5 text-primary" />
                        </div>
                        <span>Overnight Hackathon Conducted by College</span>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-4 flex items-start">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <CodeIcon className="h-5 w-5 text-primary" />
                        </div>
                        <span>Mobile Application Development Workshop</span>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>
          
          <TabsContent value="interests" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Playing Cricket",
                  description: "Enjoy playing cricket with friends and following professional matches.",
                  icon: "🏏",
                  delay: 200,
                },
                {
                  title: "Driving",
                  description: "Love exploring new places and enjoy the freedom of the open road.",
                  icon: "🚗",
                  delay: 300,
                },
                {
                  title: "Street Photography",
                  description: "Capturing candid moments and urban scenes through the lens of a camera.",
                  icon: "📷",
                  delay: 400,
                },
              ].map((interest, index) => (
                <AnimatedSection key={index} animation="fadeIn" delay={interest.delay}>
                  <Card className="card-hover h-full group">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-3xl group-hover:bg-primary/20 transition-colors">
                        {interest.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                      <p className="text-sm text-muted-foreground">{interest.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection animation="fadeIn" delay={500}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Co-Curricular Activities</h3>
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <CodeIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Team Leader</h4>
                      <p className="text-sm text-muted-foreground">
                        Currently serving as a Team Leader for a final year project, coordinating team efforts and ensuring project milestones are met on time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Resume;
