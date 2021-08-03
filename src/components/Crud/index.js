import React, { useState } from 'react'
import { nanoid } from "nanoid" // GENERAR UN ID DINÁMICO


// NUESTRO CRUD VA A SER UN APP DE LISTADO DE COMENTARIOS. EL USUARIO VA A PODER CREAR, LEER, MODIFICAR Y BORRAR COMENTARIOS.

export default function Crud() {

    // 1. HOOKS (ESTADOS)

    // EL COMENTARIO NUEVO QUE SE ESTÁ CREANDO
    const [ newComment, setNewComment ] = useState({
        title: "",
        description: ""
    })

    // LISTADO DE TODOS LOS COMENTARIOS
    const [ comments, setComments ] = useState([])

    // MODO EDICIÓN
    const [ edition, setEdition ] = useState(false)

    // CAPTURA EL ID
    const [id, setId] = useState("")

    // GESTIÓN DE ERRORES
    const [ error, setError ] = useState(null)


    // 2. FUNCIONES
        // a. GESTIÓN DE DATOS (GESTIONAR CAMBIOS, ETC)

        const handleChange = (event) => {
            console.log(event.target.value)

            setNewComment({
                ...newComment,
                id: nanoid(),
                [event.target.name]: event.target.value
            })

        }

        // b. MANEJO DE CRUD

        const addComment = (event) => {
            event.preventDefault()

            // VALIDACIÓN

            if(!newComment.title.trim() || !newComment.description.trim() ){

                setError("Escriba algo en los campos de texto. No puede enviarlos vacíos")

                return

            }


            setComments([
                ...comments,
                newComment
            ])

            setNewComment({
                title: "",
                description: ""
            })

            setError(null)

        }


        const edit = (event, element) => {
            
            event.preventDefault()

            setEdition(true)

            setNewComment({
                id: element.id,
                title: element.title,
                description: element.description    
            })

            setId(element.id)

        }

        const editComment = (event) => {
            event.preventDefault()

            // NECESITO ENCONTRAR LA COINCIDENCIA DEL OBJETO QUE QUIERO EDITAR CON EL QUE ESTÁ EN EL LISTADO
            // RECORRIENDO EL LISTADO DE COMENTARIOS
            const modifiedArray = comments.map(element => {
                return element.id === id
                    ? {
                        id: id,
                        title: newComment.title,
                        description: newComment.description
                    } 
                    :
                    element
            })

            // REEMPLAZAR EL ARREGLO DE COMENTARIOS POR ESTE MODIFICADO
            setComments(modifiedArray)

            // TERMINAR EL MODO EDICIÓN
            setEdition(false)
            
            // REGRESAR A VALORES VACÍOS EN LOS CAMPOS DE TEXTO
            setNewComment({
                title: "",
                description: ""
            })

        }


        const deleteComment = (event, comentarioSeleccionado) => {

            event.preventDefault()

            // FILTER
            // [{},{x},{si},{}]
            const filteredArray = comments.filter((comentarioDeListado) => {
                return comentarioDeListado.id !== comentarioSeleccionado.id
            })

            setComments(filteredArray)

        }


    // 3. RETORNO
    return (
        <>
            <hr />

            <h2>Sección de comentarios</h2>

            {/* SECCIÓN CREA UN NUEVO COMENTARIO */}
            <div>
                <form onSubmit={ 
                    edition ? 
                        (e) => { editComment(e) }  
                        : 
                        (e) => { addComment(e) } 
                    }>
                    <h3>Título</h3>
                    <input 
                        name="title"
                        value={newComment.title}
                        onChange={ (e) => { handleChange(e) } }
                    />

                    <h3>Tu mensaje</h3>
                    <input 
                        name="description"
                        value={newComment.description}
                        onChange={ (e) => { handleChange(e) } }
                    />


                    <button>
                        { edition ? "Editar" : "Agregar" }
                    </button>

                </form>

                { error ? error : null }

            </div>

            {/* SECCIÓN VER TODOS LOS COMENTARIOS */}

            <div> 
                <div>
                    {
                     comments.length === 0 ?
                     <p>No hay comentarios</p>   
                     :
                     comments.map((element) => {
                        return (
                             <>
                                <h2>{element.title}</h2>
                                <p>{element.description}</p>

                                <div>
                                    <button
                                        onClick={(e) => { edit(e, element) }}
                                    >Editar</button>

                                    <button onClick={ (e) =>  { deleteComment(e, element)  } }>
                                        Borrar
                                    </button>
                                </div>

                             </>
                        )
                     })
                    }
                </div>

            </div>


            <hr />
        </>
    )
}
