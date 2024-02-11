import swapIcon from "./img/swap-icon.svg";

export const СitiesSelect = () => {
  return (
    <>
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
    </>
  )
}
