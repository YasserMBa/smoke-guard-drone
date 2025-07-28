import { Zap } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-elegant">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="SmokeSense AI" className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SmokeSense AI
              </h1>
              <p className="text-xs text-muted-foreground">Intelligent Drone Detection</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              المشروع
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              المميزات
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">
              الفريق
            </a>
          </nav>
          
          <div className="flex items-center">
            <Zap className="w-6 h-6 text-primary animate-flame" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;