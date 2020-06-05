import React, { Component } from 'react';
import MenuConfig from '../../config/menuConfig';
import './index.less';
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom';

const { SubMenu } = Menu;

class NavList extends Component {
  componentWillMount(){
    const menuTreeNode=this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    })
  }
  //菜单渲染
  renderMenu=(data)=>{
    return data.map((item)=>{
      if(item.children){
        this.renderMenu(item.children);
        return(
          <SubMenu title={item.title} key={item.key} style={{'textAlign':'left'}}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return(
      <Menu.Item key={item.key} style={{'textAlign':'left'}}>
        <NavLink to={item.key}>
          {item.title}
        </NavLink>
      </Menu.Item>
      )
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu theme={'dark'} >
          {/* <SubMenu key="sub1" title="Navigation One">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4"  title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu> */}
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
};

export default NavList;