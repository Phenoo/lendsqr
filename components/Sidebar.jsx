import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

import { FaChevronDown, FaBriefcase, FaHome, FaMoneyBillAlt, FaBars } from "react-icons/fa"
import Logo from './Logo'

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


import { businessLinks, customerLinks, settingsLinks } from "@/data/links";
import { BsChevronDown } from "react-icons/bs";


const Item = ({ title, icon, selected, setSelected, isCollapsed, i, secicon }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        height: '30px',

      }}
      className="sidebar-item"
      onClick={() => setSelected(title)}
      icon={icon}
      key={i}
    >
      <div className="flex">
        {
          !isCollapsed ?   <h6>{title}</h6> : ''
        }
        {secicon}
      </div>
    
    </MenuItem>
  );
};
const Side = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar } = useProSidebar();

  const handleSidebar = () => {
    collapseSidebar()
    setIsCollapsed(!isCollapsed)
  }


  return (
    <div className="sidebar">
      <Sidebar>
        <Menu style={{
          backgroundColor: '#fff'
        }}>
          <div className="header">
            <MenuItem style={{
              margin: "12px 0 10px 0"
            }}>
              <Logo />
            </MenuItem>
          </div>
          <MenuItem
            onClick={() => handleSidebar()}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            className="sidebar-item"
          >
            {!isCollapsed && (
              <div className="flex">
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
                <h6>menu</h6>
              </div>
            )}
          </MenuItem>
          <br />
          <Item
              title='Switch Organizations'
              icon={<FaBriefcase />}
              selected={selected}
              setSelected={setSelected}
              secicon={<BsChevronDown />}
             />
             <br />
             <br />
          <Item
              title='Dashboard'
              icon={<FaHome />}
              selected={selected}
              setSelected={setSelected}
             />
             <br />
             <br />
          <div className="link-container">
          </div>
          <div className="sidebar-list">
            <h3>
              customers
            </h3>
            {
              customerLinks.map((item, i) => (
                <Item
                  title={item.title}
                  key={i}
                  icon={item.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))
            }
          </div>
          <div className="sidebar-list">
            <h3>
              business
            </h3>
            {
              businessLinks.map((item, i) => (
                <Item
                title={item.title}
                key={i}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
              ))
            }
          </div>
          <div className="sidebar-list">
            <h3>
              settings
            </h3>
            {
              settingsLinks.map((item, i) => (
                <Item
                  isCollapsed={isCollapsed}
                  title={item.title}
                  key={i}
                  icon={item.icon}
                  selected={selected}
                  setSelected={setSelected}
                />

              ))
            }
          </div>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default Side