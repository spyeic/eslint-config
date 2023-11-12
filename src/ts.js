module.exports = {
    extends: [
        "spyeic",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "@typescript-eslint/typedef": ["error", {
            "arrayDestructuring": false,
            "arrowParameter": false,
            "memberVariableDeclaration": false,
            "objectDestructuring": false,
            "parameter": true,
            "propertyDeclaration": true,
            "variableDeclaration": false,
            "variableDeclarationIgnoreFunction": true
        }],
        "@typescript-eslint/explicit-function-return-type": ["error", {
            "allowExpressions": true
        }],
        "@typescript-eslint/no-inferrable-types": ["error", {
            "ignoreParameters": true,
            "ignoreProperties": false
        }],
        "@typescript-eslint/no-non-null-assertion": "off"
    }
};
