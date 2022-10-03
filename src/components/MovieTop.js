import Link from "next/link";
import { Arrow, MovieContainer, Welcome } from "../styles/pages/movieTop";

export default function MovieTop() {
  return (
    <MovieContainer>
      <Arrow>
        <Link href="/login">
          <img src="/images/Vector 1.png" />
        </Link>
      </Arrow>
      <Welcome>
        <p>Bem vindo(a), </p> <span> Bárbara</span>
      </Welcome>
    </MovieContainer>
  );
}

