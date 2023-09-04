import { useState } from "react"


function Filtros({filtro,setFiltro}) {
  return (
    <div className="filtros sombra contenedor">
        <form action="">
            <div className="campo">
                <label htmlFor="">Filtrar gastos</label>
                <select value={filtro} onChange={e=> setFiltro(e.target.value)}>
                    <option value="">Todos</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="Comida">Comida</option>
                    <option value="Casa">Casa</option>
                    <option value="Gastos">Gastos Varios</option>
                    <option value="Ocio">Ocio</option>
                    <option value="salud">salud</option>
                    <option value="Suscripciones">Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros