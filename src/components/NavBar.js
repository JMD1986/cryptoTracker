import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  Homeoutlined,
  Moneycollectoutlined,
  Bulboutlined,
} from "@ant-design/icons";
const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar />
        <Typography.Title level={2} className="logo" />
        <Link to="/"></Link>
      </div>
    </div>
  );
};

export default NavBar;
