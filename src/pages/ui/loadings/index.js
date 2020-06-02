import React,{Component} from 'react';
import {Card,Spin,Alert,Switch} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import './index.less'

export default class Loadings extends Component{
  state={
    loading:false
  }
  render(){
    const MIcon=<LoadingOutlined />
    return(
      <div style={{'width':'100%','textAlign':'left'}}>
        <Card title="Spin" className="cards">
            <Spin size="small"/>
            <Spin size="middle"/>
            <Spin size="large"/>
            <Spin indicator={MIcon}/>
        </Card>
        {/* 内容遮罩 */}
        <Card title="内容遮罩" className="cards">
            <Spin tip="记载中。。。" spinning={this.state.loading}>
              <Alert
                message="React"
                description="欢迎来到react学习~"
                type="info"
              />
            </Spin>
            <div>
              设置spin：
              <Switch checked={this.state.loading} onChange={()=>this.setState({loading:!this.state.loading})}/>
            </div>
        </Card>
      </div>
    )
  }
}