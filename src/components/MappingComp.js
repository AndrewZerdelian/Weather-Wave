import React from 'react';
import Wind from '../Assets/WindDirection.png';

export default function MappingComp({ name, country, description , icon, temp, temp_min, temp_max, speed }) {
  return (
    <div className='p-6 w-80 mx-auto flex-row text-center justify-center text-gray-300 shadow-2xl hover:shadow-2xl rounded-2xl'>
      <h1 className='font-extrabold text-5xl'>{name}</h1>
      <h1 className='mt-4 font-bold text-2xl'>{country}</h1>
      <h1 className='mt-4 font-bold text-3xl'>{description}</h1>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='Icon' className='mx-auto w-40' />

      <h1 className='mt-2 font-bold text-5xl'>{temp} °C</h1>
      <h1 className='mt-2 font-bold'>{`Min: ${temp_min} °C / Max: ${temp_max} °C`}</h1>
      <p className='mt-2 font-bold'>Wind{speed}Km/h</p>

      <img src={Wind} alt='windy' className='w-8 mx-auto' />
    </div>
  );
}

//// https://openweathermap.org/img/wn/10d@2x.png