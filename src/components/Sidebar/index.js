import React from 'react'
import Nav from './Nav'
import Profile from './Profile'


export default function Sidebar() {

    const dato = "Mike Nieva"

    const computadoras = {
        pc: "Hp",
        mac: "Air"
    }
 
    

    return (
        <div>
            {dato}
            <Nav 
                nombre={dato} campus="Ironhack" 
                hardware={computadoras}
            />
            <Profile />
        </div>
    )
}
    