import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider({priceRange}) {
    const [value, setValue] = useState([priceRange.min, priceRange.max]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <p>Ціна</p>
            <div className='flex items-center'>
                <p className='pr-5'>{priceRange.min | 0}</p>
                <Box>
                    <Slider
                        sx={{width: 200,
                            '& .MuiSlider-thumb': {borderRadius: '3px', color: '#DB4F35'},
                            '& .MuiSlider-track' : {color: '#ffd8d0'},
                            '& .MuiSlider-rail' : {color: 'lightGray'}}}
                        getAriaLabel={() => 'Product price'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={priceRange.min | 0}
                        max={priceRange.max | 500}
                        step={500}
                    />
                </Box>
                <p className='pl-5'>{priceRange.max | 500}</p>
            </div>
        </div>
    );
}