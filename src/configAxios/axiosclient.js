import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "https://newsapi.org/v2/everything",
  baseURL: "https://627126c26a36d4d62c2221f9.mockapi.io/tinh",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    const { config, status, data } = error.response;
    // const URLs = ['/auth/local/register','/auth/local']
    // if(URLs.includes(config.url) && status === 400) {
    //   const errorList = data.data || []
    //   const firstError = errorList.length > 0 ? errorList[0] : {}
    //   const messageList = firstError.messages || []
    //   const firstMessage = messageList.length > 0 ? messageList[0] : {}

    //   throw new Error(firstMessage.message)
    // }
    return Promise.reject(error);
  }
);

export default axiosClient;
