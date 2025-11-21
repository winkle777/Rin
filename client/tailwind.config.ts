/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector','[data-color-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'theme': '#fc466b',
        'theme-hover': '#b13049',
        'theme-active': '#972038',
        'background': {
          'light': '#f5f5f5',
          'dark': '#cbb7f2',
        },
        'dark': "#333333"
      },
      backgroundImage: { // 添加自定义背景图片
        'custom-hero': "url('https://blog-image.haruhi.qzz.io/images/112350855.png')",
        // 你可以在这里添加更多自定义背景
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
