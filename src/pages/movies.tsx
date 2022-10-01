import styled from "styled-components";
import MovieTop from "../components/MovieTop";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";
import { Btn, Container, ContainerButton, ContainerInput, Image, Input, MovieContainer, Title } from "../styles/pages/movies";

export default function Movies() {
  useEffect(() => {
    fetch("https://teste.ignisdigital.tec.br/movies/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <Container>
        <MovieTop />
        <ContainerInput>
          <Input placeholder="Buscar filme" />
          <Image src="/images/Vector.png" width="18" height="18" />
        </ContainerInput>
        <>
          <Title>Filmes</Title>
        </>
        <MovieContainer>
          <MovieCard />
          <MovieCard />
          <MovieCard />
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

