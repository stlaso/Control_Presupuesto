import { useState,useEffect } from "react"
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"



function ControlPresupuesto({presupuesto, gastos, setGastos,setPresupuesto,setIsValidPresupuesto}) {

  const [disponible,setDisponible]=useState(0)
  const [gastado,setGastado]=useState(0)
  const [porcentaje,setProcentaje]=useState(0)

const formatearCantidad=(cantidad)=>
{
    return cantidad.toLocaleString('en-US',{ style:'currency', currency:'USD'})
}

useEffect(() => {
    const totalGastado=gastos.reduce((total ,gasto)=> gasto.cantidad + total, 0)
    const totalDisponible=presupuesto-totalGastado
    setDisponible(totalDisponible)
    setGastado(totalGastado)
    const nuevoPorcentaje=(((presupuesto-totalDisponible)/presupuesto)*100 ).toFixed(2)
   setTimeout(() => {
    setProcentaje(nuevoPorcentaje)
   }, 1500);

}, [gastos])

const handleResetApp=()=>
{
  const resultado=confirm('¿Deseas reiniciar presupuesto gastos?')
  if(resultado)
  {
    setGastos([])
    setPresupuesto(0)
    setIsValidPresupuesto(false)
  }
}

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div className="">
            <CircularProgressbar
            value={porcentaje}
            styles={buildStyles({
              pathColor: porcentaje>100 ? '#DC2626': '#3B82F6',
              trailColor:'#F5F5F5',
              textColor:'#3B82F6'
            })}
            text={`${porcentaje}% Gastado`}
            
            />
        </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>Resetear App</button>
        <p>
            <span>Presupuesto </span> {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible <0 ? 'negativo' : ''}`}>
            <span>Disponible </span> {formatearCantidad(disponible)}
        </p>
        <p>
            <span>Gastado </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
