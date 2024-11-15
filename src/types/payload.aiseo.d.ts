export {};

declare global {
  type IFormAnalyzeKeyword = {
    keyword: string;
    language: string;
    module: string;
  };

  type IFormCreateDetail = {
    outline: string;
    language: string;
    module: string;
  };

  type IFormCreateOutline = {
    title: string;
    language: string;
    module: string;
  };

  type IFormCreateTitle = {
    keyword: string;
    language: string;
    module: string;
  };
}
