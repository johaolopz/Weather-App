import React from "react";
import { Link } from "react-router-dom";
import '../styles/Ciudad.css';

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperature: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Amount of clouds: {city.clouds}</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Longitude: {city.longitud}º</div>
                    </div>
                    <br />
                    <Link to='/Weather-App/'>
                        <button className='botonHome'>Home</button>
                    </Link>
            </div>
        </div>
    )
}