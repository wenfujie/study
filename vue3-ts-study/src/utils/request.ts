/*
 * @Author: wfj
 * @Date: 2021-04-07 14:18:29
 * @LastEditors: wfj
 * @LastEditTime: 2022-02-24 16:42:24
 * @FilePath: /vue3-ts-study/src/utils/request.ts
 */

import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

type configType = {
  baseURL: string;
  timeout: number;
};

class Http {
  service;

  constructor(config: configType) {
    this.service = axios.create(config);

    this.service.interceptors.request.use((config: AxiosRequestConfig) => {
      return config;
    });

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { code, data } = response.data;

        if (code === 0) return data;
        return Promise.reject(response.data);
      },
      (err: AxiosError) => {
        return Promise.reject(err);
      }
    );
  }

  get<T>(url: string, params?: object, _object = {}): Promise<T> {
    return this.service.get(url, { params, ..._object });
  }
  post<T>(url: string, params?: object, _object = {}): Promise<T> {
    return this.service.post(url, params, _object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<T> {
    return this.service.put(url, params, _object)
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<T> {
    return this.service.delete(url, { params, ..._object })
  }
}

const config = {
  baseURL: "/",
  timeout: 15000
};

export default new Http(config);
