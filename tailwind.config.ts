import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1240px',
    },
    container: {
      center: true,
    },



    extend:
    {
      fontFamily: {
        'arabic': ['DIN Next LT Arabic', 'DIN Next LT Arabic']
      },
    },
  

  },
  plugins: [],
}
export default config
