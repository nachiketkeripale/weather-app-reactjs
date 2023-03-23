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
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${contry}&appid=${process.env.REACT_APP_APP_ID}`)
                setresult(res.data);
            } 
            } catch (error) {
                console.log(error);
            }
    }

  return (
    <div className='flex justify-center h-screen'>
        <div className='my-5 p-10 outline-dashed rounded-md'>
        <div>
            <h2 className='text-center text-4xl'>WEATHER APP</h2>
        </div>
        <div className='m-5'>
            <div className='flex justify-around gap-5'>
                <input className='text-center border-b border-dashed border-black' type="text" name="cityname" placeholder='Enter City Name' onChange={cityHandleChange}   />
                <input className='text-center border-b border-dashed border-black' type="text" name="countryname" placeholder='Enter Country Name' onChange={countryHandleChange}/>
                <input className='border-2 py-2 px-4 rounded-md border-black text-white bg-indigo-800' type="button" value="Submit" onClick={getWeatherData}/>
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
         
    </div>
  )
}

export default Weather