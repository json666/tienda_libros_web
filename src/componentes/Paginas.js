import React from 'react'
import {Switch, Router, Route} from "react-router-dom";
import { Inicio } from './Inicio';
import { Formulario, Producto } from './Formulario';
import { ProductosLista } from './Productos/index';
import { ProductoDetalles } from './Productos/ProductoDetalles';


export const Paginas = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio}/>
                <Route path="/productos" exact component={ProductosLista}/>
                <Route path="/producto/:id" exact component={ProductoDetalles}/>
                

            </Switch>
        </section>
    )
}
