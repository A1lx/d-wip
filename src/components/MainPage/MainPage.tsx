import { AboutService } from "./AboutService";
import { Advantages } from "./Advantages/Advantages";
import { Reviews } from "./Reviews/Reviews";
import "./mainPage.css";

export const MainPage = () => {
  return (
    <main className="main-page">
      <AboutService/>
      <Advantages/>
      <Reviews/>
    </main>
  )
}