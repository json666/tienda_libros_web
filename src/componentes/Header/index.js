import React, { useContext } from 'react'
import Nike from "../../images/logo.png"
import {Link} from "react-router-dom"

import { DataContext } from "../../context/Dataprovider"

export const Header = () => {

    const value=useContext(DataContext);
    const [menu, setMenu]=value.menu;
    const [formulario, setFormulario]=value.formulario;
    const [carrito]=value.carrito;

    const toogleFormulario=()=>{
        setFormulario(!formulario);
    }

    const toogleMenu=()=>{
        setMenu(!menu);
    }
    return (
        <header>
            <Link to="#">
                <div className="logo">
                    <img src={Nike} alt="logo" width="80"></img>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/productos">PRODUCTO</Link>
                </li>
                
            </ul>

            <div className="book" onClick={toogleFormulario}>
                <box-icon name="book-add"></box-icon>
            </div>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div>
        </header>
    )
}
