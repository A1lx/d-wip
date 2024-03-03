import "./carriageSelection.css";
import changeTrainIcon from "./img/change-train-icon.svg";
import { SelectedRoute } from "./SelectedRoute/SelectedRoute";
import { TicketsQuantity } from "./TicketsQuantity/TicketsQuantity";
import { СarriageType } from "./СarriageType/СarriageType";
import { CarriageSeats } from "./CarriageSeats/CarriageSeats";

/* выбор мест в вагоне */
export const СarriageSelection = () => {
  return (
    <article className="carriage-selection">
      <div className="change-train">
        <div>
          <img src={changeTrainIcon} alt="change-train-icon"/>
        </div>
        <button className="change-train__btn">Выбрать другой поезд</button>
      </div>
      <SelectedRoute/>
      <TicketsQuantity/>
      <СarriageType/>
      <CarriageSeats/>
    </article>
  )
}