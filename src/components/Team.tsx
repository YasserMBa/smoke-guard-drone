import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Github, Mail } from "lucide-react";
import defaultAvatar from "@/assets/default-avatar.png";

const Team = () => {
  // يمكن تحديث هذه البيانات بأسماء الأعضاء الحقيقية
  const teamMembers = [
    {
      name: "ياسر بايونس",
      role: "هندسة البرمجيات",
      initials: "يب",
      color: "bg-primary"
    },
    {
      name: "نواف الربيعة", 
      role: "نظم المعلومات",
      initials: "نر",
      color: "bg-accent"
    },
    {
      name: "فهد العتيبي",
      role: "الأمن السيبراني",
      initials: "فع", 
      color: "bg-primary"
    },
    {
      name: "نواف الهشام",
      role: "هندسة الحاسب",
      initials: "نه",
      color: "bg-accent"
    },
    {
      name: "صالح السليمان",
      role: "علوم الحاسب",
      initials: "صس",
      color: "bg-primary"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-fire bg-clip-text text-transparent">
              فريق العمل
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            فريق متخصص من المهندسين والمطورين يعملون معاً لتطوير هذا النظام المبتكر
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-6 flex justify-center">
                  <Avatar className="w-20 h-20 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                    <AvatarImage src={defaultAvatar} alt={member.name} />
                    <AvatarFallback className={`${member.color} text-white text-lg font-bold`}>
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {member.name}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {member.role}
                </p>
                
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </button>
                  <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Github className="w-4 h-4 text-primary" />
                  </button>
                  <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg">
            نعمل معاً لجعل العالم أكثر أماناً من خلال التكنولوجيا المتقدمة
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;