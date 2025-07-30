import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src={logo} alt="SmokeSense AI" className="w-8 h-8" />
            <div>
              <h3 className="font-bold text-foreground">SmokeSense AI</h3>
              <p className="text-sm text-muted-foreground">Intelligent Drone Detection</p>
            </div>
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <span>صُنع بـ</span>
            <Heart className="w-4 h-4 mx-1 text-accent fill-current" />
            <span>في المملكة العربية السعودية</span>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 SmokeSense AI. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;