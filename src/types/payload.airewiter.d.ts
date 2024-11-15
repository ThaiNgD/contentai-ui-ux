export {};

declare global {
  type IFormAiReWriter = {
    request: string;
    content: string;
    language: string;
    module: string;
  };
}
