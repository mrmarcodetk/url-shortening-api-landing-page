import axios from "axios";

const AxiosInterceptor = () => {
  axios.interceptors.request.use((request) => {
    return request;
  });
};

export default AxiosInterceptor;
