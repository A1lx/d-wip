import "./SearchTicketsForm.css";
import { Link } from "react-router-dom";
import { DatesSelect } from "./DatesSelect";
import { СitiesSelect } from "./СitiesSelect";


export const SearchTicketsForm = () => {
  return (
    <div className="search-tickets">
      <form className="search-tickets__form" autoComplete="off">
        <СitiesSelect/>
        <DatesSelect/>
        <div className="search-tickets__form-btn-box">
          <Link to={"/CheckoutPage"}>
            <button className="search-tickets__form-btn" type="submit">НАЙТИ БИЛЕТЫ</button>
          </Link>
        </div>
      </form>
    </div>
  )
}