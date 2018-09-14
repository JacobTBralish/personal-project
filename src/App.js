import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './Components/Nav/Nav';

class App extends Component {

  
  render() {
    return (
      <div>
        <div>
          <Nav></Nav>
        </div>

        <div>
          {routes}
        </div>
      
      </div>
    );
  }
}

export default App;
