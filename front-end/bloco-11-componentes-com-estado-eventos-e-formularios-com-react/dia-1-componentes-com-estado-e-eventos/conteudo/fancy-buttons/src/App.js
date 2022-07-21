import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.contador = this.contador.bind(this);
    this.mudaCorBotao = this.mudaCorBotao.bind(this);
    this.state = {
      numeroDeClick: 0,
      corDoBotao: 'green',
    }
  }

  async contador(number) {
    await this.setState((estadoAnterior, _props) => ({
      numeroDeClick: estadoAnterior.numeroDeClick + number,
    }))
    this.mudaCorBotao();
  }

  async mudaCorBotao() {
    if (this.state.numeroDeClick % 2 === 0) {
      await this.setState(() => ({
        corDoBotao: 'green',
      }))
    } else {
      await this.setState({
        corDoBotao: 'red',
      })
    }
    console.log(this.state.corDoBotao);
  }

  render(){
    return (
      <div className="App">
        <button className={this.state.corDoBotao} onClick={(() => this.contador(1))}>Clique e {this.state.numeroDeClick}, soma "1"!</button>
        <button className={this.state.corDoBotao} onClick={(() => this.contador(2))}>Clique e {this.state.numeroDeClick}, soma "2"!</button>
        <button className={this.state.corDoBotao} onClick={(() => this.contador(3))}>Clique e {this.state.numeroDeClick}, soma "3"!</button>
      </div>
    );
  }
}

export default App;
