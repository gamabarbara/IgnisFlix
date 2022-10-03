import styled from "styled-components";

export const Welcome = styled.h1`
  color: #a8a8a8;
  font-weight: 700;
  width: 350px;
  height: 30px;
  margin-top: 31px;
  display: flex;

  @media (min-width: 1025px) {
      position: relative;
      top: 60px;
    }
  p {
    font-size: 24px;
    @media (min-width: 1025px) {
      font-size: 30px;
    }
  }
  span {
    color: #fff;
    font-size: 24px;
    margin-left: 5px;
    @media (min-width: 1025px) {
      font-size: 30px;
    }
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1025px) {
    position: relative;
    right: 300px;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
  position: relative;
  bottom: 55px;
  left: 20px;
  img {
    height: 13px;
    width: 7px;
    @media (min-width: 1025px) {
      height: 20px;
      width: 14px;
    }
  }
`;
