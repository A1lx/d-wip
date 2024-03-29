import React from "react";
import "./timeFilters.css";
import { TimeFilterSliders } from "./TimeFilterSliders";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import thereIcon from "./img/there-icon.svg";
import backIcon from "./img/back-icon.svg";

export const TimeFilters = () => {
  const [thereOpen, setThereOpen] = React.useState(false);
  const handleThereToggle = () => {
    setThereOpen(!thereOpen);
  };

  const [backOpen, setbackOpen] = React.useState(false);
  const handleBackToggle = () => {
    setbackOpen(!backOpen);
  };

  const closeIcon = 
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="18" height="18" rx="4" stroke="#C4C4C4" stroke-width="2"/>
      <line x1="5.61523" y1="9.76929" x2="14.3845" y2="9.76929" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  const openIcon = 
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.22204 4.20293L9.22204 9.18841L4.23656 9.18841C3.7728 9.18841 3.42497 9.53623 3.42497 10C3.42497 10.4638 3.7728 10.8116 4.23656 10.8116L9.22204 10.8116L9.22204 15.7971C9.22204 16.2608 9.56987 16.6087 9.97566 16.5507L10.0916 16.5507C10.5554 16.5507 10.9032 16.2029 10.8452 15.7971V10.8116H15.7148C16.1785 10.8116 16.5264 10.4638 16.5264 10C16.5264 9.53623 16.1785 9.18841 15.7148 9.18841H10.8452V4.20293C10.8452 3.73917 10.4974 3.39134 10.0916 3.44931L9.97566 3.44931C9.5119 3.44931 9.16407 3.79714 9.22204 4.20293Z" fill="white"/>
      <rect x="1" y="1" width="18" height="18" rx="4" stroke="white" stroke-width="2"/>
    </svg>

  return (
    <>
      <article className="time-filters">
        <List sx={{ color: "#FFFFFF" }}>
          <ListItemButton onClick={handleThereToggle}>
            <img src={thereIcon} alt="иконка направления"/>
            <ListItemText primary="Туда" sx={{ "& .MuiTypography-root": {fontSize: "30px", marginLeft: "12px"}}}/>
            {thereOpen ? closeIcon : openIcon }
          </ListItemButton>
          <Collapse in={thereOpen} timeout="auto" unmountOnExit>
            <TimeFilterSliders/>
          </Collapse>
          <ListItemButton onClick={handleBackToggle}>
            <img src={backIcon} alt="иконка обратного направления"/>
            <ListItemText primary="Обратно" sx={{ "& .MuiTypography-root": {fontSize: "30px", marginLeft: "12px"}}}/>
            {backOpen ? closeIcon : openIcon }
          </ListItemButton>
          <Collapse in={backOpen} timeout="auto" unmountOnExit>
            <TimeFilterSliders/>
          </Collapse>
        </List>
      </article>
    </>
  )
}