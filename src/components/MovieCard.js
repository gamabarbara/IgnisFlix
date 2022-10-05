import {
  ContainerCard,
  ImageMovie,
  InfoMovie,
  BackdropImage,
  BackdropInfo,
  ContainerBack,
  CircularProgress,
} from "../styles/pages/movieCard";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";



export default function MovieCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBroken, setIsBroken] = useState('')
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <ContainerBack>
          <BackdropImage src={props.backdrop} />
          <CircularProgress style={{ height: "40px", width: "40px" }}>
            <GradientSVG />
            <CircularProgressbar
              text={`${props.percentage * 10}%`}
              value={props.percentage * 10}
              background={true}
              counterClockwise={true}
              strokeWidth={5}
              styles={{
                path: { stroke: `url(#svg-porcent)`, height: "100%" },
                trail: {
                  stroke: "#2e2e2e",
                },
                text: {
                  fill: "#fff",
                  fontSize: "30px",
                },
                background: {
                  fill: "#000",
                },
              }}
            />
          </CircularProgress>
          <BackdropInfo>
            <h1>{props.title}</h1>
            <p>{props.overview}</p>
            <a className="more">ver menos</a>
          </BackdropInfo>
        </ContainerBack>
      ) : (
        <ContainerCard>
          <ImageMovie src={props.image === null ? "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg" : props.image} />
          <CircularProgress style={{ height: "40px", width: "40px" }}>
            <GradientSVG />
            <CircularProgressbar
              text={`${props.percentage * 10}%`}
              value={props.percentage * 10}
              background={true}
              counterClockwise={true}
              strokeWidth={4}
              styles={{
                path: { stroke: `url(#svg-porcent)`, height: "100%" },
                trail: {
                  stroke: "#2e2e2e",
                },
                text: {
                  fill: "#fff",
                  fontSize: "30px",
                },
                background: {
                  fill: "#000",
                },
              }}
            />
          </CircularProgress>
          <InfoMovie>
            <h1>{props.title}</h1>
            <p>{props.overview}</p>
            <p> ...</p>
            <a className="more">ver mais</a>
          </InfoMovie>
        </ContainerCard>
      )}
    </div>
  );
}

const GradientSVG = () => (
  <svg style={{ height: 0 }}>
    <defs>
      <linearGradient id={"svg-porcent"} gradientTransform={"rotate(90)"}>
        <stop offset="16.29%" stopColor="#F52D2D" />
        <stop offset="85.56%" stopColor="#3A2FAF" />
      </linearGradient>
    </defs>
  </svg>
);
