import {
  ContainerCard,
  ImageMovie,
  InfoMovie,
  ProgressBar,
  BackdropImage,
  BackdropInfo,
  BackProgressBar,
  ContainerBack,
  Card
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
          <Card>
            <div className="percent">
              <svg>
                <circle cx="20" cy="20" r="20"></circle>
                <circle cx="20" cy="20" r="20"></circle>
              </svg>
            </div>
          </Card>
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
