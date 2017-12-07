declare module 'react-photo-gallery';
declare const graphql: (query: TemplateStringsArray) => void;

declare module '*.jpg' {
    const img: string;
    export = img;
}

declare module JSX {
    interface IntrinsicElements {
      "index": any
      "badge": any
      "banner": any;
      "rentals": any;
      "about": any;
      "rental": any;  
    }
  }