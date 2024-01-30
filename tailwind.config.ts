import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        green: {
          50: '#EFFDF5',
          100: '#FCFFEE',
          200: '#EDF6C5',
          300: '#C7D978',
          400: '#B2C851',
          500: '#92A92C',
          600: '#738815',
          700: '#5B6C0F',
          800: '#3F4B07',
          900: '#252D01',
          950: '#20280b',
        },
        orange: {
          50: '#FFF9F3',
          100: '#FFF2E5',
          200: '#FFE7D2',
          300: '#FFC793',
          400: '#FFA859',
          500: '#FD8D27',
          600: '#D16B0D',
          700: '#934A07',
          800: '#5C2E03',
          900: '#2F1701',
        },
        gray: {
          200: '#E0E0E0',
          300: '#C0C0C0',
          400: '#A0A0A0',
          500: '#969696',
          600: '#808080',
          700: '#565656',
          800: '#404040',
          900: '#202020',
          950: '#121212',
        },
      },
    },
  },
};
