module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:flowtype/recommended"
	],
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: "module"
	},
	plugins: ["react", "flowtype"],
	settings: {
		flowtype: {
			onlyFilesWithFlowAnnotation: true
		}
	},
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
		semi: ["error", "always"],
		"no-console": "off",
		"flowtype/boolean-style": [2, "boolean"],
		"flowtype/define-flow-type": 1,
		"flowtype/delimiter-dangle": [2, "never"],
		"flowtype/generic-spacing": [2, "never"],
		"flowtype/no-primitive-constructor-types": 2,
		"flowtype/no-types-missing-file-annotation": 2,
		"flowtype/no-weak-types": 2,
		"flowtype/object-type-delimiter": [2, "comma"],
		"flowtype/require-parameter-type": 2,
		"flowtype/require-return-type": [
			2,
			"always",
			{
				annotateUndefined: "never"
			}
		],
		"flowtype/require-valid-file-annotation": 2,
		"flowtype/semi": [2, "always"],
		"flowtype/space-after-type-colon": [2, "always"],
		"flowtype/space-before-generic-bracket": [2, "never"],
		"flowtype/space-before-type-colon": [2, "never"],
		"flowtype/type-id-match": [2, "^([A-Z][a-z0-9]+)+Type$"],
		"flowtype/union-intersection-spacing": [2, "always"],
		"flowtype/use-flow-type": 1,
		"flowtype/valid-syntax": 1
	}
};
