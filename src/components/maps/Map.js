import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import "./Map.css"

export default function Map({ location, zoomLevel }) {
  return (
    <>
       <div className="map">
         {/*titre de la carte*/}
    <h2 className="map-h2">Carte Geographique</h2>
    <div className="google-map">
       {/*composent recupere dans le packege google-map-react */}
      <GoogleMapReact
      /*attribut bootstrapURLKeys qui prend comme valeur la cle de
      l'api google maps que j'ais definit dans le fiche .env
      les autres prend comment valeur les coordonnees geographique et le niveau de Zoom par defaut 
      definit dans le props*/
        bootstrapURLKeys={{ key:process.env.API_MAPS }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
         {/*composent pour le Marqueur*/}
        <LocationPin
        //lat et lng prend comment les coordonnees geographique et text le nom du lieu 
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
    </>
  )
}
