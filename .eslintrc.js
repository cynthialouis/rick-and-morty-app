module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:vue/essential', 'airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['vue', 'prettier'],
	rules: {
		'max-len': ['error', { code: 240 }],
		'prettier/prettier': 2,
	},
	settings: {
		'import/resolver': {
			alias: {
				extensions: ['.js', '.vue'],
				map: [['@', './src']],
			},
		},
	},
}
