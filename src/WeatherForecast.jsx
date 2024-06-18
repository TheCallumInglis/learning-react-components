import './WeatherForecast.css'

const WeatherIcon = (props) => {
    return (
        <img src={props.img} alt={props.imgAlt} />
    )
}

const WeatherForceast = (props) => {
    return (
        <div className="weather">
            <h2>Day of the Week</h2>
            <img src={props.img} alt={props.imgAlt} />
            <WeatherIcon src={props.img} alt={props.imgAlt} />
            <p><span>conditions: </span> {props.conditions}</p>
            <p><span>time: </span> {props.time}</p>
        </div>
    )
}

export default WeatherForceast;