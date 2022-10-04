import {
  ContainerCard,
  ImageMovie,
  InfoMovie,
  ProgressBar,
  BackdropImage,
  BackdropInfo,
  BackProgressBar,
  ContainerBack,
} from "../styles/pages/movieCard";
import { useState } from "react";
export default function MovieCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
    onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <ContainerBack>
          <BackdropImage src={props.backdrop} />
          <BackProgressBar>
            <div className="back-outer">
              <div className="back-inner">{props.percentage * 10}%</div>
            </div>
          </BackProgressBar>
          <BackdropInfo>
            <h1>{props.title}</h1>
            <p>{props.overview}</p>
            <a className="more">ver menos</a>
          </BackdropInfo>
        </ContainerBack>
      ) : (
        <ContainerCard>
          <ImageMovie src={props.image} />
          <ProgressBar>
            <div className="outer">
              <div className="inner">{props.percentage * 10}%</div>
            </div>
          </ProgressBar>
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
