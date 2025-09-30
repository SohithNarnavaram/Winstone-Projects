import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
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
      backgroundImage: {
        'hero-gradient': 'var(--hero-gradient)',
        'accent-gradient': 'var(--accent-gradient)',
        'text-gradient': 'var(--text-gradient)',
        'card-gradient': 'var(--card-gradient)',
        'premium-gradient': 'var(--premium-gradient)',
        'depth-gradient': 'var(--depth-gradient)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
        'hero': 'var(--shadow-hero)',
        'subtle': 'var(--shadow-subtle)',
        'premium': 'var(--shadow-premium)',
        'inset': 'var(--shadow-inset)',
      },
      fontSize: {
        'hero': ['var(--font-hero)', { lineHeight: '0.85', letterSpacing: '-0.05em', fontWeight: '900' }],
        'display': ['var(--font-display)', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '800' }],
        'heading': ['var(--font-heading)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'subheading': ['var(--font-subheading)', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['var(--font-body)', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['var(--font-caption)', { lineHeight: '1.4', fontWeight: '500' }],
      },
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
        'bounce': 'var(--transition-bounce)',
        'elegant': 'var(--transition-elegant)',
        'luxury': 'var(--transition-luxury)',
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
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(45 96% 64% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(45 96% 64% / 0.6)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "fade-in-left": "fade-in-left 0.8s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
