import React from 'react'

import ListaContactos from './../../contactos.json'

export default function Contactos() {

    console.log(ListaContactos)

    return (
        <div>

            {
                ListaContactos.map((elemento) => {
                    return(
                        <>
                            <p>{elemento.name}</p>
                            <img src={elemento.pictureUrl} />
                        </>
                    )
                })
            }

            
        </div>
    )
}
