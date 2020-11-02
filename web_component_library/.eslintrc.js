const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	extends: ['airbnb', 'prettier', 'prettier/react'],
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
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': ['error', prettierOptions],
		'import/imports-first': 0,
		'import/newline-after-import': 0,
		'max-len': 0,
		'newline-per-chained-call': 0,
		'no-confusing-arrow': 0,
		'no-console': 1,
		'no-unused-vars': 2,
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': 'error',
	},
};
