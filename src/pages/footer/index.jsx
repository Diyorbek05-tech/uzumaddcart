import React from 'react';
import Ijtimoiy_tarmoqlar from "../../assets/images/ijtimoiy_tarmoq.svg";
import play_m from "../../assets/images/Play_m.svg";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t('footer.abouUs')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                  {t('header.punkts')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                  {t('footer.vacancies')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t('footer.foydali')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                  {t('footer.contactWithUs')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                  {t('header.question')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t('footer.tadbirlar')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                  {t('footer.sellAtUzum')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                  {t('footer.backAtSeller')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                  {t('header.punkt')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t('footer.takeApp')}</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">AppStore</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src={play_m} alt="Google Play" className="h-10" />
                </a>
              </div>

              <div className="mt-6">
                <h4 className="font-bold text-gray-900 mb-3">{t('footer.uzumAtSocial')}</h4>
                <img src={Ijtimoiy_tarmoqlar} alt="Ijtimoiy tarmoqlar" className="" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600">
                {t('footer.secrecyPolitic')}
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600">
                {t('footer.takeProfit')}
              </a>
            </div>
            <p className="text-sm text-gray-500">
              ©2025 XX MCHJ "{t('footer.mchj')}". STIR 309376127. Barcha huquqlar himoyalangan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;