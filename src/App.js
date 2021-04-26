import React from "react";
import { Header } from "./componentes/Header";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/Paginas"
import { DataProvider } from "./context/Dataprovider"
import { Carrito } from "./componentes/Carrito"
import { Formulario } from "./componentes/Formulario";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header></Header>
          <Carrito></Carrito>
          <Paginas></Paginas>
          <Formulario></Formulario>
        </Router>

      </div>
    </DataProvider>
  );
}

export default App;
