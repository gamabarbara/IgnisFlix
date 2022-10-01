import styled from "styled-components"

export const ContainerCard = styled.div`
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;
  &:hover {
    /* box-shadow: 0px 10px 14px 14px #FFF; */
    box-shadow: rgba(168, 168, 168, 0.25) 0px 54px 20px,
      rgba(168, 168, 168, 0.10) 0px -12px 0px,
      rgba(168, 168, 168, 0.10) 0px 4px 0px,
      rgba(168, 168, 168, 0.10) 0px 12px 13px,
      rgba(168, 168, 168, 0.09) 0px -3px 0px;
  }
  h1 {
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    margin-bottom: 0;
    letter-spacing: 1px;
    margin-left: 10px;
    margin-bottom: 5px;
  }
  p {
    margin-left: 10px;
    font-weight: 400;
    font-size: 10px;
    width: 132px;
    height: 22px;
    color: #a8a8a8;
  }
  a {
    font-weight: 400;
    font-size: 10px;
    color: #fff;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    margin-top: 30px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const InfoMovie = styled.div`
  background-color: #282828;
  border-radius: 8px 8px 8px 8px;
  padding-top: 10px;
  width: 154px;
  height: 106px;
  z-index: 0;
`;

export const Imagem = styled.div`
  z-index: 1000;
`;
