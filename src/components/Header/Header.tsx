import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SearchTickets } from "./SearchTickets";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <Logo/>
      <Navigation/>
      <div className="header__title-box">
        <span className="header__title">Вся жизнь -</span>
        <span className="header__title header__title_bold">путешествие!</span>
      </div>
      <SearchTickets/>
    </header>
  )
}