export {};

declare global {
  type IFormAiArticle = {
    keyword: string;
    tone: string;
    language: string;
    module: string;
    range: number | null;
  };
}
