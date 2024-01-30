import "./trainList.css";
import { TrainItem } from "./TrainItem/TrainItem";

export const TrainList = () => {
  return (
    <section className="train-list">
      <div className="train-list__info-box">
        <span>Найдено 20</span>
        <div>
          <span className="train-list__info-sort">сортировать по:  </span>
          <select name="" id="">
            <option value="time">времени</option>
            <option value="price">стоимости</option>
            <option value="duration">длительности</option>
          </select>
          <span className="train-list__info-show">показывать по:  </span>
          <button className="train-list__info-show-btn">5</button>
          <button className="train-list__info-show-btn">10</button>
          <button className="train-list__info-show-btn">20</button>
        </div>
      </div>
      <TrainItem/>
    </section>
  )
}
