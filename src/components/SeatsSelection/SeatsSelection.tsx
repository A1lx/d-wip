import "./seatsSelection.css";
import { СarriageSelection } from './СarriageSelection/СarriageSelection';

export const SeatsSelection = () => {
  return (
    <section className="seats-selection">
      <span className="seats-selection__title">ВЫБОР МЕСТ</span>
      <СarriageSelection/>
    </section>
  )
}
