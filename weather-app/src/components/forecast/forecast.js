import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css';

const WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) =>{

    const dayInWeek = new Date().getDay();
    const forecastDays = WeekDays.slice(dayInWeek, WeekDays.length).concat(WeekDays.slice(0, dayInWeek));
    console.log("forecast days :- ", forecastDays);

    return(
        <div>
            <br/> <br/>
            <label className="title">Weekly Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) =>(
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                <label className="day">{forecastDays[idx]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="min-max">{Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                            <div className="daily-details-grid-item">
                                <label>Pressure</label>
                                <label>{item.main.pressure}Pa</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Humidity</label>
                                <label>{item.main.humidity}%</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Clouds</label>
                                <label>{item.clouds.all}</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Feels like</label>
                                <label>{item.main.feels_like}°C</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Sea Level</label>
                                <label>{item.main.sea_level}m</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Wind Speed</label>
                                <label>{item.wind.speed}m/s</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                ))}                
            </Accordion>
        </div>
    )
}

export default Forecast;