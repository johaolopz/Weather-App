import React from 'react';
import '../styles/About.css';
import profile_photo from '../img/profile_photo_Johao.jpg';

export default function About() {
return (
    <div className='mainContainer'>
        <div className='aboutContainer'>
            <div className='headAbout'>
                <div className='divPhoto'>
                    <img id='profilePhoto' src={profile_photo} alt='not found'/>
                </div>
                <div className='divDetailContainer'>
                    <h3>Johao López Mayorga</h3>
                    <p>Aplicación para consumir recursos
                        del clima buscando por el nombre
                        de la ciudad.
                    </p>
                </div>
            </div>
            <div className='divSocial'>
                <div className='facebook'>
                    <a href='https:\\www.facebook.com'>
                        <img className='redes' src='https://norfipc.com/img/logos/logotipo-oficial-facebook-2014.png' alt='not found' />
                    </a>
                </div>
                <div className='twitter'>
                    <a href='https:\\www.twitter.com'>
                        <img className='redes' src='https://i.pinimg.com/originals/f3/6f/51/f36f511b261596a2debe85d844bb1b87.png' alt='not found' />
                    </a>
                </div>
                <div className='linkedin'>
                    <a href='https:\\www.linkedin.com'>
                        <img className='redes' src='https://copyblogger.com/cdn-origin/images/linkedin.png' alt='not found' />
                    </a>
                </div>
            </div>
        </div>
    </div>
);
}