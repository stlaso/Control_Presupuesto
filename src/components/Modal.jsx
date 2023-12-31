import { useState, useEffect } from 'react'
import Cerrar from '../img/cerrar.svg'
import Mensaje from './Mensaje'


const Modal = ({setModal, animarModal,setAnimarModal,guardarGasto,gastoEditar,setGastoEditar}) => {

    const [nombre,setNombre]=useState('')
    const [cantidad,setCantidad]=useState('')
    const [categoria,setCategoria]=useState('')
    const [mensaje,setMensaje]=useState('')
    const [id,setId]=useState()
    const [fecha,setFecha]=useState('')



    useEffect(() => {

        if(Object.keys(gastoEditar).length >0)
        {
         setNombre(gastoEditar.nombre)
         setCantidad(gastoEditar.cantidad)
         setCategoria(gastoEditar.categoria)
         setId(gastoEditar.id)
         setFecha(gastoEditar.fecha)
        }
      }, [])

    const ocultarModal=()=>{

        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit=(e)=>
    {
        e.preventDefault()

        if([nombre,cantidad,categoria].includes(""))
        {

            setMensaje('Todos los campos son obligatorios')
            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }

        guardarGasto({nombre,cantidad,categoria,id,fecha})
    }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={Cerrar} alt="cerrar modal" onClick={ocultarModal}/>
      </div>

      <form onSubmit={handleSubmit} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
            <legend>{gastoEditar.nombre ? 'Editar gasto' : 'Nuevo gasto'}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input id='nombre' value={nombre} type="text" placeholder='Añade el nombre del gasto' onChange={e=>setNombre(e.target.value)} />
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input id='cantidad'  onChange={e=>setCantidad(Number(e.target.value))} value={cantidad} type="number" placeholder='cantidad' />
            </div>
            <div className="campo">
                <label htmlFor="nombre">Categoria</label>
                <select value={categoria}  onChange={e=>setCategoria(e.target.value)} id="categoria">
                    <option value="">--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="Comida">Comida</option>
                    <option value="Casa">Casa</option>
                    <option value="Gastos">Gastos Varios</option>
                    <option value="Ocio">Ocio</option>
                    <option value="salud">salud</option>
                    <option value="Suscripciones">Suscripciones</option>
                </select>
                
                <input type="submit"   value={gastoEditar.nombre ? 'Guardar cambios' :"Añadir los gastos"}/>
                
            </div>
      </form>
    </div>
  )
}

export default Modal
