import React, { useState } from 'react';
import InputForm from './inputForm';
import WeatherInfo from './weatherinfo';


function Weather() {
    // const [name,setName] = useState("")
    const [values, setValues] = useState({
        city: "",
        country: ""
    });

    const [weather, setWeather] = useState({})

    const [errors, setErrors] = useState({})

    const apiKey = "e362fb0d6bf9d40d93000a1f683013c2";

    const apiEndPoint = `https://api.openweathermap.org/data/2.5/weather?q=${values.city},${values.country}&appid=${apiKey}`;

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        if (values.city !== "" && values.country !== "") {
            const response = await fetch(apiEndPoint)
                .then(res => res.json())
                .then(response => response)
            // console.log(response)
            if (response.cod && response.cod == 404) {
                setErrors(response)
                setWeather({})
            } else {
                setWeather({ data: response })
                setErrors({})
            }
        } else {
            setErrors({
                message: "Field should not be empty"
            })
            setWeather({})
        }

    }

    return (
        <div className='container pt-3 ps-5 pe-5'>
            <h1 className='tex-center'>Weather App</h1>
            {/* justify-content-center */}
            <InputForm
                name="city"
                label="City"
                type="search"
                id="city"
                value={values.city}
                onChange={(e) => { handleChange(e) }}
            />

            <InputForm
                name="country"
                label="Country"
                type="search"
                id="country"
                value={values.country}
                onChange={(e) => { handleChange(e) }}
            />
            <button className='btn btn-secondary mt-3' onClick={(e) => { handleSubmit(e) }}>Submit</button>


            {
                weather.data &&
                <WeatherInfo
                    data={weather.data}
                />
            }

            {
                errors !== {} &&
                <>
                    <h1>{errors.message}</h1>
                </>
            }


        </div>
    );
}

export default Weather;