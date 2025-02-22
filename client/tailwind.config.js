/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
    // 'node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  // plugins: [require('flowbite/plugin')],
  plugins: [require('flowbite/plugin')],
}

