import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import React, { useState } from "react";

const MySelectBox = (props) => {
  const children = props.children;
  const selectedValue = props.selectedValue;
  const styles = props.styles;

  const [state, setstate] = useState(selectedValue);

  const handleThemeChange = (e) => {
    setstate(e.target.value);
  };

  return (
    <>
      <h1>Custom Select Box</h1>
      <Select
        sx={styles}
        value={state}
        onChange={handleThemeChange}
        displayEmpty
      >
        {children.map((menu, index) => (
          <MenuItem key={index} value={menu}>
            {menu}
          </MenuItem>
        ))}
      </Select>
      <h3>Selected Value: {state}</h3>
    </>
  );
};

export default MySelectBox;
