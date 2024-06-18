import './WeatherForecast.css'

const WeatherIcon = (props) => {
    return (
        <>
            <img src={props.img} alt={props.imgAlt} />
        </>
    )
}

const WeatherData = (props) => {
    return (
        <>
            <h2>{props.day}</h2>
            <p><span>conditions: </span> {props.conditions}</p>
            <p><span>time: </span> {props.time}</p>
        </>
    )
}

const WeatherForceast = (props) => {
    return (
        <div className="weather">
            <WeatherIcon 
                img={props.img} 
                imgAlt={props.imgAlt} 
            />

            <WeatherData 
                day={props.day} 
                conditions={props.conditions} 
                time={props.conditions} 
            />
        </div>
    )
}

export default WeatherForceast;