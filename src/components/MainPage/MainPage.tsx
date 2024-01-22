import { AboutService } from "./AboutService";
import { Advantages } from "./Advantages/Advantages";
import { Reviews } from "./Reviews/Reviews";
import { SearchTickets } from "./SearchTickets/SearchTickets";
import "./mainPage.css";

export const MainPage = () => {
  return (
    <main className="main-page">
      <div className="banner">
        <div className="banner__title">
          <div>Вся жизнь -</div>
          <div className="banner__title-bold">путешествие!</div>
        </div>
      </div>
      <SearchTickets/>
      <AboutService/>
      <Advantages/>
      <Reviews/>
    </main>
  )
}