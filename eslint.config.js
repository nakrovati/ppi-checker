import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import eslintPluginSvelte from "eslint-plugin-svelte";
import eslintUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default [
  perfectionistNatural,
  eslintUnicorn.configs["flat/recommended"],
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...eslintPluginSvelte.configs["flat/recommended"],
  {
    ignores: [
      "**/.DS_Store/*",
      "**/node_modules/*",
      "build/*",
      ".svelte-kit/*",
    ],
  },
  {
    rules: {
      "unicorn/filename-case": ["warn", { case: "camelCase" }],
      "unicorn/prevent-abbreviations": "off",
    },
  },
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        parser: {
          ts: "@typescript-eslint/parser",
        },
      },
    },
    rules: {
      "unicorn/filename-case": ["warn", { case: "pascalCase" }],
    },
  },
  {
    files: ["src/routes/**/+*.svelte"],
    rules: {
      "unicorn/filename-case": "off",
    },
  },
  {
    rules: prettier.rules,
  },
];
