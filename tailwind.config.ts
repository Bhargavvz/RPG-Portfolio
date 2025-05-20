import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'parchment': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d6cca1' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'medieval-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b45309' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'magic-pattern': "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm0 2c7.18 0 13 5.82 13 13s-5.82 13-13 13S2 22.18 2 15 7.82 2 15 2zm0 2c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11S21.075 4 15 4z' fill='%23a855f7' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'forest-pattern': "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6h-2c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        rpg: {
          gold: 'hsl(var(--rpg-gold))',
          magic: 'hsl(var(--rpg-magic))',
          fire: 'hsl(var(--rpg-fire))',
          earth: 'hsl(var(--rpg-earth))',
          water: 'hsl(var(--rpg-water))',
          parchment: 'hsl(var(--rpg-parchment))',
        },
        github: '#24292e',
        twitter: '#1DA1F2',
        linkedin: '#0A66C2',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-4px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-8px) rotate(0deg)' },
          '75%': { transform: 'translateY(-4px) rotate(1deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'magic-glow': {
          '0%, 100%': { 
            'box-shadow': '0 0 5px 2px rgba(251, 191, 36, 0.7), 0 0 10px rgba(251, 191, 36, 0.4), 0 0 15px rgba(251, 191, 36, 0.2)'
          },
          '50%': { 
            'box-shadow': '0 0 10px 3px rgba(251, 191, 36, 0.8), 0 0 15px rgba(251, 191, 36, 0.5), 0 0 20px rgba(251, 191, 36, 0.3)'
          },
        },
        'flame-flicker': {
          '0%, 100%': { transform: 'rotate(-1deg) scale(1.0)', opacity: '0.9' },
          '25%': { transform: 'rotate(1deg) scale(1.01)', opacity: '1' },
          '50%': { transform: 'rotate(-1deg) scale(0.99)', opacity: '0.8' },
          '75%': { transform: 'rotate(0deg) scale(1.03)', opacity: '0.95' },
        },
        'levitate': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
          '30%': { transform: 'translateY(-10px) rotate(1deg) scale(1.02)' },
          '60%': { transform: 'translateY(-15px) rotate(-1deg) scale(1.01)' },
        },
        'magic-sparkle': {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1) rotate(180deg)', opacity: '0.8' },
          '100%': { transform: 'scale(0) rotate(360deg)', opacity: '0' },
        },
        'rpg-reveal': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'swing': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'magic-glow': 'magic-glow 3s ease-in-out infinite',
        'flame-flicker': 'flame-flicker 4s ease-in-out infinite',
        'levitate': 'levitate 8s ease-in-out infinite',
        'magic-sparkle': 'magic-sparkle 2s ease-in-out infinite',
        'rpg-reveal': 'rpg-reveal 0.8s ease-out forwards',
        'rpg-reveal-slow': 'rpg-reveal 1.5s ease-out forwards',
        'swing': 'swing 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.text-shadow-sm': {
          'text-shadow': '0 1px 2px rgba(0, 0, 0, 0.4)'
        },
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.4)'
        },
        '.text-shadow-md': {
          'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.4)'
        },
        '.text-shadow-lg': {
          'text-shadow': '0 8px 16px rgba(0, 0, 0, 0.4)'
        },
        '.text-shadow-none': {
          'text-shadow': 'none'
        },
        '.text-shadow-glow-gold': {
          'text-shadow': '0 0 5px rgba(251, 191, 36, 0.7), 0 0 10px rgba(251, 191, 36, 0.5)'
        },
        '.text-shadow-glow-blue': {
          'text-shadow': '0 0 5px rgba(59, 130, 246, 0.7), 0 0 10px rgba(59, 130, 246, 0.5)'
        },
        '.text-shadow-glow-red': {
          'text-shadow': '0 0 5px rgba(239, 68, 68, 0.7), 0 0 10px rgba(239, 68, 68, 0.5)'
        },
        '.text-shadow-glow-green': {
          'text-shadow': '0 0 5px rgba(34, 197, 94, 0.7), 0 0 10px rgba(34, 197, 94, 0.5)'
        },
        '.text-shadow-glow-purple': {
          'text-shadow': '0 0 5px rgba(168, 85, 247, 0.7), 0 0 10px rgba(168, 85, 247, 0.5)'
        },
        '.rpg-border-glow': {
          'box-shadow': '0 0 10px rgba(251, 191, 36, 0.7), 0 0 20px rgba(251, 191, 36, 0.4)'
        },
        '.rpg-border-glow-blue': {
          'box-shadow': '0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.4)'
        },
        '.rpg-border-glow-red': {
          'box-shadow': '0 0 10px rgba(239, 68, 68, 0.7), 0 0 20px rgba(239, 68, 68, 0.4)'
        },
        '.rpg-border-glow-green': {
          'box-shadow': '0 0 10px rgba(34, 197, 94, 0.7), 0 0 20px rgba(34, 197, 94, 0.4)'
        },
        '.rpg-border-glow-purple': {
          'box-shadow': '0 0 10px rgba(168, 85, 247, 0.7), 0 0 20px rgba(168, 85, 247, 0.4)'
        },
      }
      addUtilities(newUtilities)
    },
    function({ addComponents }: { addComponents: any }) {
      const components = {
        '.rpg-divider': {
          'height': '2px',
          'width': '100%',
          'background': 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.7), transparent)',
          'margin': '1.5rem 0'
        },
        '.rpg-scrollbar': {
          'scrollbarWidth': 'thin',
          'scrollbarColor': 'rgba(251, 191, 36, 0.5) rgba(0, 0, 0, 0.1)',
          '&::-webkit-scrollbar': {
            'width': '8px',
            'height': '8px',
          },
          '&::-webkit-scrollbar-track': {
            'background': 'rgba(0, 0, 0, 0.1)',
            'borderRadius': '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            'backgroundColor': 'rgba(251, 191, 36, 0.5)',
            'borderRadius': '4px',
            'border': '2px solid transparent',
            'backgroundClip': 'content-box',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            'backgroundColor': 'rgba(251, 191, 36, 0.7)',
          }
        }
      }
      addComponents(components)
    }
  ],
};
export default config;
