import "./current_weather.css";

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city_name">{data.city}</p>
                    <p className="weather_description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <Details label= "Feels like" value={`${Math.round(data.main.feels_like)}°C`} />
                    <Details label= "Humidity" value={`${Math.round(data.main.humidity)}%`} />
                    <Details label= "wind" value={`${data.wind.speed}m/s`} />
                    <Details label= "latitude" value={`${data.coord.lat}° N`} />
                    <Details label= "longitude" value={`${data.coord.lon}° E`} />
                </div>
            </div>
        </div>
    )
}

const Details = ({label, value}) =>{
    return(
        <div className="parameter-row">
            <span className="parameter-label">{label}</span>
            <span className="parameter-value">{value}</span>
        </div>
    )
}

export default CurrentWeather;