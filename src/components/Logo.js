
import Image from "next/image"
import { ContainerImage } from "../styles/pages/logo"

export default function Logo() {
    return(
        <ContainerImage>
            <Image src="/images/logo.png" width="129" height="33" alt="Logo da IgnisFlix"/>
        </ContainerImage>
    )
}

