import Image from "next/image";
import { ContainerCard, Imagem, InfoMovie } from "../styles/pages/movieCard";
export default function MovieCard() {
  return (
    <ContainerCard>
      <Imagem>
        <Image src="/images/image.png" width="154" height="231" />
      </Imagem>

      <InfoMovie>
        <h1>Dilwale Dulhania</h1>
        <p>”Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <a>ver mais</a>
      </InfoMovie>
    </ContainerCard>
  );
}

