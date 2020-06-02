import React from 'react';
import {Card,Button,Modal} from 'antd';
import './index.less';

export default class Modals extends React.Component{
  state={
    loading:false,
    visible1:false,
    visible2:false,
    visible3:false,
    visible4:false
  }
  handleOpen=(type)=>{
    this.setState({
      [type]: true,
    });
  }
  handleOk = (e) => {
    if(e == 'visible2'){
      this.setState({
        loading:true
      })
      setTimeout(() => {
        this.setState({
          loading:false,
          [e]: false,
        });
      }, 2000);
    }else{
      this.setState({
        [e]: false,
      });
    }
  };
  handleCancel=(e)=>{
    this.setState({
      [e]: false,
    });
  }
  render(){
    return(
      <div style={{'width':'100%','textAlign':'left'}}>
        <Card title="基础模态框" className="cards">
            {/* 这里注意；要传递参数要是用箭头函数 */}
            <Button className="btns" type="primary" onClick={()=>this.handleOpen('visible1')}>open</Button>
            <Button className="btns" type="primary" onClick={()=>this.handleOpen('visible2')}>自定义页脚</Button>
            <Button className="btns" type="primary" onClick={()=>this.handleOpen('visible3')}>顶部20px</Button>
            <Button className="btns" type="primary" onClick={()=>this.handleOpen('visible4')}>居中弹出</Button>
        </Card>
        {/* modal1 */}
        <Modal
          title="Basic Modal"
          visible={this.state.visible1}
          onOk={()=>this.handleOk('visible1')}
          onCancel={()=>this.handleCancel('visible1')}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        {/* modal2 */}
        <Modal
          title="React student"
          visible={this.state.visible2}
          onOk={()=>this.handleOk('visible2')}
          onCancel={()=>this.handleCancel('visible2')}
          footer={[
            <Button key="back" onClick={()=>this.handleCancel('visible2')}>
              返回
            </Button>,
            <Button key="submit" type="primary" loading={this.state.loading} onClick={()=>this.handleOk('visible2')}>
              提交
            </Button>
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        {/* modal3 */}
        <Modal
          title="距离顶部20px"
          style={{ top: 20 }}
          visible={this.state.visible3}
          onOk={()=>this.handleOk('visible3')}
          onCancel={()=>this.handleCancel('visible3')}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        {/* modal4 */}
        <Modal
          title="居中弹出"
          centered
          visible={this.state.visible4}
          onOk={()=>this.handleOk('visible4')}
          onCancel={()=>this.handleCancel('visible4')}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}