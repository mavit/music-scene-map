import { defineConfig } from "eslint/config";
import onlyWarn from "eslint-plugin-only-warn";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("eslint:recommended"),

    plugins: {
        "only-warn": onlyWarn,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jquery,
            L: true,
            LastFM: true,
            LastFMCache: true,
        },

        ecmaVersion: 12,
        sourceType: "script",
    },

    rules: {
        "no-unused-vars": ["warn", {
            args: "none",
        }],
    },
}]);