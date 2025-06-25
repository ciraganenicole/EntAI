import { useLanguage } from "@/contexts/LanguageContext";

const Partners = () => {
  const { t } = useLanguage();
  
  const partners = [
    { name: "Y Combinator", logo: "YC" },
    { name: "Techstars", logo: "TS" },
    { name: "500 Startups", logo: "500" },
    { name: "Andreessen Horowitz", logo: "a16z" },
    { name: "Sequoia Capital", logo: "SQ" },
    { name: "Google Ventures", logo: "GV" }
  ];

  return (
    <section className="py-6 md:py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-[14px] md:text-lg text-slate-600">
            {t('partners.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 md:p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="w-10 h-8 md:w-16 md:h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-md md:rounded-xl flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold text-[14px] md:text-sm">{partner.logo}</span>
                </div>
                <p className="text-slate-600 text-xs font-medium">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-16 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-200 to-orange-300 rounded-2xl">
            <p className="text-slate-700 font-medium">
              <span className="text-blue-600 font-bold">$100M+</span> {t('partners.funding')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
