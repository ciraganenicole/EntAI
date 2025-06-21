import { Button } from "@/components/ui/button";
import { ArrowRight, Users, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import SurveyForm from "./SurveyForm";

const CTA = () => {
  const { t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section className="py-8 md:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-[14px] md:text-xl text-blue-100 max-w-2xl mx-auto mb-4 md:mb-8">
            {t('cta.subtitle')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center items-center mb-8 md:mb-16">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg"
                className="bg-white w-full md:w-[25%] text-blue-600 hover:bg-blue-50 px-8 py-4 text-[16px] md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl min-w-[250px]"
              >
                <FileText className="mr-3 h-5 w-5" />
                {t('cta.takeSurvey')}
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <SurveyForm onClose={handleCloseDialog} />
            </DialogContent>
          </Dialog>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-white w-full md:w-[25%] text-black hover:bg-white hover:text-blue-600 px-8 py-4 text-[16px] md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 min-w-[250px]"
          >
            <Users className="mr-3 h-5 w-5" />
            {t('cta.joinCommunity')}
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-8 text-center">
          <div className="p-2 md:p-6">
            <div className="text-[16px] md:text-3xl font-bold text-yellow-300 mb-2">30 {t('cta.freeTrial')}</div>
            <p className="text-blue-100 text-center text-[12px] md:text-sm">{t('cta.freeTrial')}</p>
          </div>
          <div className="p-2 md:p-6">
            <div className="text-[16px] md:text-3xl font-bold text-yellow-300 mb-2">24/7</div>
            <p className="text-blue-100 text-center text-[12px] md:text-sm">{t('cta.aiSupport')}</p>
          </div>
          <div className="p-2 md:p-6">
            <div className="text-[16px] md:text-3xl font-bold text-yellow-300 mb-2">100%</div>
            <p className="text-blue-100 text-center text-[12px] md:text-sm">{t('cta.guarantee')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
