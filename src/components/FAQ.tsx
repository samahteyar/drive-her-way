import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "كم المدة اللازمة لإتمام الدورة؟",
      answer: "تتراوح مدة الدورات من 15 إلى 30 ساعة حسب نوع الدورة المختارة. دورة الأوتوماتيك 15 ساعة، العادية 20 ساعة، والمبتدئات 30 ساعة."
    },
    {
      question: "هل أحتاج إلى أوراق معينة للتسجيل؟",
      answer: "نعم، تحتاجين إلى بطاقة الهوية الوطنية أو الإقامة سارية المفعول، وصورة شخصية، وفي بعض الحالات شهادة طبية."
    },
    {
      question: "هل الدروس فردية أم جماعية؟",
      answer: "نوفر كلا الخيارين. الدروس العملية غالباً ما تكون فردية لضمان أفضل تجربة تعليمية، بينما الدروس النظرية قد تكون جماعية."
    },
    {
      question: "ما هي أوقات الدوام المتاحة؟",
      answer: "نعمل يومياً من الساعة 8 صباحاً حتى 8 مساءً، مع إمكانية تنسيق مواعيد خاصة حسب احتياجك."
    },
    {
      question: "هل توفرون خدمة النقل؟",
      answer: "نعم، نوفر خدمة نقل مجانية من وإلى المدرسة ضمن نطاق محدد."
    },
    {
      question: "ما هي نسبة النجاح في اجتياز الفحص؟",
      answer: "نفخر بنسبة نجاح تصل إلى 98% لطالباتنا في اجتياز اختبار القيادة من المرة الأولى."
    },
    {
      question: "هل يمكنني تأجيل أو إلغاء الحصة؟",
      answer: "نعم، يمكنك تأجيل الحصة قبل 24 ساعة على الأقل. الإلغاء يخضع لسياسة الاسترجاع الخاصة بنا."
    },
    {
      question: "هل المدربات مؤهلات ومرخصات؟",
      answer: "جميع مدرباتنا حاصلات على تراخيص رسمية ولديهن خبرة واسعة في تعليم القيادة للنساء."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            الأسئلة
            <span className="block gradient-primary bg-clip-text text-transparent">الشائعة</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 rounded-2xl px-6 hover:border-primary transition-smooth"
              >
                <AccordionTrigger className="text-right text-lg font-bold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
