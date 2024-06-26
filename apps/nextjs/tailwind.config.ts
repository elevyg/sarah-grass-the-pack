import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import type { PluginCreator } from "tailwindcss/types/config";

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
        arizona: ["var(--arizona)"],
        foundersGrotesk: ["var(--founders-grotesk)", ...fontFamily.sans],
      },
      spacing: {
        "30px": "1.875rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": { display: "none" },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    } as PluginCreator,
  ],
} satisfies Config;
