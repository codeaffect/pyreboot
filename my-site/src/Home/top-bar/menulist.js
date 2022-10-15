import React from "react";
import MySelectBox from "../../shared/controls/selectboxctl/myselectbox";

const menulist = () => {
  const menuList = ["mark", "jane", "victor", "samuel"];
  const styles = { minWidth: 200 };
  const selectedValue = "mark";

  return (
    <MySelectBox
      children={menuList}
      selectedValue={selectedValue}
      styles={styles}
    ></MySelectBox>
  );
};
export default menulist;
