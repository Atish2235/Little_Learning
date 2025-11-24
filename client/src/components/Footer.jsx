import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xl font-bold text-white">LL</span>
              </div>
              <span className="text-xl font-bold text-foreground">Little Learnings</span>
            </div>
            <p className="text-muted-foreground font-serif">
              Nurturing young minds since 2010. Building bright futures, one child at a time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">About Us</a></li>
              <li><a href="#programs" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-programs">Programs</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-gallery">Gallery</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <button 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="button-facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </button>
              <button 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="button-instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </button>
              <button 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="button-twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground font-serif">
          <p>© 2024 Little Learnings Preschool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
