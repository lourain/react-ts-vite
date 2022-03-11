// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 13,
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
    ],
    "rules": {
        "no-console": [1],
        "react/self-closing-comp": [1]
    }
};
