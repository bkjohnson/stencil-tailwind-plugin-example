import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.html",
    // NOTE: I think removing this glob from the content option might be the only thing
    // I can do to reduce some of the duplication
    "../../component-library/src/components/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
