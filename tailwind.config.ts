import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        estate: {
          DEFAULT: "hsl(var(--estate))",
          50: "hsl(var(--estate-50))",
          100: "hsl(var(--estate-100))",
          200: "hsl(var(--estate-200))",
          300: "hsl(var(--estate-300))",
          400: "hsl(var(--estate-400))",
          500: "hsl(var(--estate-500))",
          600: "hsl(var(--estate-600))",
          700: "hsl(var(--estate-700))",
          800: "hsl(var(--estate-800))",
          900: "hsl(var(--estate-900))",
          950: "hsl(var(--estate-950))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          50: "hsl(var(--gold-50))",
          100: "hsl(var(--gold-100))",
          200: "hsl(var(--gold-200))",
          300: "hsl(var(--gold-300))",
          400: "hsl(var(--gold-400))",
          500: "hsl(var(--gold-500))",
          600: "hsl(var(--gold-600))",
          700: "hsl(var(--gold-700))",
          800: "hsl(var(--gold-800))",
          900: "hsl(var(--gold-900))",
          950: "hsl(var(--gold-950))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["Montserrat", "sans-serif"],
        mono: ["Montserrat", "monospace"],
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
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-left": {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.5s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "slide-down": "slide-down 0.5s ease-out forwards",
        "slide-left": "slide-left 0.5s ease-out forwards",
        "slide-right": "slide-right 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: "class", // Enabling dark mode as class-based
};

export default config;
