import styled from "styled-components";

export const Input = styled.input`
  width: 338px;
  height: 48px;
  border: none;
  background-color: #222222;
  border-radius: 39px;
  color: #707070;
  padding-left: 20px;
  &::placeholder {
    padding-left: 20px;
    color: #707070;
  }
`;

export const Container = styled.div`
  min-height: 75vh;
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;

  img {
    position: relative;
    right: 40px;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
  width: 350px;
  height: 400px;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  margin-top: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 130px;
  margin-bottom: 29px;
`;

export const Image = styled.img`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.div`
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
    cursor: pointer;
  }
`;

