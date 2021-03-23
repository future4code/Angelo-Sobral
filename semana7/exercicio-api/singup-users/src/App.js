import React from 'react';
import './App.css';
import ListUsers from './components/ListUsers';
import SingUpUsers from './components/SingUpUsers';


class App extends React.Component {

  state={
    currentPage: true
  }

  togglePage = () => {
    this.setState({ currentPage: !this.state.currentPage })
  }

  render () {
    return (
      <div className="App">

        {this.state.currentPage 
        ? 
        (<SingUpUsers togglePage={this.togglePage}/>) 
        : 
        (<ListUsers togglePage={this.togglePage}/>)}
        
      </div>
    );
  }
}
export default App;
