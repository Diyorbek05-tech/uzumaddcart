import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uzJson from "./locales/uz.json"
import enJson from "./locales/en.json"
import ruJson from "./locales/ru.json"

const resources = {
  uz: { translation: uzJson },
  en: { translation: enJson },
  ru: { translation: ruJson },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz",
  });

  export default i18n;