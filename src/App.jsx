import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers/index'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { object } from 'prop-types'





function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastoEditar , setGastoEditar]=useState({})

  const handleNuevoGasto = () => 
  {
    setModal(true);
    setGastoEditar({})
  }

  setTimeout(() => 
  {
    setAnimarModal(true)
  }, 2000);

  const guardarGasto = gasto => 
  {
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])

    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 1000);
  }

  useEffect(() => {

    if(Object.keys(gastoEditar).length >0)
    {
      handleNuevoGasto()
    }
  }, [gastoEditar])
  

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header setPresupuesto={setPresupuesto} presupuesto={presupuesto} isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto} gastos={gastos} />

      {isValidPresupuesto &&
        (
          <>
            <main>
              <ListadoGastos gastos={gastos} setGastoEditar={setGastoEditar}/>
            </main>
            <div className="nuevo-gasto">
              <img src={IconoNuevoGasto} alt="Icono nuevo gasto" onClick={handleNuevoGasto} />

            </div>
          </>
        )}
      {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} guardarGasto={guardarGasto} gastoEditar={gastoEditar} />}

    </div>
  )
}

export default App
