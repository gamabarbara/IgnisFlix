
import { Image } from "../styles/pages/logo"
import { ContainerImage } from "../styles/pages/logo"

export default function Logo() {
    return(
        <ContainerImage>
            <Image src="/images/logo.png"  alt="Logo da IgnisFlix"/>
        </ContainerImage>
    )
}

