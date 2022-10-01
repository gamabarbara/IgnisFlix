import { Api } from "../api";

export function setUserLocalStorage() {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('user');

  if(!json) {
    return null;
  }
  const user = JSON.parse(json)

  return user ?? null;
}

export async function LoginRequest(email, password) {
  try {
    const request = await Api.post('login', {email, password});

    const payload = { token: response.token, email }
   
    setUser(payload);
    setUserLocalStorage(payload);

    return request.data;
  } catch (error) {
    return null;
  }
}