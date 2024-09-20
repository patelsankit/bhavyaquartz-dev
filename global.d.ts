// global.d.ts
export {};

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (options: any, elementId: string) => void;
      };
    };
  }
}
