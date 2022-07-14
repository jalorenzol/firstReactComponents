import React, { useState } from 'react'




export const PrimerComponente = () => {

    const [nombre, setNombre] = useState("Nombre")

    let edad = "28"
    const trabajos = ["Backend", "FrontEnd", "Diseño", "Cripto", "Hardware"]

    const insertNombre = (nombreInsertado) => {
        setNombre(nombreInsertado)
    }

    return (

        <div><div>

            <input type={'text'} placeholder="Inserte su nombre" onChange={e => insertNombre(e.target.value)} />


        </div>
            <h1>
                Hola {nombre}</h1>
            <h2>Su edad es {edad}</h2>
            <h2>Sus posibles trabajos son:</h2>
            <ul>
                {trabajos.map(
                    (trabajo, indice) => {
                        return (<li key={indice}>
                            {trabajo}
                        </li>)
                    }
                )}
            </ul>
        </div>
    )
}
