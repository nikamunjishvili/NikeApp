import { resources } from "../languages";

declare module "i18next" {
	interface CustomTypeOptions {
		resources: {
			[lang: string]: (typeof resources)["geo"]["translation"];
		};
	}
}

