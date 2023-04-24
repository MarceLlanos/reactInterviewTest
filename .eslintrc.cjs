module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/tsx-runtime',
		'standard-with-typescript',
		'eslint-config-prettier',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			tsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'warn',
	},
};
