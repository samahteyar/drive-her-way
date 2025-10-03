import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Car,
  Clock,
  Users,
  Shield,
  BookOpen,
  Award,
} from "lucide-react";
import serviceCar from "@/assets/service-car.jpg";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "سيارة حديثة وآمنة",
      description:
        "سيارة مجهزة بأحدث معايير الأمان والسلامة لضمان تجربة تعليمية آمنة",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "مدربة محترفة ومتخصصة",
      description:
        "مدربة مؤهلة وصبورة مع خبرة واسعة في تعليم القيادة للنساء",
      color: "text-secondary",
    },
    {
      icon: Clock,
      title: "مواعيد مرنة",
      description:
        "جدول تدريب مرن يتناسب مع أوقاتك وظروفك الخاصة",
      color: "text-accent",
    },
    {
      icon: BookOpen,
      title: "تدريب شامل ومتكامل",
      description:
        "برنامج تدريبي يجمع بين الدروس النظرية والتطبيق العملي المكثف",
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "بيئة آمنة ومريحة",
      description:
        "بيئة تعليمية هادئة وآمنة خاصة بالنساء فقط مع أجواء مريحة",
      color: "text-secondary",
    },
    {
      icon: Award,
      title: "متابعة شخصية ودقيقة",
      description:
        "اهتمام خاص بكل متدربة لضمان إتقان جميع مهارات القيادة",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            جاهزة لتبدأي رحلتك؟
          </h2>
          <p className="text-gray-600 text-lg">
            اكتشفي خدماتنا المصممة خصيصًا لكِ
          </p>
        </div>

        {/* كروت الخدمات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition">
              <CardHeader className="flex flex-col items-center text-center">
                <service.icon className={`w-10 h-10 mb-2 ${service.color}`} />
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;