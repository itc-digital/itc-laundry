import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Row, Col } from 'antd';
import './App.css';
import { UserInformation } from '../Components';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px'}}
          >
            <Row>
              <Col xs={{ span: 18 }} md={{ span: 22 }}>
                <span style={{ fontFamily: "'Press Start 2P', cursive" }}>Стиралочка</span>
              </Col>
              <Col xs={{ span: 6 }} md={{ span: 2 }}>
                <UserInformation/>
              </Col>
            </Row>
          </Menu>
        </Header>
        <Content>
          <Row style={{ backgroundColor: '#fff', marginTop: 15 }} className="container-fixed">
            <Col xs={{ span: 24 }} md={{ span: 6 }}>Text1</Col>
            <Col xs={{ span: 24 }} md={{ span: 18 }}>Text2</Col>
          </Row>
          <Row style={{ backgroundColor: '#fff', marginTop: 15, paddingLeft: 15, paddingRight: 15 }}>
            <Col xs={{ span: 24 }} md={{ span: 18 }}>Text1</Col>
            <Col xs={{ span: 24 }} md={{ span: 6 }}>Text2</Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        </Footer>
      </Layout>
    );
  }
}

export default App;
