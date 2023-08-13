import React, {  useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import BackGround from './components/BackGround'
import MappingComp from './components/MappingComp'

export default function App() {
  const [Search, setSearch] = useState('');
  const [Weather, setWeather] = useState([]);
  const [Country, setCountry] = useState('Egypt');


  useEffect(() => {

    const getWeatherAPI = async () => {

      try {
        let targetCountry = Country;

        // Check if the user entered Egypt and rewrite it to a fixed one
          if (Country.toLowerCase() === 'egypt') {
          targetCountry = 'Cairo';
          }

          const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=
          ${targetCountry}&units=metric&appid=5b4d62e08c9c6ec649fed20e88108cde`
          );



          if (!response.ok) {
          setWeather([]);
          window.alert('Please Type Country name Correctly,');


          } else {
          const data = await response.json();
          console.log(data);
          setWeather([data]);
          }
          
        } catch (error) {
        setWeather([]);
        window.alert(`An error while fetching the data 
        or heavy trafic on API please wait awhile then refresh the page`);
        }
        };

getWeatherAPI();
}, [Country]);





return (
    <main className='text-white'>
    <BackGround />

    <section className='absolute w-full h-full top-0'>

    <Header />


    <SearchBar
    SearchProp={Search}
    setSearchProp={setSearch}
    setCountryprop={setCountry}
/>


{Weather.map((item) => (
    <MappingComp
    key={item.id}
    name={item.name}
    country={item.sys.country}
    description={item.weather[0].description}
    icon={item.weather[0].icon}
    temp={item.main.temp}
    temp_min={item.main.temp_min}
    temp_max={item.main.temp_max}
    speed={item.wind.speed}
/>
))}



</section>
</main>
);
}

