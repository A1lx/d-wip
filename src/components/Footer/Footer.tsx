import "./footer.css";
import contactsIcon1 from "./img/contacts-icon-1.svg";
import contactsIcon2 from "./img/contacts-icon-2.svg";
import contactsIcon3 from "./img/contacts-icon-3.svg";
import contactsIcon4 from "./img/contacts-icon-4.svg";
import subscribeIcon1 from "./img/subscribe-icon-1.svg";
import subscribeIcon2 from "./img/subscribe-icon-2.svg";
import subscribeIcon3 from "./img/subscribe-icon-3.svg";
import subscribeIcon4 from "./img/subscribe-icon-4.svg";
import subscribeIcon5 from "./img/subscribe-icon-5.svg";
import iconUp from "./img/icon-up.svg"

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__info-box">
        <div className="contacts">
          <div className="footer-title">Свяжитесь с нами</div>
          <div className="contact">
            <img src={contactsIcon1} alt="contacts-icon" className="contact-icon"/>
            8 (800) 000 00 00
          </div>
          <div className="contact">
            <img src={contactsIcon2} alt="contacts-icon" className="contact-icon"/>
            inbox@mail.ru
          </div>
          <div className="contact">
            <img src={contactsIcon3} alt="contacts-icon" className="contact-icon"/>
            tu.train.tickets
          </div>
          <div className="contact">
            <img src={contactsIcon4} alt="contacts-icon" className="contact-icon"/>
            г. Москва <br/>ул. Московская 27-35 555 555
          </div>
        </div>
        <div className="subscribe">
          <div className="footer-title">Подписка</div>
          <div>Будьте в курсе событий</div>
          <form className="subscribe__form" autoComplete="off">
            <div>
              <label htmlFor="subscribe-form"></label>
              <input id="subscribe-form" name="subscribe-form" className="subscribe__form-input" type="email" placeholder="e-mail"/>
            </div>
            <button className="subscribe__form-btn" type="submit">ОТПРАВИТЬ</button>
          </form>
          <div className="footer-title">Подписывайтесь на нас</div>
          <div className="subscribe__icons-box">
            <img src={subscribeIcon1} alt="subscribe-icon"/>
            <img src={subscribeIcon2} alt="subscribe-icon"/>
            <img src={subscribeIcon3} alt="subscribe-icon"/>
            <img src={subscribeIcon4} alt="subscribe-icon"/>
            <img src={subscribeIcon5} alt="subscribe-icon"/>
          </div>
        </div>
      </div>
      <div className="footer__line"></div>
      <div className="footer__copyright">
        <div className="footer__logo">
          <a href="#" className="footer__logo-link">Лого</a>
        </div>
        <div>
          <a href="#">
            <img src={iconUp} alt="icon-up"/>
          </a>
        </div>
        <span className="footer__copyright-text">2024 WEB</span>
      </div>
    </footer>
  )
}