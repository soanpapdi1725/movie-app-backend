import axios from "axios";

const axiosInstance = axios.create({
  timeout: 10000,
});

export const apiConnector = (method, url, data, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: data || null,
    headers: headers || null,
    params: body || null,
  });
};
