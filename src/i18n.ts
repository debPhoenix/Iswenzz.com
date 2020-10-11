import i18n, {InitOptions} from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			"fish": "The fish"
		}
	},
	fr: {
		translation: {
			"fish": "Le fishe"
		}
	}
};

/**
 * Supported languages.
 */
export type Language = "en" | "fr" | "es";

const initOption: InitOptions = {
	resources,
	lng: localStorage.getItem("language") ?? "en",
	fallbackLng: "en", 		// use en if detected lng is not available
	keySeparator: false, 	// we do not use keys in form messages.welcome
	interpolation: {
		escapeValue: false 	// react already safes from xss
	}
};

i18n.use(detector)
	.use(initReactI18next) 	// passes i18n down to react-i18next
	.init(initOption);

export default i18n;