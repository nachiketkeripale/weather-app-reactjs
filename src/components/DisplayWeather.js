import React from 'react'

function DisplayWeather({data}) {
    const iconurl ="http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";

    function convertTime(Timestamp) {
        const milliseconds = Timestamp * 1000;
        const dateObject = new Date(milliseconds);
        const dateString = dateObject.toLocaleString();
        return dateString;
    }

    return (
    <div>
        <div>
            <div>
                <p>
                    {data.name},{data.sys.country}. Weather
                </p>
            </div>
            <div>
                <h1>{Math.floor(data?.main?.temp - 273.15)}</h1>
                <img src={iconurl} alt="icon"/>
                <span>{data?.weather[0]?.description}</span>
                <p>{data?.weather[0]?.main}</p>
            </div>
            <div>
                <p>Weather</p>
            </div>
            <div>
            <div>
                <ol>
                    <li>High/Low <span>{Math.floor(data?.main?.temp_min - 273.15)}|{Math.floor(data?.main?.temp_max - 273.15)}</span></li>
                    <li>Humidity <span>{data?.main?.humidity}%</span></li>
                    <li>Pressure <span>{data?.main?.pressure} hPa</span></li>
                    <li>Visibility<span>{data?.visibility/1000} km</span></li>
                </ol>
                <ol>
                    <li>Wind <span>{data?.wind?.speed}/ Km/hr</span></li>
                    <li>Wind Direction <span>{data?.wind?.deg} deg</span> </li>
                    <li>Sunrise <span>{convertTime(data?.sys?.sunrise)}</span></li>
                    <li>Sunset <span>{convertTime(data?.sys?.sunset)}</span></li>
                </ol>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DisplayWeather