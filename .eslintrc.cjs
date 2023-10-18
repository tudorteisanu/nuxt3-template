module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: ['@nuxtjs/eslint-config-typescript'],
    plugins: [],
    rules: {
        "semi": [2, "always"],
        "quotes": ["error", "double"],
        "no-cond-assign": 0,
        "vue/valid-v-slot": ["error", {
            "allowModifiers": true
        }],
        "indent": "off",
        "@typescript-eslint/indent": [
            "error",
            2
        ],
        "import/extensions": 0,
        "import/prefer-default-export": "off",
        "no-param-reassign": [
            "error"
        ],
        "@typescript-eslint/ban-ts-comment": "off",
        "class-methods-use-this": "off",
        "no-use-before-define": "off",
        "brace-style": [
            "error",
            "stroustrup"
        ],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                "allow": [
                    "Vue",
                    "state",
                    "getters"
                ],
                "ignoreFunctionTypeParameterNameValueShadow": true,
                "hoist": "never"
            }
        ],
        "no-bitwise": "off",
        "no-plusplus": "off",
        "no-unused-vars": "off",
        "no-tabs": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": [
            "error",
            {
                "allowedNames": [
                    "state",
                    "use"
                ]
            }
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "only-multiline",
                "exports": "only-multiline",
                "functions": "never"
            }
        ],
        "vue/multi-word-component-names": "off",
    },
}
