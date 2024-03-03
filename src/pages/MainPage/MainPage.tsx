import { AboutService } from "../../components/AboutService/AboutService";
import { Advantages } from "../../components/Advantages/Advantages";
import { Reviews } from "../../components/Reviews/Reviews";
import { SearchTicketsForm } from "../../components/SearchTicketsForm/SearchTicketsForm";
import "./mainPage.css";

export const MainPage = () => {
  return (
    <main className="main-page">
      <article className="banner">
        <div className="banner__title">
          <div>Вся жизнь -</div>
          <div className="banner__title-bold">путешествие!</div>
        </div>
        <SearchTicketsForm/>
      </article>
      <AboutService/>
      <Advantages/>
      <Reviews/>
    </main>
  )
}