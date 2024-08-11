import axios, { AxiosInstance, AxiosResponse } from 'axios';

class Api {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'BACK_END_API_ENV',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.response.use(
      response => response,
      error => {
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, params: Record<string, unknown> = {}): Promise<AxiosResponse<T>> {
    return this.api.get<T>(url, { params });
  }

  post<T>(url: string, data: Record<string, unknown> = {}): Promise<AxiosResponse<T>> {
    return this.api.post<T>(url, data);
  }

  put<T>(url: string, data: Record<string, unknown> = {}): Promise<AxiosResponse<T>> {
    return this.api.put<T>(url, data);
  }

  delete<T>(url: string, data: Record<string, unknown> = {}): Promise<AxiosResponse<T>> {
    return this.api.delete<T>(url, { data });
  }
}

export default Api;
