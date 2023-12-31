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
                'secondary': 'rgba(70,32,0,0.8)',
                'tertiary': 'rgba(70,32,0,0.3)'
              },
              'light-brown': {
                'primary': '#efe1cd',
              },
              'blue': {
                primary: '#3e5060',
              },
              'pink': {
                primary: 'rgb(145,111,95,1)',
              },
              'offwhite': {
                'primary': 'rgba(255,250,244,1)',
                'secondary': 'rgba(255,250,244,.8)'
              }
            },
            backgroundImage: {
                'hero-mobile': "url('../assets/images/desert_vert_xl_02.jpg')",
                'hero': "url('../assets/images/desert_xl.jpg')"
            },
            height: {
              '128': '32rem',
              '160': '40rem',
              '168': '42rem',
              '256': '64rem',
            },
            width: {
              '128': '32rem',
              '160': '40rem',
              '168': '42rem',
              '256': '64rem',
            },
            lineHeight: {
              '12': '3rem',
              '13-half': '3.35rem',
            },
            gridTemplateColumns: {
              'hero': '1fr 2fr',
            },
            dropShadow: {
              'box': '5px 10px 0px rgba(0, 0, 0, 0.5)',
            }
          },
    },
    variants: {},
    plugins: [],
  }