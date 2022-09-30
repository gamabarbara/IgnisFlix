import styled from "styled-components"
import Link from "next/link"

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

const ContainerButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Btn = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 335px;
height: 48px;
background-color: #F52D2D;
color: #fff;
border-radius: 8px;
border: none;
font-size: 16px;
font-weight: 700;
&:hover {
    opacity: .8;
}
a {
    text-decoration: none;
    color: #fff;
}
`