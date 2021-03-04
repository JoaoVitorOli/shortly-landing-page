import axios from "axios";

const api = axios.create({
  baseURL: "https://api.shrtco.de/v2/shorten?url=",
});

export default api;
