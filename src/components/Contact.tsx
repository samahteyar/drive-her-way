import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      content: "0500000000",
      link: "tel:0500000000"
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      content: "تواصلي معنا",
      link: "https://wa.me/966500000000"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      content: "info@alnoor-driving.com",
      link: "mailto:info@alnoor-driving.com"
    },
    {
      icon: MapPin,
      title: "العنوان",
      content: "الرياض، المملكة العربية السعودية",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "إنستغرام",
      link: "https://instagram.com"
    },
    {
      icon: Facebook,
      name: "فيسبوك",
      link: "https://facebook.com"
    },
    {
      icon: MessageCircle,
      name: "سناب شات",
      link: "https://snapchat.com"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            تواصلي
            <span className="block gradient-primary bg-clip-text text-transparent">معنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في بدء رحلتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">معلومات التواصل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-smooth group"
                    >
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-muted-foreground">{info.title}</div>
                        <div className="font-semibold">{info.content}</div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">تابعينا</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center hover:scale-110 transition-smooth shadow-elegant"
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="rounded-3xl overflow-hidden shadow-elegant h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4!2d46.7!3d24.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzAwLjAiTiA0NsKwNDInMDAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">أرسلي لنا رسالة</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="الاسم الكامل"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-right"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="رقم الجوال"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 text-right"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 text-right"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="رسالتك"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-32 text-right"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full gradient-primary text-white hover:opacity-90 transition-smooth h-12 text-lg font-bold shadow-elegant"
                >
                  <Send className="mr-2 h-5 w-5" />
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
