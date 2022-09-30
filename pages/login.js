import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Login() {
  const [isPasswordShown, setIsPasswordShown] = React.useState(false);

  function togglePasswordVisibility() {
    setIsPasswordShown(!isPasswordShown);
  }
  return (
    <>
      <LoginContainer action="/send-data-here" method="post">
        <Label>E-mail / username:</Label>

        <input type="email" required />
        <Label>Senha:</Label>
        <input type={isPasswordShown ? "text" : "password"} required />
        <ToggleButton
          src={isPasswordShown ? "images/eye-slash.png" : "images/eye.png"}
          onClick={togglePasswordVisibility}
        />
      </LoginContainer>
      <ContainerButton>
        <Btn>Entrar</Btn>
      </ContainerButton>
    </>
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

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 350px;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 48px;
  background-color: #f52d2d;
  color: #fff;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    opacity: 0.8;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const ToggleButton = styled.img`
  cursor: pointer;
  position: relative;
  bottom: 35px;
  left: 140px;
`;
