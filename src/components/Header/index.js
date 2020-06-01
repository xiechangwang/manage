import React,{Component} from 'react';
import { Row,Col} from 'antd';
import './index.less';
import 	Utils from '../../utils/utils.js';
// import axios from '../../axios';

class Header extends Component{
  componentWillMount(){
    this.setState({
      userName:'hello'
    })
	setInterval(()=>{
		let sysTime=Utils.formDate(new Date().getTime());
		this.setState({
		  sysTime
		})
	},1000);
	this.getWeatherAPIData();
  }
  getWeatherAPIData(){
	  // let city="北京";
	  // axios.jsonp({
		 //  url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=f2mZmwctnUS5djom02dHgGsPu3fw0Sl9'
	  // })
  }
  
  render(){
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="/#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
};

export default Header;