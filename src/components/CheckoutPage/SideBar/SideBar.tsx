import "./sidebar.css";
import { LastTickets } from "./LastTickets";
import { SidebarFilterForm } from "../../forms/SidebarFilterForm/SidebarFilterForm";

export const SideBar = () => {
  return (
    <section className="sidebar">
      <SidebarFilterForm/>
      <LastTickets/>
    </section>
  )
}