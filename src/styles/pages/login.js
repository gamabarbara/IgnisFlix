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
    @media (min-width: 1025px) {
      width: 450px;
      height: 55px;
    }

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
  @media (min-width: 1025px) {
    font-size: 22px;
    padding-bottom: 15px;
    width: 450px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 370px;
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
  @media (min-width: 1025px) {
    width: 450px;
  }
`;

export const ToggleButton = styled.img`
  cursor: pointer;
  position: relative;
  bottom: 35px;
  left: 140px;
  @media (min-width: 1025px) {
    width: 30px;
    height: 30px;
    left: 200px;
    bottom: 40px;
  }
`;
