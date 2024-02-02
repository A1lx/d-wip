import reviewPortF from "./img/review-port-1.png";
import reviewPortS from "./img/review-port-2.png";

export const ReviewsItem = () => {
  return (
    <div className="reviews-box">
      <div className="review">
        <img src={reviewPortF} alt="review-port"/>
        <div className="review-description">
          <span className="review-description-title">Екатерина Вальнова</span>
          <span className="review-description-text">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="13" 
              height="10" 
              viewBox="0 0 13 10" 
              fill="none"
              className="quotes quotes-left"
            >
              <path 
                d="M4.11523 0.542969L6.29492 1.89648C5.22852 3.45508 4.67773 5.07812 4.64258 6.76562V9.4375H0.898438V7.01172C0.910156 5.88672 1.21484 4.71484 1.8125 3.49609C2.42188 2.26562 3.18945 1.28125 4.11523 0.542969ZM10.0215 0.542969L12.2012 1.89648C11.1348 3.45508 10.584 5.07812 10.5488 6.76562V9.4375H6.80469V7.01172C6.81641 5.88672 7.12109 4.71484 7.71875 3.49609C8.32812 2.26562 9.0957 1.28125 10.0215 0.542969Z" 
                fill="#928F94"
              />
            </svg>
            Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="12" 
              height="9" 
              viewBox="0 0 12 9" 
              fill="none"
              className="quotes quotes-right"
            >
              <path 
                d="M2.30469 9L0.125 7.64648C1.17969 6.11133 1.72461 4.48828 1.75977 2.77734V0H5.50391V2.42578C5.50391 3.63281 5.19336 4.85156 4.57227 6.08203C3.96289 7.30078 3.20703 8.27344 2.30469 9ZM8.17578 9L5.99609 7.64648C7.05078 6.11133 7.5957 4.48828 7.63086 2.77734V0H11.375V2.42578C11.375 3.63281 11.0645 4.85156 10.4434 6.08203C9.83398 7.30078 9.07812 8.27344 8.17578 9Z" 
                fill="#928F94"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="review">
        <img src={reviewPortS} alt="review-port"/>
        <div className="review-description">
          <span className="review-description-title">Евгений Стрыкало</span>
          <span className="review-description-text">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="13" 
              height="10" 
              viewBox="0 0 13 10" 
              fill="none"
              className="quotes quotes-left"
            >
              <path 
                d="M4.11523 0.542969L6.29492 1.89648C5.22852 3.45508 4.67773 5.07812 4.64258 6.76562V9.4375H0.898438V7.01172C0.910156 5.88672 1.21484 4.71484 1.8125 3.49609C2.42188 2.26562 3.18945 1.28125 4.11523 0.542969ZM10.0215 0.542969L12.2012 1.89648C11.1348 3.45508 10.584 5.07812 10.5488 6.76562V9.4375H6.80469V7.01172C6.81641 5.88672 7.12109 4.71484 7.71875 3.49609C8.32812 2.26562 9.0957 1.28125 10.0215 0.542969Z" 
                fill="#928F94"
              />
            </svg>
            СМС-сопровождение до посадки<br/>Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="12" 
              height="9" 
              viewBox="0 0 12 9" 
              fill="none"
              className="quotes quotes-right"
            >
              <path 
                d="M2.30469 9L0.125 7.64648C1.17969 6.11133 1.72461 4.48828 1.75977 2.77734V0H5.50391V2.42578C5.50391 3.63281 5.19336 4.85156 4.57227 6.08203C3.96289 7.30078 3.20703 8.27344 2.30469 9ZM8.17578 9L5.99609 7.64648C7.05078 6.11133 7.5957 4.48828 7.63086 2.77734V0H11.375V2.42578C11.375 3.63281 11.0645 4.85156 10.4434 6.08203C9.83398 7.30078 9.07812 8.27344 8.17578 9Z" 
                fill="#928F94"
              />
            </svg>
          </span>
        </div>
      </div>
  </div>
  )
}
