
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";

interface HeaderProps {
  onThemeToggle: () => void;
  currentTheme: "light" | "dark";
}

export function Header({ onThemeToggle, currentTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-display font-bold">
            Bharath<span className="text-primary"></span>
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="#" title="Home" />
            <NavLink href="#about" title="About" />
            <NavLink href="#career" title="Career Summary" />
            <NavLink href="#projects" title="Projects" />
            <NavLink href="#contact" title="Contact" />

            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="ml-2 rounded-full hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {currentTheme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
          </nav>

          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="mr-2 rounded-full hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {currentTheme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="hover:bg-primary/10 rounded-full"
            >
              {menuOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-6">
          <MobileNavLink href="#" title="Home" onClick={() => setMenuOpen(false)} />
          <MobileNavLink href="#about" title="About" onClick={() => setMenuOpen(false)} />
          <MobileNavLink href="#career" title="Career Summary" onClick={() => setMenuOpen(false)} />
          <MobileNavLink href="#projects" title="Projects" onClick={() => setMenuOpen(false)} />
          <MobileNavLink href="#contact" title="Contact" onClick={() => setMenuOpen(false)} />
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      className="relative px-3 py-2 text-sm font-medium hover:text-primary transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
    >
      {title}
    </a>
  );
}

function MobileNavLink({ href, title, onClick }: { href: string; title: string; onClick: () => void }) {
  return (
    <a
      href={href}
      className="text-2xl font-medium hover:text-primary transition-colors"
      onClick={onClick}
    >
      {title}
    </a>
  );
}

export default Header;
