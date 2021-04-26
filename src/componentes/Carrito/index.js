import React, { useContext } from 'react'

import IMG from "../../images/img06.jpg";

import { DataContext } from "../../context/Dataprovider"




export const Carrito = () => {


    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;


    const tooglefalse = () => {
        setMenu(false);
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const resta = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.existencia === 1 ? item.existencia = 1 : item.existencia -= 1;
            }
            setCarrito([...carrito]);
        })
    }

    const suma = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.existencia += 1;
            }
            setCarrito([...carrito]);
        })
    }

    const removeProducto = id => {
        if (window.confirm("Quieres quitar el producto?")) {
            carrito.forEach((item, index) => {
                if (item.id === id) {
                    item.existencia = 1
                    carrito.splice(index, 1);
                }

            }
            )
            setCarrito([...carrito]);
        }
    }

    const pagar = () => {
        console.log('Pagando');
        carrito.forEach(item => {
            console.log('Valor 1'+item.id)
            console.log('Valor 2'+item.titulo)
            console.log('Valor '+item.precio_unitario)
            //setCarrito([...carrito]);
        })

    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su Carrito</h2>
                <div className="carrito__center">
                    {

                        carrito.length == 0 ? <h2 style={{
                            textAlign: "center", fontSize: "3rem"
                        }}>Carrito Vacio</h2> : <>
                            {
                                carrito.map((producto) => (
                                    <div className="carrito__item" key={producto.id}>
                                        <img src={producto.thumbnailUrl} alt=""   ></img>
                                        <div >
                                            <h3>{producto.titulo}</h3>
                                            <p className="price">{producto.precio_unitario}</p>
                                        </div>
                                        <div>
                                            <box-icon name="up-arrow" type="solid" onClick={() => suma(producto.id)}></box-icon>
                                            <p className="cantidad">{producto.existencia}</p>
                                            <box-icon name="down-arrow" type="solid" onClick={() => resta(producto.id)}></box-icon>
                                        </div>
                                        <div className="remove__item" onClick={() => removeProducto(producto.id)}>
                                            <box-icon name="trash"></box-icon>

                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    }
                </div>

                <div className="carrito__footer">
                    <h3>Total:Bs.{total}</h3>
                    <button className="btn" onClick={() => pagar()}>Payment</button>
                </div>
            </div>
        </div >
    )
}
