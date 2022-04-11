import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./Logo";
import SelectType from "./SelectType";
import CustomButtom from "../../../components/Button";
import "./styles.css";

export default function TopNavigation() {
  return (
    <div className="top-navigation">
      <AppBar position="static">
        <Toolbar>
          <Logo />

          <SelectType />

          <ul>
            <li>
              <a href="#">Shops</a>
            </li>
            <li>
              <a href="#">Offers</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <CustomButtom text="Become a Seller" color="primary" />
            </li>
            <li>
              <CustomButtom text="Join" color="primary" />
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}
