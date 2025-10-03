import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Clock, Users, Shield, BookOpen, Award } from "lucide-react";
import serviceCar from "@/assets/service-car.jpg";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "سيارات حديثة وآمنة",
      description: "أسطول من السيارات الحديثة المجهزة بأحدث معايير الأمان والسلامة",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "مدربات محترفات",
      description: "فريق من المدربات المؤهلات والمختصات في تعليم القيادة",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "مواعيد مرنة",
      description: "جداول تدريب مرنة تناسب أوقاتك الخاصة",
      color: "text-accent"
    },
    {
      icon: BookOpen,
      title: "دروس نظرية وعملية",
      description: "برنامج متكامل يجمع بين التدريب النظري والعملي",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "بيئة آمنة ومريحة",
      description: "بيئة تعليمية آمنة ومريحة خاصة بالنساء فقط",
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "نسبة نجاح عالية",
      description: "نسبة نجاح تصل إلى 98% في اجتياز اختبار القيادة",
      color: "text-accent"
    }
  ];

  const courses = [
    {
      title: "دورة القيادة العادية",
      duration: "20 ساعة",
      price: "1500 ريال",
      features: ["تدريب نظري", "تدريب عملي", "سيارة عادية", "مدربة متخصصة"]
    },
    {
      title: "دورة القيادة الأوتوماتيك",
      duration: "15 ساعة",
      price: "1800 ريال",
      features: ["تدريب نظري", "تدريب عملي", "سيارة أوتوماتيك", "مدربة متخصصة"],
      popular: true
    },
    {
      title: "دورة المبتدئات",
      duration: "30 ساعة",
      price: "2200 ريال",
      features: ["تدريب مكثف", "تدريب نظري موسع", "تدريب عملي", "متابعة خاصة"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            خدماتنا
            <span className="block gradient-primary bg-clip-text text-transparent">المميزة</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم لك أفضل تجربة تعليمية متكاملة مع أحدث المعايير
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary transition-smooth hover:shadow-elegant group"
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">دوراتنا التدريبية</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card 
                key={index}
                className={`relative border-2 transition-smooth hover:shadow-elegant ${
                  course.popular ? 'border-primary shadow-elegant' : 'hover:border-primary'
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2">
                    <span className="inline-block px-6 py-2 gradient-primary text-white rounded-full text-sm font-bold shadow-elegant">
                      الأكثر طلباً
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                  <div className="text-sm text-muted-foreground mb-4">{course.duration}</div>
                  <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
                    {course.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-elegant">
          <img 
            src={serviceCar} 
            alt="سيارات المدرسة"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">جاهزة لتبدأي رحلتك؟</h3>
              <p className="text-xl mb-6">احجزي موعدك الآن وابدأي رحلة التعلم معنا</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
