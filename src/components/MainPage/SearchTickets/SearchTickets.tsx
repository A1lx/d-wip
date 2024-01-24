import "./searchTickets.css";
import swapIcon from "./img/swap-icon.svg";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import { registerLocale, setDefaultLocale } from "react-datepicker";

registerLocale('ru', ru);
setDefaultLocale('ru');

export const SearchTickets = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className="search-tickets">
      <form className="search-tickets__form" autoComplete="off">
        <span>Направление</span>
        <div className="search-tickets__form-block search-tickets__form-block_direction">
          <div>
            <label htmlFor="search-tickets-form"></label>
            <input 
              id="search-tickets-form"
              name="search-tickets-form"
              className="search-tickets__form-input" 
              type="text"
              placeholder="Откуда"
              />
          </div>
          <img src={swapIcon} alt="swap-icon"/>
          <div>
            <label htmlFor="search-tickets-form"></label>
            <input 
              id="search-tickets-form" 
              name="search-tickets-form" 
              className="search-tickets__form-input" 
              type="text"
              placeholder="Куда"
            />
          </div>
        </div>
        <span>Дата</span>
        <div className="search-tickets__form-block search-tickets__form-block_date">
          <div>
            <label htmlFor="search-tickets-form"></label>
            <DatePicker 
              className="search-tickets__form-input"
              id="search-tickets-form"
              name="search-tickets-form"
              selected={startDate}
              placeholderText="ДД/ММ/ГГ"
              onChange={(date) => setStartDate({date})}
              />
          </div>
          <div>
            <label htmlFor="search-tickets-form"></label>
            <DatePicker 
              className="search-tickets__form-input" 
              id="search-tickets-form"
              name="search-tickets-form"
              selected={endDate}
              placeholderText="ДД/ММ/ГГ"
              onChange={(date) => setEndDate(date)}
              />
          </div>
        </div>
        <div className="search-tickets__form-btn-box">
          <button className="search-tickets__form-btn" type="submit">НАЙТИ БИЛЕТЫ</button>
        </div>
      </form>
    </div>
  )
}