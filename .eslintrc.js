module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: "module"
	},
	plugins: ["react"],
	rules: {
		"no-const-assign": "warn",
		"no-this-before-super": "warn",
		"no-undef": "error",
		"no-unreachable": "warn",
		"no-unused-vars": "warn",
		"constructor-super": "warn",
		"valid-typeof": "warn",
		indent: ["error", "tab"],
		"linebreak-style": [
			"warn",
			"windows" // "unix"
		],
		quotes: ["error", "double"],
		semi: ["error", "always"]
	}
};
