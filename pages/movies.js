import styled from "styled-components";
import MovieTop from "../components/MovieTop";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  return (
    <>
      <Container>
        <MovieTop />
        <ContainerInput>
          <Input placeholder="Buscar filme" />
          <img src="/images/Vector.png" width="18" height="18" />
        </ContainerInput>
        <>
          <Title>Filmes</Title>
        </>
        <MovieContainer>
          <MovieCard />
        </MovieContainer>
      </Container>
      <ContainerButton>
        <Btn>
          <a>Ver mais</a>
        </Btn>
      </ContainerButton>
    </>
  );
}

const Container = styled.div`
  min-height: 75vh;
`;

const Input = styled.input`
  width: 338px;
  height: 48px;
  border: none;
  background-color: #222222;
  border-radius: 39px;
  &::placeholder {
    padding-left: 20px;
  }
`;
const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;

  img {
    position: relative;
    right: 40px;
  }
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  display: relative;
  h1 {
  }
`;

const Title = styled.h1`
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
