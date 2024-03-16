import Slider from '@mui/material/Slider';
import React from 'react';

export const TimeFilterSliders = () => {
  const [departureTime, setDepartureTime] = React.useState<number[]>([0, 24]);
  const handleChangeDepartureTime = (event: Event, newValue: number | number[]) => {
    setDepartureTime(newValue as number[]);
  };

  const [arrivalTime, setArrivalTime] = React.useState<number[]>([0, 100]);
  const handleChangeArrivalTime = (event: Event, newValue: number | number[]) => {
    setArrivalTime(newValue as number[]);
  };

  function valueLabelFormat(value: number) {
    return `${value}:00`;
  }

  return (
    <div className="time-filter-sliders__box">
      <div className="time-filter-sliders">
        <span className="time-filter-sliders__title">Время отбытия</span>
        <div className="time-filter-sliders__slider-box">
          <Slider
            getAriaLabel={() => 'price range'}
            value={departureTime}
            onChange={handleChangeDepartureTime}
            valueLabelDisplay="on"
            step={1}
            min={0}
            max={24}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            sx={{ 
              color: "#FFA800", 
              height: 10,
              width: "85%",
              padding: 0,
              '& .MuiSlider-thumb': { width: 18, height: 18, color: "#fff" },
              '& .MuiSlider-valueLabelOpen': { backgroundColor: "transparent", top: 55, fontSize: 18 }
            }}
          />
        </div>
      </div>
      <div className="time-filter-sliders">
        <span className="time-filter-sliders__title time-filter-sliders__title_end">Время прибытыя</span>
        <div className="time-filter-sliders__slider-box">
          <Slider
            getAriaLabel={() => 'price range'}
            value={arrivalTime}
            onChange={handleChangeArrivalTime}
            valueLabelDisplay="on"
            step={1}
            min={0}
            max={24}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            sx={{ 
              color: "#FFA800", 
              height: 10,
              width: "85%",
              padding: 0,
              '& .MuiSlider-thumb': { width: 18, height: 18, color: "#fff" },
              '& .MuiSlider-valueLabelOpen': { backgroundColor: "transparent", top: 55, fontSize: 18 }
            }}
          />
        </div>
      </div>
    </div>
  )
}
