import { Api } from "../api";
import { setCookie } from 'cookies-next';
import cookie from "cookie";

export function parseCookies(req) {
  if (!req || !req.headers) {
    return {}
  }
  return cookie.parse(req.headers.cookie || "");
}
//Verifica se o token está válido
export function isTokenExpired(token) {
  const payload = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString("utf8"));

  console.log(payload)
}

export function setUserLocalStorage() {
  console.log("foi")
  localStorage.setItem('user', JSON.stringify(payload));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('user');

  if (!json) {
    return null;
  }
  const user = JSON.parse(json)

  return user ?? null;
}

export async function LoginRequest(email, password) {
  try {
    const request = await Api.post('login', { email, password })
    const payload = { token: request.data.accessToken.token }

    setCookie("token", payload.token, {
      maxAge: 60 * 60 * 1
    })

    console.log(request.status)

    return request.data;
  } catch (error) {
    return null;
  }
}