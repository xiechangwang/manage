import React, { Component } from 'react';
import { Card, Tabs ,Button } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import './index.less';
const { TabPane } = Tabs;

export default class Messages extends Component {
  constructor(props){
    super(props)
    this.newTabIndex=0;
    this.state={
      activeKey:'1'
    }
  }
  //新增和删除页签的回调，在 type="editable-card" 时有效
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  //新增
  handleAdd=()=>{
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }
  //删除
  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };
  onChange = activeKey => {
    this.setState({ activeKey });
  };
  componentWillMount(){
    const panes=[
      {
        title:'tab1',
        content:'tab1',
        key:'1'
      },
      {
        title:'tab2',
        content:'tab2',
        key:'2'
      },
      {
        title:'tab3',
        content:'tab3',
        key:'3'
      }
    ]
    this.setState({
      panes
    })

  }
  render() {
    return (
      <div style={{ "width": "100%", "textAlign": "left" }}>
        <Card title="tabs页签" className="cards">
          <Tabs defaultActiveKey="1" >
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
              </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
              </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
              </TabPane>
          </Tabs>
        </Card>
        {/* 带图标tabs */}
        <Card title="带图标tabs页签" className="cards">
          <Tabs defaultActiveKey="1" >
            <TabPane tab={<span>
                            <AppleOutlined />
                            Tab 1
                          </span>} key="1">
              Content of Tab Pane 1
              </TabPane>
            <TabPane tab={<span>
                            <AndroidOutlined />
                            Tab 2
                          </span>} key="2">
              Content of Tab Pane 2
              </TabPane>
          </Tabs>
        </Card>
        {/* 动态新增、删除tabs */}
        <Card title="动态新增、删除tabs" className="cards">
          <Button style={{"marginBottom":"10px"}} onClick={this.handleAdd}>ADD</Button>
          <Tabs 
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card" 
            hideAdd
            onEdit={this.onEdit}
          >
            {
              this.state.panes.map((pane)=>{
                return (
                  <TabPane 
                    tab={pane.title} 
                    key={pane.key} 
                  >
                    {pane.content}
                  </TabPane>
                )
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}