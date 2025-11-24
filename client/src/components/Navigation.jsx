import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-xl font-bold text-white">LL</span>
            </div>
            <span className="text-xl font-bold text-foreground">Little Learnings</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-home">Home</a>
            <a href="#about" className="text-foreground font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-about">About</a>
            <a href="#programs" className="text-foreground font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-programs">Programs</a>
            <a href="#gallery" className="text-foreground font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-gallery">Gallery</a>
            <a href="#contact" className="text-foreground font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-contact">Contact</a>
            <Button className="rounded-full" data-testid="button-enroll">Enroll Now</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-foreground font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-home">Home</a>
            <a href="#about" className="block text-foreground font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-about">About</a>
            <a href="#programs" className="block text-foreground font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-programs">Programs</a>
            <a href="#gallery" className="block text-foreground font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-gallery">Gallery</a>
            <a href="#contact" className="block text-foreground font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-contact">Contact</a>
            <Button className="w-full rounded-full" data-testid="button-mobile-enroll">Enroll Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
