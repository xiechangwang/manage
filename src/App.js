import React,{Component} from 'react';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        {/* 接收所有路由 */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
