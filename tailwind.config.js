module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Fake Serif', 'serif'],
      },
      container: {
        padding: '15px',
        center: true,
      },
      colors: {
        primary: '#aa2249',
        secondary: '#771833',
      },
      backgroundImage: theme => ({
        'splesh-pattern': "url('/img/splash.jpg')",
        'under_splash-pattern': "url('/img/texture-bg.jpg')",
        'choose_from': "url('/img/choose-from.jpg')",
        'header-bg': "url('/img/header-bg.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
