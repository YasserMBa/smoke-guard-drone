import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Zap, MapPin } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Eye,
      title: "رؤية حاسوبية متقدمة",
      description: "تحليل دقيق للصور الملتقطة من الدرون لتمييز أنواع الدخان المختلفة"
    },
    {
      icon: Target,
      title: "كشف دقيق",
      description: "التمييز بين دخان الحرائق الخطيرة والأنشطة الآمنة مثل الشواء"
    },
    {
      icon: Zap,
      title: "استجابة فورية",
      description: "تنبيهات مباشرة للجهات المختصة عند اكتشاف مخاطر حقيقية"
    },
    {
      icon: MapPin,
      title: "تغطية واسعة",
      description: "مراقبة المناطق الواسعة والأماكن صعبة الوصول بكفاءة عالية"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              عن المشروع
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن فريق يعمل على تطوير نظام ذكي يعتمد على طائرة درون من نوع Tello للكشف عن نوع الدخان في البيئة المحيطة.
            يهدف مشروعنا إلى التمييز بين الدخان الناتج عن الحرائق والدخان الناتج عن أنشطة آمنة مثل الشواء.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            خدمة المجتمع والسلامة
          </h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            هذا المشروع يمكن أن يخدم الدفاع المدني والجهات المعنية بالسلامة، 
            والمزارع والمخيمات والأماكن المفتوحة، وأنظمة المراقبة الذكية.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-primary/20 text-primary px-4 py-2 rounded-full">
              الدفاع المدني
            </span>
            <span className="bg-accent/20 text-accent px-4 py-2 rounded-full">
              المزارع والمخيمات
            </span>
            <span className="bg-primary/20 text-primary px-4 py-2 rounded-full">
              أنظمة المراقبة
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;