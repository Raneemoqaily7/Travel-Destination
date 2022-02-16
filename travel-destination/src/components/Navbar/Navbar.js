import React from 'react'
import {Link} from 'react-router-dom'

function Navbar (){
    return (
        <>
        <Link to='/'>Home </Link>
        <Link to='/city/:id'>Favourit city</Link>
        </>
    )
}
export default Navbar;