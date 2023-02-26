import React from 'react';

function WeatherInfo({ data }) {
    return (
        <div className='card mt-3'>
            {/* mt-3 p-3     */}
            {console.log(data)}
            <h2 className='card-header text-center'>{Math.round(data.main.temp - 273)}&#8451; in {data.name}, {data.sys.country}</h2>

            <div className="container text-center">
                <div className='row align-items-center'>

                    <div className='col-6  border-bottom border-end'>
                        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
                    </div>

                    <div className='col-6  border-bottom p-3'>Weather: {data.weather[0].description}</div>

                </div >

                <div className='row align-items-center'>

                    <div className='col-6  border-bottom border-end p-3'>Feels Like: {Math.round(data.main.feels_like - 273)}</div>

                    <div className='col-6  border-bottom p-3'>Humidity: {data.main.humidity}</div>

                </div >

                <div className='row align-items-center'>

                    <div className='col-6  border-bottom border-end p-3'>Wind Speed: {data.wind.speed}</div>
                    <div className='col-6  border-bottom p-3'>Pressure: {data.main.pressure}</div>

                </div >

            </div>

        </div>
    );
}

export default WeatherInfo;