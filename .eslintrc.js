module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"@react-native-community",
		"plugin:prettier/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	plugins: ["react", "import", "react-hooks", "@typescript-eslint"],
	rules: {
		"prettier/prettier": "warn",
		"react/react-in-jsx-scope": "off",
		"react-hooks/exhaustive-deps": 1,

		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/no-empty-interface": 1,
		"@typescript-eslint/no-empty-function": 1,

		"import/extensions": 0,
		"import/no-duplicates": 2,
		"import/no-useless-path-segments": 1,
		"import/prefer-default-export": "off",
		"import/order": [
			"warn",
			{
				"newlines-between": "always",
				groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
			},
		],
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: true,
				optionalDependencies: false,
				peerDependencies: false,
			},
		],
	},
	settings: {
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: "./tsconfig.json",
				extensions: [".ts", ".tsx"],
				paths: ["src"],
				baseUrl: ".",
				tsconfigRootDir: ".",
			},
			node: {
				paths: ["src"],
			},
		},
		"import/ignore": ["react-native"],
		react: {
			version: "detect",
		},
	},
};
