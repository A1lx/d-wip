import "./checkoutPage.css";
import { TrainList } from "../../components/TrainList/TrainList";
import { SideBar } from "../../components/SideBar/SideBar";
import { SeatsSelection } from "../../components/SeatsSelection/SeatsSelection";
import { SidebarFilterForm } from "../../components/SidebarFilterForm/SidebarFilterForm";
import { LastTickets } from "../../components/LastTickets/LastTickets";

/* 2я страница, страница выбора поезда */
export const CheckoutPage = () => {
  return (
    <main className="checkout-page">
      <article className="checkout-page__banner"></article>
      <article className="progress-bar">
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
      </article>
      <div className="selection-container">
        <aside className="sidebar">
          <SidebarFilterForm/>
          <LastTickets/>
        </aside>
        {/* <TrainList/> */}
        <SeatsSelection/>
      </div>
    </main>
  )
}