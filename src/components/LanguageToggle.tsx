
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        className="bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white text-slate-700 hover:text-slate-900"
      >
        <Globe className="h-4 w-4 mr-2" />
        {language === 'fr' ? 'EN' : 'FR'}
      </Button>
    </div>
  );
};

export default LanguageToggle;
