import { Button } from "@/components/ui/button";
import { Phone, Instagram, Facebook } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-2xl">🚗</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">مدرسة نسرين</h1>
              <p className="text-xs text-muted-foreground">لتعليم السياقة للنساء</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-smooth font-semibold"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-smooth font-semibold"
            >
              الخدمات
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-smooth font-semibold"
            >
              آراء الطالبات
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-smooth font-semibold"
            >
              الأسئلة الشائعة
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-smooth font-semibold"
            >
              تواصلي معنا
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection("contact")}
            className="gradient-primary text-white hover:opacity-90 transition-smooth shadow-elegant font-bold"
          >
            <Phone className="ml-2 h-4 w-4" />
            احجزي موعدك
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
