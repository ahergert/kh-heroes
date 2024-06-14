import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
const config: Config = {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  theme: {
    extend: {
      colors: {
        common: { DEFAULT: '#9A9A9A' },
        rare: { DEFAULT: '#00AD6D' },
        epic: { DEFAULT: '#397DE3' },
        legendary: { DEFAULT: '#A91BE6' },
        unique: { DEFAULT: '#F6B802' },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
