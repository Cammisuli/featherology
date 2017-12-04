import { css, ThemedCssFunction } from 'styled-components';

export default {
    colors: {
        black: '#505050',
        blackLight: '#343434',
        accent: '#c39738',
        light: '#999'
    },
    spacing: {
        defaultPadding: '25px'
    }
}

interface Sizes {
    desktop: ThemedCssFunction<any>;
    tablet: ThemedCssFunction<any>;
    phone: ThemedCssFunction<any>;
}
const sizes: { [index: string]: number } = {
    desktop: 992,
    tablet: 768,
    phone: 376
}

// Iterate through the sizes and create a media template
export type BreakpointLabels = keyof typeof sizes;

// export const media: Sizes = Object.keys(sizes).reduce<Sizes>((mediaQueries, label: BreakpointLabels) => (
//     {
//         ...mediaQueries,
//         [label]: function (...args: any[]) {
//             return css`
//                 @media (min-width: ${sizes[label]}px) {
//                     ${css.call(this, ...args)}
//                 }
//             `
//         }
//     }
// ), {} as any);

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
        @media only screen and (min-width : 481px) and (max-width : 1224px) {
            ${css.call(this, ...args)}
        }
        `
    },
    phone: function (...args: any[]) {
        return css`
        @media only screen and (min-width : 320px) and (max-width : 480px) {
            ${css.call(this, ...args)}
        }
        `
    }
} 