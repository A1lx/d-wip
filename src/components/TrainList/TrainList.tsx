import "./trainList.css";
import { TrainItem } from "./TrainItem/TrainItem";
import Pagination from "@mui/material/Pagination";

export const TrainList = () => {
  return (
    <section className="train-list">
      <div className="train-list__info-box">
        <span>Найдено 20</span>
        <div>
          <span className="train-list__info-sort">сортировать по:  </span>

          <select name="" id="" className="train-list__info-select">
            <option value="time">времени</option>
            <option value="price">стоимости</option>
            <option value="duration">длительности</option>
          </select>
          <span className="train-list__info-show">показывать по:  </span>
          <button className="train-list__info-show-btn">5</button>
          <button className="train-list__info-show-btn">10</button>
          <button className="train-list__info-show-btn">20</button>
        </div>
      </div>
      <TrainItem/>
      <div className="train-list__pagination-box">
        <Pagination
          count={3} 
          variant="outlined" 
          shape="rounded"
          className="train-list__pagination"
          sx={{
            '& .MuiButtonBase-root': {
              height: 75,
              width: 85,
              margin: "0 0 0 35px",
              fontSize: "30px",
              fontWeight: 700,
              color: "#928F94",
            },
            '& .MuiButtonBase-root:hover': {
              backgroundColor: "transparent",
              color: "#FFA800",
              border: "2px solid #FFA800"
            },
            '& .MuiButtonBase-root.Mui-selected': {
              backgroundColor: "#FFA800",
              color: "#fff",
              border: "none"
            },
            '& .MuiButtonBase-root.Mui-selected:hover': {
              backgroundColor: "#FFA800",
              color: "#fff",
              border: "none"
            },
          }}
        />
      </div>
    </section>
  )
}
