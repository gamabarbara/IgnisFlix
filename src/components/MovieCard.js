import {
  ContainerCard,
  ImageMovie,
  InfoMovie,
  ProgressBar,
} from "../styles/pages/movieCard";
export default function MovieCard(props) {
  return (
    <ContainerCard>
      <>
        <ImageMovie src={props.image}/>
        <ProgressBar>
          <div className="outer">
            <div className="inner">{props.percentage * 10}%</div>
          </div>
        </ProgressBar>
      </>

      <InfoMovie>
        <h1>{props.title}</h1>
        <p>”Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <a>ver mais</a>
      </InfoMovie>
    </ContainerCard>
  );
}
