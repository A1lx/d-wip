import "./SearchTicketsForm.css";
import { Link } from "react-router-dom";
import { DatesSelect } from "./DatesSelect/DatesSelect";
import { СitiesSelect } from "./СitiesSelect/СitiesSelect";

export const SearchTicketsForm = () => {
  return (
    <article className="search-tickets-form__box">
      <form className="search-tickets-form" autoComplete="off">
        <СitiesSelect/>
        <DatesSelect/>
        <div className="search-tickets-form__btn-box">
          <Link to={"/CheckoutPage"}>
            <button className="search-tickets-form__btn" type="submit">НАЙТИ БИЛЕТЫ</button>
          </Link>
        </div>
      </form>
    </article>
  )
}