import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Hero Section
    'hero.title': 'EntrepreneurAI',
    'hero.subtitle': 'Votre compagnon IA pour la perfection du pitch, la planification stratégique et la maîtrise financière',
    'hero.description': 'Transformez votre parcours entrepreneurial avec des insights alimentés par l\'IA, du coaching personnalisé et des outils qui vous aident à construire, pitcher et faire évoluer votre entreprise en toute confiance.',
    'hero.startJourney': 'Se connecter',
    'hero.takeSurvey': 'Sondage',
    'hero.entrepreneurs': 'Entrepreneurs',
    'hero.investors': 'Investisseurs',
    'hero.coaches': 'Coaches',

    // Features Section
    'features.title': 'Tout ce dont vous avez besoin pour réussir',
    'features.subtitle': 'Notre plateforme IA complète fournit tous les outils et conseils nécessaires pour transformer vos idées en entreprises prospères.',
    'features.pitchBuilder.title': 'Créateur de Pitch IA',
    'features.pitchBuilder.description': 'Créez des pitchs convaincants et prêts pour les investisseurs avec des suggestions alimentées par l\'IA et les meilleures pratiques de l\'industrie.',
    'features.businessPlan.title': 'Générateur de Plan d\'Affaires',
    'features.businessPlan.description': 'Générez des plans d\'affaires complets adaptés à votre secteur avec des projections financières et une analyse de marché.',
    'features.coaching.title': 'Coaching Personnel',
    'features.coaching.description': 'Obtenez des sessions de coaching personnalisées avec des mentors IA formés sur les stratégies d\'entrepreneurs à succès.',
    'features.finance.title': 'Gestion Financière',
    'features.finance.description': 'Suivez les dépenses, gérez les flux de trésorerie et obtenez des insights financiers alimentés par l\'IA pour une meilleure prise de décision.',
    'features.analytics.title': 'Analyses de Marché',
    'features.analytics.description': 'Analysez les tendances du marché, les insights concurrentiels et les opportunités de croissance avec des données en temps réel.',
    'features.community.title': 'Support Communautaire',
    'features.community.description': 'Connectez-vous avec d\'autres entrepreneurs, partagez des expériences et obtenez des retours de notre communauté dynamique.',

    // Partners Section
    'partners.title': 'Approuvé par les leaders de l\'industrie',
    'partners.subtitle': 'Partenariat avec les sociétés de capital-risque et accélérateurs les plus respectés au monde',
    'partners.funding': 'de financement facilité pour nos utilisateurs',

    // Testimonials Section
    'testimonials.title': 'Ce que disent les entrepreneurs',
    'testimonials.subtitle': 'Rejoignez des milliers d\'entrepreneurs prospères qui ont transformé leurs entreprises avec EntrepreneurAI.',
    'testimonials.sarah.content': 'EntrepreneurAI m\'a aidé à créer un pitch gagnant qui a sécurisé 2M$ en financement Série A. Le coaching IA était inestimable !',
    'testimonials.marcus.content': 'Le générateur de plan d\'affaires m\'a fait économiser des mois de travail. C\'est comme avoir une équipe de consultants experts à portée de main.',
    'testimonials.emily.content': 'Les outils de gestion financière et les insights IA ont complètement transformé ma façon d\'aborder la stratégie d\'entreprise.',

    // CTA Section
    'cta.title': 'Prêt à transformer votre entreprise ?',
    'cta.subtitle': 'Rejoignez des milliers d\'entrepreneurs qui construisent déjà des entreprises prospères avec des insights alimentés par l\'IA.',
    'cta.takeSurvey': 'Répondre au sondage',
    'cta.joinCommunity': 'Rejoindre la communauté',
    'cta.freeTrial': 'Essai gratuit',
    'cta.aiSupport': 'Support IA',
    'cta.guarantee': 'Garantie de remboursement',

    // Footer
    'footer.description': 'Autonomiser les entrepreneurs du monde entier avec des outils alimentés par l\'IA pour le succès des entreprises. Transformez vos idées en entreprises florissantes avec notre plateforme complète.',
    'footer.quickLinks': 'Liens rapides',
    'footer.features': 'Fonctionnalités',
    'footer.pricing': 'Tarifs',
    'footer.successStories': 'Histoires de succès',
    'footer.resources': 'Ressources',
    'footer.support': 'Support',
    'footer.contact': 'Contact',
    'footer.rights': '© 2024 EntrepreneurAI. Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.cookies': 'Politique des cookies',

    // Survey Form
    'survey.title': 'Aidez-nous à améliorer EntrepreneurAI',
    'survey.subtitle': 'Votre feedback nous aide à créer une meilleure expérience pour les entrepreneurs.',
    'survey.name': 'Nom complet',
    'survey.namePlaceholder': 'Votre nom complet',
    'survey.email': 'Email',
    'survey.emailPlaceholder': 'votre@email.com',
    'survey.company': 'Entreprise',
    'survey.companyPlaceholder': 'Nom de votre entreprise (optionnel)',
    'survey.role': 'Rôle',
    'survey.rolePlaceholder': 'Sélectionnez votre rôle',
    'survey.roles.entrepreneur': 'Entrepreneur',
    'survey.roles.investor': 'Investisseur',
    'survey.roles.coach': 'Coach/Mentor',
    'survey.roles.student': 'Étudiant',
    'survey.roles.other': 'Autre',
    'survey.experience': 'Niveau d\'expérience',
    'survey.experiencePlaceholder': 'Sélectionnez votre niveau',
    'survey.experienceLevels.beginner': 'Débutant (0-2 ans)',
    'survey.experienceLevels.intermediate': 'Intermédiaire (2-5 ans)',
    'survey.experienceLevels.advanced': 'Avancé (5-10 ans)',
    'survey.experienceLevels.expert': 'Expert (10+ ans)',
    'survey.challenges': 'Défis principaux',
    'survey.challengesPlaceholder': 'Quels sont vos plus grands défis en tant qu\'entrepreneur ?',
    'survey.interests': 'Fonctionnalités d\'intérêt',
    'survey.interests.aipitchbuilder': 'Créateur de Pitch IA',
    'survey.interests.businessplangenerator': 'Générateur de Plan d\'Affaires',
    'survey.interests.financialmanagement': 'Gestion Financière',
    'survey.interests.marketanalytics': 'Analyses de Marché',
    'survey.interests.personalcoaching': 'Coaching Personnel',
    'survey.interests.communitysupport': 'Support Communautaire',
    'survey.feedback': 'Feedback supplémentaire',
    'survey.feedbackPlaceholder': 'Partagez vos suggestions pour améliorer EntrepreneurAI...',
    'survey.newsletter': 'Je souhaite recevoir les dernières nouvelles et mises à jour',
    'survey.submit': 'Envoyer le sondage',
    'survey.submitting': 'Envoi en cours...',
    'survey.cancel': 'Annuler',
  },
  en: {
    // Hero Section
    'hero.title': 'EntrepreneurAI',
    'hero.subtitle': 'Your AI-powered business companion for pitch perfection, strategic planning, and financial mastery',
    'hero.description': 'Transform your entrepreneurial journey with AI-driven insights, personalized coaching, and tools that help you build, pitch, and scale your business with confidence.',
    'hero.startJourney': 'Start Your Journey',
    'hero.takeSurvey': 'Take Survey',
    'hero.entrepreneurs': 'Entrepreneurs',
    'hero.investors': 'Investors',
    'hero.coaches': 'Coaches',

    // Features Section
    'features.title': 'Everything You Need to Succeed',
    'features.subtitle': 'Our comprehensive AI platform provides all the tools and guidance you need to transform your ideas into successful businesses.',
    'features.pitchBuilder.title': 'AI Pitch Builder',
    'features.pitchBuilder.description': 'Create compelling, investor-ready pitches with AI-powered suggestions and industry best practices.',
    'features.businessPlan.title': 'Business Plan Generator',
    'features.businessPlan.description': 'Generate comprehensive business plans tailored to your industry with financial projections and market analysis.',
    'features.coaching.title': 'Personal Coaching',
    'features.coaching.description': 'Get personalized coaching sessions with AI mentors trained on successful entrepreneur strategies.',
    'features.finance.title': 'Finance Management',
    'features.finance.description': 'Track expenses, manage cash flow, and get AI-driven financial insights for better decision making.',
    'features.analytics.title': 'Market Analytics',
    'features.analytics.description': 'Analyze market trends, competitor insights, and growth opportunities with real-time data.',
    'features.community.title': 'Community Support',
    'features.community.description': 'Connect with fellow entrepreneurs, share experiences, and get feedback from our vibrant community.',

    // Partners Section
    'partners.title': 'Trusted by Industry Leaders',
    'partners.subtitle': 'Partnering with the world\'s most respected venture capital firms and accelerators',
    'partners.funding': 'in funding facilitated for our users',

    // Testimonials Section
    'testimonials.title': 'What Entrepreneurs Say',
    'testimonials.subtitle': 'Join thousands of successful entrepreneurs who\'ve transformed their businesses with EntrepreneurAI.',
    'testimonials.sarah.content': 'EntrepreneurAI helped me create a winning pitch that secured $2M in Series A funding. The AI coaching was invaluable!',
    'testimonials.marcus.content': 'The business plan generator saved me months of work. It\'s like having a team of expert consultants at my fingertips.',
    'testimonials.emily.content': 'The financial management tools and AI insights completely transformed how I approach business strategy.',

    // CTA Section
    'cta.title': 'Ready to Transform Your Business?',
    'cta.subtitle': 'Join thousands of entrepreneurs who are already building successful businesses with AI-powered insights.',
    'cta.takeSurvey': 'Take Our Survey',
    'cta.joinCommunity': 'Join Community',
    'cta.freeTrial': 'Free Trial',
    'cta.aiSupport': 'AI Support',
    'cta.guarantee': 'Money Back Guarantee',

    // Footer
    'footer.description': 'Empowering entrepreneurs worldwide with AI-driven tools for business success. Transform your ideas into thriving businesses with our comprehensive platform.',
    'footer.quickLinks': 'Quick Links',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.successStories': 'Success Stories',
    'footer.resources': 'Resources',
    'footer.support': 'Support',
    'footer.contact': 'Contact',
    'footer.rights': '© 2024 EntrepreneurAI. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',

    // Survey Form
    'survey.title': 'Help Us Improve EntrepreneurAI',
    'survey.subtitle': 'Your feedback helps us create a better experience for entrepreneurs.',
    'survey.name': 'Full Name',
    'survey.namePlaceholder': 'Your full name',
    'survey.email': 'Email',
    'survey.emailPlaceholder': 'your@email.com',
    'survey.company': 'Company',
    'survey.companyPlaceholder': 'Your company name (optional)',
    'survey.role': 'Role',
    'survey.rolePlaceholder': 'Select your role',
    'survey.roles.entrepreneur': 'Entrepreneur',
    'survey.roles.investor': 'Investor',
    'survey.roles.coach': 'Coach/Mentor',
    'survey.roles.student': 'Student',
    'survey.roles.other': 'Other',
    'survey.experience': 'Experience Level',
    'survey.experiencePlaceholder': 'Select your level',
    'survey.experienceLevels.beginner': 'Beginner (0-2 years)',
    'survey.experienceLevels.intermediate': 'Intermediate (2-5 years)',
    'survey.experienceLevels.advanced': 'Advanced (5-10 years)',
    'survey.experienceLevels.expert': 'Expert (10+ years)',
    'survey.challenges': 'Main Challenges',
    'survey.challengesPlaceholder': 'What are your biggest challenges as an entrepreneur?',
    'survey.interests': 'Features of Interest',
    'survey.interests.aipitchbuilder': 'AI Pitch Builder',
    'survey.interests.businessplangenerator': 'Business Plan Generator',
    'survey.interests.financialmanagement': 'Financial Management',
    'survey.interests.marketanalytics': 'Market Analytics',
    'survey.interests.personalcoaching': 'Personal Coaching',
    'survey.interests.communitysupport': 'Community Support',
    'survey.feedback': 'Additional Feedback',
    'survey.feedbackPlaceholder': 'Share your suggestions to improve EntrepreneurAI...',
    'survey.newsletter': 'I want to receive the latest news and updates',
    'survey.submit': 'Submit Survey',
    'survey.submitting': 'Submitting...',
    'survey.cancel': 'Cancel',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr'); // French by default

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
