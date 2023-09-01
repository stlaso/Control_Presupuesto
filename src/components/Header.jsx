import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"



const Header = ({setPresupuesto, presupuesto,isValidPresupuesto,setIsValidPresupuesto,gastos}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? <ControlPresupuesto presupuesto={presupuesto} gastos={gastos}/> 
      :<NuevoPresupuesto setPresupuesto={setPresupuesto}  presupuesto={presupuesto}  setIsValidPresupuesto={setIsValidPresupuesto}/> }

    </header>
  )
}

export default Header

