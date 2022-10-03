import Link from "next/link";
import { Arrow, MovieContainer, Welcome } from "../styles/pages/movieTop";
import { parseCookies } from "nookies";

export default function MovieTop() {
  const { "user": user } = parseCookies()
  return (
    <MovieContainer>
      <Arrow>
        <Link href="/login">
          <img src="/images/Vector 1.png" />
        </Link>
      </Arrow>
      <Welcome>
        <p>Bem vindo(a), </p> <span> {user}</span>
      </Welcome>
    </MovieContainer>
  );
}

