import "./sidebarFilterForm.css";
import { FiltersDate } from "./FiltersDate/FiltersDate";
import { FiltersSwitches } from "./FiltersSwitches/FiltersSwitches";
import { FiltersPrice } from "./FiltersPrice/FiltersPrice";
import { TimeFilters } from "./TimeFilters/TimeFilters";


export const SidebarFilterForm = () => {
  return (
    <form className="filters-form">
      <FiltersDate/>
      <FiltersSwitches/>
      <FiltersPrice/>
      <TimeFilters/>
    </form>
  )
}