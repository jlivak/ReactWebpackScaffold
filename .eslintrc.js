module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "project": "tsconfig.json",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "eslint-plugin-react",
        "eslint-plugin-prefer-arrow",
        "eslint-plugin-jsdoc",
        "jsx-a11y",
        "@typescript-eslint",
        "eslint-plugin-react-hooks"
    ],
    "rules": {
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unnecessary-type-assertion":"off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unused-vars":"off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/explicit-function-return-type": ["error", {
            "allowExpressions": true,
            "allowConciseArrowFunctionExpressionsStartingWithVoid": true
        }],
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array"
            }
        ],
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    },
                    "Symbol": {
                        "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit",
                "overrides": {
                    "constructors":"off"
                }
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-type-alias": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-unused-expressions": ["error", { "allowTernary": true }],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
            "warn",
            {
                "functions": false,
                "classes": false,
                "enums":false,
                "variables": true
            }
        ],
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/unified-signatures": "error",
        "array-callback-return": "warn",
        "comma-dangle": ["error", "never"],
        "complexity": "off",
        "constructor-super": "error",
        "default-case": [
            "warn",
            {
                "commentPattern": "^no default$"
            }
        ],
        "dot-location": [
            "warn",
            "property"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ],
        "getter-return": "warn",
        "guard-for-in": "off",
        "id-blacklist": "off",
        "id-match": "off",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "error",
        "jsx-a11y/alt-text": "warn",
        "jsx-a11y/anchor-has-content": "warn",
        "jsx-a11y/anchor-is-valid": [
            "warn",
            {
                "aspects": [
                    "noHref",
                    "invalidHref"
                ]
            }
        ],
        "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
        "jsx-a11y/aria-props": "warn",
        "jsx-a11y/aria-proptypes": "warn",
        "jsx-a11y/aria-role": [
            "warn",
            {
                "ignoreNonDOM": true
            }
        ],
        "jsx-a11y/aria-unsupported-elements": "warn",
        "jsx-a11y/heading-has-content": "warn",
        "jsx-a11y/iframe-has-title": "warn",
        "jsx-a11y/img-redundant-alt": "warn",
        "jsx-a11y/no-access-key": "warn",
        "jsx-a11y/no-distracting-elements": "warn",
        "jsx-a11y/no-redundant-roles": "warn",
        "jsx-a11y/role-has-required-aria-props": "warn",
        "jsx-a11y/role-supports-aria-props": "warn",
        "jsx-a11y/scope": "warn",
        "new-parens": "error",
        "no-array-constructor": "warn",
        "no-bitwise": "error",
        "no-caller": "off",
        "no-cond-assign": "error",
        "no-console": "off",
        "no-const-assign": "warn",
        "no-control-regex": "warn",
        "no-debugger": "error",
        "no-delete-var": "warn",
        "no-dupe-args": "warn",
        "no-dupe-class-members": "warn",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-empty": "off",
        "no-empty-character-class": "warn",
        "no-empty-pattern": "warn",
        "no-eval": "off",
        "no-ex-assign": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-label": "warn",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-func-assign": "warn",
        "no-implied-eval": "warn",
        "no-invalid-regexp": "warn",
        "no-invalid-this": "off",
        "no-iterator": "warn",
        "no-label-var": "warn",
        "no-labels": [
            "warn",
            {
                "allowLoop": true,
                "allowSwitch": false
            }
        ],
        "no-lone-blocks": "warn",
        "no-loop-func": "warn",
        "no-mixed-operators": [
            "warn",
            {
                "groups": [
                    [
                        "&",
                        "|",
                        "^",
                        "~",
                        "<<",
                        ">>",
                        ">>>"
                    ],
                    [
                        "==",
                        "!=",
                        "===",
                        "!==",
                        ">",
                        ">=",
                        "<",
                        "<="
                    ],
                    [
                        "&&",
                        "||"
                    ],
                    [
                        "in",
                        "instanceof"
                    ]
                ],
                "allowSamePrecedence": false
            }
        ],
        "no-multi-str": "warn",
        "no-native-reassign": "warn",
        "no-negated-in-lhs": "warn",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-symbol": "warn",
        "no-new-wrappers": "off",
        "no-obj-calls": "warn",
        "no-octal": "warn",
        "no-octal-escape": "warn",
        "no-redeclare": "error",
        "no-regex-spaces": "warn",
        "no-restricted-globals": [
            "error",
            "addEventListener",
            "blur",
            "close",
            "closed",
            "confirm",
            "defaultStatus",
            "defaultstatus",
            "event",
            "external",
            "find",
            "focus",
            "frameElement",
            "frames",
            "history",
            "innerHeight",
            "innerWidth",
            "length",
            "location",
            "locationbar",
            "menubar",
            "moveBy",
            "moveTo",
            "name",
            "onblur",
            "onerror",
            "onfocus",
            "onload",
            "onresize",
            "onunload",
            "open",
            "opener",
            "opera",
            "outerHeight",
            "outerWidth",
            "pageXOffset",
            "pageYOffset",
            "parent",
            "print",
            "removeEventListener",
            "resizeBy",
            "resizeTo",
            "screen",
            "screenLeft",
            "screenTop",
            "screenX",
            "screenY",
            "scroll",
            "scrollbars",
            "scrollBy",
            "scrollTo",
            "scrollX",
            "scrollY",
            "self",
            "status",
            "statusbar",
            "stop",
            "toolbar",
            "top"
        ],
        "no-restricted-properties": [
            "error",
            {
                "object": "require",
                "property": "ensure",
                "message": "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting"
            },
            {
                "object": "System",
                "property": "import",
                "message": "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting"
            }
        ],
        "no-restricted-syntax": [
            "warn",
            "WithStatement"
        ],
        "no-script-url": "warn",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-shadow-restricted-names": "warn",
        "no-sparse-arrays": "warn",
        "no-template-curly-in-string": "warn",
        "no-this-before-super": "warn",
        "no-throw-literal": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "no-trailing-spaces": [
            "error",
            {
                "ignoreComments": true,
                "skipBlankLines": true
            }
        ],
        "no-undef": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unreachable": "warn",
        "no-unsafe-finally": "error",
        "no-unused-labels": "off",
        "no-unused-vars": "off",
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "off",
        "no-useless-escape": "off",
        "no-useless-rename": [
            "warn",
            {
                "ignoreDestructuring": false,
                "ignoreImport": false,
                "ignoreExport": false
            }
        ],
        "no-var": "error",
        "no-whitespace-before-property": "warn",
        "no-with": "warn",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "error",
        "prefer-const": "off",
        "radix": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react/forbid-foreign-prop-types": [
            "warn",
            {
                "allowInPropTypes": true
            }
        ],
        "react/jsx-boolean-value": "off",
        "react/jsx-key": "error",
        "react/jsx-no-bind": "off",
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-no-duplicate-props": "warn",
        "react/jsx-no-target-blank": "warn",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": [
            "warn",
            {
                "allowAllCaps": true,
                "ignore": []
            }
        ],
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "warn",
        "react/no-danger-with-children": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/no-is-mounted": "warn",
        "react/no-typos": "error",
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/style-prop-object": "warn",
        "require-yield": "warn",
        "rest-spread-spacing": [
            "warn",
            "never"
        ],
        "strict": [
            "warn",
            "never"
        ],
        "unicode-bom": [
            "warn",
            "never"
        ],
        "use-isnan": "error",
        "valid-typeof": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
