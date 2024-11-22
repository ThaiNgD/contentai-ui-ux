/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./httpClient";

export interface IAuthToken {
  value: string;
  expiresIn: number;
  type: string;
}

export interface IResultAuth {
  access_token: IAuthToken;
  refresh_token: IAuthToken;
  api_ai_token: IAuthToken;
}

export const authApi = {
  queryKey: "auth",

  login: async (payload: IFormLogin) => {
    return await http.post<any, IResultAuth>(
      `${authApi.queryKey}/login`,
      payload
    );
  },

  logout: async () => {
    return await http.get<any, any>(`${authApi.queryKey}/logout`);
  },

  getProfile: async () => {
    return await http.get<any, any>(`${authApi.queryKey}/profile`);
  },
};
