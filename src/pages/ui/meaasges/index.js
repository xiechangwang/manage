import React,{Component} from 'react';
import {Card,Button,message} from 'antd';
import './index.less';

export default class Messages extends Component{
  handleMessage=(type)=>{
    message[type]({
      content:"这是提示内容", //内容
      duration:3, //默认时间3秒

    })
  }
  render(){
    return(
      <div style={{"width":"100%","textAlign":"left"}}>
        <Card title="Message全局提示" className="cards">
           <Button type="primary" className="btns" onClick={()=>this.handleMessage('success')}>success</Button>
           <Button type="primary" className="btns" onClick={()=>this.handleMessage('info')}>info</Button> 
           <Button type="primary" className="btns" onClick={()=>this.handleMessage('warning')}>warning</Button> 
           <Button type="primary" className="btns" onClick={()=>this.handleMessage('error')}>error</Button> 
        </Card>
      </div>
    )
  }
}