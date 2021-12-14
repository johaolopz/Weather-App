import React from 'react';
import '../styles/Card.css';
import {Link} from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id, flag}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button id='botonX' onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <Link className='anchorTitle' to={`/ciudad/${id}`} >
          <div className="card-body">
            <img className="iconoBandera" src={flag} width="60" height="40" alt="" />
              <h5 className="card-title">{name}</h5>
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <p>Min</p>
                <p>{min}°</p>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <p>Max</p>
                <p>{max}°</p>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <img className="iconoClima" src={"https://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
};
