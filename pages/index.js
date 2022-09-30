import styled from "styled-components"
import Link from "next/link"
export default function Home() {
  return (
    <>
      <ContainerText>
        <h1>Do sofá pro seu celular</h1>
        <p>A revolução do cinema na sua casa.</p>
      </ContainerText>
      <ContainerImage>
        <img src="./images/Persona.png" />
      </ContainerImage>
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

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 69px;
  h1 {
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
  p {
    color: #a8a8a8;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
  }
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../images/persona-back.png");
  background-position: center;
  background-repeat: no-repeat;
  height: 60vh;
  padding-bottom: 100px;
  position: static;
  img {
    z-index: 0;
    background-size: cover;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
