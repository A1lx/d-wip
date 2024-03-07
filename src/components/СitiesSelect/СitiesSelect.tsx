import "./citiesSelect.css";
import swapIcon from "./img/swap-icon.svg";

export const СitiesSelect = () => {
  return (
    <>
      <h2 className="cities-select__title">Направление</h2>
      <div className="cities-select__inputs-box">
        <div className="cities-select__input-box">
          <label htmlFor="search-tickets-form"></label>
          <input 
            id="search-tickets-form"
            name="search-tickets-form"
            className="cities-select__input" 
            type="text"
            placeholder="Откуда"
            />
        </div>
        <button className="cities-select__swap-btn">
          <img src={swapIcon} alt="swap-icon"/>
        </button>
        <div className="cities-select__input-box">
          <label htmlFor="search-tickets-form"></label>
          <input 
            id="search-tickets-form" 
            name="search-tickets-form" 
            className="cities-select__input" 
            type="text"
            placeholder="Куда"
          />
        </div>
      </div>
    </>
  )
}
