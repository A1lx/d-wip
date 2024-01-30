import lastTicketIcons from "./img/last-ticket-icons.svg"

export const LastTickets = () => {
  return (
    <div className="last-tickets">
      <div className="last-tickets__title">ПОСЛЕДНИЕ БИЛЕТЫ</div>
      <div className="last-ticket">
        <div className="last-ticket__cities">
          <span>Санкт-Петербург</span>
          <span>Самара</span>
        </div>
        <div className="last-ticket__stations">
          <span className="last-ticket__station">Курский вокзал</span>
          <span className="last-ticket__station">Московский вокзал</span>
        </div>
        <div className="last-ticket__info">
          <img src={lastTicketIcons} alt="last-ticket-icons"/>
          <div>
            <span className="last-ticket__from">от </span>
            <span className="last-ticket__price">3 800</span>
            <span className="last-ticket__currency">₽</span>
          </div>
        </div>
      </div>
    </div>
  )
}