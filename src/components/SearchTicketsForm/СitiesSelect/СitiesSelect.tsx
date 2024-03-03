import swapIcon from "./img/swap-icon.svg";

export const СitiesSelect = () => {
  return (
    <>
      <span>Направление</span>
      <div className="search-tickets-form__inputs-box search-tickets-form__inputs-box_direction">
        <div className="search-tickets-form__input-box">
          <label htmlFor="search-tickets-form"></label>
          <input 
            id="search-tickets-form"
            name="search-tickets-form"
            className="search-tickets-form__input" 
            type="text"
            placeholder="Откуда"
            />
        </div>
        <img src={swapIcon} alt="swap-icon"/>
        <div className="search-tickets-form__input-box">
          <label htmlFor="search-tickets-form"></label>
          <input 
            id="search-tickets-form" 
            name="search-tickets-form" 
            className="search-tickets-form__input" 
            type="text"
            placeholder="Куда"
          />
        </div>
      </div>
    </>
  )
}
