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
     'survey.title': 'Aidez-nous à créer un outil qui vous ressemble !',
     'survey.subtitle': 'Merci de prendre quelques minutes pour répondre à ce questionnaire.',
     'survey.statut.label': 'Quel est votre statut actuel ?',
     'survey.statut.etudiant': 'Étudiant(e)',
     'survey.statut.entrepreneur': 'Entrepreneur(e)',
     'survey.statut.porteur': 'Porteur(se) de projet',
     'survey.statut.salarie': 'Salarié(e)',
     'survey.statut.sansemploi': 'Sans emploi',
     'survey.statut.autre': 'Autre (précisez)',
     'survey.statut.autrePlaceholder': 'Précisez votre statut',
     'survey.projetDuree.label': 'Depuis combien de temps êtes-vous engagé(e) dans un projet entrepreneurial ?',
     'survey.projetDuree.moins6mois': 'Moins de 6 mois',
     'survey.projetDuree.6mois1an': '6 mois à 1 an',
     'survey.projetDuree.1a3ans': '1 à 3 ans',
     'survey.projetDuree.plus3ans': 'Plus de 3 ans',
     'survey.projetDuree.pascommence': 'Je n\'ai pas encore commencé',
     'survey.defis.label': 'Quels sont vos plus grands défis actuellement ? (choix multiples)',
     'survey.defis.financements': 'Trouver des financements',
     'survey.defis.developperidee': 'Développer mon idée',
     'survey.defis.formations': 'Accéder à des formations',
     'survey.defis.gestionentreprise': 'Comprendre la gestion d\'entreprise',
     'survey.defis.tempsmotivation': 'Gérer mon temps / ma motivation',
     'survey.defis.commercialiser': 'Commercialiser mon produit / service',
     'survey.defis.autre': 'Autre (précisez)',
     'survey.defis.autrePlaceholder': 'Précisez votre défi',
     'survey.interetOutil.label': 'Seriez-vous intéressé(e) par un outil numérique intelligent qui vous accompagne dans votre parcours entrepreneurial (conseils, orientation, ressources personnalisées) ?',
     'survey.interetOutil.oui': 'Oui, fortement',
     'survey.interetOutil.peutetre': 'Peut-être',
     'survey.interetOutil.non': 'Non',
     'survey.fonctionnalites.label': 'Quelles fonctionnalités aimeriez-vous retrouver dans un tel outil ? (choix multiples)',
     'survey.fonctionnalites.conseilsperso': 'Conseils personnalisés selon mon niveau',
     'survey.fonctionnalites.businessplan': 'Création assistée de business plan',
     'survey.fonctionnalites.suiviprogress': 'Suivi des progrès',
     'survey.fonctionnalites.ressources': 'Accès à des ressources (modèles, vidéos, guides)',
     'survey.fonctionnalites.suggestions': 'Suggestions d\'opportunités (formations, concours, financements)',
     'survey.fonctionnalites.chatbot': 'Chatbot intelligent',
     'survey.fonctionnalites.autre': 'Autre (précisez)',
     'survey.fonctionnalites.autrePlaceholder': 'Précisez la fonctionnalité',
     'survey.canal.label': 'Comment préférez-vous utiliser ce genre d\'outil ?',
     'survey.canal.mobile': 'Application mobile',
     'survey.canal.web': 'Site web',
     'survey.canal.messagerie': 'WhatsApp / Telegram',
     'survey.canal.autre': 'Autre (précisez)',
     'survey.canal.autrePlaceholder': 'Précisez le canal',
     'survey.frequence.label': 'À quelle fréquence seriez-vous prêt(e) à interagir avec cet outil ?',
     'survey.frequence.quotidien': 'Tous les jours',
     'survey.frequence.2a3sem': '2-3 fois par semaine',
     'survey.frequence.1sem': 'Une fois par semaine',
     'survey.frequence.occasionnel': 'De temps en temps',
     'survey.infoSuite.label': 'Souhaitez-vous être informé(e) de la suite du projet ou participer à son développement ?',
     'survey.infoSuite.oui': 'Oui, je laisse mon email :',
     'survey.infoSuite.non': 'Non',
     'survey.infoSuite.emailPlaceholder': 'Votre email',
     'survey.cancel': 'Annuler',
     'survey.submit': 'Envoyer',
     'survey.submitting': 'Envoi en cours...'
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
    'survey.title': 'Help us create a tool that fits you!',
    'survey.subtitle': 'Thank you for taking a few minutes to answer this survey.',
    'survey.statut.label': 'What is your current status?',
    'survey.statut.etudiant': 'Student',
    'survey.statut.entrepreneur': 'Entrepreneur',
    'survey.statut.porteur': 'Project initiator',
    'survey.statut.salarie': 'Employee',
    'survey.statut.sansemploi': 'Unemployed',
    'survey.statut.autre': 'Other (please specify)',
    'survey.statut.autrePlaceholder': 'Please specify your status',
    'survey.projetDuree.label': 'How long have you been involved in an entrepreneurial project?',
    'survey.projetDuree.moins6mois': 'Less than 6 months',
    'survey.projetDuree.6mois1an': '6 months to 1 year',
    'survey.projetDuree.1a3ans': '1 to 3 years',
    'survey.projetDuree.plus3ans': 'More than 3 years',
    'survey.projetDuree.pascommence': "I haven't started yet",
    'survey.defis.label': 'What are your biggest challenges right now? (multiple choices)',
    'survey.defis.financements': 'Finding funding',
    'survey.defis.developperidee': 'Developing my idea',
    'survey.defis.formations': 'Accessing training',
    'survey.defis.gestionentreprise': 'Understanding business management',
    'survey.defis.tempsmotivation': 'Managing my time/motivation',
    'survey.defis.commercialiser': 'Marketing my product/service',
    'survey.defis.autre': 'Other (please specify)',
    'survey.defis.autrePlaceholder': 'Please specify your challenge',
    'survey.interetOutil.label': 'Would you be interested in a smart digital tool to support your entrepreneurial journey (advice, guidance, personalized resources)?',
    'survey.interetOutil.oui': 'Yes, very interested',
    'survey.interetOutil.peutetre': 'Maybe',
    'survey.interetOutil.non': 'No',
    'survey.fonctionnalites.label': 'What features would you like to see in such a tool? (multiple choices)',
    'survey.fonctionnalites.conseilsperso': 'Personalized advice based on my level',
    'survey.fonctionnalites.businessplan': 'Assisted business plan creation',
    'survey.fonctionnalites.suiviprogress': 'Progress tracking',
    'survey.fonctionnalites.ressources': 'Access to resources (templates, videos, guides)',
    'survey.fonctionnalites.suggestions': 'Suggestions d\'opportunités (formations, concours, financements)',
    'survey.fonctionnalites.chatbot': 'Smart chatbot',
    'survey.fonctionnalites.autre': 'Other (please specify)',
    'survey.fonctionnalites.autrePlaceholder': 'Please specify the feature',
    'survey.canal.label': 'How would you prefer to use this kind of tool?',
    'survey.canal.mobile': 'Mobile app',
    'survey.canal.web': 'Website',
    'survey.canal.messagerie': 'WhatsApp / Telegram',
    'survey.canal.autre': 'Other (please specify)',
    'survey.canal.autrePlaceholder': 'Please specify the channel',
    'survey.frequence.label': 'How often would you be willing to interact with this tool?',
    'survey.frequence.quotidien': 'Every day',
    'survey.frequence.2a3sem': '2-3 times a week',
    'survey.frequence.1sem': 'Once a week',
    'survey.frequence.occasionnel': 'From time to time',
    'survey.infoSuite.label': 'Would you like to be informed about the project or participate in its development?',
    'survey.infoSuite.oui': 'Yes, I leave my email:',
    'survey.infoSuite.non': 'No',
    'survey.infoSuite.emailPlaceholder': 'Your email',
    'survey.cancel': 'Cancel',
    'survey.submit': 'Submit',
    'survey.submitting': 'Submitting...'
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
