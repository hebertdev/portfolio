import Axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

let headers: Record<string, string> = {};

export const axiosInstanceBackend: AxiosInstance = Axios.create({
  baseURL: baseURL,
  headers,
});

export function axiosInterceptors() {
  axiosInstanceBackend.interceptors.response.use(
    function (response: AxiosResponse) {
      return response;
    },
    function (error: AxiosError) {
      if (error?.response?.status === 401) {
        window.location.href = "/accounts/login";
      } else {
        return Promise.reject(error);
      }
    }
  );
}
