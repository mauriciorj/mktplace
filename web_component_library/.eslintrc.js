module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-console': 1,
		'no-unused-vars': 2,
	},
};
