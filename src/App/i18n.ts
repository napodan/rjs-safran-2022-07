import i18next from "i18next";
import { initReactI18next } from "react-i18next";
const ressources = {
  fr: {
    translation: {
      app_name: "Grootpanier",
      hello: "Bonjour",
    },
  },
  en: {
    translation: {
      app_name: "Grootbasket",
      hello: "hello",
    },
  },
  br: {
    translation: {
      app_name: "Crepe au beurre",
      hello: "demat",
    },
  },
};
export const config18 = {
  resources: ressources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
};
i18next.use(initReactI18next).init(config18);

export default i18next;
