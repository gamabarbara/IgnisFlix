import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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

const Welcome = styled.h1`
  font-size: 24px;
  color: #a8a8a8;
  font-weight: 700;
  width: 340px;
  margin-top: 31px;

  span {
    color: #fff;
  }
`;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  cursor: pointer;
  position: relative;
  bottom: 50px;
  left: 20px;
`;