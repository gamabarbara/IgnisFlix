import styled from "styled-components";
export const LoginContainer = styled.form`
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

export const Label = styled.label`
  padding-top: 30px;
  padding-bottom: 10px;
  color: #fff;
  width: 330px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 350px;
  cursor: pointer;
`;

export const Btn = styled.button`
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
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const ToggleButton = styled.img`
  cursor: pointer;
  position: relative;
  bottom: 35px;
  left: 140px;
`;
