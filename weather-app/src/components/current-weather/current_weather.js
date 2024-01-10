import "./current_weather.css";

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city_name">Dehradun</p>
                    <p className="weather_description">Cloudy</p>
                </div>
                <img alt="weather" className="weather-icon" src="weather-icons/sun.png" />
            </div>
            
            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">22°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">15%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">wind</span>
                        <span className="parameter-value">7km/h</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">precipitatoin</span>
                        <span className="parameter-value">0.1%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;