import i18next from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  fr: {
    translation: {
      app_name: "Grootpanier",
      hello: "Bonjour",
    },
  },
  en: {
    translation: {
      app_name: "Grootbasket",
      hello: "Hello",
    },
  },
  br: {
    translation: {
      app_name: "Crepe au beurre",
      hello: "Demat",
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "br",
  interpolation: {
    escapeValue: false,
  },
});
