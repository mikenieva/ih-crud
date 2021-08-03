import React, { useState } from 'react'
// USESTATE ES UN HOOK (Función de React) que permite ejecutar estados locales. Es decir como si fueran discos duros, cerebros, áreas de datos, para el componente

export default function Nav (props) {

    // 1. ESTADOS LOCALES
    // a. Estado
    //     b. Función que va a modificar el estado
                                            // VALOR INICIA L
    const [ numeros, setNumeros ] = useState({ 
        n1: 0,  // INPUT 1
        n2: 0,  // INPUT 2
        total: ""
    })


    // 2. FUNCIONES 
    
    const sumar = (a,b) => {
        return a + b
    }


    const gestionarCambios = (event) => {
        console.log(event.target.value)

        // REEMPLAZAR EL VALOR DEL ESTADO "numeros"
        setNumeros({
            ...numeros, // spread operator
            [event.target.name]: event.target.value
        })

    }

    const ejecutarSuma = (event) => {
        // EVITA LA RECARGA DE PÁGINA
        event.preventDefault()

        const n1 = parseInt(numeros.n1)
        const n2 = parseInt(numeros.n2)

        setNumeros({
            ...numeros,
            total: n1 + n2,
        })

    } 


    // 3. RETORNO
    return (
        <div>
            <ul>
                <li>1 - {props.nombre}</li>
                <li>2 - {props.campus}</li>
                <li>3 - {props.hardware.pc} </li>
                <li>4 - {props.hardware.mac} </li>
            </ul>

            <div>

                <form onSubmit={ (e) => { ejecutarSuma(e) }}>
                    <input
                        name="n1" 
                        onChange={ (e) => { gestionarCambios(e) }}
                        value={numeros.n1}
                    />
                    <input 
                        name="n2"
                        onChange={ (e) => { gestionarCambios(e) }}
                        value={numeros.n2}
                    />
                    <button>Sumar</button>
                </form>    


                <p>RESULTADO FINAL TOTAL CONCLUSIVO: { 
                numeros.total !== "" ? 
                    numeros.total 
                    : 
                    "Aún no se ejecuta una operación de suma"
                } </p>



                <h1>ESTE ES EL EJEMPLO DE FUNCIÓN SUMA</h1>
                { sumar(8,6) }



            </div>

        </div>
    )
}
