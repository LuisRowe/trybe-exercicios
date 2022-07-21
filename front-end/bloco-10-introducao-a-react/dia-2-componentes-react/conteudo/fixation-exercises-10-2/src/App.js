// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    const pedidos = [{
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },
    {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500ml",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }];

    const pedidosLista = pedidos.map((pedido) => <Order key = {pedido.id} order = {pedido}/>)

    return (
      <div className="App">
        <h1 key = 'title'> Orders recently created </h1>
        {pedidosLista}
      </div>
    );

    
  }
}

export default App;