module.exports = {
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es2020: true,
	},
	parser: 'babel-eslint',
	plugins: ['jest', 'import', 'promise', 'react', 'unicorn'],
	extends: [
		'eslint:recommended',
		'plugin:jest/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:promise/recommended',
		'plugin:unicorn/recommended',
		'xo/esnext',
		'xo-react',
	],
	// aliases - paths resolver from webpack
	settings: {
		// react: {
		// 	version: '16.8',
		// },
		'import/resolver': 'webpack',
	},
	rules: {
		// the good stuff
		'import/first': 1,
		'no-console': 1,
		'no-implicit-coercion': [2, {allow: ['!!']}],
		'react/prop-types': 0,
		eqeqeq: [2, 'allow-null'],
		'prefer-destructuring': [
			2,
			{
				AssignmentExpression: {
					array: false,
					object: false,
				},
			},
		],

		// ignore everything handled by prettier
		'arrow-parens': 0,
		'arrow-spacing': 0,
		'babel/arrow-parens': 0,
		'brace-style': 0,
		'capitalized-comments': 0,
		'comma-dangle': 0,
		'comma-spacing': 0,
		'function-paren-newline': 0,
		'key-spacing': 0,
		'max-statements-per-line': 0,
		'no-eq-null': 0,
		'no-extra-semi': 0,
		'no-mixed-operators': 0,
		'no-mixed-spaces-and-tabs': 0,
		'no-multi-spaces': 0,
		'no-trailing-spaces': 0,
		'object-curly-spacing': 0,
		'one-var': 0,
		'operator-linebreak': 0,
		'padded-blocks': 0,
		'padding-line-between-statements': 0,
		'prefer-template': 0,
		'promise/param-names': 0,
		'quote-props': 0,
		'react/boolean-prop-naming': 0,
		'react/destructuring-assignment': 0,
		'react/display-name': 0,
		'react/forbid-component-props': 0,
		'react/jsx-closing-bracket-location': 0,
		'react/jsx-closing-tag-location': 0,
		'react/jsx-component-props': 0,
		'react/jsx-child-element-spacing': 0,
		'react/jsx-curly-newline': 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-fragments': 0,
		'react/jsx-indent-props': 0,
		'react/jsx-indent': 0,
		'react/jsx-no-bind': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-sort-props': 0,
		'react/jsx-space-before-closing': 0,
		'react/jsx-tag-spacing': 0,
		'react/jsx-wrap-multilines': 0,
		'react/no-array-index-key': 0,
		'react/no-unescaped-entities': 0,
		'react/require-default-props': 0,
		'react/require-optimization': 0,
		'padding-line-between-statements': 0,
		'promise/no-callback-in-promise': 0,
		'semi-spacing': 0,
		'semi-style': 0,
		'space-before-blocks': 0,
		'space-before-function-paren': 0,
		'space-in-parens': 0,
		'space-infix-ops': 0,
		'unicorn/explicit-length-check': 0,
		'unicorn/filename-case': 0,
		'unicorn/number-literal-case': 0,
		'unicorn/catch-error-name': 0,
		'unicorn/prevent-abbreviations': 0,
		'unicorn/no-nested-ternary': 0,

		curly: 0,
		indent: 0,
		quotes: 0,
		semi: 0,
	},
}
