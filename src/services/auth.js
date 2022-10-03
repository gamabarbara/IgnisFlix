import { Api } from "./api";
import { setCookie } from 'cookies-next';
import { useState } from "react";

export async function LoginRequest(email, password) {

  try {
    const request = await Api.post('login', { email, password })
    const payload = { token: request.data.accessToken.token }

    setCookie("token", payload.token, {
      maxAge: 60 * 60 * 1
    })
    console.log(request.data.user.name)
    if(request.data.user && payload){
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}