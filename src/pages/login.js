import * as React from "react";

import { useState } from "react";
import { useRouter } from "next/router";
import { Btn, ContainerButton, Label, LoginContainer, ToggleButton } from "../styles/pages/login";
import { LoginRequest } from "../services/AuthProvider/util";

export default function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async (e) => {

    e.preventDefault();
    try {
      await LoginRequest(email, password);
      await router.push("/movies");
    } catch (error) {
      console.log(error);
    }
  };

  function togglePasswordVisibility() {
    setIsPasswordShown(!isPasswordShown);
  }
  return (
    <>
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