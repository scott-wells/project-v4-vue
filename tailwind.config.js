module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        extend: {
            colors: {
              brown: {
                50: '#f2ece0',
                100: '#dacfc7',
                200: '#bea897',
                300: '#a98b75',
                400: '#8a6c55',
                500: '#4D3223',
                600: '#40200a',
                700: '#3f3024',
                800: '#2D1E0D',
                900: '#0e0802',
              },
              'theme-slate': {
                300: '#747B81',
                500: '#334348',
                900: '#16181b'
              },
              'theme-orange': {
                300: '#845332',
                500: '#5e3317'
              },
              'theme-gray': {
                100: '#e8ded6',
                200: '#C1B9B6',
                300: '#b6afa9',
              }
            },
            backgroundImage: {
                'hero-mobile': "url('../assets/images/desert_vert_xl_02.jpg')",
                'hero': "url('../assets/images/desert_xl.jpg')",
            }
          },
    },
    variants: {},
    plugins: [],
  }