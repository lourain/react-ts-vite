import React from 'react';
import { ProjectListScreen } from '@/screens/project-list/index';
import styled from '@emotion/styled';
import { Row } from './component/lib';
import { useAuth } from './context/auth-context';
import SoftWareLogo from '@/assets/software-logo.svg';
import { Dropdown, Menu } from 'antd';

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="" onClick={logout}>
          登出
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <img src={SoftWareLogo} alt="" width={'180px'} />
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          {/* <button onClick={logout}>登出</button> */}
          <Dropdown overlay={menu}>
            <a href="">hi, {user?.name}</a>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
const Header = styled(Row)`
  box-shadow: 0 1px 1px #ccc;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.div``;
const Footer = styled.div``;
