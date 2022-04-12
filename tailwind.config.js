module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'iron-image': "url('/img/carousel/iron-image.svg')",
        'sudsy-image': "url('/img/carousel/sudsy-image.svg')",
        'spray-image': "url('/img/carousel/spray-image.svg')",
        'join-us-image': "url('/img/join-us-bg.png')",
      },
      fontFamily: {
        body: ['Lato', 'sans-serif'],
        cursive: ['allura', 'cursive'],
      },
      colors: {
        primary: '#00A58C',
        main: '#006253',
        secondary: '#4A4A4A',
        footer: '#F79F2C',
        bgfooter: '#004137',
        drk: '#242424',
        'red-title': '#EF5C6A',
        red: '#E14958',
        'card-color': '#EF5C6A1A',
        overlay: 'rgba(0, 0, 0, 0.7)',
        input: '#A8A8A8',
      },
      boxShadow: {
        card: '0px 4.52863px 4.52863px rgba(0, 0, 0, 0.25);',
      },
    },
  },
  plugins: [],
};
