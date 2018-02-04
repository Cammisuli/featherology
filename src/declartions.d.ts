declare module 'react-photo-gallery';
declare module 'bricks.js';
declare const graphql: (query: TemplateStringsArray) => void;

declare module '*.jpg' {
    const img: string;
    export = img;
}

declare module 'gatsby-image' {
    export interface GatsbyImage {
        resolutions?: object;
        sizes?: object;
        /**Defaults to fading in the image on load**/
        fadeIn?: boolean;
        title?: string /**Passed to the img element */;
        alt?: string /**Passed to the img element */;
        className?: string | object; //Passed to the wrapper div. Object is needed to support Glamor's css prop
        outerWrapperClassName?: string | object; //Passed to the outer wrapper div. Object is needed to support Glamor's css prop
        style?: object; //Spread into the default styles in the wrapper div
        position?: string; //Defaults to relative. Pass in absolute to make the component absolute positioned
        backgroundColor?: string | boolean; //	Set a colored background placeholder. If true, uses "lightgray" for the color. You can also pass in any valid color string.
        onLoad?: Function; //	func	A callback that is called when the full-size image has loaded.
    }
    const Img: React.StatelessComponent<GatsbyImage>;
    export default Img;
}

declare namespace JSX {
    interface IntrinsicElements {
        index: any;
        badge: any;
        banner: any;
        rentals: any;
        about: any;
        rental: any;
    }
}
