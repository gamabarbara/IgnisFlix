
import Image from "next/image";
import Link from "next/link";
import { Arrow, MovieContainer, Welcome } from "../styles/pages/movieTop";

export default function MovieTop() {
  return (
    <MovieContainer>
      <Arrow>
        <Link href="/login">
          <Image src="/images/Vector 1.png" width="7" height="13" />
        </Link>
      </Arrow>
      <Welcome>
        Bem vindo(a), <span>Bárbara</span>
      </Welcome>
    </MovieContainer>
  );
}

