import styled from "styled-components";

export const ContainerCard = styled.div`
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;

  h1 {
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
    letter-spacing: 1px;
    width: 140px;
    margin-bottom: 5px;
  }
  p {
    font-weight: 400;
    font-size: 10px;
    width: 132px;
    height: 22px;
    color: #a8a8a8;
    margin-left: 10px;
  }
  a {
    font-weight: 400;
    font-size: 10px;
    color: #fff;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 10px;
    left: 105px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const InfoMovie = styled.div`
  background-color: #282828;
  border-radius: 8px;
  padding-top: 20px;
  width: 154px;
  height: 120px;
  z-index: -1;
  position: relative;
  bottom: 15px;
`;

export const ImageMovie = styled.img`
  border-radius: 8px;
`;
