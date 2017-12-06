import Typography from 'typography'
import baseStyles from './base-styles';

const typography = new Typography({
  baseFontSize: '18px',
  googleFonts: [
    {
      name: 'Nunito',
      styles: [
        '700'
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
    {
      name: 'Libre Baskerville',
      styles: [
        '400',
        '400i'
      ]
    }
  ],
  headerFontFamily: ['Libre Baskerville', 'serif'],
  bodyFontFamily: ['Open Sans'],
  baseFontSize: '14px',
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      letterSpacing: '3px'
    },
    'h2,h3,h4': {
      letterSpacing: '1.5px'
    },
    'h1,h2,h3,h4': {
      color: baseStyles.colors.black,
      fontStyle: 'italic',
    },
    'a': {
      textDecoration: 'none',
      color: baseStyles.colors.black
    },
    'a:hover': {
      color: baseStyles.colors.accent + ' !important'
    },
    'a:active': {
      backgroundColor: baseStyles.colors.accent,
      color: 'white !important'
    }
  })
})

export default typography