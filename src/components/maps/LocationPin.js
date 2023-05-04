import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import '../maps/Location.css'


export default function LocationPin({text}) {
  return (
    <>
      <div className="pin">
         {/*composent composent recupere dans le packege @iconify/react */}
       <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
    </>
  )
}

