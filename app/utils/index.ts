import axios, { AxiosInstance } from "axios";

/**
 * @param dev more priority than node_env
 */

export const getApi: (dev?: boolean) => AxiosInstance = (dev?: boolean) => {
  if (!dev) {
    dev = process.env.NODE_ENV === 'development';
  }

  return axios.create({
    baseURL: (dev) ? "http://localhost:8080/" : process.env.API_URL,
    withCredentials: true,
  });
}


export namespace handleExceptions{

  /**
   * @constant handleFetchException
   */
  export const hfe = (reason: any) => {
    console.log('\xb1[35mFetch failed, check URL or sv response.\xb1[0m\n' + reason);
  }

}