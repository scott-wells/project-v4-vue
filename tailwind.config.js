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
                'primary': 'rgba(70,32,0,1)',
                'secondary': 'rgba(70,32,0,0.5)'
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
            },
            height: {
              '128': '32rem',
              '168': '42rem',
              '256': '64rem',
            },
            lineHeight: {
              '12': '3rem',
              '13-half': '3.35rem',
            },
          },
    },
    variants: {},
    plugins: [],
  }