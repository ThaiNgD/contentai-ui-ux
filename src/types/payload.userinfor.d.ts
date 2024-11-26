export {};

declare global {
  type IUserInforForm = {
    email: string;
    options: string;
    token_limit: number;
    token_used: number;
    max_images: number;
    images_used: number;
    max_minnute: number;
  };
}
