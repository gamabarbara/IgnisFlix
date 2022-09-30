import Image from "next/image";
import styled from "styled-components";
export default function MovieCard() {
  return (
    <ContainerCard>
      <Image src="/images/image.png" width="154" height="231" />
      <InfoMovie>
        <h1>Dilwale Dulhania</h1>
        <p>”Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <h6>ver mais</h6>
      </InfoMovie>
    </ContainerCard>
  );
}

const ContainerCard = styled.div`
  border-radius: 8px;

  position: relative;
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
  h6 {
    font-weight: 400;
    font-size: 10px;
    color: #fff;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    margin-top: 30px;
  }
`;

const InfoMovie = styled.div`
  background-color: #282828;
  border-radius: 8px 8px 8px 8px;
  position: absolute;
  padding-top: 10px;
  margin-top: 0;
  width: 154px;
  height: 106px;
`;
