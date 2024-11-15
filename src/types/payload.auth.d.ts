export {};

declare global {
  type IFormLogin = {
    username: string;
    password: string;
    remember_password: boolean;
  };
  type IFormRegister = {
    email: string;
    password: string;
    password_confirmation: string;
    first_name?: string;
    last_name?: string;
    phone: string;
  };
}
