import type { Config } from "tailwindcss";
import typoGraphy from '@tailwindcss/typography';
import tailwindcssAnimate from 'tailwindcss-animate'
const svgToDataUri = require("mini-svg-data-uri");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const rem = (px: number): string => {
  return px * 0.0625 + "rem";
};

const defaultTheme = require("tailwindcss/defaultTheme");

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    fontWeight: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    },
    container: {
      center: true,
    },
    fontFamily: {
      inter: ["'Inter'", "sans-serif"],
      gilroy: ["'Gilroy'", "sans-serif"],
    },
    fontSize: {
      10: rem(10),
      12: rem(12),
      14: rem(14),
      16: rem(16),
      18: rem(18),
      20: rem(20),
      22: rem(22),
      24: rem(24),
      26: rem(26),
      28: rem(28),
      30: rem(30),
      32: rem(32),
      36: rem(36),
      40: rem(40),
      42: rem(42),
      44: rem(44),
      48: rem(48),
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        gray:{
          border:"#344152",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        DEFAULT: "0px 10px 60px 0px #10112F0F",
        cst: "0px 0px 30px -14px rgba(0,0,0,0.3)",
        base: "0px 25px 50px 0px rgba(32, 41, 48, 0.07)",
        main: "0px 0px 0px 0px rgba(3, 34, 51, 0.07), 0px 5px 10px 0px rgba(2, 27, 41, 0.05), 0px 10px 20px 0px rgba(6, 35, 52, 0.02)",
        main_hover: "0px 0px 0px 0px rgba(3, 34, 51, 0.07), 0px 31px 31px 0px rgba(2, 27, 41, 0.03), 0px 70px 42px 0px rgba(6, 35, 52, 0.03)",
        cardhover: "0px 40px 80px 0px rgba(0, 21, 37, 0.10)",
        maincard: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
        shadowcard: '0px 0px 5px 1px rgba(100, 100, 111, 0.2)',
        admin: '0px 0px 2px 1px rgba(100, 100, 111, 0.2)',
      },
    },
  },
  darkMode: ['class'],
  plugins: [nextui(),tailwindcssAnimate,typoGraphy,addVariablesForColors,addVariablesForColors, function ({ matchUtilities, theme }: any) {
    matchUtilities(
      {
        "bg-dot-thick": (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  },],


};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

// background: linear-gradient(to right, #032F4E, #03639E);
