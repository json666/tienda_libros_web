import { createContext, useEffect, useState } from "react";
import Data from '../Data.js'
import BookService from "../services/BookService"


export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [menu, setMenu] = useState(false);
    const [formulario, setFormulario] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    const fetchURL = async () => {
        //let response;
        // eslint-disable-next-line prefer-template
        // eslint-disable-next-line no-console
        // eslint-disable-next-line prefer-template
        // eslint-disable-next-line no-console

        const response = await BookService.getBooks();

        //const producto=Data.items;
        if (response) {
            setProductos(response.data.books);
        } else {
            setProductos([]);
        }

    };

    useEffect(() => {
        fetchURL();
    }, []);


    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id
        })
        if (check) {
            const data = productos.filter(producto => {
                return producto.id === id;
            })
            console.log(data);
            setCarrito([...carrito, ...data]);
        } else {
            alert("Ya cargado");
        }
    }
    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'));
        if (dataCarrito) {
            setCarrito(dataCarrito);
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(carrito));
    }, [carrito])

    useEffect(() => {
        const getTotal = () => {
            console.log('Carrito:'+carrito);
            const res = carrito.reduce((prev, item) => {
                return prev + (item.precio_unitario * item.existencia)
            }, 0)

            setTotal(res);
        }
        getTotal();
    }, [carrito])
    const value = {
        productos: [productos],
        menu: [menu, setMenu],
        formulario: [formulario, setFormulario],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value={value} >
            {props.children}
        </DataContext.Provider>
    );
}
