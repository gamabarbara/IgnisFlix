import * as React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <LoginContainer action="/send-data-here" method="post">
      <Label>E-mail / username:</Label>
      
      <input type="email" required />
      <Label>Senha:</Label>

      <input type="password" required />

    </LoginContainer>
  );
}

const LoginContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 73px;

  input {
    width: 335px;
    height: 48px;
    border-radius: 8px;
    background-color: #282828;
    border: 1px solid transparent;
    color: #a8a8a8;
    font-size: 15px;
    padding-left: 10px;
    font-weight: 400;
    letter-spacing: 1px;
    background-repeat: no-repeat;

    &:focus {
      outline: none;
      border-color: #3a2faf;
    }
  }
`;

const Label = styled.label`
  padding-top: 30px;
  padding-bottom: 10px;
  color: #fff;
  width: 330px;
`;
