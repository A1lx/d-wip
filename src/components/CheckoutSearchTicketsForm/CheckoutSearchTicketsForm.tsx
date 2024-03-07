import "./checkoutSearchTicketsForm.css";
import { СitiesSelect } from "../СitiesSelect/СitiesSelect"
import { DatesSelect } from "../DatesSelect/DatesSelect";

// форма поиска билетов со страницы оформления заказа
export const CheckoutSearchTicketsForm = () => {
  return (
    <article className="checkout-search-tickets-form__box">
      <form autoComplete="off" className="checkout-search-tickets-form">
        <div className="checkout-search-tickets-form__components-box checkout-search-tickets-form__components-box_city">
          <СitiesSelect/>
        </div>
        <div className="checkout-search-tickets-form__components-box checkout-search-tickets-form__components-box_date">
          <DatesSelect/>
        </div>
        <div className="checkout-search-tickets-form__btn-box">
          <button className="checkout-search-tickets-form__btn" type="submit">НАЙТИ БИЛЕТЫ</button>
        </div>
      </form>
    </article>
  )
}
