import * as React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <LoginContainer>
      <p>E-mail / username</p>
      <input type="email" />
      <p>Senha</p>
      <input type="password" />
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 73px;

  p {
    color: #fff;
    font-weight: 500;
    line-height: 24px;
  }

  input {
    width: 335px;
    height: 48px;
    border-radius: 8px;
    background-color: #282828;
    border: none;

  }
`;

