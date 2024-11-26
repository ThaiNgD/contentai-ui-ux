import http from "./httpClient";

export const userInfor = {
  pathKey: "users",
  queryKey: "userInfor",

  get: async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return await http.get<any, any>(
      `${userInfor.pathKey}/get_user_information`
    );
  },
};
