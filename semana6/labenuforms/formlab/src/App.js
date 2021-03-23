import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';

export default class App extends React.Component  {
  state = {
    etapa: 1
  }

  proximaEtapa = (n) => {
    this.setState({etapa: this.state.etapa +1+n})
  }

  voltarEtapa = () => {
    if (this.state.etapa === 2) {
    this.setState({etapa: this.state.etapa -1})
    } else {
      this.setState({etapa: this.state.etapa -2})
    }
  }

  avancaEtapa = () => {
    this.setState({etapa: 2}, ()=> console.log(this.state.etapa))
  }

  render() {
    const renderEtapas = () => {
    switch(this.state.etapa) {
      case 1:
      return <Etapa1 botaoProximo={this.proximaEtapa} avancaEtapa={this.avancaEtapa} etapa={this.state.etapa}/>
      case 2:
      return <Etapa2 botaoProximo={this.proximaEtapa} botaoVoltar={this.voltarEtapa}/>
      case 3:
      return <Etapa3 botaoProximo={this.proximaEtapa} botaoVoltar={this.voltarEtapa}/>
      case 4:
      return <EtapaFinal/>  
      }
    }
  
    return (
      <div className="App">
        {renderEtapas()}        
      </div>
    );
  }
}
