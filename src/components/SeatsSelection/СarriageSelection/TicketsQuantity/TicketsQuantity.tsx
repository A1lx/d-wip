export const TicketsQuantity = () => {
  return (
    <article className="tickets-quantity">
      <span className="tickets-quantity__title">Количество билетов</span>
      <div className="tickets-quantity__by-ages">
        <div className="tickets-quantity__element-box tickets-quantity__element-box_gray-bgc">
          <div className="tickets-quantity__input-box">
            <input type="text" className="tickets-quantity__input" value="Взрослых: 2"/>
            <span>Можно добавить еще 3 пассажиров </span>
          </div>
        </div>
        <div className="tickets-quantity__element-box tickets-quantity__element-box_orange-border">
          <div className="tickets-quantity__input-box">
            <input type="text" className="tickets-quantity__input" value="Детских: 1"/>
            <span className="tickets-quantity__text tickets-quantity__text_gray">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</span>
          </div>
        </div>
        <div className="tickets-quantity__element-box">
          <div className="tickets-quantity__input-box">
            <input type="text" className="tickets-quantity__input" value="Детских «без места»: 0"/>
          </div>
        </div>
      </div>
    </article>
  )
}
