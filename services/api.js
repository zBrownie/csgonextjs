import axios from "axios";

const api = axios.create({
  baseURL: "https://csgohltv-api.herokuapp.com",
});

export default api;
