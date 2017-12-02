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
        'h1,h2,h3': {
          color: baseStyles.colors.black,
          fontStyle: 'italic'
        }
      })
})

export default typography