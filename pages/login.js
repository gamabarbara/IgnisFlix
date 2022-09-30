import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <LoginContainer action="/send-data-here" method="post">
        <Label>E-mail / username:</Label>

        <input type="email" required />
        <Label>Senha:</Label>

        <input type="password" required />
      </LoginContainer>
      <ContainerButton>
        <Btn>
          <Link href="/login">
            <a>Começar a ver filmes</a>
          </Link>
        </Btn>
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
`

const Btn = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 335px;
height: 48px;
background-color: #F52D2D;
color: #fff;
border-radius: 8px;
border: none;
font-size: 16px;
font-weight: 700;
&:hover {
    opacity: .8;
}
a {
    text-decoration: none;
    color: #fff;
}
`
