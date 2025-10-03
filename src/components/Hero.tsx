import { Button } from "@/components/ui/button";
import { ArrowLeft, Car } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 gradient-soft"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                <Car className="w-4 h-4" />
                مدرسة معتمدة ومرخصة
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              طريقك نحو
              <span className="block gradient-primary bg-clip-text text-transparent">
                الاستقلال والثقة
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              مدرسة متخصصة في تعليم قيادة السيارات للنساء بمدربات محترفات وسيارات حديثة وآمنة
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-smooth shadow-elegant text-lg font-bold px-8"
              >
                سجّلي الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
            <img
              src={heroImage}
              alt="تعليم قيادة السيارات"
              className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
