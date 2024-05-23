import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  safelist: [
    "bg-mint",
    "bg-lavander",
    "bg-beige",
    "list-disc",
    "h-[6rem]",
    "h-[4rem]",
    "pt-[6rem]",
    "pt-[4rem]",
    "text-red-400",
  ],
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
        skyBlue: "#ACCEED",
        yellow: "#EDDF94",
      },
      fontFamily: {
        sans: ["var(--founders-grotesk)", ...fontFamily.sans],
        arizona: ["var(--arizona)"],
        foundersGrotesk: ["var(--founders-grotesk)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
