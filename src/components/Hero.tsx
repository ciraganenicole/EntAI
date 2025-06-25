import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import SurveyForm from "./SurveyForm";

const Hero = () => {
  const { t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTI1MjUiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center mb-3 md:mt-0 md:mb-6 mt-20">
            <Sparkles className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-orange-400 to-blue-600 bg-clip-text text-transparent">
              TijaBoost
            </h1>
          </div>
          
          <p className="text-md md:text-2xl text-slate-300 mb-4 md:mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-sm text-[16px] text-slate-400 mb-6 md:mb-12 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white w-[50%] md:w-[25%] py-2 px-3 mb:px-8 mb:py-4 text-[12px] md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              {t('hero.startJourney')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-blue-500 text-blue-500 hover:bg-blue-400 hover:text-slate-900 w-[50%] md:w-[25%] py-2 px-3 mb:px-8 mb:py-4 text-[12px] md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  {t('hero.takeSurvey')}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <SurveyForm onClose={handleCloseDialog} />
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-1 md:gap-8 text-center">
            <div className="p-2 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Users className="h-6 w-6 md:h-12 md:w-12 text-green-400 mx-auto mb-2 md:mb-4" />
              <h3 className="text-[16px] md:text-2xl font-bold text-white mb-2">5,000+</h3>
              <p className="text-[12px] md:text-[16px] text-slate-400">{t('hero.entrepreneurs')}</p>
            </div>
            
            <div className="p-2 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Briefcase className="h-6 w-6 md:h-12 md:w-12 text-green-400 mx-auto mb-2 md:mb-4" />
              <h3 className="text-[16px] md:text-2xl font-bold text-white mb-2">1,200+</h3>
              <p className="text-[12px] md:text-[16px] text-slate-400">{t('hero.investors')}</p>
            </div>
            
            <div className="p-2 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <GraduationCap className="h-6 w-6 md:h-12 md:w-12 text-green-400 mx-auto mb-2 md:mb-4" />
              <h3 className="text-[16px] md:text-2xl font-bold text-white mb-2">800+</h3>
              <p className="text-[12px] md:text-[16px] text-slate-400">{t('hero.coaches')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
