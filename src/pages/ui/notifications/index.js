import React,{Component} from 'react';
import {Card,Button,notification} from 'antd';
import './index.less'

export default class Loadings extends Component{
  state={

  }
  openNotifications=(type)=>{
    notification[type]({
      message:"这是标题",
      description:"这是对于这个通知的描述，一下描述省略一万字。。。"
    })
  }
  render(){
    return(
      <div style={{'width':'100%','textAlign':'left'}}>
        <Card className="cards" title="通知提醒框">
            <Button className="btns" type="primary" onClick={()=>this.openNotifications('success')}>success</Button>
            <Button className="btns" type="primary" onClick={()=>this.openNotifications('info')}>info</Button>
            <Button className="btns" type="primary" onClick={()=>this.openNotifications('warning')}>warning</Button>
            <Button className="btns" type="primary" onClick={()=>this.openNotifications('error')}>error</Button>
        </Card>
      </div>
    )
  }
}