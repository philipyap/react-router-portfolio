import React from 'react'

function WeatherResult(props) {
    return(
        <div>
            <h4>Weather for {props.weather.name}</h4>
            <p>Currently: {(props.weather.main.temp - 273.15) * 9/5 + 32} F</p>
            <p>High: {props.weather.main.temp_max}</p>
            <p>Low: {props.weather.main.temp_min}</p>
        </div>
    )
}
export default WeatherResult