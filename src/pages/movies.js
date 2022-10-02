import MovieTop from "../components/MovieTop";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";
import { Btn, Container, ContainerButton, ContainerInput, Image, Input, MovieContainer, Title } from "../styles/pages/movies";
import { useState } from "react";
import { Instance } from "../services/api";

export default function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await Instance.get('movies')
        setMovies(res.data.results)
      } catch (err) {
        console.log(err)
      }
    }
    getData();
  }, []);



  if(movies!= null){
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
    {movies && movies.map((movie, i) => (
          <MovieCard key={i} title={movie.title} image={movie.poster_path}/>
        ))}
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
}