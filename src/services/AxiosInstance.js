import axios from "axios";
import axiosClient from "../hoc/axiosClient";

const axiosInstance = axios.create({
    baseURL: `http://43.240.66.78:7265/api/`,
})

axiosClient.interceptors.request.use(config => {
    console.log(config, "@@@@@@@@@@@@@@@@@@@@");
    return config;
})
export default axiosInstance;