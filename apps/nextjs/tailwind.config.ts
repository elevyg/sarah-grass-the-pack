import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  safelist: ["bg-mint", "bg-lavander", "bg-beige", "list-disc", "text-red-400"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    extend: {
      colors: {
        eggWhite: "#FFFCF4",
        matteBlack: "#232323",
        mint: "#B4DDCB",
        lavander: "#BBA0CA",
        beige: "#CCA887",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
