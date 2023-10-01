import axios from "axios";
import { memoizedRefreshToken } from "./refreshToken";

import { ACCESS_TOKEN, API_BASE_URL } from "@/constants";

axios.defaults.baseURL = API_BASE_URL

axios.interceptors.request.use(
  async(config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN)

    if (accessToken) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${accessToken}`,
      };
    }

    return config
  },
  (error) => Promise.reject(error)
)

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const access = await memoizedRefreshToken();

      if (access) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${access}`,
        };
      }

      return axios(config);
    }
    return Promise.reject(error);
  }
);

export const axiosPrivate = axios;
