import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ImageInput from './views/ImageInput';
import './App.css';

import Home from './views/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="route">
          <Route exact path="/" component={Home} />
          <Route exact path="/photo" component={ImageInput} />
           <Route exact path="/video" component={VideoIn}/>
          </div>
    
      </div>
    );
  }
}

export default App;