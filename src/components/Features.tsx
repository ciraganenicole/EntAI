import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, FileText, Users, DollarSign, BarChart3, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Lightbulb,
      title: t('features.pitchBuilder.title'),
      description: t('features.pitchBuilder.description'),
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: FileText,
      title: t('features.businessPlan.title'),
      description: t('features.businessPlan.description'),
      gradient: "from-blue-400 to-orange-500"
    },
    {
      icon: Users,
      title: t('features.coaching.title'),
      description: t('features.coaching.description'),
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: DollarSign,
      title: t('features.finance.title'),
      description: t('features.finance.description'),
      gradient: "from-emerald-400 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      gradient: "from-pink-400 to-red-500"
    },
    {
      icon: MessageSquare,
      title: t('features.community.title'),
      description: t('features.community.description'),
      gradient: "from-orange-400 to-pink-500"
    }
  ];

  return (
    <section className="py-8 mb:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('features.title')}
          </h2>
          <p className="text-[16px] md:text-xl text-slate-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-4 md:p-8">
                <div className={`h-8 w-8 md:w-16 md:h-16 rounded-md md:rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-2 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-4 w-4 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-[16px] md:text-2xl font-bold text-slate-800 mb-2 md:mb-4">{feature.title}</h3>
                <p className="text-slate-600 text-[12px] md:text-[16px] leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
