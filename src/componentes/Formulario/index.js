import React, { useContext, useState } from 'react';

import { useHistory } from 'react-router-dom';

import BookService from '../../services/BookService'


import { DataContext } from "../../context/Dataprovider"




export const Formulario = () => {



    const value = useContext(DataContext);
    const history = useHistory();
    const [formulario, setFormulario] = value.formulario;
    const [book, setBook] = useState({
        titulo: '',
        descripcion: '',
        precio_unitario: 0,
        precio_proveedor: 0,
        existencia: 0,
        ISBN: '',
        num_pag: 0,
        autorId: 3
    });

    const toogleBookfalse = () => {
        setFormulario(false);
    }

    const show1 = formulario ? "formularios show" : "formularios";
    const show2 = formulario ? "formulario show" : "formulario";

    const handleOnChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };
    const cleanBook = () => {
        setBook({
            titulo: '',
            descripcion: '',
            precio_unitario: 0,
            precio_proveedor: 0,
            existencia: 0,
            ISBN: '',
            num_pag: 0,
            autorId: 3
        });
    };
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const response = await BookService.addBook(book);
        // eslint-disable-next-line no-console
        console.log(response);
        cleanBook();
        history.push('/');
    };
    /*
    const [carrito, setCarrito] = value.carrito;
    const [total]=value.total;*/

    return (


        <div className={show1}>
            <div className={show2}>
                <div className="formulario__close" onClick={toogleBookfalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>FORMULARIO REGISTRO</h2>
                <div className="formulario__center">
                    {

                        <div>
                            <h3>Titulo:</h3>
                            <input type="text"
                                name="titulo"
                                id="titulo"
                                onChange={handleOnChange}
                                value={book.titulo}></input>
                            <h3>Descripcion:</h3>
                            <input type="text"
                                name="descripcion"
                                id="descripcion"
                                onChange={handleOnChange}
                                value={book.descripcion}></input>
                            <h3>Precio Unitario:</h3>
                            <input type="text"
                                name="precio_unitario"
                                id="precio_unitario"
                                onChange={handleOnChange}
                                value={book.precio_unitario}></input>
                            <h3>Precio Proveedor:</h3>
                            <input type="text"
                                name="precio_proveedor"
                                id="precio_proveedor"
                                onChange={handleOnChange}
                                value={book.precio_proveedor}></input>
                            <h3>Existencia:</h3>
                            <input type="text"
                                name="existencia"
                                id="existencia"
                                onChange={handleOnChange}
                                value={book.existencia}></input>
                            <h3>ISBN:</h3>
                            <input type="text"
                                name="ISBN"
                                id="ISBN"
                                onChange={handleOnChange}
                                value={book.ISBN}></input>
                            <h3>Numero de Paginas:</h3>
                            <input type="text"
                                name="num_pag"
                                id="num_pag"
                                onChange={handleOnChange}
                                value={book.num_pag}></input>
                            <h3>Descripcion Larga:</h3>
                            <input type="text"
                                name="num_pag"
                                id="num_pag"
                                onChange={handleOnChange}
                                value={book.num_pag}></input>
                            <h3>Status:</h3>
                            <input type="text"
                                name="num_pag"
                                id="num_pag"
                                onChange={handleOnChange}
                                value={book.num_pag}></input>
                            <h3>Categoria:</h3>
                            <input type="text"
                                name="num_pag"
                                id="num_pag"
                                onChange={handleOnChange}
                                value={book.num_pag}></input>
                            <h3>Año:</h3>
                            <input type="text"
                                name="num_pag"
                                id="num_pag"
                                onChange={handleOnChange}
                                value={book.num_pag}></input>
                            <h3>Lenguaje:</h3>
                            <input type="text"
                                name="num_pag"
                                id="num_pag"
                                onChange={handleOnChange}
                                value={book.num_pag}></input>
                            <h3>URL:</h3>
                            <input type="text"
                                name="num_pag"
                                id="num_pag"
                                onChange={handleOnChange}
                                value={book.num_pag}></input>
                        </div>
                        /*     
                         carrito.length == 0 ? <h2 style={{
                             textAlign: "center", fontSize: "3rem"
                         }}>Carrito Vacio</h2> : <>
                             {
                                 carrito.map((producto) => (
                                     <div className="carrito__item" key={producto.id}>
                                         <img src="" alt=""   ></img>
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
                         </>*/
                    }
                </div>
                <br />
                <div className="formulario__footer">
                    <button className="btn" onClick="">Registra Libro</button>
                </div>
            </div>
        </div >
    )
}
