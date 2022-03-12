import axios, { AxiosResponse } from "axios";
import { toastSth } from "../../home-page";

const client = axios.create({
  baseURL: "http://120.76.142.160:8888/",
  timeout: 10000,
});

client.interceptors.request.use(
  (config) => {
    console.log("请求拦截");
    return config;
  },
  (error) => {
    // return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    console.log("成功响应拦截");
    toastSth("success", response.data.message, { theme: "colored" });
    return response.data;
  },
  (error) => {
    console.log("错误响应拦截");
    console.log(error.response);
    toastSth("error", "ddd", { theme: "colored" });
    // return Promise.reject(error);
  }
);

export default client;

