import React, { FormEvent } from 'react';
import { useAuth } from '@/context/auth-context';
import { Form, Input } from 'antd';
import { LongButton } from '.';

export const RegisterScreen = () => {
  const { register } = useAuth();
  const handleSubmit = (value: { username: string; password: string }) => {
    register(value);
  };
  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Form.Item name="username" rules={[{ required: true, message: '必须填入用户名' }]}>
          <Input placeholder="用户名" type="text" id={'username'} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '必须输入密码' }]}>
          <Input placeholder="密码" type="password" id="password" />
        </Form.Item>
        <Form.Item>
          <LongButton type="primary" htmlType='submit'>注册</LongButton>
        </Form.Item>
      </Form>
    </div>
  );
};
