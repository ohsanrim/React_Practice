import React from 'react';
import Menu from "antd/lib/menu";
// import Menu, { MenuProps } from "antd/lib/menu";
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const items = [

  { label: <a href="/">Home</a>, key: "mail" },

  { label: <a href="/MyPage">MyPage</a>, key: "MyPage" },
  
  { label: <a href="/Report">Report</a>, key: "Report" },

  { label: <a href="/APITest">APITEST</a>, key: "APITEST" }

];

function LeftMenu(props) {
  // return (
  //   <Menu mode={props.mode}>
  //   <Menu.Item key="mail">
  //     <a href="/">Home</a>
  //   </Menu.Item>
  //   {/* <SubMenu title={<span>Blogs</span>}>
  //     <MenuItemGroup title="Item 1">
  //       <Menu.Item key="setting:1">Option 1</Menu.Item>
  //       <Menu.Item key="setting:2">Option 2</Menu.Item>
  //     </MenuItemGroup>
  //     <MenuItemGroup title="Item 2">
  //       <Menu.Item key="setting:3">Option 3</Menu.Item>
  //       <Menu.Item key="setting:4">Option 4</Menu.Item>
  //     </MenuItemGroup>
  //   </SubMenu> */}
  // </Menu>
  // )
  return <Menu mode={props.mode} items={items} />;
}

export default LeftMenu