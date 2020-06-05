import React,{Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        {/* 接收所有路由 */}
        {this.props.children}
      </div>
      </Provider>
    );
  }
}

export default App;
