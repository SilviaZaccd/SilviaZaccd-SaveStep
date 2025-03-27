/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
      'search_bottom': '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'white': '#ffffff', // 白
      'dark-gray': '#464646', // 深灰
      'light-gray': '#e7e7e7', // 浅灰
      'dark-gray': '#a6a7a6', // 暗灰
      'bright-read': '#ae0431', // 艳红
      'pink': '#ffc4d5', // 粉色
      'barbie-powder': '#ff6c96', // 芭比粉
      'gaudy': '#d00145', // 树莓红
      'default': '#494948'
    }
  },
  plugins: [],
};
