import React from 'react'

import { useParams } from 'react-router-dom'


export default function User() {
    
    const { usuario } = useParams()

    return (
        <div>
            <p>hola {usuario}</p>
        </div>
    )
}
