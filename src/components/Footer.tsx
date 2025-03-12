
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="bg-secondary/50 py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} S.B.V. Manikanta Reddy. All rights reserved.
            </p>
          </div>
          
          
        </div>
      </div>

      {/* Floating scroll to top button */}
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        className={`h-10 w-10 rounded-full fixed bottom-8 right-8 z-50 shadow-lg bg-background/80 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="h-5 w-5" />
      </Button>
    </footer>
  );
}

export default Footer;
