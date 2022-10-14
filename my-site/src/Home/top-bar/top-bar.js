import React, { Component } from "react";

class TopBar extends Component {
  constructor() {
    super();
    this.state = {
      theme: "white",
    };
  }

  handleThemeChange = (e) => {
    this.setState(
      () => ({
        theme: e.target.value,
      }),
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
    document.body.classList.remove("body-purple");
    document.body.classList.remove("body-yellow");
    document.body.classList.remove("body-orange");
  };

  render() {
    var menuList = ["white", "purple", "yellow", "orange"];

    return (
      <>
        <div>Select Theme</div>
        <select value={this.state.theme} onChange={this.handleThemeChange}>
          {menuList.map((menu, index) => (
            <option key={index} value={menu}>
              {menu}
            </option>
          ))}
        </select>
        <p>you selected - {this.state.theme}</p>
      </>
    );
  }
}

export default TopBar;
