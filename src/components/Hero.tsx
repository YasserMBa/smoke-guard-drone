import { Button } from "@/components/ui/button";
import { PlayCircle, Shield, Brain } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-fire bg-clip-text text-transparent animate-pulse">
              نظام ذكي
            </span>
            <br />
            <span className="text-foreground">
              للكشف عن الدخان
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            تقنية متطورة تعتمد على طائرة Tello والذكاء الاصطناعي
            <br />
            للتمييز بين الدخان الخطير والآمن
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 animate-pulse-glow"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              اكتشف المشروع
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
            >
              تواصل معنا
            </Button>
          </div>
          
          {/* Features Icons */}
          <div className="flex items-center justify-center gap-12 opacity-70">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm text-muted-foreground">حماية متقدمة</span>
            </div>
            <div className="flex flex-col items-center">
              <Brain className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm text-muted-foreground">ذكاء اصطناعي</span>
            </div>
            <div className="flex flex-col items-center">
              <PlayCircle className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm text-muted-foreground">مراقبة مباشرة</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;