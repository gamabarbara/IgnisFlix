import MovieTop from "../components/MovieTop";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";
import {
  Btn,
  Container,
  ContainerButton,
  ContainerInput,
  Image,
  Input,
  MovieContainer,
  Title,
} from "../styles/pages/movies";
import { useState } from "react";
import { parseCookies } from "nookies";

export default function Movies() {
  let newMovies = []
  const { token: token } = parseCookies();
  const Instance = axios.create({
    baseURL: "https://teste.ignisdigital.tec.br/",
    timeout: 1000,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const [movies, setMovies] = useState(null);
  const [id, setId] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getData() {
      const res = await Instance.get(`movies?search=&page=${id}`);
      newMovies = res.data.results
      setMovies(newMovies)
    }
    setId(id + 1);
    getData();
  }, []);

  const loadMore = async () => {
    setId(id + 1);
    console.log(id)
    try {
      const response = await Instance.get(`movies?search=&page=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      newMovies.push(response.data.results)
      setMovies(...newMovies, newMovies)
      console.log(newMovies)
    } catch {
      error(console.log(error));
    }
  };

  if (movies != null) {
    return (
      <>
        <Container>
          <MovieTop />
          <ContainerInput>
            <Input
              placeholder="Buscar filme"
              type="text"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <Image src="/images/Vector.png" width="18" height="18" />
          </ContainerInput>
          <Title>Filmes</Title>
          <MovieContainer>
            {movies
              .filter((value) => {
                if (searchTerm === "") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              })
              .map(renderMovies)}
          </MovieContainer>
        </Container>
        <ContainerButton>
          <Btn onClick={loadMore}>
            <a>Ver mais</a>
          </Btn>
        </ContainerButton>
      </>
    );
  }
}

const renderMovies = (movie, i) => {
  return (
    <MovieCard
      key={i}
      title={movie.title}
      image={movie.poster_path}
      percentage={movie.vote_average}
      backdrop={movie.backdrop_path}
      overview={movie.overview}
    />
  );
};

export const getServerSideProps = async (ctx) => {
  const { token: token } = parseCookies(ctx);
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    };
  }
  return {
    props: {},
  };
};
