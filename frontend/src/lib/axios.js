import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_MODE === "development" ? "http://localhost:8000/api/v1/user" : "/api/v1/user",
  // baseURL: "http://localhost:8000/api/v1/user",
  withCredentials: true,
});
