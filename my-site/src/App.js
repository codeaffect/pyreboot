import React from "react";
import Home from "./Home/home";
import CustomMenuList from "./Home/top-bar/custom-menu-list";
import TopBar from "./Home/top-bar/top-bar";

const App = () => {
  return (
    <>
      <h1>Home</h1>
      <Home />
      <br />
      <br />
      <TopBar />
      <br />
      <br />
      <CustomMenuList />
    </>
  );
};

export default App;
