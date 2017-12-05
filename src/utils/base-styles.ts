import { css, ThemedCssFunction } from 'styled-components';
export const baseStyles = {
    colors: {
        black: '#505050',
        blackLight: '#343434',
        accent: '#c39738',
        light: '#999'
    },
    spacing: {
        defaultPadding: '25px'
    },
    fonts: {
        nunito: 'Nunito',
        fancy: 'Libre Baskerville'
    }
}
export default baseStyles;

interface Sizes {
    desktop: ThemedCssFunction<any>;
    tablet: ThemedCssFunction<any>;
    phone: ThemedCssFunction<any>;
}

export const media: Sizes = {
    desktop: function (...args: any[]) {
        return css`
        @media only screen and (min-width : 1225px) {
            ${css.call(this, ...args)}
        }
        `
    },
    tablet: function (...args: any[]) {
        return css`
        @media only screen and (min-width : 737px) and (max-width : 1224px) {
            ${css.call(this, ...args)}
        }
        `
    },
    phone: function (...args: any[]) {
        return css`
        @media only screen and (min-width : 320px) and (max-width : 736px) {
            ${css.call(this, ...args)}
        }
        `
    }
} 