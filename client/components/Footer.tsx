import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="font-bold text-white text-lg">{t('footer.brand')}</span>
            </div>
            <p className="text-sm text-gray-400">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.courses')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition">
                  {t('footer.allCourses')}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  {t('footer.popular')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  {t('footer.new')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  {t('footer.aboutUs')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  {t('footer.careers')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  {t('footer.blog')}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  {t('footer.helpCenter')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  {t('footer.contactUs')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  {t('footer.faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  {t('footer.privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  {t('footer.termsOfService')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  {t('footer.cookiePolicy')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>{t('footer.copyright')}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">
                {t('footer.twitter')}
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                {t('footer.linkedin')}
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                {t('footer.facebook')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
