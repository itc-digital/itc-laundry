import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Menu, Dropdown, Button } from 'antd';


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

class UserInformation extends React.Component {
  render(){
    return(
      <div>
        <Dropdown overlay={menu} placement="topCenter">
          <Button>Menu</Button>
        </Dropdown>
      </div>
    );
  }
}

export default UserInformation;
