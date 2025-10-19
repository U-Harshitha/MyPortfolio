import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm">
            © 2025 Harshitha Upadhyayula. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm flex items-center gap-2">
            Designed & Built with <Heart size={16} className="text-primary fill-primary" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
