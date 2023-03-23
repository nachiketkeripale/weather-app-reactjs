import axios from 'axios';
import React, {useState} from 'react'
import DisplayWeather from './DisplayWeather'

function Weather() {
const [result,setresult] = useState();
const [city,setCity] = useState();
const [contry,setCountry] = useState();


function cityHandleChange(event) {
        setCity(event.target.value);
}

function countryHandleChange(event) {
        setCountry(event.target.value);
}

const getWeatherData = async (e) =>
    {
        e.preventDefault();
        try {

            if(city ==='' && contry ===''){
                console.log('Enter correct City and Country Name');
            }
            else {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${contry}&appid=1362926758b55ba5dc15d1c7760a326d`)
                setresult(res.data);
            } 
            } catch (error) {
                console.log(error);
            }
    }

  return (
    <div>
        <div>
            <h2>WEATHER APP</h2>
        </div>
        <div>
            <div>
                <input type="text" name="cityname" placeholder='Enter City Name' onChange={cityHandleChange}   />
                <input type="text" name="countryname" placeholder='Enter Country Name' onChange={countryHandleChange}/>
                <input type="button" value="Submit" onClick={getWeatherData}/>
            </div>
        </div> 
        
        {
            result !== undefined ? 
            <div>
            <DisplayWeather data={result}/> 
            </div> : 
            null
        }  
    </div>
  )
}

export default Weather