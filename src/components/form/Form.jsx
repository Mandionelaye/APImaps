import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'

import './form.css'


const Form = ({props}) =>{
  //definition des stats pour stocke les valeurs du formulaire
const [lieu, setLieu]= useState();
const [latitude, setLatitude] = useState();
const [longitude, setLongitude] = useState();

//definition des fonctions pour recupere les valeurs saisi dans le formulaire avec l'envenement onChange
function changeLieu(e){setLieu(e.target.value)} 
function changelatitude(e){setLatitude(e.target.value)}
function changelongitude(e){setLongitude(e.target.value)}

/*definition d'un tableau d'objet pour les valeurs des types inputs, des labels, 
des placeholder et des evenement onChange qui prend l'une des functions definit en haut*/  
  const formInputs = [
    { id: 'name',
      type: 'text', 
      label: 'nom du lieu', 
      placeholder: 'Dakar',
     changemant:changeLieu
    },
    {
      id: 'tel',
      type: 'Number',
      label: 'la latitude',
      placeholder: '14.693425',
      changemant:changelatitude,
    },
    {
      id: 'email',
      type: 'Number',
      label: 'La longitude',
      placeholder: '-17.447938',
      changemant:changelongitude,
    }
  ]
  /*definition du fonction qui est exute lorsque le formulaire prend le foxus 
  cette fonction transmet les valeurs du formulaire au props*/
  function fromChange(e){
    e.preventDefault();
    props({
    address:lieu,
    lat:latitude,
    lng:longitude})
  }

return (
  <>
   <div className='contenaire'>
  <form className="form" onSubmit={fromChange}>
    <h2 className="form-h2">METTRE VOS COORDONNÉE GEOGRAPHIQUE</h2>
    {/*on map le tableau d'objet pour definir les inputs et les lables */}
    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}
        <input
            className="form-input"
            type={input.type}
            step="0.00000001"
            placeholder={input.placeholder}
          onChange={input.changemant}/>
      </label>
    ))}

    <button type='submit' className="form-submit"><Icon  icon={sendCircle} /></button>
  </form>
 </div>
  </>
)
}
export default Form
