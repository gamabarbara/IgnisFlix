import styled from "styled-components";

export const ContainerCard = styled.div`
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;
  margin-left: 15px;
  @media (min-width: 1025px) {
    margin: 10px 20px 10px 20px;
  }

  h1 {
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
    letter-spacing: 1px;
    width: 140px;
    margin-bottom: 5px;
    @media (min-width: 1025px) {
      font-size: 15px;
      margin-top: 5px;
    }
  }
  p {
    font-weight: 400;
    font-size: 10px;
    width: 132px;
    height: 22px;
    color: #a8a8a8;
    margin-left: 10px;
    overflow: hidden;
    @media (min-width: 1025px) {
      font-size: 12px;
      width: 160px;
      margin-top: 4px;
    }
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
    @media (min-width: 1025px) {
      font-size: 12px;
      right: 10px;
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
  @media (min-width: 1025px) {
    width: 182px;
    height: 130px;
  }
`;

export const ImageMovie = styled.img`
  border-radius: 8px;
  width: 154px;
  height: 231px;
  @media (min-width: 1025px) {
    background-color: rebeccapurple;
    width: 180px;
    height: 250px;
  }
`;

export const ProgressBar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  bottom: 115px;
  left: 6px;
  @media (min-width: 1025px) {
    bottom: 125px;
  }

  .outer {
    height: 40px;
    width: 40px;
    padding: 2px;
    background: linear-gradient(#f52d2d, #3a2faf);
    border-radius: 50%;
  }
  .inner {
    height: 36px;
    width: 36px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 100700;
    border-radius: 50%;
    background-color: #000;
  }
`;

export const BackdropImage = styled.img`
  width: 336px;
  height: 334px;
  border-radius: 5px;
`;

export const BackdropInfo = styled.div`
  width: 335px;
  height: fit-content;
  background-color: #282828;
  border-radius: 8px;
  padding-top: 20px;
  z-index: -1;
  position: relative;
  bottom: 15px;
  h1 {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    padding-top: 28px;
    padding-left: 10px;
    padding-bottom: 5px;
  }
  p {
    width: 307px;
    font-size: 10px;
    font-weight: 400;
    color: #a8a8a8;
    line-height: 18px;
    padding-left: 10px;
    padding-bottom: 40px;
  }
  a {
    font-size: 10px;
    font-weight: 400;
    color: #fff;
    position: absolute;
    padding-bottom: 10px;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
  }
`;

export const BackProgressBar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  bottom: 290px;
  @media (min-width: 1025px) {
    bottom: 290px;
    left: 10px;
    position: absolute;
  }

  .back-outer {
    height: 40px;
    width: 40px;
    padding: 2px;
    background: linear-gradient(#f52d2d, #3a2faf);
    border-radius: 50%;
  }
  .back-inner {
    height: 36px;
    width: 36px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 100700;
    border-radius: 50%;
    background-color: #000;
  }
`;

export const ContainerBack = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const Card = styled.div`
  .percent {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: rebeccapurple;
    svg {
      position: relative;
      width: 50px;
      height: 50px;
      circle {
        width: 100%;
        height: 100%;
        fill: transparent;
        stroke-width: 2;
        stroke: #191919;
        transform: translate(5px, 5px);
      }
    }
  }
`;

export const CircularProgress = styled.div`
  position: relative;
  margin-top: -40px;
  bottom: 15px;
  left: 5px;
  .CircularProgressbar-text {
    transform: translate(-28px, 10px);
}
`;

