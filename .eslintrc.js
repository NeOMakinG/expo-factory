module.exports = {
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    parser: 'babel-eslint',
    env: {
        jest: true,
    },
    rules: {
        'no-use-before-define': 'off',
        'import/extensions': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        'global-require': 0,
        'no-unused-vars': 2,
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-use-before-define': ['error', {variables: false}],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
        'react-native/no-unused-styles': 0,
        'react-native/split-platform-components': 0,
        'react-native/no-inline-styles': 0,
        'react-native/no-color-literals': 0,
        'class-methods-use-this': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'react-native/no-raw-text': 0,
        'react/no-unescaped-entities': 'off',
        'prettier/prettier': 2,
        'consistent-return': 'off',
    },
    globals: {
        fetch: false,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            'babel-module': {},
        },
    },
    root: true,
};
