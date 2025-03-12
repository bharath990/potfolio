import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { PhoneIcon, MailIcon, SendIcon, GithubIcon, LinkedinIcon, TwitterIcon, Copy, ExternalLinkIcon} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      description: `${label} has been copied to your clipboard.`,
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container px-4 mx-auto">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary rounded mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
              Feel free to reach out for opportunities, collaborations, or just to say hello
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          <AnimatedSection animation="fadeIn" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-hover group transition-all duration-300">
                <CardContent className="p-6 flex items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mr-6 group-hover:bg-primary/20 transition-colors">
                    <PhoneIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <div className="flex items-center gap-2">
                      <a href="tel:+918121974742" className="text-muted-foreground">+91 8121974742</a>
                      <Button  size="icon" onClick={() => copyToClipboard("+918121974742", "Phone number")} 
                        className="h-6 w-6 rounded-full hover:bg-secondary/100">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover group transition-all duration-300">
                <CardContent className="p-6 flex items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mr-6 group-hover:bg-primary/20 transition-colors">
                    <MailIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <div className="flex items-center gap-2">
                      <a href="mailto:bharathvamsisatti@gmail.com" className="text-muted-foreground">bharathvamsisatti@gmail.com</a>
                      <Button size="icon" onClick={() => copyToClipboard("bharathvamsisatti@gmail.com", "Email address")} 
                        className="h-6 w-6 rounded-full hover:bg-secondary/100">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={400}>
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">Connect With Me</h3>
                <div className="flex justify-center space-x-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-12 h-12 rounded-full p-0 hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                        <GithubIcon className="h-6 w-6" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>GitHub Profile</DialogTitle>
                        <DialogDescription>
                          Check out my repositories and contributions
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-4 mt-4">
                        <p className="text-sm text-muted-foreground">
                          Connect with me on GitHub to see my projects and code contributions.
                        </p>
                        <a href="https://github.com/bharath990" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                          <GithubIcon className="mr-2 h-4 w-4" />
                          Visit GitHub Profile
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-12 h-12 rounded-full p-0 hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                        <LinkedinIcon className="h-6 w-6" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>LinkedIn Profile</DialogTitle>
                        <DialogDescription>
                          Connect with me professionally
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-4 mt-4">
                        <p className="text-sm text-muted-foreground">
                          Let's connect on LinkedIn to discuss professional opportunities and networking.
                        </p>
                        <a href="https://www.linkedin.com/in/sattibharath/" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                          <LinkedinIcon className="mr-2 h-4 w-4" />
                          Visit LinkedIn Profile
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-12 h-12 rounded-full p-0 hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                        <TwitterIcon className="h-6 w-6" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Twitter Profile</DialogTitle>
                        <DialogDescription>
                          Follow me for updates
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-4 mt-4">
                        <p className="text-sm text-muted-foreground">
                          Follow me on Twitter for the latest updates, tech discussions, and more.
                        </p>
                        <a href="https://x.com/Bharath35939847" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                          <TwitterIcon className="mr-2 h-4 w-4" />
                          Visit Twitter Profile
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="mt-8 flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="px-8 hover:scale-105 transition-transform">
                        <SendIcon className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Get In Touch</DialogTitle>
                        <DialogDescription>
                          Feel free to reach out for opportunities or collaborations
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-4 mt-4">
                        <p>
                          The best way to contact me is via email or phone:
                        </p>
                        <div className="flex items-center gap-2">
                          <MailIcon className="h-4 w-4 text-primary" />
                          <a href="mailto:bharathvamsisatti@gmail.com" className="font-medium">bharathvamsisatti@gmail.com</a>
                          <Button variant="ghost" size="icon" onClick={() => copyToClipboard("bharathvamsisatti@gmail.com", "Email address")} 
                            className="h-6 w-6 rounded-full hover:bg-primary/10 ml-auto">
                            <ExternalLinkIcon className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <PhoneIcon className="h-4 w-4 text-primary" />
                          <a href="tel:+918121974742" className="font-medium">+91 8121974742</a>
                          <Button variant="ghost" size="icon" onClick={() => copyToClipboard("+918121974742", "Phone number")} 
                            className="h-6 w-6 rounded-full hover:bg-primary/10 ml-auto">
                            <ExternalLinkIcon className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          I'll get back to you as soon as possible!
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Contact;
