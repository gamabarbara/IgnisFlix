import { Backdrop } from "@mui/material";
import {
  ContainerCard,
  ImageMovie,
  InfoMovie,
  ProgressBar,
  BackdropImage,
  BackdropInfo,
  BackProgressBar,
  ContainerBack
} from "../styles/pages/movieCard";
export default function MovieCard(props) {
  return (
    <>
    <ContainerCard>
      <ImageMovie src={props.image} />
      <ProgressBar>
        <div className="outer">
          <div className="inner">{props.percentage * 10}%</div>
        </div>
      </ProgressBar>
      <InfoMovie>
        <h1>{props.title}</h1>
        <p>”Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <a>ver mais</a>
      </InfoMovie>
    </ContainerCard>

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
        <a>ver menos</a>
      </BackdropInfo>
    </ContainerBack>
    </>
  );
}
