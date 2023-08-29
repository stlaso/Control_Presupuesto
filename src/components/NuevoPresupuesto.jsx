import { useState } from "react"
import Mensaje from "./Mensaje"



const NuevoPresupuesto = ({setPresupuesto, presupuesto,setIsValidPresupuesto}) => {

  const [mensaje,SetMensaje]=useState('')
  

  const handlePresupuesto=(e)=>
  {
    e.preventDefault()
    if(!(presupuesto) || (presupuesto)<0)
    {

      return  SetMensaje('No es un presupuesto valido')
    }
    setIsValidPresupuesto(true)
    SetMensaje('')
  }


  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
            <div className="campo">
                <label >Definir presupuesto</label>
                <input type="number" value={presupuesto} onChange={(e)=>setPresupuesto(e.target.value)} className="nuevo-presupuesto" placeholder="Añade tu presupuesto"/>
            </div>
            <input type="submit"  value="Añadir" />
            {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto
