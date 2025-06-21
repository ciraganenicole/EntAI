import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { Send, Loader2 } from "lucide-react";

interface SurveyFormProps {
  onClose: () => void;
}

const SurveyForm = ({ onClose }: SurveyFormProps) => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    experience: "",
    challenges: "",
    interests: [] as string[],
    feedback: "",
    newsletter: false
  });

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the data to your backend
    console.log("Survey data:", formData);
    
    setIsSubmitting(false);
    onClose();
  };

  const interestOptions = [
    "AI Pitch Builder",
    "Business Plan Generator", 
    "Financial Management",
    "Market Analytics",
    "Personal Coaching",
    "Community Support"
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('survey.title')}
        </h2>
        <p className="text-gray-600">
          {t('survey.subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">{t('survey.name')}</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder={t('survey.namePlaceholder')}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">{t('survey.email')}</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder={t('survey.emailPlaceholder')}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="company">{t('survey.company')}</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder={t('survey.companyPlaceholder')}
            />
          </div>
          <div>
            <Label htmlFor="role">{t('survey.role')}</Label>
            <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
              <SelectTrigger>
                <SelectValue placeholder={t('survey.rolePlaceholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entrepreneur">{t('survey.roles.entrepreneur')}</SelectItem>
                <SelectItem value="investor">{t('survey.roles.investor')}</SelectItem>
                <SelectItem value="coach">{t('survey.roles.coach')}</SelectItem>
                <SelectItem value="student">{t('survey.roles.student')}</SelectItem>
                <SelectItem value="other">{t('survey.roles.other')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Experience Level */}
        <div>
          <Label htmlFor="experience">{t('survey.experience')}</Label>
          <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
            <SelectTrigger>
              <SelectValue placeholder={t('survey.experiencePlaceholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">{t('survey.experienceLevels.beginner')}</SelectItem>
              <SelectItem value="intermediate">{t('survey.experienceLevels.intermediate')}</SelectItem>
              <SelectItem value="advanced">{t('survey.experienceLevels.advanced')}</SelectItem>
              <SelectItem value="expert">{t('survey.experienceLevels.expert')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Challenges */}
        <div>
          <Label htmlFor="challenges">{t('survey.challenges')}</Label>
          <Textarea
            id="challenges"
            value={formData.challenges}
            onChange={(e) => handleInputChange('challenges', e.target.value)}
            placeholder={t('survey.challengesPlaceholder')}
            rows={3}
          />
        </div>

        {/* Interests */}
        <div>
          <Label>{t('survey.interests')}</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
            {interestOptions.map((interest) => (
              <div key={interest} className="flex items-center space-x-2">
                <Checkbox
                  id={interest}
                  checked={formData.interests.includes(interest)}
                  onCheckedChange={() => handleInterestToggle(interest)}
                />
                <Label htmlFor={interest} className="text-sm font-normal">
                  {t(`survey.interests.${interest.toLowerCase().replace(/\s+/g, '')}`)}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Feedback */}
        <div>
          <Label htmlFor="feedback">{t('survey.feedback')}</Label>
          <Textarea
            id="feedback"
            value={formData.feedback}
            onChange={(e) => handleInputChange('feedback', e.target.value)}
            placeholder={t('survey.feedbackPlaceholder')}
            rows={4}
          />
        </div>

        {/* Newsletter Subscription */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
          />
          <Label htmlFor="newsletter" className="text-sm font-normal">
            {t('survey.newsletter')}
          </Label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isSubmitting}
          >
            {t('survey.cancel')}
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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
        </div>
      </form>
    </div>
  );
};

export default SurveyForm; 