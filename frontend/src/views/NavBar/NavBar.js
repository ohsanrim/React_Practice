import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
// import RightMenu from './Sections/RightMenu';
import { Drawer, Button } from 'antd';
// import Icon from '@ant-design/icons';
import { AlignRightOutlined } from '@ant-design/icons';
import './Sections/Navbar.css';

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    // <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%', display: 'flex', alignItems :'center' }}>
    <nav className="menu" style={{ position: 'fixed', width: '100%', display: 'flex', alignItems :'center' }}>
      <div className="menu__logo">
        <a href="/">MORIP</a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        {/* <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div> */}
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <AlignRightOutlined />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          open={visible}
        >
          <LeftMenu mode="inline" />
          {/* <RightMenu mode="inline" /> */}
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar