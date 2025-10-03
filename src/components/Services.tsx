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
  
          <div className=<"absolute inset-0 gradient-hero flex items-center justify-center">
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
