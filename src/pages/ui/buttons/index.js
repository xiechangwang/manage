import React,{Component} from 'react';
import {Card,Button} from 'antd';
import './index.less';
import {PlusOutlined,EditOutlined,DeleteOutlined,SearchOutlined,DownloadOutlined} from '@ant-design/icons';
import ButtonGroup from 'antd/lib/button/button-group';

export default class Buttons extends Component{
  state={
    loading:true
  }
  handleCloseLoading=()=>{
    this.setState({
      loading:false
    })
  }

  render(){
    return(
      <div style={{'width':'100%','textAlign':'left'}}>
        <Card className="cards" title="基础按钮">
           <Button className="btns" type="primary">Imooc</Button>
           <Button className="btns" >Imooc</Button>
           <Button className="btns" type="dashed">Imooc</Button>
           <Button className="btns" type="danger" ghost>Imooc</Button>
           <Button className="btns" disabled>Imooc</Button>
        </Card>
        <Card className="cards" title="图形按钮">
           <Button className="btns" icon={<PlusOutlined />}>新增</Button>
           <Button className="btns" icon={<EditOutlined />}>编辑</Button>
           <Button className="btns" icon={<DeleteOutlined/>}>删除</Button>
           <Button className="btns" shape="circle" icon={<SearchOutlined />}></Button>
           <Button className="btns" icon={<SearchOutlined />}>搜索</Button>
           <Button className="btns" icon={<DownloadOutlined />}>下载</Button>
        </Card>
        <Card className="cards" title="loading按钮">
           <Button className="btns" type="primary" loading={true}>确定</Button>
           <Button className="btns" type="primary" shape="circle" loading={true}></Button>
           <Button className="btns" loading={true}>点击加载按钮</Button>
           <Button className="btns" loading={this.state.loading}>下载</Button>
           <Button className="btns" type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card className="cards" title="按钮组">
          <ButtonGroup>
            <Button type="primary">返回</Button>
            <Button type="primary">前进</Button>
          </ButtonGroup> 
        </Card>
        <Card className="cards" title="loading按钮">
           <Button className="btns" type="primary" size="small">小</Button>
           <Button className="btns" type="primary" size="middle">中</Button>
           <Button className="btns" type="primary" size="large">大</Button>
        </Card>
      </div>
    )
  }
}