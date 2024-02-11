import DatePicker from "react-datepicker";
import ru from 'date-fns/locale/ru';
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { useState } from "react";

registerLocale('ru', ru);
setDefaultLocale('ru');

export const DatesSelect = () => {
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();

  return (
    <>
      <span>Дата</span>
      <div className="search-tickets__form-block search-tickets__form-block_date">
        <div>
          <label htmlFor="search-tickets-form"></label>
          <DatePicker 
            className="search-tickets__form-input"
            calendarClassName="date-picker__calendar"
            minDate={new Date()}
            id="search-tickets-form"
            name="search-tickets-form"
            selected={startDate}
            placeholderText="ДД/ММ/ГГ"
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setStartDate(date)}
            />
        </div>
        <div>
          <label htmlFor="search-tickets-form"></label>
          <DatePicker 
            className="search-tickets__form-input"
            calendarClassName="date-picker__calendar"
            minDate={new Date()}
            id="search-tickets-form"
            name="search-tickets-form"
            selected={endDate}
            placeholderText="ДД/ММ/ГГ"
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setEndDate(date)}
            />
        </div>
      </div>
    </>
  )
}
