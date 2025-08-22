import axios from "axios";

export const dunamisApi = axios.create({
  baseURL: `${import.meta.env.VITE_DUNAMIS_SERVICE}`,
});
