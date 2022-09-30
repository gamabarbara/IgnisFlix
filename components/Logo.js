import styled from "styled-components"
import Image from "next/image"

export default function Logo() {
    return(
        <ContainerImage>
            <Image src="/images/logo.png" width="129" height="33" alt="Logo da IgnisFlix"/>
        </ContainerImage>
    )
}

const ContainerImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 69px;
`