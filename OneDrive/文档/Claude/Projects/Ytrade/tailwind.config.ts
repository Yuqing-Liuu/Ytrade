import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Neutral slate palette — professional, not flashy
        surface: {
          DEFAULT: '#ffffff',
          subtle:  '#f8fafc',
          muted:   '#f1f5f9',
          border:  '#e2e8f0',
        },
        ink: {
          DEFAULT: '#0f172a',
          secondary: '#475569',
          muted:     '#94a3b8',
          disabled:  '#cbd5e1',
        },
        accent: {
          DEFAULT: '#2563eb',   // blue-600 — primary action
          hover:   '#1d4ed8',   // blue-700
          subtle:  '#eff6ff',   // blue-50
          border:  '#bfdbfe',   // blue-200
        },
        // Status badge colors
        status: {
          watching:    { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' },
          researching: { bg: '#fefce8', text: '#713f12', border: '#fde68a' },
          readytobuy:  { bg: '#eff6ff', text: '#1e40af', border: '#bfdbfe' },
          hold:        { bg: '#faf5ff', text: '#6b21a8', border: '#e9d5ff' },
          avoid:       { bg: '#fff1f2', text: '#9f1239', border: '#fecdd3' },
        },
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)',
        focus: '0 0 0 3px rgb(37 99 235 / 0.15)',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        sm: '0.375rem',
        lg: '0.75rem',
        xl: '1rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
