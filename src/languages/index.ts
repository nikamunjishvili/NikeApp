import { use } from "i18next";
import { initReactI18next } from "react-i18next";

import ge from "./locales/ge";
import en from "./locales/en";

export const resources = {
	geo: {
		translation: ge,
	},
	eng: {
		translation: en,
	},
} as const;

use(initReactI18next).init({
	lng: "geo",
	fallbackLng: "geo",
	compatibilityJSON: "v3",

	interpolation: {
		escapeValue: false,
	},

	resources,
});
