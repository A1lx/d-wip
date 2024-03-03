import "./aboutService.css";

export const AboutService = () => {
  return (
    <section id="about" className="about-service">
      <h2 className="about-service__title">О НАС</h2>
      <div className="about-service__description">
        <div>
          <p className="about-service__description-text">
            Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем 
            все больше людей заказывают жд билеты через интернет.
          </p>
          <p className="about-service__description-text">
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
            Мы расскажем о преимуществах заказа через интернет.
          </p>
          <p className="about-service__description-text about-service__description-text_bold">
            Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
            Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
          </p>
        </div>
      </div>
    </section>
  )
}