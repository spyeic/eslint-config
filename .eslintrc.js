module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:import/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "import"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "no-use-before-define": "error",
        "import/order": [
            "error",
            {
                "pathGroups": [
                    {
                        "pattern": "@/**",
                        "group": "internal",
                        "position": "after"
                    }
                ],
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    "unknown",
                    "parent",
                    "sibling",
                    "index",
                    "object",
                    "type"
                ],
                "newlines-between": "always",
                "alphabetize": {
                    "order": "asc"
                }
            }
        ],
        "import/no-unresolved": "off",
        "prefer-const": "error",
        "comma-dangle": ["error", "never"],
        "keyword-spacing": ["error", { "before": true, "after": true }],
        "object-curly-spacing": ["error", "always"]
    }
};
