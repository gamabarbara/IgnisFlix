import MovieTop from "../components/MovieTop";
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
import { Instance } from "../services/api";
import { parseCookies } from "../services/AuthProvider/util";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [visible, setVisible] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await Instance.get("movies");
        setMovies(res.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  const loadMore = () => {
    setVisible(visible + 4);
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

          <>
            <Title>Filmes</Title>
          </>
          <MovieContainer>
            {movies
              .slice(0, visible)
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
  return <MovieCard key={i} title={movie.title} image={movie.poster_path} percentage={movie.vote_average}/>;
};

export const getServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx.req);
  console.log(cookies.token)
  if (!cookies) {
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      },
    };
  }

  return {
    props: {

    }
  }
}