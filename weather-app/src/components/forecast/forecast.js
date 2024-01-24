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
                            <GridItems labelName= "Pressure" labelValue={`${item.main.pressure}Pa`} />
                            <GridItems labelName= "Humidity" labelValue={`${item.main.humidity}%`} />
                            <GridItems labelName= "Clouds" labelValue={`${item.clouds.all}`} />
                            <GridItems labelName= "Feels like" labelValue={`${item.main.feels_like}°C`} />
                            <GridItems labelName= "Sea Level" labelValue={`${item.main.sea_level}m`} />
                            <GridItems labelName= "Wind Speed" labelValue={`${item.wind.speed}m/s`} />
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                ))}                
            </Accordion>
        </div>
    )
}

const GridItems = ({labelValue, labelName}) =>{
    return(
        <div className="daily-details-grid-item">
            <label>{labelName}</label>
            <label>{labelValue}</label>
        </div>
    )
}
export default Forecast;