import axios from "axios";

const key = "c6ad7829d3e224419e1fb764263452c0";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const queryConfig = `?api_key=${key}&language=pt-Br`;

export default api;
