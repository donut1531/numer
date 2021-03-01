import './App.css';
import Bisection from './Bisection';
import { Route, HashRouter,Link } from "react-router-dom";
import React from 'react';
import { Layout, Typography, Menu, Breadcrumb} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import False_position from  './False_position'
import False_position from  './False_position'
import False_position from  './False_position'
import False_position from  './False_position'


const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;


class App extends React.Component{

  render(){
    
    return (
      <div className="App">
      <HashRouter>

      
      <Layout>
        <Header className="header">
          <div className="logo" />
      
        </Header>
      <Layout style = {{minHeight:'100vh'}}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1"  title="Root of Equations">
            <Menu.Item key="1">Bisection Method <Link to = '/bisection' /></Menu.Item>
            <Menu.Item key="2">False-Position Method<Link to = '/false-position' /></Menu.Item>
            <Menu.Item key="3">One-Point Iteration Method</Menu.Item>
            <Menu.Item key="4">Newton-Raphson Method</Menu.Item>
            <Menu.Item key="5">Secant Method</Menu.Item>
            
          </SubMenu>
          <SubMenu key="sub2" title="Linear Algebraic Equations">
            <Menu.Item key="6">Cramer's Rule</Menu.Item>
            <Menu.Item key="7">Gauss Elimation Method</Menu.Item>
            <Menu.Item key="8">Guass-Jordan Method</Menu.Item>
            <Menu.Item key="9">LU Decompostion Method</Menu.Item>
            <Menu.Item key="10">Jacobi Iteration Method</Menu.Item>
            <Menu.Item key="11">Guass-Seidel Iteration Method</Menu.Item>
            <Menu.Item key="12">Conjugate Gradient Method</Menu.Item>
            
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
         <Route path = '/bisection'component = {Bisection}/>
         <Route path = '/false-position' component = {False_position} />
        
           
        </Content>
      </Layout>
    </Layout>
  </Layout>
  </HashRouter>  
      </div>
    );
  }

}

export default App;