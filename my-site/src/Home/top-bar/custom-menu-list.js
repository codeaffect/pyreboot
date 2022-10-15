import React, { Component } from "react";
import MySelectBox from "../../shared/controls/selectboxctl/myselectbox";

export default class CustomMenuList extends Component {
  menuList = ["mark", "jane", "victor", "samuel"];
  styles = { minWidth: 200 };
  selectedValue = "mark";

  render() {
    return (
      <MySelectBox
        children={this.menuList}
        selectedValue={this.selectedValue}
        styles={this.styles}
      ></MySelectBox>
    );
  }
}
