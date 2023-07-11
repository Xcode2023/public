import axios from "axios";
import { ElMessage } from "element-plus";
import { AxiosCanceler } from "../helper/axiosCancel";

import { GlobalStore } from "@/store";
import { isFunction } from "@/utils/is";

const axiosCancel = new AxiosCanceler();

const config = {
  timeout: 30000,
  baseURL: "/API",
  // 跨域时候允许携带凭证
  withCredentials: true,
};

class HttpReauest {
  service;
  constructor(config) {
    this.service = axios.create(config);
    this.service.interceptors.request.use(
      (config) => {
        // 在请求发送之前，做点什么
        const { token } = GlobalStore();

        axiosCancel.addPending(config);

        token && isFunction(config.headers.set) && config.headers.set('access-token', token);

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    /**
     * @description 响应拦截器
     *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.service.interceptors.response.use(
      (response) => {
        // 接收到响应信息之后做点什么
        const { data, config } = response;

        axiosCancel.removePending(config);

        return data;
      },
      async (error) => {
        console.log(error, "error");

        return Promise.reject(error);
      }
    );
  }

  get(
    url,
    params,
    _object
  ) {
    return this.service.get(url, { params, ..._object });
  }
  post(
    url,
    params,
    _object
  ) {
    return this.service.post(url, params, _object);
  }
  put(
    url,
    params,
    _object
  ) {
    return this.service.put(url, params, _object);
  }
  delete(
    url,
    params,
    _object
  ) {
    return this.service.delete(url, { params, ..._object });
  }
}

export default new HttpReauest(config);
