import axios from "axios";

export const pinedaApi = axios.create({
  baseURL: `${import.meta.env.VITE_SUPERMERCADOHNOSPINEDA_SERVICE}`,
});
