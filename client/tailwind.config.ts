import { defineConfig } from 'tailwindcss';
import type { Config } from 'tailwindcss';

export default defineConfig({
  content: [
    "./index.html",  // 页面文件
    "./src/**/*.{js,ts,jsx,tsx}",  // 搜索路径，Tailwind 将扫描这些文件
  ],
  darkMode: ['selector', '[data-color-mode="dark"]'],  // 支持的黑暗模式设置
  theme: {
    extend: {
      colors: {
        'theme': '#fc466b',  // 自定义颜色
        'theme-hover': '#b13049',  // 自定义 hover 颜色
        'theme-active': '#972038',  // 自定义 active 颜色
        'background': {
          'light': '#f5f5f5',  // 自定义背景色（浅色）
          'dark': '#1c1c1e',  // 自定义背景色（深色）
        },
        'dark': "#333333",  // 深色的标准颜色
      },
      transitionProperty: {
        'height': 'height',  // 允许在 Tailwind 中使用高度的过渡
        'width': 'width',  // 允许在 Tailwind 中使用宽度的过渡
        'spacing': 'margin, padding',  // 允许在 Tailwind 中使用 margin 和 padding 的过渡
      },
      backgroundImage: {
        'custom-bg': "url('https://blog-image.haruhi.qzz.io/images/G3c9HGGXMAExmVd.jpg')",  // 设置自定义背景图
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // 添加 Typography 插件来优化文本内容样式
  ],
});
