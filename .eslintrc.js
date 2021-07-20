module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'plugin:prettier/recommended', 'prettier'],
    env: {
        node: true
    }
};
