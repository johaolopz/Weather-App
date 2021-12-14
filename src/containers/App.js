//seetalert para personalizar alertas
import swal from 'sweetalert';

import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import '../styles/App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';

const apiKey = '3b54cd82b15fdca9207908255cfc5562';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            alphaCode: recurso.sys.country,
            flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Globe.svg'
          };
          autoExec();
          async function autoExec() {
            await fetch(`https://restcountries.com/v3.1/alpha/${ciudad.alphaCode}`)
                          .then(r2 => r2.json())
                          .then((recurso2) => {
                            ciudad.flag = recurso2[0].flags.svg;
                            setCities(oldCities => [...oldCities, ciudad]);
                          });
          }
        } else {
          swal("City not Found!", "Try again", "error");
        }
      });
  }

  
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      <Route
        path='/about'
        component={About}
      />
      <Route
        exact
        path='/'
        render={() => <Cards
          cities={cities}
          onClose={onClose}
        />
      }
      />
      <Route
        exact
        path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad
              city={onFilter(match.params.ciudadId)}/>}
      />
    </div>
  );
}

export default App;
