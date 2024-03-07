import "./carriageScheme.css";
import carriageSchemeImg from "./img/carriage-scheme.png";

export const CarriageScheme = () => {
  return (
    <article className="carriage-scheme">
      <div className="carriage-scheme__info-text-box">
        <span className="carriage-scheme__info-text">
          11 человек выбирают места в этом поезде
        </span>
      </div>
      <div className="carriage-scheme__img-box">
        <img src={carriageSchemeImg} alt="схема мест в вагоне" className="carriage-scheme__img"/>
      </div>
    </article>
  )
}
