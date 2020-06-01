import React,{Component} from 'react';
import {Row,Col} from 'antd';
import './style/common.less';
import NavLeft from './components/NavLeft';
import Header from './components/Header';
import Footer from './components/Footer';

//home
// import Home from './pages/home'; 

class Admin extends Component{
  render(){
    return (
      <div>
        <Row className="container">
          <Col span={3} className="nav-left" >
            <NavLeft/>
          </Col>
          <Col span={21} className="main" >
            <Header/>
            <Row className="content">
              {/* <Home/> */}
              {this.props.children}
            </Row>
            <Footer/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Admin;