import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import eslintPluginSvelte from "eslint-plugin-svelte";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default [
  perfectionistNatural,
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
  },
  {
    rules: prettier.rules,
  },
];
