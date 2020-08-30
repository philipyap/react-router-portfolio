import React, {useState} from 'react'
import axios from 'axios'
import WeatherResult from './WeatherResult'

function Weather(){
    const [zip, setZip] = useState('')
    const [weather, setWeather] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        //console.log(zip)
        let url= `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`
        axios.get(url)
        .then(res=>{
            //console.log(res.data)
            setWeather(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div>
            <h1>Weather</h1>
            {weather ? <WeatherResult weather={weather}/>: null}
            <p>Enter your zipcode in your area</p>
            <form onSubmit={handleSubmit}>
                <label HTMLFor="zip">Zipcode: </label>
                <input type="text" id="zip" onChange={e=> setZip(e.target.value)}/>
                <input type="submit" value="Find Weather" />
            </form>
        </div>
    )
}
export default Weather