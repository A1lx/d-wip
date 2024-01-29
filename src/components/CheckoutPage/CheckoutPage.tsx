import "./checkoutPage.css";
import { TrainList } from "./TrainList/TrainList";

export const CheckoutPage = () => {
  return (
    <main>
      <div className="checkout-page__banner"></div>
      <div className="progress-bar">
        <div className="progress-bar__section progress-bar__section_active">
          <div className="progress-bar__section-number">1</div>
          <span className="progress-bar__section-name">Билеты</span>
        </div>
        <div className="progress-bar__section">
          <span className="progress-bar__section-number">2</span>
          <span className="progress-bar__section-name">Пассажиры</span>
        </div>
        <div className="progress-bar__section">
          <span className="progress-bar__section-number">3</span>
          <span className="progress-bar__section-name">Оплата</span>
        </div>
        <div className="progress-bar__section">
          <span className="progress-bar__section-number">4</span>
          <span className="progress-bar__section-name">Проверка</span>
        </div>
      </div>

      <div className="train-selection">
        <TrainList/>
      </div>
    </main>
  )
}