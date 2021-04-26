import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from "../../context/Dataprovider";
export const ProductoItem = ({
    id,
    title,
    price,
    cantidad,
    img
}) => {
//    console.log('VALOR='+image)

    const value=useContext(DataContext);
    const addCarrito=value.addCarrito;
    return (
        
        <div className="producto">
            <Link to="">
                <div className="producto__img">
                    <img src={img} alt={title} />
                </div>
            </Link>
            <div className="producto__footer">
                <h2>{title}</h2>
                <p>Libro</p>
                <p className="price">Bs. {price}</p>
            </div>
            <div className="buttom" >
                <button className="btn" onClick={()=>addCarrito(id)}>Añadir Carrito</button>
                <div>
                    <a href={`/producto/${id}`} className="btn">Vista</a>
                </div>
            </div>
        </div>
    );
};


