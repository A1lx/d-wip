import "./sidebar.css";
import { LastTickets } from "./LastTickets";

export const SideBar = () => {
  return (
    <section className="sidebar">
      <form className="filters-form"></form>
      <LastTickets/>
    </section>
  )
}