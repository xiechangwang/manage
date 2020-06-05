import React, { Component } from 'react';
import { Card, Form, Input, Button,Checkbox  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less';

export default class Logins extends Component {
  formRef = React.createRef();
  onFinish = (e) => {
    console.log(e)
  }
  render() {
    return (
      <div className="main" >
        <Card title="登陆行内表单">
          <Form name="horizontal_login" ref={this.formRef} layout="inline" onFinish={this.onFinish} >
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
        <Card title="普通登录" id="login-form-main">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            ref={this.formRef}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
              >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item 
                name="remember" 
                valuePropName="checked"
                rules={[
                  {
                    // 自定义校验，接收到Promise返回值
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                  },
                ]}
                >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
