import React from 'react'
import { useState } from 'react'
import IntroSection from './components/intro/Intro'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

import './App.css'
import Map from './components/maps/Map'
import Form from './components/form/Form'

function App() {
  //un stat pour stock les valeurs des coordonnes geographique
  const [Location, setLocation] = useState({ address: "Dakar", lat: 14.693425, lng: -17.447938, })

 //function pour recupere les valleurs du form
  function donnee(elm){
    setLocation({address:elm.address, lat: elm.lat, lng: elm.lng});
}
  return (
    <div className="App">
      {/*composent pour l'introduction */}
      <IntroSection />
      <div className="contact-section">
      {/*composent pour le formulaire */}
      <Form props={donnee} />
       {/*composent pour le Google Maps */}
      <Map location={Location} zoomLevel={13} />
    </div>
     {/*composent pour la descripsion des coordonnees geographique */}
      <DisclaimerSection />
       {/*composent pour le footer */}
      <FooterSection />
    </div>
  )
}

export default App
