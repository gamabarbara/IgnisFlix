import * as React from "react";

import { useState } from "react";
import { useRouter } from "next/router";
import { Btn, ContainerButton, Label, LoginContainer, ToggleButton } from "../styles/pages/login";
import { LoginRequest } from "../services/auth";
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async (e) => {

    e.preventDefault();
    if(email && password) {
      const isLogged = await LoginRequest(email, password);
      if(isLogged) {
        router.push('movies');
      } else {
        toast.error("Email ou senha inválidos!")
      }
    } else {    
      toast.error("Digite um email e/ou senha válidos!")
    }
  };

  function togglePasswordVisibility() {
    setIsPasswordShown(!isPasswordShown);
  }
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <LoginContainer method="post" onSubmit={submit}>
        <Label>E-mail / username:</Label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <Label>Senha:</Label>
        <input
          type={isPasswordShown ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ToggleButton
          src={isPasswordShown ? "images/eye-slash.png" : "images/eye.png"}
          onClick={togglePasswordVisibility}
        />
        <ContainerButton>
          <Btn type="submit">Entrar</Btn>
        </ContainerButton>
      </LoginContainer>
    </>
  );
}