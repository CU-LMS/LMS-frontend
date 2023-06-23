import axios from "axios"
import {  applicationEnvironment} from "../config/applicationEnv";

export const getBaseUrl = () => {
    let url;
    if(applicationEnvironment === "Development")
    {
      url = "http://localhost:4003/api/v1/"
    }
    if(applicationEnvironment === "Production")
    {
      // url = "http://43.240.66.78:7263/api/"
      //url = "http://43.240.66.78:7265/api/"
      url = "https://localhost:7263/api/"
    }
    return url;
  }

export default axios.create({
    baseURL: getBaseUrl(),
})


