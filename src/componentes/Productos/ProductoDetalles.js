import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem"

export const ProductoDetalles = () => {

    const value = useContext(DataContext)
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const [detalle, setDetalle] = useState([]);

    const [url, setUrl] = useState(0);
    const [images, setImages] = useState('');
    const params = useParams();
    let item = 0;


    useEffect(() => {
        item = 0;
        productos.forEach(producto => {
            if (producto.id === parseInt(params.id)) {
                setDetalle(producto);
                setUrl(0);
            }
        })
    }, [params.id, productos])

    console.log(url)
    const handleInput = e => {
        const number = e.target.value.toString().padStart(2, '01');
        setImages()
        setUrl(number);


    }


    useEffect(() => {
        const values = detalle.thumbnailUrl;
        setImages(values)
    }, [url, params.id]);
    if (detalle.length < 1) return null;
    return (
        <>

            <div className="detalle">
                <h2>{detalle.titulo}</h2>
                <p className="price">Bs.{detalle.precio_unitario}</p>
                <br /><br />
                <button onClick={() => addCarrito(detalle.id)}>Añadir al carrito</button>
                {
                    url ? <img src={images} alt={detalle.titulo} /> : <img src={detalle.thumbnailUrl} alt={detalle.titulo} />
                }


                <div className="description"></div>
                <p>
                    <b>{detalle.descripcion}</b>
                </p>
            </div>
        </>

    )
}
