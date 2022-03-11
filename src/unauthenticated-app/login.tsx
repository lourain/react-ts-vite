import React from 'react';
import { useAuth } from '@/context/auth-context';
import { Button, Form, Input } from 'antd';
import { LongButton } from '.';

export const LoginScreen = () => {
  const { login, user } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <div>
      <Form onFinish={handleSubmit}>
        {user ? <div>登录成功，用户名：{user?.name}</div> : null}
        {user?.token}
        <Form.Item name="username" rules={[{ required: true, message: '必须填入用户名' }]}>
          <Input placeholder="用户名" type="text" id={'username'} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '必须输入密码' }]}>
          <Input placeholder="密码" type="password" id="password" />
        </Form.Item>
        <Form.Item>
          <LongButton type="primary" htmlType="submit">     
            登录
          </LongButton>
        </Form.Item>
      </Form>
    </div>
  );
};
