import advIconPC from "./img/advantages-1.png";
import advIconOffice from "./img/advantages-2.png";
import advIconGlobus from "./img/advantages-3.png";
import "./Advantages.css";

export const Advantages = () => {
  return (
    <div className="advantages">
      <div className="advantages__title">
        <span className="advantages__title-text">КАК ЭТО РАБОТАЕТ</span>
        <button className="advantages__title-btn">Узнать больше</button>
      </div>
      
      <div className="advantages__examples">
        <div className="advantages__example">
          <img src={advIconPC} alt="advantages-icon"/>
          <span className="advantages__example-text">Удобный заказ на сайте</span>
        </div>
        <div className="advantages__example">
          <img src={advIconOffice} alt="advantages-icon"/>
          <span className="advantages__example-text">Нет необходимости ехать в офис</span>
        </div>
        <div className="advantages__example">
          <img src={advIconGlobus} alt="advantages-icon"/>
          <span className="advantages__example-text">Огромный выбор направлений</span>
        </div>
      </div>

    </div>
  )
}