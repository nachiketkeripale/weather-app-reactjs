import React from 'react'

function DisplayWeather({data}) {
    const imageurl ="http://openweathermap.org/img/wn/"+"${data.weather[0].icon}"+".png";

    function convertTime(Timestamp) {
        const milliseconds = Timestamp * 1000;
        const dateObject = new Date(milliseconds);
        const dateString = dateObject.toLocaleTimeString();
        return dateString;
    }

    return (
    <div>
        <div>
            <div className='p-2 border border-black rounded-md bg-gray-200'>
                <div>
                    <p className='text-xl'>
                        {data.name},{data.sys.country}. Weather
                        <p className='text-sm'>As of {convertTime(data.dt)}</p>
                    </p>
                 </div>
                <div className='flex justify-center items-center gap-2 py-2'>
                    <h1 className='font-bold text-7xl'>{Math.floor(data?.main?.temp - 273.15)}<sup>o</sup></h1>
                    <div className='flex-col justify-center items-center text-center'>
                    <img className='bg-[length:200px]' src={imageurl} alt="icon"/>
                    <p>{data?.weather[0]?.main}</p>
                    
                    </div>
                </div>
                <div>
                <span>{data?.weather[0]?.description}</span>
                </div>
            </div>
            
            <div className='py-8'>
                <div >
                    <ol className='grid grid-rows-4 grid-flow-col gap-4 justify-around'>
                        
                        <div className='pb-2 flex gap-4 text-xl border-b border-dashed border-black'>
                            <p className='font-bold'>High/Low</p>
                            <p>{Math.floor(data?.main?.temp_min - 273.15)} | {Math.floor(data?.main?.temp_max - 273.15)}</p>
                        </div>

                        <div className='pb-2 flex gap-4 text-xl border-b border-dashed border-black'>
                            <p className='font-bold'>Humidity</p>
                            <p>{data?.main?.humidity}%</p>
                        </div>
                        
                        <div className='pb-2 flex gap-4 text-xl border-b border-dashed border-black'>
                            <p className='font-bold'>Pressure</p>
                            <p>{data?.main?.pressure} hPa</p>
                        </div>

                        <div className='pb-2 flex gap-4 text-xl border-b border-dashed border-black'>
                            <p className='font-bold'>Visibility</p>
                            <p>{data?.visibility/1000} km</p>
                        </div>

                        <div className='pb-2 flex gap-4 text-xl border-b border-dashed border-black'>
                            <p className='font-bold'>Wind</p>
                            <p>{data?.wind?.speed}/ Km/hr</p>
                        </div>

                        <div className='pb-2 flex gap-4 text-xl border-b border-dashed border-black'>
                            <p className='font-bold'>Wind Direction </p>
                            <p>{data?.wind?.deg} deg</p>
                        </div>
                        
                        <div className='pb-2 flex gap-4 text-xl border-b border-dashed border-black'>
                            <p className='font-bold'>Sunrise</p>
                            <p>{convertTime(data?.sys?.sunrise)}</p>
                        </div>

                        <div className='pb-2 flex gap-4 text-xl border-b border-dashed border-black'>
                            <p className='font-bold'>Sunset</p>
                            <p>{convertTime(data?.sys?.sunset)}</p>
                        </div>
                    </ol>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DisplayWeather