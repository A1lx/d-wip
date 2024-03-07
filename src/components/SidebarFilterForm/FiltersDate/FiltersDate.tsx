import "./filtersDate.css"
import DatePicker from "react-datepicker";
import { useState } from "react";

export const FiltersDate = () => {
  const [travelDate, setTravelDate] = useState<Date | null>();
  const [returnDate, setReturnDate] = useState<Date | null>();

  return (
    <article className="filters-date">
      <div className="filters-date__title">Дата поездки</div>
      <div className="filters-date__input-box">
        <label htmlFor=""></label>
        <DatePicker 
          className="filters-date__input"
          selected={travelDate}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          onChange={(date) => setTravelDate(date)}
        />
      </div>
      <div className="filters-date__title">Дата возвращения</div>
      <div className="filters-date__input-box">
        <label htmlFor=""></label>
        <DatePicker 
          className="filters-date__input"
          selected={returnDate}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          onChange={(date) => setReturnDate(date)}
        />
      </div>
    </article>
  )
}
