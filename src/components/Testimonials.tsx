
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Nicole Ciragane",
      role: "Co-founder, Harvely",
      image: "",
      content: t('testimonials.sarah.content'),
      rating: 5,
      company: "TechStart"
    },
    {
      name: "Marcos Musafiri",
      role: "Co-founder, Wakisha Holding",
      image: "",
      content: t('testimonials.marcus.content'),
      rating: 5,
      company: "GreenEnergy Co"
    },
    {
      name: "Murhula Metre",
      role: "Co-founder, Harvely",
      image: "",
      content: t('testimonials.emily.content'),
      rating: 5,
      company: "HealthTech Solutions"
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-[14px] md:text-xl text-slate-300 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-4 md:p-8">
                <Quote className="h-4 w-4 md:h-6 md:w-6 text-blue-400 mb-2 md:mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-300 mb-2 md:mb-6 text-[14px] md:text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full mr-2 md:mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-[14px] md:text-lg">{testimonial.name}</h4>
                    <p className="text-blue-400 text-[12px] md:text-md">{testimonial.role}</p>
                    <p className="text-slate-400 text-[10px] md:text-sm">{testimonial.company}</p>
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
