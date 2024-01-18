import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.html",
    "../../component-library/src/components/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
