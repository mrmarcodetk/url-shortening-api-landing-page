import axios from "axios";

const AxiosInterceptor = () => {
  axios.interceptors.request.use((request) => {
    console.log(
      "🚀 ~ file: axios.interceptor.ts:7 ~ axios.interceptors.request.use ~ request",
      request
    );
    return request;
  });
};

export default AxiosInterceptor;
