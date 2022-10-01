
import Link from "next/link"
import { Btn, ContainerButton, ContainerImage, ContainerText } from "../styles/pages/home";
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

