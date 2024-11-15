export {};

declare global {
  type IFormContentAnalys = {
    content: string;
    language: string;
    module: string;
  };

  type IFormDetailBlog = {
    outline: string;
    language: string;
    module: string;
  };

  type IFormIdeaBlog = {
    audience: string;
    language: string;
    module: string;
  };

  type IFormOutlineBlog = {
    idea: string;
    language: string;
    module: string;
  };

  type IFormSeoOptimize = {
    content: string;
    language: string;
    module: string;
  };
}
