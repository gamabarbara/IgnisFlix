import axios from "axios";
import { parseCookies } from "nookies";

export const Api = axios.create({
  baseURL: "https://teste.ignisdigital.tec.br/"
});

const { "token": token } = parseCookies()

export const Instance = axios.create({
  baseURL: 'https://teste.ignisdigital.tec.br/',
  timeout: 1000,
  headers: { 
    Authorization: `Bearer ${token}`
   }
});