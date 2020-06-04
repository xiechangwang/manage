import React,{Component} from 'react';
import {Card,Form, Input, Button} from 'antd';
import './index.less';

export default class Logins extends Component{
  render(){
    return(
      <div className="main" >
         <Card title="登陆行内表单">
            <Form name="horizontal_login" layout="inline" >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item shouldUpdate={true}>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                  >
                    Log in
                  </Button>
                )}
              </Form.Item>
            </Form>
         </Card>
      </div>
    )
  }
}
