
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[16px] md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 md:mb-4">
              TijaBoost
            </h3>
            <p className="text-[12px] md:text-[16px] text-slate-300 mb-2 md:mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-4 w-4 md:h-6 md:w-6 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-4 w-4 md:h-6 md:w-6 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-4 w-4 md:h-6 md:w-6 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[16px] md:text-lg font-semibold mb-2 md:mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-[12px] md:text-[16px]">{t('footer.features')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-[12px] md:text-[16px]">{t('footer.pricing')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-[12px] md:text-[16px]">{t('footer.successStories')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-[12px] md:text-[16px]">{t('footer.resources')}</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-[12px] md:text-[16px]">{t('footer.support')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[16px] md:text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-3 w-3 md:h-5 md:w-5 text-blue-400 mr-3" />
                <span className="text-slate-300 text-[12px] md:text-[16px]">hello@tijaboost.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-3 w-3 md:h-5 md:w-5 text-blue-400 mr-3" />
                <span className="text-slate-300 text-[12px] md:text-[16px]">+243 991746590</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 md:h-5 md:w-5 text-blue-400 mr-3" />
                <span className="text-slate-300 text-[12px] md:text-[16px]">Goma, Nord-kivu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0 text-[14px] md:text-[16px]">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-[12px] md:text-[16px]">{t('footer.privacy')}</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-[12px] md:text-[16px]">{t('footer.terms')}</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-[12px] md:text-[16px]">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
