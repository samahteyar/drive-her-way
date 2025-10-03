import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "فاطمة أحمد",
      role: "خريجة دورة الأوتوماتيك",
      content: "تجربة رائعة! المدربات محترفات جداً وصبورات. تعلمت القيادة بثقة وأمان.",
      rating: 5
    },
    {
      name: "نورة محمد",
      role: "خريجة دورة المبتدئات",
      content: "كنت خائفة جداً من القيادة، لكن الأجواء المريحة والمدربات الرائعات ساعدوني كثيراً. شكراً لكم!",
      rating: 5
    },
    {
      name: "مريم عبدالله",
      role: "خريجة دورة القيادة العادية",
      content: "أفضل مدرسة لتعليم القيادة للنساء. السيارات حديثة والتدريب ممتاز. أنصح بشدة!",
      rating: 5
    },
    {
      name: "سارة خالد",
      role: "خريجة دورة الأوتوماتيك",
      content: "المدربات متفهمات ومتعاونات. اجتزت الفحص من أول مرة بفضل التدريب الممتاز.",
      rating: 5
    },
    {
      name: "هند علي",
      role: "خريجة دورة المبتدئات",
      content: "بيئة تعليمية آمنة ومريحة. التدريب شامل ومنظم بشكل ممتاز.",
      rating: 5
    },
    {
      name: "ريم سعيد",
      role: "خريجة دورة القيادة العادية",
      content: "تجربة لا تُنسى! المدرسة احترافية جداً والمدربات ودودات. شكراً لكل الفريق!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            آراء
            <span className="block gradient-primary bg-clip-text text-transparent">طالباتنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشفي تجارب الطالبات اللاتي حققن حلمهن في القيادة معنا
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-smooth hover:shadow-elegant group"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
