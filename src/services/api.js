import axios from "axios";

export const Api = axios.create({
  baseURL: "https://teste.ignisdigital.tec.br/"
});

export const Instance = axios.create({
  baseURL: 'https://teste.ignisdigital.tec.br/',
  timeout: 1000,
  headers: { 'Authorization': 'Bearer ' + 'MTY2.5BwY997j4nHAuT9nTzyAczEJrHP4dZG4WXD8weU9mW1wR0w05jBc7hW-K2-V' }
});