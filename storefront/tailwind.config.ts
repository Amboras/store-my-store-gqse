import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
        ring:   'hsl(var(--ring))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        sage:  'hsl(var(--sage))',
        gold:  'hsl(var(--gold))',
        paper: 'hsl(var(--paper))',
        ink:   'hsl(var(--ink))',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body:    ['var(--font-body)',    'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem',   { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'h1':      ['2.75rem', { lineHeight: '1.14', letterSpacing: '-0.02em' }],
        'h2':      ['2.1rem',  { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'h3':      ['1.45rem', { lineHeight: '1.3' }],
        'h4':      ['1.2rem',  { lineHeight: '1.4' }],
      },
      maxWidth: {
        content: '1200px',
        prose:   '700px',
      },
      spacing: {
        section:    '5.5rem',
        'section-sm': '3rem',
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '3px',
        md: '4px',
        lg: '6px',
      },
      lineHeight: {
        reading: '1.75',
      },
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-down': {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%':   { transform: 'scale(0.85)', opacity: '0' },
          '100%': { transform: 'scale(1)',    opacity: '1' },
        },
        shimmer: {
          from: { transform: 'translateX(-100%)' },
          to:   { transform: 'translateX(100%)' },
        },
        'heart-pop': {
          '0%':   { transform: 'scale(1)' },
          '40%':  { transform: 'scale(1.35)' },
          '70%':  { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in':        'fade-in 0.35s ease-out',
        'fade-in-up':     'fade-in-up 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
        'slide-out-right':'slide-out-right 0.25s ease-in',
        'slide-down':     'slide-down 0.25s ease-out',
        'scale-in':       'scale-in 0.2s ease-out',
        shimmer:          'shimmer 1.6s infinite',
        'heart-pop':      'heart-pop 0.35s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
