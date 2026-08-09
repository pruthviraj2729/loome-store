import axios from "axios";

export const axiosInstence = axios.create({
  baseURL: "https://dummyjson.com",
});