import "./SearchTicketsForm.css";
import { DatesSelect } from "./DatesSelect";
import { СitiesSelect } from "./СitiesSelect";


export const SearchTicketsForm = () => {
  return (
    <div className="search-tickets">
      <form className="search-tickets__form" autoComplete="off">
        <СitiesSelect/>
        <DatesSelect/>
        <div className="search-tickets__form-btn-box">
          <button className="search-tickets__form-btn" type="submit">НАЙТИ БИЛЕТЫ</button>
        </div>
      </form>
    </div>
  )
}