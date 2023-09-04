import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"



const Header = ({setPresupuesto, presupuesto,isValidPresupuesto,setIsValidPresupuesto,gastos,setGastos={setGastos}}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} setGastos={setGastos} setPresupuesto={setPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto}/> 
      :<NuevoPresupuesto setPresupuesto={setPresupuesto}  presupuesto={presupuesto}  setIsValidPresupuesto={setIsValidPresupuesto}/> }

    </header>
  )
}

export default Header

