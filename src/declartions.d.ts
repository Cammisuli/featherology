declare const graphql: (query: TemplateStringsArray) => void;

declare module '*.jpg' {
    const img: string;
    export = img;
}

declare module JSX {
    interface IntrinsicElements {
      "index": any,
      "badge": any
    }
  }