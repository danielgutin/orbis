import React, { Component } from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './App.css';


// Components
import SideNav from './components/SideNav/SideNav';
import System from './components/System/System';
import Setup from './components/Setup/Setup';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <Switch>
          <Route path='/' exact component={System} />
          <Route path='/setup' exact component={Setup} />
        </Switch>
      </div>
    );
  }
}

export default App;
