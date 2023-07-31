export type Languages = "geo" | "eng" | "tur" | "rus";

export interface ILanguages {
	data: ILanguagesData[];
}

export interface ILanguagesData {
	id: number;
	title: string;
	created_at: string;
	updated_at: string;
}
