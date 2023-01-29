import axios from "axios";
import loadEnv from "#helpers/loadEnv";


const createAxiosInstance = () => {
  loadEnv();

  const api = axios.create({
    baseURL: process['env']['BASE_URL'],
    timeout: 60 * 1000,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const message = error?.response?.data;
      error.message = message ?? error.message
      /*if(error?.response?.data?.errors)
          error.errors = error?.response?.data?.errors;*/
      return Promise.reject(error)
    });

  const TestConnectivity = () => api.get("/api/v3/ping");
  const GetServerTime = () => api.get('/api/v3/time');
  const GetSystemStatus = () => {
    const headers = {

    }
    api.get('/sapi/v1/system/status');
  };

  return {TestConnectivity, GetServerTime, GetSystemStatus}
};
const request = createAxiosInstance();

export default request
