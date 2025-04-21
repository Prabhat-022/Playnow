import axios from "axios";
export const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_MODE === "development" ? "http://localhost:8000/api/v1/user" : "https://playnow-backend.vercel.app/api/v1/user",
  baseURL: "https://playnow-backend.vercel.app/api/v1/user",
  withCredentials: true,
});
