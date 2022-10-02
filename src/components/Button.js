import Link from "next/link"
import { Btn, ContainerButton } from "../styles/pages/button"

export default function Button() {
    return(
        <ContainerButton>
            <Btn>
             <Link href="/login">
                <a>Começar a ver filmes</a>
             </Link>
             </Btn>
        </ContainerButton>
       
    )
}

