import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Clock, Users, Shield, BookOpen, Award } from "lucide-react";
import serviceCar from "@/assets/service-car.jpg";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "سيارة حديثة وآمنة",
      description: "سيارة مجهزة بأحدث معايير الأمان والسلامة لضمان تجربة تعليمية آمنة",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "مدربة محترفة ومتخصصة",
      description: "مدربة مؤهلة وصبورة مع خبرة واسعة في تعليم القيادة للنساء",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "مواعيد مرنة",
      description: "جدول تدريب مرن يتناسب مع أوقاتك وظروفك الخاصة",
      color: "text-accent"
    },
    {
      icon: BookOpen,
      title: "تدريب شامل ومتكامل",
      description: "برنامج تدريبي يجمع بين الدروس النظرية والتطبيق العملي المكثف",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "بيئة آمنة ومريحة",
      description: "بيئة تعليمية هادئة وآمنة خاصة بالنساء فقط مع أجواء مريحة",
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "متابعة شخصية ودقيقة",
      description: "اهتمام خاص بكل متدربة لضمان إتقان جميع مهارات القيادة",
      color: "text-accent"
    }
  ];

  const courses = [
    {
      title: "دورة القيادة للمبتدئات",
      duration: "20-25 ساعة",
      price: "حسب البرنامج",
      features: ["تدريب نظري شامل", "تدريب عملي مكثف", "متابعة شخصية", "إعداد لامتحان القيادة"]
    },
    {
      title: "دورة تحسين المهارات",
      duration: "10-15 ساعة",
      price: "حسب البرنامج",
      features: ["مراجعة المهارات", "تدريب متقدم", "نصائح عملية", "تحسين الثقة بالنفس"],
      popular: true
    },
    {
      title: "دورة القيادة في المدينة",
      duration: "15-20 ساعة",
      price: "حسب البرنامج",
      features: ["القيادة في الشوارع", "مواقف السيارات", "الإشارات المرورية", "القيادة الآمنة"]
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
