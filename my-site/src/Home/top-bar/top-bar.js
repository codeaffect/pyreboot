import React, { Component } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

class TopBar extends Component {
  constructor() {
    super();
    this.state = {
      theme: "white",
    };
    this.clearBodyStyles();
  }

  handleThemeChange = (e) => {
    this.setState(
      {
        theme: e.target.value,
      },
      () => {
        this.changeTheme(this.state.theme);
      }
    );
  };

  changeTheme = (newTheme) => {
    console.log("newtheme:", newTheme);
    this.clearBodyStyles();
    switch (newTheme) {
      case "purple":
        console.log("purple");
        document.body.classList.add("body-purple");
        break;
      case "orange":
        console.log("orange");
        document.body.classList.add("body-orange");
        break;
      case "yellow":
        console.log("yellow");
        document.body.classList.add("body-yellow");
        break;
      default:
        this.clearBodyStyles();
    }
  };

  clearBodyStyles = () => {
    var classlist = document.body.classList;
    for (let classname of classlist) {
      console.log("classname:-", classname);
      document.body.classList.remove(classname);
    }
  };

  render() {
    var menuList = ["white", "purple", "yellow", "orange"];

    return (
      <>
        <div>Select Theme</div>
        <Select
          sx={{ minWidth: 200 }}
          value={this.state.theme}
          onChange={this.handleThemeChange}
          displayEmpty
        >
          {menuList.map((menu, index) => (
            <MenuItem key={index} value={menu}>
              {menu}
            </MenuItem>
          ))}
        </Select>
        <p>you selected - {this.state.theme}</p>
      </>
    );
  }
}

export default TopBar;
