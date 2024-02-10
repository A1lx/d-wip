import "./filtersPrice.css";
import * as React from 'react';
import Slider from '@mui/material/Slider';

export const FiltersPrice = () => {
  const [value, setValue] = React.useState<number[]>([1920, 7000]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="filters-price">
      <span className="filters-price__title">Стоимость</span>
      <div className="filters-price__text">
        <span>от</span>
        <span>до</span>
      </div>
      <div className="filters-price__slider-box">
        <Slider
          getAriaLabel={() => 'price range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          step={10}
          min={1920}
          max={7000}
          sx={{ 
            color: "#FFA800", 
            height: 19,
            padding: 0,
            '& .MuiSlider-thumb': { width: 24, height: 24, color: "#fff" },
            '& .MuiSlider-valueLabelOpen': { backgroundColor: "transparent", top: 55, fontSize: 16 }
          }}
        />
      </div>
    </div>
  )
}

/*
<span class="MuiSlider-valueLabelOpen MuiSlider-valueLabel css-7d61z1-MuiSlider-valueLabel" aria-hidden="true"><span class="MuiSlider-valueLabelCircle"><span class="MuiSlider-valueLabelLabel">3260</span></span></span>
*/