import "./mainSearchTicketsForm.css";
import { Link } from "react-router-dom";
import { СitiesSelect } from "../СitiesSelect/СitiesSelect";
import { DatesSelect } from "../DatesSelect/DatesSelect";

/* Форма поиска билетов с главной страницы */

export const MainSearchTicketsForm = () => {
  return (
    <article className="main-search-tickets-form__box">
      <form className="main-search-tickets-form" autoComplete="off">
        <div className="main-search-tickets-form__cities-box">
          <СitiesSelect/>
        </div>
        <div className="main-search-tickets-form__dates-box">
          <DatesSelect/>
        </div>
        <div className="main-search-tickets-form__btn-box">
          <Link to={"/CheckoutPage"}>
            <button className="main-search-tickets-form__btn" type="submit">НАЙТИ БИЛЕТЫ</button>
          </Link>
        </div>
      </form>
    </article>
  )
}