import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-soft border-t border-border py-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 gradient-primary"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-xl">🚗</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">مدرسة النور</h3>
                <p className="text-sm text-muted-foreground">لتعليم قيادة السيارات</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              طريقك نحو الاستقلال والثقة على الطريق
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-smooth">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-smooth">
                  آراء الطالبات
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-smooth">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">سياسات</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  الشروط والأحكام
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  من نحن
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            صُنع بـ <Heart className="w-4 h-4 fill-primary text-primary" /> © 2025 مدرسة النور لتعليم القيادة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 pointer-events-none">
        <div className="animate-slide-right">
          <span className="text-6xl">🚗</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
