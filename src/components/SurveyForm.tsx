import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { Send, Loader2, Copy } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";

interface SurveyFormProps {
  onClose: () => void;
}

const steps = [
  "profile",
  "projectDuration",
  "challenges",
  "interest",
  "features",
  "channelsFrequency",
  "conclusion",
];

const SurveyForm = ({ onClose }: SurveyFormProps) => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // 1. Profil de l'utilisateur
    statut: "",
    statutOther: "",
    projetDuree: "",
    // 2. Problèmes rencontrés
    defis: [] as string[],
    defisOther: "",
    // 3. Intérêt pour la plateforme
    interetOutil: "",
    fonctionnalites: [] as string[],
    fonctionnalitesOther: "",
    // 4. Canaux et fréquence
    canal: [] as string[],
    canalOther: "",
    frequence: "",
    // 5. Conclusion
    infoSuite: false,
    email: "",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

  // Helper for multiple choice
  const handleMultiToggle = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v: string) => v !== value)
        : [...prev[field], value]
    }));
  };

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Survey data:", formData);
    setIsSubmitting(false);
    onClose();
  };

  // Options
  const statutOptions = [
    { value: "etudiant", label: t('survey.statut.etudiant') },
    { value: "entrepreneur", label: t('survey.statut.entrepreneur') },
    { value: "porteur", label: t('survey.statut.porteur') },
    { value: "salarie", label: t('survey.statut.salarie') },
    { value: "sansemploi", label: t('survey.statut.sansemploi') },
    { value: "autre", label: t('survey.statut.autre') },
  ];
  const projetDureeOptions = [
    { value: "moins6mois", label: t('survey.projetDuree.moins6mois') },
    { value: "6mois1an", label: t('survey.projetDuree.6mois1an') },
    { value: "1a3ans", label: t('survey.projetDuree.1a3ans') },
    { value: "plus3ans", label: t('survey.projetDuree.plus3ans') },
    { value: "pascommence", label: t('survey.projetDuree.pascommence') },
  ];
  const defisOptions = [
    { value: "financements", label: t('survey.defis.financements') },
    { value: "developperidee", label: t('survey.defis.developperidee') },
    { value: "formations", label: t('survey.defis.formations') },
    { value: "gestionentreprise", label: t('survey.defis.gestionentreprise') },
    { value: "tempsmotivation", label: t('survey.defis.tempsmotivation') },
    { value: "commercialiser", label: t('survey.defis.commercialiser') },
    { value: "autre", label: t('survey.defis.autre') },
  ];
  const interetOutilOptions = [
    { value: "oui", label: t('survey.interetOutil.oui') },
    { value: "peutetre", label: t('survey.interetOutil.peutetre') },
    { value: "non", label: t('survey.interetOutil.non') },
  ];
  const fonctionnalitesOptions = [
    { value: "conseilsperso", label: t('survey.fonctionnalites.conseilsperso') },
    { value: "businessplan", label: t('survey.fonctionnalites.businessplan') },
    { value: "suiviprogress", label: t('survey.fonctionnalites.suiviprogress') },
    { value: "ressources", label: t('survey.fonctionnalites.ressources') },
    { value: "suggestions", label: t('survey.fonctionnalites.suggestions') },
    { value: "chatbot", label: t('survey.fonctionnalites.chatbot') },
    { value: "autre", label: t('survey.fonctionnalites.autre') },
  ];
  const canalOptions = [
    { value: "mobile", label: t('survey.canal.mobile') },
    { value: "web", label: t('survey.canal.web') },
    // { value: "messagerie", label: t('survey.canal.messagerie') },
    { value: "autre", label: t('survey.canal.autre') },
  ];
  const frequenceOptions = [
    { value: "quotidien", label: t('survey.frequence.quotidien') },
    { value: "2a3sem", label: t('survey.frequence.2a3sem') },
    { value: "1sem", label: t('survey.frequence.1sem') },
    { value: "occasionnel", label: t('survey.frequence.occasionnel') },
  ];

  return (
    <div className="p-4">
      {/* Step Indicator */}
      <div className="flex justify-center mb-6">
        {steps.map((step, idx) => (
          <div
            key={step}
            className={`h-2 w-8 mx-1 rounded-full transition-all duration-300 ${
              idx === currentStep
                ? "bg-gradient-to-r from-blue-600 to-orange-400 w-12"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <CardHeader className="flex flex-row items-center justify-between px-0 pt-0 pb-4 w-full mb-8">
        <div>
          <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text text-transparent mb-2">
            {t('survey.title')}
          </CardTitle>
          <p className="text-gray-600 text-[14px] md:text-lg">
            {t('survey.subtitle')}
          </p>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0 w-full bg-transparent">
        <form onSubmit={handleSubmit} className="space-y-8 w-full">
          {/* Step 1: Profile */}
          {currentStep === 0 && (
            <div>
              <Label className="font-semibold text-[16px] md:text-[20px] block mb-4">
                {t('survey.statut.label')}
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {statutOptions.map(opt => (
                  <div key={opt.value} className="flex items-center space-x-3">
                    <Checkbox
                      id={opt.value}
                      checked={formData.statut === opt.value}
                      onCheckedChange={() => handleInputChange('statut', opt.value)}
                    />
                    <Label htmlFor={opt.value} className="text-[12px] md:text-base">{opt.label}</Label>
                    {opt.value === 'autre' && formData.statut === 'autre' && (
                      <Input
                        className="ml-2"
                        placeholder={t('survey.statut.autrePlaceholder')}
                        value={formData.statutOther}
                        onChange={e => handleInputChange('statutOther', e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Step 2: Project Duration */}
          {currentStep === 1 && (
            <div>
              <Label className="font-semibold text-[16px] md:text-[20px] block mb-4">
                {t('survey.projetDuree.label')}
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {projetDureeOptions.map(opt => (
                  <div key={opt.value} className="flex items-center space-x-3">
                    <Checkbox
                      id={opt.value}
                      checked={formData.projetDuree === opt.value}
                      onCheckedChange={() => handleInputChange('projetDuree', opt.value)}
                    />
                    <Label htmlFor={opt.value} className="text-[12px] md:text-base">{opt.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Step 3: Challenges */}
          {currentStep === 2 && (
            <div>
              <Label className="font-semibold text-[16px] md:text-[20px] block mb-4">
                {t('survey.defis.label')}
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {defisOptions.map(opt => (
                  <div key={opt.value} className="flex items-center space-x-3">
                    <Checkbox
                      id={opt.value}
                      checked={formData.defis.includes(opt.value)}
                      onCheckedChange={() => handleMultiToggle('defis', opt.value)}
                    />
                    <Label htmlFor={opt.value} className="text-[12px] md:text-base">{opt.label}</Label>
                    {opt.value === 'autre' && formData.defis.includes('autre') && (
                      <Input
                        className="ml-2"
                        placeholder={t('survey.defis.autrePlaceholder')}
                        value={formData.defisOther}
                        onChange={e => handleInputChange('defisOther', e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Step 4: Interest */}
          {currentStep === 3 && (
            <div>
              <Label className="font-semibold text-[16px] md:text-[20px] block mb-4">
                {t('survey.interetOutil.label')}
              </Label>
              <div className="flex flex-col md:flex-row gap-4 mt-2">
                {interetOutilOptions.map(opt => (
                  <div key={opt.value} className="flex items-center space-x-3">
                    <Checkbox
                      id={opt.value}
                      checked={formData.interetOutil === opt.value}
                      onCheckedChange={() => handleInputChange('interetOutil', opt.value)}
                    />
                    <Label htmlFor={opt.value} className="text-[12px] md:text-base">{opt.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Step 5: Features */}
          {currentStep === 4 && (
            <div>
              <Label className="font-semibold text-[16px] md:text-[20px] block mb-4">
                {t('survey.fonctionnalites.label')}
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {fonctionnalitesOptions.map(opt => (
                  <div key={opt.value} className="flex items-center space-x-3">
                    <Checkbox
                      id={opt.value}
                      checked={formData.fonctionnalites.includes(opt.value)}
                      onCheckedChange={() => handleMultiToggle('fonctionnalites', opt.value)}
                    />
                    <Label htmlFor={opt.value} className="text-[12px] md:text-base">{opt.label}</Label>
                    {opt.value === 'autre' && formData.fonctionnalites.includes('autre') && (
                      <Input
                        className="ml-2"
                        placeholder={t('survey.fonctionnalites.autrePlaceholder')}
                        value={formData.fonctionnalitesOther}
                        onChange={e => handleInputChange('fonctionnalitesOther', e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Step 6: Channels and Frequency */}
          {currentStep === 5 && (
            <div>
              <Label className="font-semibold text-[16px] md:text-[20px] block mb-4">
                {t('survey.canal.label')}
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 mb-6">
                {canalOptions.map(opt => (
                  <div key={opt.value} className="flex items-center space-x-3">
                    <Checkbox
                      id={opt.value}
                      checked={formData.canal.includes(opt.value)}
                      onCheckedChange={() => handleMultiToggle('canal', opt.value)}
                    />
                    <Label htmlFor={opt.value} className="text-[12px] md:text-base">{opt.label}</Label>
                    {opt.value === 'autre' && formData.canal.includes('autre') && (
                      <Input
                        className="ml-2"
                        placeholder={t('survey.canal.autrePlaceholder')}
                        value={formData.canalOther}
                        onChange={e => handleInputChange('canalOther', e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
              <Label className="font-semibold text-[16px] md:text-[20px] block mb-4">
                {t('survey.frequence.label')}
              </Label>
              <div className="mt-2">
                <Select
                  value={formData.frequence}
                  onValueChange={value => handleInputChange('frequence', value)}
                >
                  <SelectTrigger className="w-full md:w-1/2">
                    <SelectValue placeholder={t('survey.frequence.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    {frequenceOptions.map(opt => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          {/* Step 7: Conclusion */}
          {currentStep === 6 && (
            <div>
              <Label className="font-semibold text-lg block mb-4">
                {t('survey.infoSuite.label')}
              </Label>
              <div className="flex items-center space-x-3 mt-2">
                <Checkbox
                  id="infoSuite"
                  checked={formData.infoSuite}
                  onCheckedChange={checked => handleInputChange('infoSuite', checked as boolean)}
                />
                <Label htmlFor="infoSuite" className="text-[12px] md:text-base">{t('survey.infoSuite.oui')}</Label>
                {formData.infoSuite && (
                  <Input
                    className="ml-2"
                    placeholder={t('survey.infoSuite.emailPlaceholder')}
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                  />
                )}
                <Checkbox
                  id="infoSuiteNon"
                  checked={!formData.infoSuite}
                  onCheckedChange={() => handleInputChange('infoSuite', false)}
                />
                <Label htmlFor="infoSuiteNon" className="text-[12px] md:text-base">{t('survey.infoSuite.non')}</Label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-row justify-center items-center gap-4 pt-8">
            <Button
              type="button"
              variant="outline"
              onClick={goBack}
              disabled={currentStep === 0}
              className="rounded-full min-w-[120px] h-12 border border-blue-200 shadow-sm text-blue-700 font-semibold hover:bg-blue-50 transition"
            >
              {t('survey.back')}
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button
                type="button"
                onClick={goNext}
                className="rounded-full min-w-[120px] h-12 bg-gradient-to-r from-blue-600 to-orange-400 hover:from-blue-700 hover:to-orange-500 text-white shadow-lg font-semibold transition"
              >
                {t('survey.next')}
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full min-w-[120px] h-12 bg-gradient-to-r from-blue-600 to-orange-400 hover:from-blue-700 hover:to-orange-500 text-white shadow-lg font-semibold transition"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t('survey.submitting')}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t('survey.submit')}
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </div>
  );
};

export default SurveyForm; 