import { Navigation } from "./Navigation";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#" className="logo__link">Лого</a>
      </div>
      <Navigation/>
    </header>
  )
}