import axios from "axios";

export const Api = axios.create({
  baseURL: "https://teste.ignisdigital.tec.br/"
});
